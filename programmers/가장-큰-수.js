function solution(numbers) {
    for (let i = 0; i < numbers.length - 1; i++) {
        for (let j = i + 1 ; j < numbers.length; j++) {
            const num1 = String(numbers[i]);
            const num2 = String(numbers[j]);
            if (Number(num1 + num2) < Number(num2 + num1)) {
                [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
                console.log(numbers);
            }
        }
    }
    return numbers.join("");
}