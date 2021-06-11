


for(var i=0;i<4;i++){
document.querySelectorAll(".btn")[i].addEventListener("click",function(){
    makeSound(this.innerHTML);
    animation(this.innerHTML);
})
}
function makeSound(key){
    switch(key){
        case "1":
            var G= new Audio("G.mp3");
            G.play();
            break;
        case "2" :
            var C=new Audio("C.mp3");    
        C.play();
            break;
        case "3":
            var E= new Audio("E.mp3");
            E.play();
            break;
        case "4":
            var A= new Audio("A.mp3");
            A.play();
        break;

    }
}
document.addEventListener("keydown",function(event){
    makeSound(event.key);
    animation(event.key);
})

