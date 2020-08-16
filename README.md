# bit-macros

This is a set of C macros used in embedded systems development for bit level operations. You can use them to directly manipulate the bit values on a integer variable.

It contains 4 fundamental macros:

- set_bit: used to set the value of a bit from 0 to 1;
- tst_bit: used to check if a bit inside a set of bits is equal to 1;
- clr_bit: used to set the value of a bit from 1 to 0;
- cpl_bit: used to toggle the bit value (from 0 to 1 or from 1 to 0);

## set_bit

```javascript
const { set_bit } = require("bit-macros");

const integer_monday = set_bit(0, 1);
const integer_tuesday = set_bit(0, 2);

console.log(integer_monday); // 2
console.log(integer_tuesday): // 4

const monday_and_tuesday = integer_monday + integer_tuesday;

console.log(monday_and_tuesday); // 6
```

## tst_bit

```javascript
const { tst_bit } = require("bit-macros");

const value = 2;

// The bit count starts from 0, so 1 means the second bit in the sequence
if (tst_bit(value, 1)) {
	// Should be truthy since 2 in bit sequence is 00000010
	console.log("The variable has the second bit enabled");
} else {
	console.log("The variable doesn't have the second bit enabled");
}
```

## clr_bit

```javascript
const { clr_bit } = require("bit-macros");

const value = 255;

const cleared_value = clr_bit(value, 0);

console.log(cleared_value); // 254;
```

## cpl_bit

```javascript
const { cpl_bit } = require("bit-macros");

const value = 255;

const coupled_value = cpl_bit(value, 7);

console.log(coupled_value); // 127

const coupled_value2 = cpl_bit(coupled_value, 7);

console.log(coupled_value2); // 255
```

# TODO

- [ ] Add set/tst/clr/cpl many bits
