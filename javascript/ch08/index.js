function addDiv(){
    let newDiv=document.createElement("Div");
    console.log(newDiv);
    newDiv.innerHTML="나";
    let card_list=document.querySelector(".card_list");
    console.log(card_list);
    card_list.prepend(newDiv);//append는 뒤에서 추가 prepend는 앞에서 추가
}
addDiv();
addDiv();



