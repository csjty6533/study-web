const num=[1,2,3,4,5];
console.log(typeof num);
console.log(num);
console.log(num[0]);

num.push(6);//배열에 추가
console.log(num);
num.pop();//배열에서 삭제
console.log(num);
let str="money:3000";
let arr=str.split(":");
console.log(arr);
console.log(arr[1]);
let ele=document.querySelector("#data");
ele.innerHTML=arr[1]+"원 벌었습니다.";
