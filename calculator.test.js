const calc = require('./calculator')

it('1+5', () =>
    expect(calc('+', 1, 5)).toBe(6))
it('2-5', () =>
    expect(calc('-', 2, 5)).toBe(-3))
it('3*7', () =>
    expect(calc('*', 3, 7)).toBe(21))
it('10/2', () =>
    expect(calc('/', 10, 2)).toBe(5))