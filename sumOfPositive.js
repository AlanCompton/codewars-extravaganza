/*
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.
*/

function positiveSum(arr) {
    let sum = 0;
    let posNum = arr.filter(num => num >= 0); 

    for(let i = 0;i < posNum.length; i++){
        sum += posNum[i];
    }
    return sum;
}

console.log(positiveSum([1,-4,7,12]));