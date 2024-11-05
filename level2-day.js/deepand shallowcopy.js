//deep and shallow copy-------
//primative datatype 
//non primatfive data type --fun arry objaect
obj={
    x:100,
    y:200
}
let obj2=obj//shallow methods--------------they not change the value
console.log("before",obj);
console.log("before",obj2);

obj2.t=250;
console.log("after",obj);
console.log("after",obj2);

/*
object ke ander copy kesa karengeee
5 ways
1-rest and spread
2-loops
3-
*/


