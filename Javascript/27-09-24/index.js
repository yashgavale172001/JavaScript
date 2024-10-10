//array creation

//1st way= array using literal
// let arr=[10,20,30,40];
// console.log(arr);

// 2nd way= using array class and new keyword
// let arr2=new Array(3,24,65);
// console.log(arr2);

//array in javascript in heterogeneous we can pass any data type values
let arr3=[10,30,"yash",null,console.log("lauda behechod"),undefined,()=>{let obj={name:"gendu"};console.log("inside arrow function")}];
console.log(arr3)
// let a=arr3[arr3.length-1];
// a();
// arr3[arr3.length-1]();//we can also call like that


//operations on araray
arr3.push(9);//it will add element at last
console.log(arr3)
arr3.pop();  //it will  delete element at last
console.log(arr3);
arr3.unshift(7) //it will add element at oth index
console.log(arr3);
console.log(arr3.shift()) // it will delete element at 0th index
let ans=arr3.indexOf(30); //it will return index of particular element ,if not present then returns -1
console.log(ans);
let ans2=arr3.at(2); //it will return element at particular index
console.log(ans2)

//to check whether the particular element is present inside the array or not
//console.log(arr3.includes(50)) // if it contains then it will return true ,if not then false


// slice method=it is a method with the help of we can get the elements inside array,
//it will take two arguments 1: starting index 2: ending indexx(not considered)

// let ar=[1,12,15,32]
// console.log(ar);
// let newArr=ar.slice(1,3);
// console.log(newArr)
// let newArr2=ar.slice(1,1);
// console.log(newArr2)

//splice() method : this is the method similar to slice but instead of just copying int will also remove elements from an original array and 2nd arguments is length to copy/remove(from original array)
// 3rd argument is after removing from original array at that position  add element at 

let ar=[1,12,15,32]
console.log(ar);
let newArr=ar.splice(1,3,87654); 
console.log(newArr);
console.log(ar)




