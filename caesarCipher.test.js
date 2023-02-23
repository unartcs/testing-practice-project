const caesarCipher = require('./caesarCipher')

it('hello!, shift 1', () =>
    expect(caesarCipher('hello!', 1)).toBe('ifmmp!'))

it('Pokemon@, shift 5', () =>
    expect(caesarCipher('Pokemon@', 5)).toBe('utpjrts@'))
