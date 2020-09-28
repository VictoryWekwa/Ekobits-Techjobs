function add(num1,num2){
    return num1+num2;
}

function substract(a,b){
    return a-b;
}

function mult(c,d){
    return c*d;
}

function divide(number1,number2){
    return number2/number1;
}


// console.log(add(5,6));
// console.log(substract(6,5));
// console.log(mult(6,5));
// console.log(divide(5,10));

function sayHello(name="Victory"){
    if (name==="Victory"){
        return "Hello Boss";
    }
    return "Hello "+ name;
}
// console.log(sayHello("Victory"));
// console.log(sayHello("Amaka"));

function createStudent(firstName, lastName){
    return {
        firstName:firstName,
        lastName: lastName
        
    };
}

console.log(createStudent("Victory","Wekwa"));
