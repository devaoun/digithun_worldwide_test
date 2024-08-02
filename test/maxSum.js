function maxSum(numbers, k) {
    let maxSum = -Infinity
    for (let i = 0; i < numbers.length; i++) {
        let group = numbers.slice(i, i + k)
        let sumOfGroup = group.reduce((sum, number) => sum + number, 0)
        if (sumOfGroup > maxSum) {
            maxSum = sumOfGroup
        }
    }
    return maxSum
}

// #1 example:
console.log('maxSum :', maxSum([1, 4, -1, 2, 3], 3)) //expected return 5

// #2 example:
console.log('maxSum :', maxSum([1, 4, -1, 2, 3], 2))//expected return 5