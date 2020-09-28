let programming = {
    languages:["Javascript","Python","Ruby"],
    isChallenging:true,
    isRewarding:true,
    difficulty: "B",
    jokes:"http://stackoverflow.com/questions/2340/what-is-your-best-programmer-joke"
}

programming.languages=programming.languages.concat("Go")
programming.difficulty=7
delete programming.jokes
programming.isFun=true
console.log(programming);

for(let singlekey of programming.languages){
    console.log(singlekey);

}

for(obj in programming){
    console.log(programming[obj]);
}

for(value in programming){
    console.log(programming[value])
}