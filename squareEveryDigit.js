function squareDigits(num){
  
    num = String(num);
    let str = "";
    
    for(i = 0; i < num.length; i++){
    str += Number(num[i]) ** 2;
    }
    
    return Number(str);
  }
  
  console.log(squareDigits(9119));