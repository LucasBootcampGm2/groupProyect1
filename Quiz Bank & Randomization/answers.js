function setTimmer(){
    let borderTimmer = document.getElementById("container-timmer")
    let timmer = document.getElementById("timmer")
    let cronometer = 30 
    setInterval(() => {
        timmer.addEventListener("load",function(){
            borderTimmer.style.color= "#b4ec68"
            cronometer--
            timmer.textContent = cronometer
            borderTimmer.style.color = "#579700"
            console.log("hoa")
        })  
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
    

})