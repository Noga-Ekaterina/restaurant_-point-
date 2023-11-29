const BlockShadow= document.querySelector("#block_shadow")
class CloseModal{
	constructor(block){
		this.block= document.getElementById(block)
	}
	click(){
		var Th= this;
		Th.block.querySelector(".close").onclick=()=>{
			Th.block.style.display="none";
			BlockShadow.style.display="none"
		}
	}
}
new CloseModal("form_phone").click()
new CloseModal("form_Book_an_event").click()