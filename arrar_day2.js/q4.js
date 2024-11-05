let target=1;
let arr=[1,2,3,4,5,10000]


let ans=0;
for(let i=0;i<arr.length;i++){
    if(target==arr[i]) {
      ans=i;
      break;
    }
}
console.log(ans);