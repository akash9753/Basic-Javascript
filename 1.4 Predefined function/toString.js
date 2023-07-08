//Example 1: Converting an Object to a String Value
// Declaring numeric object
const num = new Number(10)
console.log(num.toString())
console.log(typeof num);
console.log(Object.prototype.toString.call(num)); 

// Declaring String object
const str = new String("Hi, Let's Learn JavaScript!!")
console.log(str.toString())
console.log(typeof str);

console.log("----------------------------------------------")
//Example 2: Converting a Numeric Value to String Value
const myNum = 100
const str1 = myNum.toString()
console.log("Value of str variable is", str1)
console.log(typeof str1);
console.log("Type of str variable is", typeof str1)
console.log("----------------------------------------------")
//Example 3: Converting an Array to String Value
// Declaring numeric object
var arr = ["Hi", "All", "this", "is", "an", "Array"]
console.log(arr.toString())
console.log("----------------------------------------------")
//Example 4: Using toString() to Detect Object Class
const obj1 = new Date();
console.log(Object.prototype.toString.call(obj1));    

const obj2 = new String()
console.log(Object.prototype.toString.call(obj2));     

const obj3 = new Number()
console.log(Object.prototype.toString.call(obj3));  
console.log("----------------------------------------------")
//Example 5: Overriding the default toString() Method
function MyObject(name, age) {
    this.name = name;
    this.age = age;
  }
  
  const obj = new MyObject('John', 20);
  
  MyObject.prototype.toString = function fun() {
    return this.name + ' is ' + this.age + ' years old.';
  }
  console.log(obj)
  console.log(obj.toString())
console.log("----------------------------------------------")
const student = {
    name: "John",
    school: "freeCodeCamp",
  }
  console.log(student);
  console.log(student.toString());
  console.log(JSON.stringify(student.toString()));