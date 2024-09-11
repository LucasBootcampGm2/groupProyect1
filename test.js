let button = document.querySelector(".buttonSubmit")
let header = document.querySelector(".headerT")
let main = document.querySelector(".main")
let modal = document.getElementById("modal")

button.addEventListener("click", function(){
    document.getElementById('modal').classList.remove('show')
    setTimeout(function(){
        modal.style.display = "none";
        
    }, 1000)
});

window.onload = function() {
    setTimeout(function() {
        document.getElementById("modal").classList.add("show");
    }, 200); 
};
