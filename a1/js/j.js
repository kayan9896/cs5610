const btn = document.querySelector('button');

let de=localStorage.getItem("default");
if(de=="dark"){
  document.querySelector('body').classList.toggle("darkmode");
  document.querySelector('button').classList.toggle("darkbut");
  btn.innerText="light";
}else{
  document.querySelector('body').classList.remove("darkmode");
  document.querySelector('button').classList.remove("darkbut");
  btn.innerText="dark";
}
function changeBackground() {
  if(btn.innerText=="dark"){
    document.querySelector('body').classList.toggle("darkmode");
    document.querySelector('button').classList.toggle("darkbut");
    btn.innerText="light";
    localStorage.setItem("default", "dark");
  }else{
    document.querySelector('body').classList.remove("darkmode");
    document.querySelector('button').classList.remove("darkbut");
    btn.innerText="dark";
    localStorage.setItem("default", "light");
  }
  
}

btn.addEventListener('click', changeBackground);