const btn = document.querySelector("#dl");
const tbtn=document.querySelector("button");
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
  let v=document.querySelector('input[name="datetime"]:checked').value;
  const d=new Date();
  if(v=="tm"){
    log.innerText=d.toLocaleTimeString('en-US');
    setTimeout(displayDateTime, 1000);
  }else{
    log.innerText=d.toDateString();
  }
  
}


btn.addEventListener('click', changeBackground);
tbtn.addEventListener('click', displayDateTime);