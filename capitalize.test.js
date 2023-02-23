const capitalize = require('./capitalize')

it('Test UNDERWEAR', () =>
    expect(capitalize('UNDERWEAR')).toBe('Underwear'));

it('Test pReSiDent', () =>
    expect(capitalize('pReSiDent')).toBe('President'));