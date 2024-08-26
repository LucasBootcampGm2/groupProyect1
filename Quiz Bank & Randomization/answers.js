function setTimmer(){
    let timmer = document.getElementById("timmer")
    let sec = 30 
    let cronometer = setInterval(function(){
        timmer.textContent = sec
        sec--;
        if (sec < 0) {
            clearInterval(cronometer);
        }
    }, 1000);
}

function addEventsToAnswerOptions() {
    let options = document.querySelectorAll(".answer")

    options.forEach(function(option){
        option.addEventListener("mouseover", function(){
            option.style.backgroundColor = "#ddd" 
        })
        option.addEventListener("mouseout", function(){
            option.style.backgroundColor = "white" 
        })
    })
}

window.addEventListener("load",function(){
    addEventsToAnswerOptions()
    setTimmer()
    timmerBorderColorChanges()

})