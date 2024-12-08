//this keyword
//this value depends on how u r calling function

//situation 1
console.log(this);//window object

//situation 2
function log(){
    console.log(this);
}
console.log(this);//window object

//situation 3
const user = {
    fname : "akash",
    lname : "patel",
    printFullName: function(){
        console.log(this);
        }
}
user.printFullName()

//situation 4
function User(){
    console.log(`situation 4`,this);
}
const coders = new User('coders','gyan');

//situation 5
const user1 = {
    fname : "akash",
    lname : "patel",
    printFullName: function(){
        console.log(`situation 5`,this);
        }
}
const printFullName = user1.printFullName;
printFullName();

//situation 6
const user10 = {
    name: 'akash',
    printname: function(){
        console.log('situation 6 upper',this);
        
        const printAgain = function(){
            console.log('situation 6 inner',this);
            
        }
        printAgain();
    }
}
user10.printname();

//situation 7
const user11 = {
    name: 'akash',
    printname: function(){
        console.log('situation 7 upper',this);
        
        const printAgain = ()=>{
            console.log('situation 7 inner',this);
            
        }
        printAgain();
    }
}
user11.printname();