var input = require('fs').readFileSync('/dev/stdin', 'utf8')
var lines = input.split('\n')

let raio = lines.shift();

const pi = 3.14159

let area = pi * raio * raio

area = area.toFixed(4)

console.log('A=' + area);