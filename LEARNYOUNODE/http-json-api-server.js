var http = require('http')
var url = require('url')
let time, timeString;

http.createServer((req, res) => {
  url = url.parse(req.url, true);
  if(url.pathname ==  '/api/parsetime'){
    time = new Date(url.query.iso);
    timeString = '{"hour": ' + time.getHours() +', ' +
                    '"minute": ' + time.getMinutes() +', ' +
                    '"second": ' + time.getSeconds() +'}';
    res.write(timeString);
    res.end();
} else if (url.pathname == '/api/unixtime') {
    time = new Date(url.query.iso);
    res.write('{"unixtime": '+ time.getTime() + '}')
    res.end();
  }
}).listen(+process.argv[2])