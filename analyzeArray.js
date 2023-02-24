function analyzeArray(array) {
    array.sort((a, b) => a - b)
    const arrayDetails = {
        min: array[0],
        max: array[array.length - 1],
        length: array.length,
        avg: (array.reduce((a, b) => a + b, 0) / array.length)
    }
    return arrayDetails
}
module.exports = analyzeArray