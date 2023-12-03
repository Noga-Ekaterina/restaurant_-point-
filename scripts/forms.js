const blockShadow= document.querySelector("#block_shadow")

class ShowModal{
	constructor(button, modal, typeButton){
		this.typeButton= typeButton;
		this.button= (this.typeButton=="id") ? document.getElementById(button) : document.getElementsByClassName(button);
		this.modal= document.getElementById(modal)
	}
   start(){
		var Th= this;

      const show=()=>{
         blockShadow.style.display= "flex"
         Th.modal.style.display= "block"
         body.style.overflowY= "hidden"
      }
      
      if(this.typeButton=="id"){
         this.button.onclick= show
      }else{
         Array.from(this.button).forEach((el)=>{
            el.onclick= show
         })
      }
   }
}

class CloseModal{
	constructor(block){
		this.block= document.getElementById(block)
	}
	click(){
		var Th= this;
		Th.block.querySelector(".close").onclick=()=>{
			Th.block.style.display="none";
			blockShadow.style.display="none"
         body.style.overflowY= "auto"
		}
	}
}
new ShowModal("phone", "form_phone", "id").start()
new ShowModal("book_an_event", "form_book_an_event").start()
new ShowModal("book_a_table", "form_book_a_table").start()

new CloseModal("form_phone").click()
new CloseModal("form_book_an_event").click()
new CloseModal("form_book_a_table").click()

class ChecForm{
	constructor(form){
		this.form= document.querySelector('[name="'+form+'"]');
	}
	start(){
		var Th=this
		let btn= Th.form.querySelector(".a_button")
		if(Th.form!=document.forms.phone){
			Th.form.querySelectorAll(".placeholder").forEach((el)=>{
				el.onchange=()=>{
					if(el.value.length!=0){
						el.style.color= "#000"
                  el.nextElementSibling.style.opacity= "0"
               }
					else{
						el.style.color=""
                  el.nextElementSibling.style.opacity= ""
               }
				}
			})
		}
		Th.form.oninput=()=>{
			let arrBoolean=[]
			Array.from(Th.form.elements).forEach((el, index)=>{
				if(el.value.length!=0)
					arrBoolean[index]= true
				else
					arrBoolean[index]= false
			})
			if(arrBoolean.includes(false))
				btn.setAttribute("disabled", "true")
			else
				btn.removeAttribute("disabled")
		}
	}
}
new ChecForm("phone").start()
new ChecForm("book_an_event").start()
new ChecForm("book_a_table").start()