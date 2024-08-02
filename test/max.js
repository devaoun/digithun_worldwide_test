function max(numbers) {
    const maxNumber = numbers.reduce((max, number) => number > max ? number : max, -Infinity)
    return maxNumber
}

// #1 example:
console.log('max :',max([-1, 4, 30, 2, -4]))//expected return 30

// #2 example:
console.log('max :',max([3, 4, 5, 6, 7]))//expected return 7