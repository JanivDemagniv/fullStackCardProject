//make first letter capital

export function makeFirstLetterCapital(input) {
    if (typeof input !== 'string' || input.length === 0) {
        return input
    }
    return input[0].toUpperCase() + input.slice(1).toLowerCase()

}