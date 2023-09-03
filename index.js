
//1.ways to print in JS
//console.log('Hello World');
//alert('me');
//document.write('this is document write');

//2.JS console API
//console.log('hello world', 4+6, 'another log');
//console.warning() is wrong 
//console.warn('this is warning');
//console.error('this is an error');

//3.JS Variables
//containers to store data values
 var number1 = 10;
 var number2 = 12;
 //console.log(number1 + number2);

//4. Data types in JS

//numbers
var num1=455;
var num2=56.76;

//strings
var str1='this is a string'
var str2='this is also a string'

//objects
var marks = {
    ravi:34,
    shubham:78,
    harry:99.977
}

//console.log(marks)

//booleans
var a=true;
var b=false;
// console.log(a)
// console.log(a,b)


//undefined
//1
var und = undefined;
//console.log(und)
//2
var un;
//console.log(un)

//null
var n = null;
//console.log(n)


/*
at a very high level, there are  two types of data types:
1. Primitive data types-undefined, null,number,boolean,symbol
2. Reference data types-arrays and objects
*/

var arr = [1,2,'bablu',4,5]


//OPERATORS IN JS:
var a = 10;
var b = 2;
/*
console.log('the value of a + b is',a+b);
console.log('the value of a - b is',a-b);
console.log('the value of a x b is',a*b);
console.log('the value of a / b is',a/b);
*/

//ASSIGNMENT OPERATORS:
var c = b;
//console.log(c);


// COMPARISON OPERATORS:
var x = 34;
var y = 56;
/*
console.log(x==y);
console.log(x>=y);
console.log(x<=y);
console.log(x>y);
console.log(x<y);
*/




// LOGICAL OPERATORS:


//LOGICAL AND
// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);


//LOGICAL OR
// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);


//LOGICAL NOT
//console.log(!false);
//console.log(!true);


//FUNCTION IN JS:
//DRY-dont repeat yourself
// function avg(a,b){
//     c=(a+b)/2;
//     return c;
// }

// c1=avg(4,6);
// c2=avg(14,16);
// console.log(c1,c2);




//CONDITIONAL IN JS:

// var age = 41;
// // single if statement
// if(age>18){
//     console.log('you can drink rasna water')
// } 

// // if - else statement
// if(age>18){
//     console.log('you can drink water');
// }
// else{
//     console.log('you cannot drink rasna water');
// }


// // if-else ladder
// if(age>32){
//     console.log('you are not a kid');
// }
// else if(age>26){
//     console.log('bacche nahi rahe');
// }
// else if(age>22){
//     console.log('yes bacche nahi rahe');
// }
// else if(age>18){
//     console.log('18 bacche nahi rahe');
// }
// else{
//     console.log('bacche rahe')
// }



//LOOPS IN JS

var arr = [1,2,3,4,5,6,7];
// console.log(arr);
// for(var i = 0;i<arr.length;i++){
//     console.log(arr[i])
// }

//arr.forEach(function(element){
//    console.log(element);
//})

//Let j = 0;
//const ac=o;
//ac++;


//Let j = 0;
//while(j<arr.length){
//    console.log(arr[j]);
//    j++;
//}


// var j = 0;
// do{
//     console.log(arr[j]);
//     j++;
// }while(j<arr.length);



// BREAK AND CONTINUE:

var arr = [1,2,3,4,5,6,7];
for(var i = 0;i < arr.length; i++){
    if(i==2){
        break;
    }
    console.log(arr[i])
}

var arr = [1,2,3,4,5,6,7];
for(var i = 0;i < arr.length; i++){
    if(i==2){
        continue;
    }
    console.log(arr[i])
}
































































































