let sum = 0
for (let i = 0; i < 100; i++) {
    if(i % 2 != 0){
        console.log('odd numbers', i)
        sum += i;
    }
}
console.log('sum of odd numbers', sum)