# bitwise64

[![npm version](https://badge.fury.io/js/bitwise64.svg)](https://badge.fury.io/js/bitwise64)


Emurates 64-bit bitwise operation.

(Due to ECMAScript laungauge specification 53bit~ might not work well)

## Install

```
npm install --save bitwise64
```

## Example

```javascript

var b64 = require('bitwise64');

console.log(b64.and(0xFFFFFFFFFFFF0, 0xFFFFFFFFFFFFF) === 0xFFFFFFFFFFFF0);

console.log(b64.or(0xFFFFFFFFFFFF0, 0xFFFFFFFFFFFFF) === 0xFFFFFFFFFFFFF);

console.log(b64.xor(0xFFFFFFFFFFFF0, 0xFFFFFFFFFFFFF) === 0xF);

console.log(b64.not(0x0FFFFFFFFF0) === 0xFFFFFF000000000F);

```
