const preloader = document.querySelector('#preloader');
const body = document.body;

window.onload=()=>{
   preloader.style.opacity= '0'
   body.style.overflowY= "auto"
   setTimeout(() => {
      preloader.style.display= "none"
   }, 400);
}