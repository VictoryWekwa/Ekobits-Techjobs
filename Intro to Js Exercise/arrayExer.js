//1
let favoriteFoods = ["rice", "spaghetti", "Eba"];
console.log(favoriteFoods[1]);
favoriteFoods[2]= "egg";
console.log(favoriteFoods);
let formerFavoriteFood = favoriteFoods.shift();
console.log(formerFavoriteFood);
favoriteFoods.push("indomie");
console.log(favoriteFoods);
favoriteFoods.unshift("rice and beans");
console.log(favoriteFoods);
let myList = [];
console.log(myList.pop()); // popping an empty array returns undefined

let firstArray=[2,3,4,5];
let secondArray = firstArray.splice(1,1);
console.log(firstArray);
let firstsArray=["alpha","gamma","delta"];
firstsArray.splice(1,0,"beta");
console.log(firstsArray);
let firsttArray = [10,-10,-5,-3,2,1];
firsttArray.splice(1,3,9,8,7,6,5,4,3);
console.log(firsttArray);



