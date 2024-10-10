//callback function
function setAlarm(callback)
{
    console.log("Setting up alarm")
    callback()
}
function wakeup()
{
    console.log("alarm set")
}
setAlarm(wakeup);

console.log("Start")
console.log(a1);
console.log(a2)
var a1=10;
let a2=20;
const a3=30;
console.log(window);