function accum(str){

     let newStr = "";
    
     for(let i = 0; i < str.length; i++){
         newStr += str[i].toUpperCase();

         for(let n = 0;n < i;n++){
            newStr += str[i].toLowerCase();
         }

         newStr += "-";
    }
    return newStr.slice(0,-1);
}

console.log(accum(`abcd`));

/*
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"

function(str){
    let newStr = "";

    for(let i = 0; i < str.length; i++){
        newStr += str[i].toUpperCase() + "-";
    }
}
*/