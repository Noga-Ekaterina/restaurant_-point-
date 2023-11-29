const blockShadow= document.querySelector("#block_shadow")

class ShowModal{
	constructor(button, modal, typeButton){
		this.typeButton= typeButton;
		this.button= (this.typeButton=="id") ? document.getElementById(button) : document.getElementsByClassName(button);
		this.modal= document.getElementById(modal)
	}
	show(){
		var Th= this;
		blockShadow.style.display= "flex"
		console.log(Th.modal)
		Th.modal.style.display= "block"
	}
	
	click(){
		if(this.typeButton=="id"){
			this.button.onclick= this.show
		}else{
			this.button.forEach((el)=>{
				el.onclick= this.show
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
		}
	}
}
new ShowModal("phone", "form_phone", "id").click()
new CloseModal("form_phone").click()
new CloseModal("form_book_an_event").click()