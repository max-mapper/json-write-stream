#!/usr/bin/env node
var ndjson = require('ndjson')
var JSONStream = require('JSONStream')
var args = require('minimist')(process.argv.slice(2), {boolean: 'object'})

var sep, pre, end, serializer

if (args.array) {
  pre = args._[0] || "[\n  "
  sep = args._[1] || ",\n  "
  end = args._[2] || "\n]"
  serializer = JSONStream.stringify(pre, sep, end)
} else {
  pre = args._[0] || "{\n  "
  sep = args._[1] || ",\n  "
  end = args._[2] || "\n}"
  serializer = JSONStream.stringifyObject(pre, sep, end)
}

process.stdin
  .pipe(ndjson.parse())
  .pipe(serializer)
  .pipe(process.stdout)
