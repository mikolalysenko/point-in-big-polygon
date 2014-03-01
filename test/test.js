"use strict"

var tape = require("tape")
var preprocessPolygon = require("../pnp-big.js")

tape("point-in-big-polygon", function(t) {

  var classifyPoint = preprocessPolygon([
    [ [-11, -10], [-10, 10], [10, 10], [10, -10] ],
    [ [-1, -1], [1, -1], [1, 1], [-1, 1] ]
  ], true)

  t.ok(classifyPoint([0, 0]) > 0)
  t.ok(classifyPoint([5, 2]) < 0)
  t.ok(classifyPoint([1, 0]) == 0)
  t.ok(classifyPoint([-1000, 0]) > 0)

  t.end()
})