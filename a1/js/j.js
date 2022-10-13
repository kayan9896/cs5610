const btn = document.querySelector("#dl");
const tbtn=document.querySelector("section");
const txt=document.querySelector("#log");

let de=localStorage.getItem("default");
if(de=="dark"){
  document.querySelector('body').classList.toggle("darkmode");
  document.querySelector("#dl").classList.toggle("darkbut");
  btn.innerText="light";
}
function changeBackground() {
  if(btn.innerText=="dark"){
    document.querySelector('body').classList.toggle("darkmode");
    document.querySelector("#dl").classList.toggle("darkbut");
    btn.innerText="light";
    localStorage.setItem("default", "dark");
  }else{
    document.querySelector('body').classList.remove("darkmode");
    document.querySelector("#dl").classList.remove("darkbut");
    btn.innerText="dark";
    localStorage.setItem("default", "light");
  }
  
}
function displayDateTime(){
  console.log(this.value);
  if(this.value=="tm"){
    const d=new Date();
    log.innerText=d.getTime();
  }else{log.innerText=Date.now()}
}

btn.addEventListener('click', changeBackground);
tbtn.addEventListener('click', displayDateTime);