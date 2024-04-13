const knapper = document.getElementsByClassName("type_knap");
let antal = 0;

for (let i = 0; i < knapper.length; i++) {
knapper[i].addEventListener("click", function() {
    let startTal = i;
    antal += 1;
        if (antal < 2) {
            knapper[i].style.boxShadow = "0px 0px 40px #7bb1f1";
            for (let i = 0; i < 3; i++) {
                let tal = Math.floor(startTal+(Math.random()*5+1))
                knapper[tal].style.backgroundColor = "grey";
                //Denne lille styling "pointer-events" bestemmer om man skal kunne interagere med noget med musen
                //Her bestemmer 
                knapper[tal].style.pointerEvents = "none";
            }
        }else if (antal < 4) {
            knapper[i].style.boxShadow = "0px 0px 40px #7bb1f1";
        }else {
            for (let i = 0; i < knapper.length; i++) {
                knapper[i].style.boxShadow = "none";
                knapper[i].style.backgroundColor = "#ffffff";
                knapper[i].style.pointerEvents = "all";
            }
            antal = 0;
        }});
}