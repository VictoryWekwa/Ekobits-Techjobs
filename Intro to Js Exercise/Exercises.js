// Part I
let arr = []; // create empty array
arr.unshift("Victory"); // add first name
arr.push("Wekwa"); // add lastname to the end
arr.unshift("Black"); // add favorite color to the begining
console.log(arr); // displaying the array
arr.shift(); // removing favorite color
console.log(arr);

 let arr2 = [];
 arr2.unshift(5);
 arr2.push("Javascript");
 console.log(arr2);
 arr2.indexOf(42); //value cannot be found returns -1

 let combinedArr=arr.concat(arr2);
 console.log(combinedArr);

 // Part II
 let arrII=["Javascript","Python","Ruby","Java"];
 let iarrII=arrII.slice(1,3);
 console.log(iarrII);
 let combinedIIarr=arrII.concat("Haskell","Clojure");
 console.log(combinedIIarr);
 let joinarrII= arrII.join(" ");
 console.log(joinarrII);
 