const knapper = document.getElementsByClassName("type_knap");
const fyld = document.getElementById("fyld");
let antal = 0;

//footer knappen
const footerKnap = document.getElementsByClassName("hoejre");

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
                fyld.setAttribute("d", "M14 323C14 342.33 29.67 358 49 358V358C68.33 358 84 342.33 84 323V194H14V323Z");
            }
        }else if (antal < 3) {
            knapper[i].style.boxShadow = "0px 0px 40px #7bb1f1";
            fyld.setAttribute("d", `M14 323C14 342.33 29.67 358 49 358V358C68.33 358 84 342.33 84 323V${194-(antal*20)}H14V323Z`);

        }else if (antal < 4) {
            knapper[i].style.boxShadow = "0px 0px 40px #7bb1f1";
            fyld.setAttribute("d", `M14 323C14 342.33 29.67 358 49 358V358C68.33 358 84 342.33 84 323V${194-(antal*20)}H14V323Z`);
            //aktiver footer knappen
            footerKnap[0].style.backgroundColor = "#ffffff";
            footerKnap[0].style.pointerEvents = "all";
        }else {
            for (let i = 0; i < knapper.length; i++) {
                knapper[i].style.boxShadow = "none";
                knapper[i].style.backgroundColor = "#ffffff";
                knapper[i].style.pointerEvents = "all";
            }
            antal = 0;
            fyld.setAttribute("d", "M14 323C14 342.33 29.67 358 49 358V358C68.33 358 84 342.33 84 323V224H14V323Z");

            //Deaktiver footer knappen
            footerKnap[0].style.backgroundColor = "grey";
            footerKnap[0].style.pointerEvents = "none";
        }});
}