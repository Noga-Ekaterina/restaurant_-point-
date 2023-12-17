const preloader = document.querySelector('#preloader');
const body = document.body;
const buttons = document.querySelectorAll('.a_button');

window.onload=()=>{
   preloader.style.opacity= '0'
   body.style.overflowY= "auto"
   setTimeout(() => {
      preloader.style.display= "none"
   }, 400);
   buttons. forEach((btn)=>{
      btn.dataset.content= btn.innerHTML
   })
}