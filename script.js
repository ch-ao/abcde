const totalTime = 7500;
const breatheTime = 3000;
const holdTime = 1500;
const container = document.getElementById("container")

function breathAnimation() {
    $("#text").html("breath in !");
    container.className = "container container-grow";
    setTimeout( ()=> {
        $("#text").html("hold !");
        setTimeout(()=> {
            $("#text").html("breathe out !");
            container.className = "container container-shrink";
        }, holdTime);
    }, breatheTime);
}
breathAnimation();
setInterval(breathAnimation, totalTime);