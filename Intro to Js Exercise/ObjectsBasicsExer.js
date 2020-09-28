myDetails = {
    firstName:"Victory",
    lastName:"Wekwa",
    occupation:"Pet-Engr"
}
// assessing each value using dot notation
console.log(myDetails.firstName);
console.log(myDetails.lastName);
console.log(myDetails.occupation);
// using bracket
console.log(myDetails["firstName"]);
console.log(myDetails["lastName"]);
console.log(myDetails["occupation"]);
// adding hobby
myDetails.hobby="sleeping";
console.log(myDetails);

// deleting occupation
delete myDetails.occupation;
console.log(myDetails);
































