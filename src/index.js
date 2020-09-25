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
