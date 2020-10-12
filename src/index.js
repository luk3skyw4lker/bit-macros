// #define tst_bit(Y, bit_x) (Y & (1 << bit_x))

module.exports = {
	set_bit(value, bit) {
		return value | (1 << bit);
	},
	tst_bit(value, bit) {
		return value & (1 << bit);
	},
	clr_bit(value, bit) {
		return value & ~(1 << bit);
	},
	cpl_bit(value, bit) {
		return value ^ (1 << bit);
	}
};
