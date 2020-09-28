// Part I
function difference(num1,num2){
    return num1 - num2;
}

function product(a,b){
    return a*b;
}
let days = {
    1:"Monday",
    2:"Tuesday",
    3:"Wed",
    4:"Thurs",
    5:"Friday",
    6:"Saturday",
    7:"Sunday" }
function printDay(num){
    for (num in days){
        return days.num;
    }
    if(num <1 || num >7){
        console.log("Undefined");
    }
  
}

function lastElement(arr){
    for(let i=0;i<arr;i++){

    }
    return arr.pop();
}

function numberCompare(a,b){
    if(a>b){
        return "First is greater";
    } if (a<b) {
        return "Second is greater";
        
    } else {
        return "Numbers are equal";
    }
        
    }
    
console.log(numberCompare(1,1));