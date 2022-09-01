const httpCodes = require('http-codes')

const ResponseBody = require('./response')
const strings = require('./strings')
const { getVideoInfo, getVideoInfoById } = require('./youtube')

const response = new ResponseBody()

const apiRoot = (req, res) => {
  response.setMessage(
    'Welcome to iamyou youtube downloader and converter API!. Hope this API can help~.'
  )
  response.setData({
    project_repository: strings.PROJECT_REPO,
    api_url: strings.API_URL,
    author: {
      name: strings.AUTHOR_NAME,
      github: strings.AUTHOR_GITHUB,
      site: strings.AUTHOR_SITE,
      email: strings.AUTHOR_MAIL
    },
    support_me: {
      ko_fi: strings.AUTHOR_KOFI
    }
  })

  res.json(response.getResponse())
}

const getVidInfo = async (req, res) => {
  const video_info = await getVideoInfo(req.body.url)
  res.json(video_info)
}

const getVideoById = async (req, res) => {
  const video_info = await getVideoInfoById(req.params.videoId)
  res.json(video_info)
}

module.exports = { apiRoot, getVidInfo, getVideoById }
