let people = ["Greg","Mary","Devon","James"];
for(let name of people){
    console.log(name);
}
// command to remove Greg from the array
people.shift();

// command to remove james
people.pop();

//command to add Mart in front
people.unshift("Matt");

// command to add my name to the end 
people.push("Victory");

for(let name of people){
    if(name==="Mary"){
        console.log(name);
        break;
    } 
    else{
        console.log(name);
    }
}

// command for copy of array without mary or matt
peopleCopy = people.slice(2,);
console.log(peopleCopy);
// command to display where mary is located
console.log(people.indexOf("Mary"));
// command to display where FOO is located
console.log(people.indexOf("Foo"));

// redefine people and adding Elizabeth and Artie
let redefinePeople=["Greg","Mary","Devon","James"];
redefinePeople.splice(2,1,"Elizabeth","Artie");
console.log(redefinePeople);

// creating a new variable
let withBob=people.concat("Bob");
console.log(withBob);
