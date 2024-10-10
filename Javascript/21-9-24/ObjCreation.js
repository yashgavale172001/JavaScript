//1st way
// class CreateObj{
//     constructor(name)
//     {
//         this.name=name;
//     }
// }
// let obj1=new CreateObj("bhaiya");
// console.log(obj1.name);
// console.log(obj1);


//2nd way
// let ObjCtrete=(name)=>{
//     console.log(name);
//     let obj={
//         username :name,
//     }
//     return obj;
// }
// let student=ObjCtrete("jayu");
let ObjCreat=(name,email,qualification,yop,marks)=>{
    let Obj={
    //    name:name,
    //    email:email,
    //    qualification:qualification,
    //    yop:yop,
    //    marks:marks,
    
    //if local variable and global variable is same then no need to do this.name:name this keyword is not allowed here
    //instead of that just do this

    name,
    email,
    qualification,
    yop,
    marks,
    }
    return Obj;
}

let std1=ObjCreat("yash","yashgavale123@gmail.com","BE",2024,550);
let std2=ObjCreat("ram","ram@gmail.com","BE",2023,520);
let std3=ObjCreat("sham","sham@gmail.com","BE",2022,560);
let std4=ObjCreat("naam","naam123@gmail.com","BE",2024,450);

let Student={
    name:"nandu",
    email:"nanduChodu@gmail.com",
    hobbies:["muth marna","kuwari ladki chodna","palang kusti"],
    add:{
        houseno:5,
        pincode:425412,
        loc:"nehru nagar"
    },
    alarm:()=>{
     console.log("Uthhhh ja bhosadike");
    }
}
//let arr=Student.add.loc;
//let arr=Student.add;
let arr=Object.entries(Student); //it will convert object into  arrays
console.log(arr);
let newObj=Object.fromEntries(arr); // it will use to convert array into object
console.log(newObj);

//let arr3=[1,2,3,4,5];
//let obj5=Object.fromEntries(arr3);  // we cannot convert  array like  (means array which will not consist of key value) type into object 
//console.log(obj5);

let arr4=[["bhaiya",1],["nandu",2],["pandu"]];
let obj5=Object.fromEntries(arr4);
console.log(obj5);

let add={
    name:"anju",
    email:"anjumal@gmail.com",
    phno:234567890,
}
let add2={
    loc:"ndfyh",
    pincode:8765
}
Object.assign(add,add2); // it is use when attrubutes of perticular object is same in different objects then we will concate or mix these two object into one obj
console.log(add)






