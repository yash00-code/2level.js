let arr=[1,2,3,4,5,6,7,8,9,19]
//for loops
for(let i=0;i<=arr.length;i++ ) {
console.log(arr[i]);
}
//while loop
let x=0
while(x<arr.length){
    console.log(arr[x]);
    x++;
    
}


//do while loop
let e=0
do{
    console.log(arr[e]);
    e++;
    
}while (e<arr.length)

//for of loop
for(let maal of arr){
    console.log(arr[maal]);
    
}
arr.forEach(function fun(maal) {
console.log(maal);

    
});