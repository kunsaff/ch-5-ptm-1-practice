//part 1
console.log("Hello World");

//part 2
const os = require('os')
const luasSegitiga = require('./segitiga.js')

console.log('Free Memory:', os.freemem())
console.log(luasSegitiga(6,8))

//part 3
const fs = require('fs')

const isi = fs.readFileSync('./text.txt','utf-8')

console.log(isi)

//part 4
fs.writeFileSync('./test.txt', ":p")
const test = fs.readFileSync('./test.txt', 'utf-8')
console.log(test)

//part 5
//ini akan mengimport module bernama fs
const Sabrina = require('./person.json')

console.log(Sabrina)