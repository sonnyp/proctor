'use strict'

module.exports = function parseEtime (etime) {
  var split = etime.split(':')
  if (split.length === 2) {
    return +(split[0] * 60) + +split[1]
  } else {
    return +(split[0] * 3600) + +(split[1] * 60) + +split[2]
  }
}
