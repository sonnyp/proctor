proctor
=======

Node.js CPU and memory usage lookup for a process.

[![build status](https://img.shields.io/travis/sonnyp/proctor/master.svg?style=flat-square)](https://travis-ci.org/sonnyp/proctor/branches)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com/)

```
npm install process-doctor
```

Supports Linux (via /proc) and OS X (via ps).
Reports current usage, not average.

# Usage

```javascript
var proctor = require('process-doctor')

proctor.CLK_TCK // number, clocks per tick (used to calculate % CPU)

// PID {Number} is optional and defaults to process.pid
proctor.lookup(PID, function(err, result) {
  console.log(err || result)
})
```

```javascript
{
  "time": 60, // total time (= utime + stime)
  "utime": 48, // time spent in user space
  "stime": 12, // time spent in kernel space
  "etime": 100, // time elapsed since process started
  "ptime": 0.6, // CPU % of time (= putime + pstime)
  "putime": 0.48, // CPU % of utime
  "pstime": 0.12 // CPU % of stime
}
```

# Test

```
npm install -g standard
npm test
```
