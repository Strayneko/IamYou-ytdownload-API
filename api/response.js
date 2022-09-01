class ResponseBody {
  code
  status
  message
  data

  // set default value
  constructor() {
    this.code = 200
    this.status = true
    this.message = 'Ok'
    this.data = {}
  }

  // set response status code
  setStatusCode(code) {
    this.code = code
  }

  // set response data
  setData(data) {
    this.data = data
  }

  setStatus(status) {
    this.status = status
  }
  // set response message
  setMessage(message) {
    this.message = message
  }

  // get response data
  getResponse() {
    return {
      code: this.code,
      status: this.status,
      message: this.message,
      data: this.data
    }
  }
}
module.exports = ResponseBody
