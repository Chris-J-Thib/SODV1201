http = require('http');
let b1 = [];
let b2 = [];
let b3 = [];
let buffers = [b1,b2,b3];

for (let index = 0; index < 3; index++) {
http.get(process.argv[2+index], (res)=>{
    res.setEncoding('utf8');
    res.on('data', (data)=>{
        buffers[index].push(data);
    });
    res.on('end', (end)=>{
       console.log(buffers[index].join(''));
       
    })
    res.on('error', console.error);
}).on('error', console.error);}

