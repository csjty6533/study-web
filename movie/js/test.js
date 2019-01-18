let people={
    name:"cos",
    age:20,
    hobby:["축구","농구"]
} 
console.log(people);
let people_json='{"name":"cos","age":20,"hobby":["축구","농구"]}';
console.log(people_json);   
let change_json=JSON.stringify(people);//받은자료를 문자열에 담기
console.log(change_json); 
//문자열->오브젝트
let change_object=JSON.parse(change_json);
console.log(change_object);
console.log(change_object.name);