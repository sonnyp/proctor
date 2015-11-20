'use strict'

var execSync = require('child_process').execSync

var provider
if (process.platform === 'darwin') provider = require('./lib/providers/ps')
else if (process.platform === 'linux') provider = require('./lib/providers/proc')

var CLK_TCK = (function () {
  try {
    return +execSync('getconf CLK_TCK', {encoding: 'utf8'})
  } catch (e) {
    return NaN
  }
}())

var ptime = function (value, etime) {
  var P = 100 * ((value / CLK_TCK) / etime)
  return isFinite(P) ? P : 0
}

function lookup (pid, cb, prov) {
  if (typeof pid === 'function') {
    cb = pid
    pid = process.pid
  }

  var fn = prov || provider
  fn(pid, function (err, result) {
    if (err) {
      cb(err)
      return
    }

    result.ptime = ptime(result.time, result.etime)
    result.putime = ptime(result.utime, result.etime)
    result.pstime = ptime(result.stime, result.etime)

    cb(null, result)
  })
}

module.exports.CLK_TCK = CLK_TCK

module.exports.lookup = lookup
