'use strict'

var assert = require('assert')
var proctor = require('./index')

function checkCompletion (err, r) {
  assert.strictEqual(err, null)

  assert.equal(typeof r.time, 'number')
  assert.equal(typeof r.ptime, 'number')
  assert.equal(typeof r.utime, 'number')
  assert.equal(typeof r.putime, 'number')
  assert.equal(typeof r.stime, 'number')
  assert.equal(typeof r.pstime, 'number')
}

assert.equal(typeof proctor.CLK_TCK, 'number')

// default pid
proctor.lookup(checkCompletion)

// different pid
proctor.lookup(1, checkCompletion)
