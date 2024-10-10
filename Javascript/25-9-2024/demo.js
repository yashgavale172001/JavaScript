// let obj={
//     name:"bhaiya",
//     phno:123456,
// }
// //let copy=obj;
// let copy=Object.assign({},obj)
// console.log(copy);
// copy.name="ha bhai";
// copy.add="nehru nagar";
// console.log(copy);
// // copy.name="ha bhai";
// console.log(obj);

//in the global scope this keyword will point towards to the window object 
//if you are using this keyword in arrow function it  will always(99%) points towards window object
//
// console.log(this); // this keyword will points towars the window object

// let func1=function()
// {
//   console.log(this); //this keyword will points towards the window object
// }
// let func2=function()
// {
//     console.log(this); //this keyword will points towards the window object
// }

// func1();
// func2();

// let obj2={
//   names:"abhay",
//   add:"gandhi nagar",
//   func1:function(){
//        console.log("normal function",this); //this keyword in normal function will points towars the current object
//   },
//   fun2:()=>{
//      console.log("arrow function",this);//this keyword in arrow function will always points towards the window object
//   }
// }
// obj2.func1();
// obj2.fun2();

// that 1% this keyword in arrow function will points towards obj below is example,it is happening because of the lexical scopping
let objj={
    name:"rao sahab",
    age:23,
    func:function()
    {
        console.log("normal function this keyword",this);
        let a=69;
        let func2=()=>{
            console.log("nested Arrow function this keyword",this);
        }
        func2();
    }
    
}
objj.func();


