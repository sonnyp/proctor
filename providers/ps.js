'use strict'

var ps = require('jsps')

function parse (time) {
  return +time.replace(/[^0-9]+/g, '')
}

module.exports = function (pid, cb) {
  ps.lookup({pid: pid, keywords: ['time', 'utime', 'stime', 'etime']}, function (err, result) {
    if (err) {
      cb(err)
      return cb
    }

    cb(null, {
      time: parse(result.time),
      utime: parse(result.utime),
      stime: parse(result.stime),
      etime: parse(result.elapsed)
    })
  })
}
