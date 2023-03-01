const fs = require('fs');

module.exports = function (path, ext, callback) {
    fs.readdir(path,(err,files)=>{
        let filtered = [];
        if(err){
            console.log('Error! ' + err)
            return callback(err, filtered);
        }
        for (let index = 0; index < files.length; index++) {
            if(files[index].split(".").length >= 2){
                if(files[index].split(".").at(-1) == ext) filtered.push(files[index]); 
            }     
        }
        callback(null, filtered);
    });
}