//Q3
let arr=["jay","bobo","bablu","yash"]
let newarr=arr.map((val)=>{
    return `Hello ${val}`;
})
console.log(newarr);

//Q4
let arr2=[{name:"alice",age:23},{name:"Bobo",age:21}]
let newarr2=arr2.map((val)=>{
    return `${val.name}`
})
console.log(newarr2);

//Q5
let arr3=[2,3,4]
let newarr4=arr3.map((val)=>{
    return val*val
})
console.log(newarr4);

//Q6 using forEach
let arr5=["jay","bobo","bablu","yash"]
let newar=[];
let newarr5=arr.forEach((val)=>{
     newar.push(`Hello ${val}`);
})
console.log(newar);

//Q8

let aray=["1","2","3"]
let newarrrr=aray.map((val)=>{
    return parseInt(val);
})
console.log(newarrrr)
//console.log(aray)