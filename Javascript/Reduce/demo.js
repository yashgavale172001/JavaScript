//if we want to do sum of array elements without using variable like sum=0 the we cannot use forEach and map so thats why we will use reduce higherorder function
//forEach will not return element ,map will return array ,reduce will return signgle value at the end of operation
//in reduce function it will accept two arguments call back function and initial value( like 100 in below example) and callback funtion accepts four arguments 
//1.accumulator(initial value is 100 in below example) if not mention the by default 0
//2.value 3.index 4.whole array
let arr=[1,2,3,4,5,6,7]
let sum=arr.reduce((acc,val,idx,wa)=>{
    return acc+=val;
},100)
console.log(sum) //128

let sum1=arr.reduce((acc,val,idx,wa)=>{
    return acc+=val;
})
console.log(sum1)  //28
