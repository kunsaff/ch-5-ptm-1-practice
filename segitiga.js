const os = require('os')
console.log('Free Memory:', os.freemem())

//ini file segitiga.js
function luasSegitiga(alas, tinggi){
    return alas * tinggi / 2
}
module.exports = luasSegitiga