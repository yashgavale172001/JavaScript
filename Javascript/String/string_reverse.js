//string inbulit functions split(),reverse(),join()

// let str="bahubali";
// let arr=str.split("").reverse().join("") // it will return string
// // let arr=str.split("").reverse()
//  console.log(arr);
// // let newStr=arr.join("") //join will return string
// // console.log(newStr);


//padding 

// let num='123'
// let newnum=num.padStart(10,'*');
// let newnum1=num.padEnd(10,'*');
// console.log(newnum);
// console.log(newnum1);

// let numw='9876';
// let numb=numw.padStart(12,'*').padEnd(20,'*');
// console.log(numb)


//trim() 
// let str2="         ha bhau bol  ";
// console.log(str2);
// console.log(str2.trim()); //it will trim from both side
// console.log(str2.trimEnd())
// let trimstr=str2.trimStart();
// console.log(trimstr);

// //toUppercase(),toLowerCase()
// let nonu="sandip bhai bhadwa he"
// console.log(nonu.toUpperCase())
// console.log(nonu.toLowerCase());

// //replace():it will replace 1st occurance
// //replaceAll():it will replace all the occurences in string

// let a="Bahubali";
// console.log(a.replace("Bahu","Khau").replace("bali","galli"))
// //console.log(a.replace("B","Kh").replace("h","").replace("b","g"))

//slice()
// let b="katappa";
// //let val=b.slice(3,7);
// let val=b.slice(0,2);
// console.log(val);

//substring()
// let str="bhaiya";
// let val=str.slice(-4,-3); //-ve will start from 
// console.log(val)

// let str1="bhaiya";
// let val1=str.substring(2,-4);
// console.log(val1)

//substr()
// let str3="Kattappa";
// let val6=str3.substr(3,5)  //index,length from index
// console.log(val6);

//startwith(),endswith()=it will return boolean value
// let a="kattappa";
// console.log(a.startsWith("k"));
// console.log(a.endsWith("p"));

//charAt():to extract value from perticular index
let str="bhaiya bhau";
console.log(str.charAt(4));
console.log(str.charCodeAt(8));



