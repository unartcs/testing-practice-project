const analyzeArray = require('./analyzeArray')

it('Array 01', () => {
    expect(analyzeArray([5, 3, 1, 16]).min).toBe(1)
    expect(analyzeArray([5, 3, 1, 16]).avg).toBe(6.25)
    expect(analyzeArray([5, 3, 1, 16]).max).toBe(16)
    expect(analyzeArray([5, 3, 1, 16]).length).toBe(4)
}

)

it('Array 02',()=>{
    expect(analyzeArray([5,2,12,10,9,1])).toEqual({
        avg: 6.5,
        min: 1,
        max: 12,
        length: 6,
    })
})