let popbutton = document.querySelector("#popbutton")

popbutton.addEventListener("click", e => {
    console.log("pop button clicked!")
        alert("It works")
})

let target = document.querySelector("#target")

target.addEventListener("click", e => {
    console.log("Lit!")
    alert("It works")
    if(target.classList.contains("zzz")){
        target.classList.remove("zzz")
}else{
  target.classList.add("zzz")
}
})

let bigbutton = document.querySelector("#bigbutton")

bigbutton.addEventListener("click", e => {
    console.log("Big button pressed!")
    if(bigbutton.classList.contains("big")){
        bigbutton.classList.remove("big")
}else{
  bigbutton.classList.add("big")
}
})

let fancybutton = document.querySelector("#fancybutton")

fancybutton.addEventListener("click", e => {
    console.log("Fancy button pressed!")
    if(fancybutton.classList.contains("fancy")){
        fancybutton.classList.remove("fancy")
}else{
  fancybutton.classList.add("fancy")

}    
})


let negativebutton = document.querySelector("#negativebutton")

negativebutton.addEventListener("click", e => {
    console.log("negative button pressed!")
    if(negativebutton.classList.contains("negative")){
        negativebutton.classList.remove("negative")
}else{
  negativebutton.classList.add("negative")

}    
})

let newbutton = document.querySelector("#newbutton")

newbutton.addEventListener("click", e => {
    console.log("new button pressed!")
    if(newbutton.classList.contains("newbutton")){
        newbutton.classList.remove("newbutton")
}else{
  newbutton.classList.add("newbutton")

}    
})
