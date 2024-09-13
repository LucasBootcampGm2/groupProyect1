let button = document.querySelector(".buttonSubmit")
let h1 = document.getElementById("h1")
let main = document.querySelector(".main")
let modal = document.getElementById("modal")
let header = document.querySelector('.header')

button.addEventListener("click", function(){
    document.getElementById('modal').classList.remove('show')
    setTimeout(function(){
        main.style.display = "flex";
        h1.style.display = "flex";
        header.style.display = "flex";
        modal.style.display = "none";
        
    }, 1000)
});

window.onload = function() {
    setTimeout(function() {
        document.getElementById("modal").classList.add("show");
    }, 200); 
};
