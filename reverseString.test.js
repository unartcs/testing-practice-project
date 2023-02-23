const reverseString = require('./reverseString')

it('problem', () =>
    expect(reverseString('problem')).toBe('melborp'));

it('diamond', () => {
    expect(reverseString('diamond')).toBe('dnomaid')
})