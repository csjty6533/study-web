//오브젝트(:)-배열 비교 키값이 필요할 때, array-키값이 필요없을 때ex)num=[1,2,3]

let soccer={
    name:"축구",
    count:11,
    need:"공"
}

let people={
    name:"cos",
    phone:"01022227777",//표현가능범위가아님
    address:"busan",
    age:50,
    hobby:["농구",soccer,"음악"]
}
console.log(people);
console.log(typeof people);
console.log(people.name);
console.log(people.phone);
console.log(people.age);
console.log(people.hobby[1]);
console.log(people.hobby[1].count);
