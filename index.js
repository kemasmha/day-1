console.log('HELLO WORLD'); //untuk menampilkan
console.log('Hallo');
let message
message = "hello" //assign
// var = redeclare and reassgin 
// let
// const
var a = 'a'
var a = 'b'
console.log(a)

let b = "b"
b = "c"
console.log(b)

const c = "c"
console.log(c)

let text = "hello world";
            //012345678910
            //1234567891011
            // h = index 0
// index = penomoran atau urutan start from 0
console.log(text.slice(2,5));
console.log(text.replace('h','s'));

// area of rectangle
var p = 4
var l = 6
console.log(p*l)
console.log (2*p+2*l)

//diameter of circle
var phi = 3.14
var r = 4
const area = phi * r * r //rumus area
const diameter = r *2 // rumus diameter

console.log(area)
console.log(diameter)
const circumference = phi * diameter // rumus keliling
console.log(circumference)

//angle of triangle
var x = 76
var y = 34
var t = 180
const angle = t - x - y //rumus menghitung sudut
console.log(angle)


var a = new Date ("2010-11-08")
var r = new Date ("2030-11-25")

const difftimes = r.getTime() - a.getTime()
const diffdays = difftimes / (60000*60*24)
console.log(diffdays + " days")
console.log(difftimes)


var T = (500)
var years = Math.floor(500/365)
var months = Math.floor(500 % 365 / 30)
var days = Math.floor(500 % 365 % 30 )
console.log(years + " year, " + + months + " months, "  + days + " days")

