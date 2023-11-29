const menu = document.querySelector('#menu');

const openMenu=document.querySelector('#open_menu');
openMenu.onclick=()=>{
   if (menu.className!="open")
      menu.classList.add("open")
   else
      menu.classList.remove('open');
};

document.body.onclick = function(event) {
   if (event.target!= menu && event.target!=openMenu) {
      menu.classList.remove('open');
   }
}