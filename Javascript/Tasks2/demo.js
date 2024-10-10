let f=((first,last)=>{
 let mix=first+last;
//  console.log(mix)
let n=mix.split("");
let sum=mix.reduce((a,acc)=>{
    return a+1;
})
console.log(sum)
});


let first="yash";
let last="gavale";
console.log(f(first,last));