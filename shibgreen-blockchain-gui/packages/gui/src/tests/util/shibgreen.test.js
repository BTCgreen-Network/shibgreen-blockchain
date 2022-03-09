const shibgreen = require('../../util/shibgreen');

describe('shibgreen', () => {
  it('converts number mojo to shibgreen', () => {
    const result = shibgreen.mojo_to_shibgreen(1000000);

    expect(result).toBe(0.000001);
  });
  it('converts string mojo to shibgreen', () => {
    const result = shibgreen.mojo_to_shibgreen('1000000');

    expect(result).toBe(0.000001);
  });
  it('converts number mojo to shibgreen string', () => {
    const result = shibgreen.mojo_to_shibgreen_string(1000000);

    expect(result).toBe('0.000001');
  });
  it('converts string mojo to shibgreen string', () => {
    const result = shibgreen.mojo_to_shibgreen_string('1000000');

    expect(result).toBe('0.000001');
  });
  it('converts number shibgreen to mojo', () => {
    const result = shibgreen.shibgreen_to_mojo(0.000001);

    expect(result).toBe(1000000);
  });
  it('converts string shibgreen to mojo', () => {
    const result = shibgreen.shibgreen_to_mojo('0.000001');

    expect(result).toBe(1000000);
  });
  it('converts number mojo to colouredcoin', () => {
    const result = shibgreen.mojo_to_colouredcoin(1000000);

    expect(result).toBe(1000);
  });
  it('converts string mojo to colouredcoin', () => {
    const result = shibgreen.mojo_to_colouredcoin('1000000');

    expect(result).toBe(1000);
  });
  it('converts number mojo to colouredcoin string', () => {
    const result = shibgreen.mojo_to_colouredcoin_string(1000000);

    expect(result).toBe('1,000');
  });
  it('converts string mojo to colouredcoin string', () => {
    const result = shibgreen.mojo_to_colouredcoin_string('1000000');

    expect(result).toBe('1,000');
  });
  it('converts number colouredcoin to mojo', () => {
    const result = shibgreen.colouredcoin_to_mojo(1000);

    expect(result).toBe(1000000);
  });
  it('converts string colouredcoin to mojo', () => {
    const result = shibgreen.colouredcoin_to_mojo('1000');

    expect(result).toBe(1000000);
  });
});
