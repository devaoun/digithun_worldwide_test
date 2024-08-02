function secondMax(numbers) {
    const maxNumber = numbers.reduce((max, number) => number > max ? number : max, -Infinity)
    let secondMax = -Infinity
    let countMax = 0
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === maxNumber) {
            countMax++
            if (countMax === 2) {
                secondMax = numbers[i]
            }
        } else if (numbers[i] > secondMax) {
            secondMax = numbers[i]
        }
    }
    return secondMax
}

// #1 example:
console.log('secondMax :',secondMax([-1, 4, 30, 2, -4])) //expected return 4

// #2 example:
console.log('secondMax :',secondMax([3, 4, 5, 6, 7])) //expected return 6

// #3 example:
console.log('secondMax :',secondMax([3, 4, 5, 6, 7, 7])) //expected return 7 (ถ้ามีค่ามากที่สุดค่าเดียวกัน ถือว่าลำดับคนละลำดับกัน)
