// console.log("if i didnt get 7 lpa then tcs ki maa ki chutt")
// var a=10
// var a=true
// var a=1000000000.1111111111112
// var _=13
// var str="yash"
// var str1='Y@sh'
// var str3=`gavale` //temperate literal
// var str2=`Y#sh${a}` //interpolation (if we are inserting any value like that its interpolation)

// console.log(str)
// console.log(str1)
// console.log(str2)
// console.log(Boolean(false)) //false
// console.log(Boolean(true))  //true
// console.log(Boolean("")) //false
// console.log(Boolean(-24)) //true
// console.log(Boolean(0))  //false
// console.log(Boolean(23)) //teue


// var a=undefined;
// console.log(a)

// var b=null; //we assign null to variable if we want to assign value later
// console.log(b)

// var Name=prompt("enter your mobile number")
// console.log(Name,typeof Name)
// let num=Number(Name)
// console.log(num,typeof num)

// console.log("My name is "+Name)
// console.log(typeof Name)

// userInput=prompt("Enter age")
// var numb=parseInt(userInput)
// console.log(numb)


let operation=(cngf,x,y)=>{
    cngf(x,y);
}
let add=(x,y)=>{
    console.log("addition is ",x+y)
}
let sub=(x,y)=>{
    console.log("substraction is ",x-y)
}
let div=(x,y)=>{
    console.log("division is ",x/y)
}
let multi=(x,y)=>{
    console.log(("multiplication is ",x*y))
}
operation(add,10,34);
operation(sub,10,34);
operation(div,10,34);
operation(multi,10,34);