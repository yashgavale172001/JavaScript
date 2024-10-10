//Q2
let movie={
    title:"salam dua",
    director:"abdul"
}
let values=Object.values(movie)
values.forEach((val)=>{
    console.log(val);
})

//Q3
const book={
    totle:"1984",
    author:"George Orwell",
    genre:"Dystopian"
};
let arr=Object.entries(book);
console.log(arr);
arr.forEach((val,idx)=>{
   // console.log(val[0]," ",val[1]);
   console.log(` $(val[0]) : $(val[1])`);
})
//Q4

const keyValueArray=[
    ['name','Charlie'],
    ['age',30],
    ['job','Engineer']
]
console.log(Object.fromEntries(keyValueArray))

//Q5

const c1={
    phone:"1234567",
    email:"yashgavale@gmail.com"
};

const address={
    street:"123 naka",
    city:"ToyTown",
    state:"CA"
}

let userinfo={}
Object.assign(userinfo,c1,address);
console.log(userinfo);

//Q6
let person={
    name:"john",
    age:23,
    address:{
        city:"New York",
        country:"USA"
    }
}
let shallocopy=Object.assign(person)
shallocopy.address.city="Antgcf";
console.log(shallocopy);
console.log(person)

//Q7 shallow copy using JSON methods
let person2={
    name:"john",
    age:23,
    address:{
        city:"New York",
        country:"USA"
    }
}

//using JSON
// let shallow=Object.assign(person2);
// let jsn=JSON.stringify(shallow);
// let deep=JSON.parse(jsn);
// deep.address.city="nandurbar";
// console.log(shallow)
// console.log(deep);


//Without using JSON
let copy=Object.assign({},person);
copy.age=24;
console.log(person)
console.log(copy);

//Q8 creqte object using Object literal syntax 
let smartphone={
    name:"S24 Ultra",
    brand:"Samsung",
    price:120000
}
let keys=Object.keys(smartphone);
keys.forEach((val)=>{
    console.log(` ${val} : ${smartphone[val]}`)
})

//Q9 
function createcar(make,model,year){
    let obj={
        car:make,
        model:model,
        year:year,
        drive:()=>{
          console.log(`car ${make} and ${model}`);
        }
    }
  return obj

}
let obj2=createcar("saplender","honda",2012);
obj2.drive();

let obj3=createcar("mustang","ford",2020);
obj3.drive();

let obj4=createcar("urus","Lamborgini",2021);
obj4.drive();

//Q10 
function user(name,email)
{
    this.name=name;
    this.email=email;
    this.greet=function(){
        console.log(`${this.name} and ${this.email}`)
    }
}
let k1=new user("yash","yashgavale@gmail.com");
let k2=new user("raju","rajubhau@gmail.com");
k1.greet();
k2.greet();

//Q11  




