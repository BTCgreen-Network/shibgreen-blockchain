const shibgreen = require('../../util/shibgreen');

describe('shibgreen', () => {
  it('converts number byte to shibgreen', () => {
    const result = shibgreen.byte_to_shibgreen(1000000);

    expect(result).toBe(0.000001);
  });
  it('converts string byte to shibgreen', () => {
    const result = shibgreen.byte_to_shibgreen('1000000');

    expect(result).toBe(0.000001);
  });
  it('converts number byte to shibgreen string', () => {
    const result = shibgreen.byte_to_shibgreen_string(1000000);

    expect(result).toBe('0.000001');
  });
  it('converts string byte to shibgreen string', () => {
    const result = shibgreen.byte_to_shibgreen_string('1000000');

    expect(result).toBe('0.000001');
  });
  it('converts number shibgreen to byte', () => {
    const result = shibgreen.shibgreen_to_byte(0.000001);

    expect(result).toBe(1000000);
  });
  it('converts string shibgreen to byte', () => {
    const result = shibgreen.shibgreen_to_byte('0.000001');

    expect(result).toBe(1000000);
  });
  it('converts number byte to colouredcoin', () => {
    const result = shibgreen.byte_to_colouredcoin(1000000);

    expect(result).toBe(1000);
  });
  it('converts string byte to colouredcoin', () => {
    const result = shibgreen.byte_to_colouredcoin('1000000');

    expect(result).toBe(1000);
  });
  it('converts number byte to colouredcoin string', () => {
    const result = shibgreen.byte_to_colouredcoin_string(1000000);

    expect(result).toBe('1,000');
  });
  it('converts string byte to colouredcoin string', () => {
    const result = shibgreen.byte_to_colouredcoin_string('1000000');

    expect(result).toBe('1,000');
  });
  it('converts number colouredcoin to byte', () => {
    const result = shibgreen.colouredcoin_to_byte(1000);

    expect(result).toBe(1000000);
  });
  it('converts string colouredcoin to byte', () => {
    const result = shibgreen.colouredcoin_to_byte('1000');

    expect(result).toBe(1000000);
  });
});
