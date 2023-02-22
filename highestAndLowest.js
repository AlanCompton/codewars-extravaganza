function highAndLow(numbers){
    numbers = numbers.split(" ");

    let high = Number(numbers[0]);
    let low = Number(numbers[0]);

    for(let i = 0;i < numbers.length;i++){

        if(Number(numbers[i]) >= high){
            high = Number(numbers[i]);
        }else if(Number(numbers[i] <= low)){
            low = Number(numbers[i]);
        }
    }
    return high + " " + low;
  }

console.log(highAndLow("1 2 3 4 5"));