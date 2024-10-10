// function Obj(name,add,phno){
//    let obj ={
//     name,
//     add,
//     phno
//    }
//    return obj;
// }
// let obj1=new Obj("Yash","Nehru",2345678);
// console.log("Name is: "+obj1.name+" Address is ",obj1.add+" Phone num: "+obj1.phno);

// function Obj(name,add,phno){
    
//      this.name=name,
//      this.add=add,
//      this.phno=phno
    
//  }
//  let obj1=new Obj("Yash","Nehru",2345678);
//  let obj2=new Obj("Yash","Nehru",2345678);
// //  console.log("Name is: "+obj1.name+" Address is ",obj1.add+" Phone num: "+obj1.phno);
// console.log(obj1);
// console.log(obj2);

//MANUAL BINDING = if we want that the particular function points towards the particular obj then we will do manual binding with the help of call(obj) and apply(obj,[value1,value2])
//3rd way: call()
// let superhero={
//     name:"Spiderman",
//     gf:"Merry",
//     auntName:"May",
//     uncle:"Ben",
// };

// function myFunc(){
//     console.log(this);
// }
// myFunc.call(superhero);

// let superhero={
//     name:"Spiderman",
//     gf:"Merry",
//     auntName:"May",
//     uncle:"Ben",
// };

// function myFunc(realName,pincode){
//     console.log(this);
//    // console.log(name);
//     console.log(this.name);
//     this.realname=realName;
//     console.log(pincode)
// }
// myFunc.call(superhero,"Peter Parker",456789); //it points towars the superhero obj and calls myFunc and passing arguments seperated by comma
// console.log(superhero);

//2nd way= apply(): we will use apply method  to pass multiple arguments to function in array 
// let arr=["first","second","third"]
// let superhero2={
//     name:"Spiderman",
//     gf:"Merry",
//     auntName:"May",
//     uncle:"Ben",
// };
// function myFunc2(realName,first,second,third){
//    console.log(realName);
//    console.log(first);
//    console.log(second);
//    console.log(third);
// }

//  myFunc2.apply(superhero2,arr) //it points towars the superhero obj and calls myFunc and passing arguments seperated in array

// 3rd way = bind() :WE WILL USE BIND METHOD WHEN WE WANT TO BIND OBJ TO FUN IT IS SIMILAR TO CALL METHOD BUT DIFFERENCE IS
//IT WILL NOT DIRECTLY CALL FUNCTION INSTEAD OF THAT IT WILL RETURNTHE REFERENCE OF THAT FUNCTION AND WE MANUALLY CALL THAT FUNCTION WHEN WE NEED IT

let superhero={
    name:"Spiderman",
    gf:"Merry",
    auntName:"May",
    uncle:"Ben",
};

function myFunc(realName,pincode){
    console.log(this);
   // console.log(name);
    console.log(this.name);
    this.realname=realName;
    console.log(pincode)
}
let bindfun=myFunc.BIND(superhero,"Peter Parker",456789); 
bindfun();



