const knapper = document.getElementsByClassName("type_knap");
const fyld = document.getElementById("fyld");
let antal = 0;

//audio
let lyde = document.getElementsByTagName("audio");

//footer knappen
const footerKnap = document.getElementsByClassName("hoejre");

for (let i = 0; i < knapper.length; i++) {
knapper[i].addEventListener("click", function() {
    let startTal = i;
    antal += 1;
        if (antal < 2) {
            knapper[i].style.boxShadow = "0px 0px 40px #7bb1f1";
            lyde[i].play();

            //Baggrund
            const baggrundBilleder = document.getElementsByClassName("baggrund");
            const billeder = ["../img/icons/hoste.svg", "../img/icons/feber.svg", "../img/icons/traethed.svg", "../img/icons/muskelsmerter.svg", "../img/icons/diarre.svg", "../img/icons/opkast.svg", "../img/icons/hjertebanken.svg", "../img/icons/vaegttab.svg", "../img/icons/hovedpine.svg"];
            let skiftBillede = billeder[i];
            for (let i = 0; i < baggrundBilleder.length; i++) {
                baggrundBilleder[i].src = skiftBillede;
                baggrundBilleder[i].style.animationName = "slideOver";
            }

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
            lyde[i].play();
            
            //Baggrund
            const baggrundBilleder = document.getElementsByClassName("baggrund");
            const billeder = ["../img/icons/hoste.svg", "../img/icons/feber.svg", "../img/icons/traethed.svg", "../img/icons/muskelsmerter.svg", "../img/icons/diarre.svg", "../img/icons/opkast.svg", "../img/icons/hjertebanken.svg", "../img/icons/vaegttab.svg", "../img/icons/hovedpine.svg"];
            let skiftBillede = billeder[i];
            for (let i = 0; i < baggrundBilleder.length; i++) {
                baggrundBilleder[i].src = skiftBillede;
                baggrundBilleder[i].style.animationName = "slideOver";
            }

        }else if (antal < 4) {
            knapper[i].style.boxShadow = "0px 0px 40px #7bb1f1";
            fyld.setAttribute("d", `M14 323C14 342.33 29.67 358 49 358V358C68.33 358 84 342.33 84 323V${194-(antal*20)}H14V323Z`);
            //aktiver footer knappen
            footerKnap[0].style.backgroundColor = "#ffffff";
            footerKnap[0].style.pointerEvents = "all";
            lyde[i].play();

            //Baggrund
            const baggrundBilleder = document.getElementsByClassName("baggrund");
            const billeder = ["../img/icons/hoste.svg", "../img/icons/feber.svg", "../img/icons/traethed.svg", "../img/icons/muskelsmerter.svg", "../img/icons/diarre.svg", "../img/icons/opkast.svg", "../img/icons/hjertebanken.svg", "../img/icons/vaegttab.svg", "../img/icons/hovedpine.svg"];
            let skiftBillede = billeder[i];
            for (let i = 0; i < baggrundBilleder.length; i++) {
                baggrundBilleder[i].src = skiftBillede;
                baggrundBilleder[i].style.animationName = "slideOver";
            }


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