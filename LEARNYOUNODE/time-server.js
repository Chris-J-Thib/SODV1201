const net = require('net');
const server = net.createServer((socket)=>{
    let d = new Date();
    let data = "";
    data +=
    new Intl.DateTimeFormat("fr-CA", {
            year: "numeric", 
            month: "2-digit", 
            day: "2-digit"}).format(d);

    data += " " + d.getHours() + ':' + d.getMinutes() + '\n';

    socket.write(data);
    socket.end();
            
})
server.listen(Number(process.argv[2]));