const ytdl = require('ytdl-core')
const httpCodes = require('http-codes')

const strings = require('./strings')
const ResponseBody = require('./response')

const response = new ResponseBody()

const getVideoInfo = async url => {
  if (!ytdl.validateURL(url)) {
    response.setStatusCode(httpCodes.NOT_FOUND)
    response.setStatus(false)
    response.setMessage(strings.URL_NOT_VALID)
    return response.getResponse()
  }

  // get all the video information

  const video_info = await ytdl.getInfo(url)

  //   filter output to video only and the video has audio
  const video_data = ytdl
    .filterFormats(video_info.formats, 'video')
    .filter(video => video.hasAudio)
    .map(video => {
      // filtering video data from any unecessary information
      return {
        url: video.url,
        quality: video.quality,
        quality_label: video.qualityLabel,
        fps: video.fps,
        type: video.container,
        mime_type: video.mimeType
      }
    })

  response.setMessage(strings.MESSAGE_SUCCESS)
  response.setData({
    title: video_info.videoDetails.title,
    description: video_info.videoDetails.description,
    length_seconds: video_info.videoDetails.lengthSeconds,
    length_minutes: (video_info.videoDetails.lengthSeconds / 60).toFixed(1),
    thumbnails: video_info.videoDetails.thumbnails,
    channel_name: video_info.videoDetails.ownerChannelName,
    channel_id: video_info.videoDetails.channelId,
    video_data
  })
  return response.getResponse()
}

module.exports = getVideoInfo
