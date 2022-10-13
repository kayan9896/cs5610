const btn = document.querySelector('button');


function changeBackground() {
  if(btn.innerText=="dark"){
    document.querySelector('body').classList.toggle("darkmode");
    btn.style.color="white";
    btn.style.backgroundColor="transparent";
    btn.innerText="light";
    
  }else{
    document.querySelector('body').classList.remove("darkmode");
    btn.style.color="black";
    btn.innerText="dark";
    
  }
  
}

btn.addEventListener('click', changeBackground);