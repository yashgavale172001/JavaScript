//forEach: if we do changes using forEach then changes will not reflected in original array

// let arr=[1,2,3,4,5,6,7];
// let values=arr.forEach((val,i,wa)=>{
//     console.log(val);
//     return val;
// })
// console.log(values)
// console.log(arr)
//forEach loop of Higher order function, it will not return the value ,for this drawback map is there

//map (Higher order function):if we do changes using map then changes will not reflected in original array
let arr2=[1,2,3,4,5,6,7];
let values1=arr2.map((val,i,wa)=>{
    console.log(val);
    return val+100;
})
console.log(values1)
console.log(arr2)
//map Higher order function, it will return the value and 
