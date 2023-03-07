http = require('http');

let url = process.argv[2];
let buffer = [];
let size = 0;

http.get(url, (res)=>{
    res.setEncoding('utf8');
    res.on('data', (data)=>{
        buffer.push(data);
        size+=data.length;
    });
    res.on('end', (end)=>{
        console.log(size)
        console.log(buffer.join(''))
    })
    res.on('error', console.error);
}).on('error', console.error);

