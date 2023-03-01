const filter = require('./mymodule.js');
let filtered = filter(process.argv[2], process.argv[3], (err, list)=>{
    if(err){
        console.log(err);
        return;
    }
    list.forEach(e => {
        console.log(e);
    });
});