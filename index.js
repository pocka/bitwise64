/**
 * Pad string
 */
var zeros = '';

for (var i = 0; i < 32; i = (i + 1) | 0) {
  zeros += '0';
}

/**
 * Divides hi and lo
 */
function divide(bit) {
  var bitString = ((zeros + zeros) + (Number(bit).toString(2))).slice(-64);

  return [
    parseInt(bitString.slice(0, 32), 2), // hi
    parseInt(bitString.slice(-32), 2) // lo
  ];
}

/**
 * Pads 32bit binary number with 0
 */
function pad(bit) {
  return (zeros + (bit.toString(2))).slice(-32);
}

/**
 * Index accessors
 */
var Hi = 0;
var Lo = 1;


var b64 = {
  and: function(a, b) {
    var _a = divide(a);
    var _b = divide(b);

    return parseInt(pad((_a[Hi] & _b[Hi]) >>> 0) + pad((_a[Lo] & _b[Lo]) >>> 0), 2);
  },
  or: function(a, b) {
    var _a = divide(a);
    var _b = divide(b);

    return parseInt(pad((_a[Hi] | _b[Hi]) >>> 0) + pad((_a[Lo] | _b[Lo]) >>> 0), 2);
  },
  not: function(a) {
    var _a = divide(a);

    return parseInt(pad((~_a[Hi]) >>> 0) + pad((~_a[Lo]) >>> 0), 2);
  },
  xor: function(a, b) {
    var _a = divide(a);
    var _b = divide(b);

    return parseInt(pad((_a[Hi] ^ _b[Hi]) >>> 0) + pad((_a[Lo] ^ _b[Lo]) >>> 0), 2);
  }
};

module.exports = b64;
