const { set_bit, tst_bit, clr_bit, cpl_bit } = require("../src/index");

test("set_bit success", () => {
	let value = 0;

	for (let i = 0; i < 8; i++) {
		value = set_bit(value, i);
	}

	expect(value).toEqual(255);
});

test("tst_bit success", () => {
	const value = 2;

	expect(tst_bit(value, 1)).toEqual(true);
});

test("clr_bit success", () => {
	let final = 255;

	for (let i = 0; i < 8; i++) {
		final = clr_bit(final, i);
	}

	expect(final).toEqual(0);
});

test("cpl_bit", () => {
	const value = 255;
	const coupled_value = cpl_bit(value, 7);

	expect(coupled_value).toEqual(127);

	const double_coupled_value = cpl_bit(coupled_value, 7);

	expect(double_coupled_value).toEqual(255);
});
