# json-write-stream

CLI tool that serializes a stream of newline delimited json into serialized regular json

## usage

```
// install it
$ npm install json-write-stream -g

// make one big object by writing [ key, data ] pairs
// hint: use jsonmap CLI
$ cat newline_delimited_tuples.json
["foo", 1]
["bar", 2]
$ cat newline_delimited.json | json-write-stream
{
  "foo":1,
  "bar":2
}

// serialize an array of objects with --array option
$ cat newline_delimited_objects.json
{"foo": 1}
{"bar": 2}
$ cat newline_delimited.json | json-write-stream --array
[
  {"foo":1},
  {"bar":2}
]

// pass custom serialize separators
// usage: json-write-stream <before> <between> <after> [options]
$ cat newline_delimited.json | json-write-stream '{"rows":[' ',' ']}' --array
{"rows":[{"foo":1},{"bar":2}]}
```