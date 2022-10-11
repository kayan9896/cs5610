// function get(){
//     let num;
//     do{
//         num=prompt("enter");

//     }while(isNaN(num));
//     return num;

// }
// let number=get();
// let rad=document.querySelector('#radius');
// rad.innerText+=`${number}`;
// function area(rad){
//     let a=Math.PI*rad*rad;
//     return a;
// }
// let a=area();
// let ar=document.querySelector('#result');
// ar.innerText+=`${ar}`;


// let shoplistele=document.querySelector(".shopping");
// let shopitem=["bread","cheese"];
// function poput(arr){
//     for(let i of arr){
//         let r=document.createElement("li");
//         r.innerText=i;
//         shoplistele.appendChild(r);
//     }
// }
// poput(shopitem);

// function sqli(){
//     shoplistele.setAttribute("class","sqlist");
    
// }
// sqli();

let cb=document.querySelector('#updateImage');
cb.innerText=localStorage.getItem("buttonText");
cb.addEventListener("click",changetext);
function changetext(){
    if(cb.innerText==="Click Me!"){
        cb.innerText="clicked";
        localStorage.setItem('buttonText',"clicked");
    }
    else{
        cb.innerText="Click Me!";
        localStorage.setItem('buttonText',"Click Me!");
    }
}

let but=document.querySelectorAll('img~button');
for(let b of but){
    b.addEventListener('mouseover',changeButtonBGColor);
}
function changeButtonBGColor(){
    console.log(event.target);
    event.target.style.backgroundColor=event.target.innerText;
}