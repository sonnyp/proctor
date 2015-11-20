// http://man7.org/linux/man-pages/man5/proc.5.html

var fs = require('fs')

module.exports = function (pid, cb) {
  fs.readFile('/proc/' + pid + '/stat', {encoding: 'utf8'}, function (err, data) {
    if (err) {
      cb(err)
      return
    }

    var parsed = data.split(' ')
    var utime = +parsed[13]
    var stime = +parsed[14]
    var time = utime + stime

    cb(null, {time: time, utime: utime, stime: stime})
  })
}
