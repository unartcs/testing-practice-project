function caesarCipher(str, shift) {
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    str = str.toLowerCase().split('')
    str.map((l, index) => {
        if (letters.indexOf(l) == -1) { str[index] = l }
        else if (letters.indexOf(l) + shift >= letters.length) {
            str[index] = letters[(letters.indexOf(l)+shift) % 26]
        }
        else { str[index] = String(letters[letters.indexOf(l) + shift]) }
    })
    return str.join('')
}


module.exports = caesarCipher