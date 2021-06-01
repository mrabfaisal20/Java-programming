let arr = [12, 23, 34 ,54, 79]
let sortedArr = arr.sort((a,b) =>{
    return b-a
})
let SecondLargestNum = sortedArr[1]
console.log('SecondLargestNum', SecondLargestNum)