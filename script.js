

let popupButton=document.querySelector(".btn")

let popup= document.querySelector(".popup")

let innerbtn=document.querySelector(".innerbtn")

popupButton.addEventListener("click", function(){
    popup.style.display="block"

})

innerbtn.addEventListener("click", function(){
    popup.style.display="none"
})
