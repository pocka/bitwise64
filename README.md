# bitwise64

[![npm version](https://badge.fury.io/js/bitwise64.svg)](https://badge.fury.io/js/bitwise64)
[![dependencies](https://david-dm.org/pocka/bitwise64.svg)](https://david-dm.org/pocka/bitwise64)
[![Build Status](https://travis-ci.org/pocka/bitwise64.svg?branch=master)](https://travis-ci.org/pocka/bitwise64)

Emurates 64-bit bitwise operation.

(Due to ECMAScript laungauge specification 53bit~ might not work well)

## Note

There are [BigInt proposal](https://github.com/tc39/proposal-bigint) on stage-3.
When it would be merged to main stream and major browsers implement it, we could operate 64-bit bitwise natively and you should use it instead of this library.

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
