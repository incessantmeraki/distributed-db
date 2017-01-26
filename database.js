var http = require('http')
var minimist = require('minimist')
var concat = require('concat-stream')

var argv = minimist(process.argv)

var server = http.createServer(function (req, res) {
  var key = req.url
  console.log(key)

  if (req.method === 'PUT')  {
    req.pipe(concat({encoding: 'string'}, function (value) {
      console.log('put', key, '-->', value)
      res.end()
    }))
    return
  }

  if (req.method === 'GET') {
    res.end('get '+ key + '\n')
    return
  }
})

server.listen(argv.port)
