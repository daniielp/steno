const knapper = document.getElementsByClassName("type_knap");
const tekst = document.getElementsByClassName("absolute_text");
const fyld = document.getElementById("fyld");
let klikket = false;

//audio
let lyde = document.getElementsByTagName("audio");

//footer knappen
const footerKnap = document.getElementsByClassName("hoejre");

for (let i = 0; i < knapper.length; i++) {
knapper[i].addEventListener("click", function() {

        if (klikket == false) {
            knapper[i].style.boxShadow = "0px 0px 40px #7bb1f1";
            klikket = true;
            tekst[i].style.display = "flex";
            fyld.style.transition = "1s all ease";
            fyld.setAttribute("d", "M14 323C14 342.33 29.67 358 49 358V358C68.33 358 84 342.33 84 323V224H14V323Z");

            //aktiver footer knappen
            footerKnap[0].style.backgroundColor = "#ffffff";
            footerKnap[0].style.pointerEvents = "all";
            lyde[0].play();

        }else {
            for (let i = 0; i < knapper.length; i++) {
                knapper[i].style.boxShadow = "none";
                tekst[i].style.display = "none";
            }
            knapper[i].style.boxShadow = "0px 0px 40px #7bb1f1";
            tekst[i].style.display = "flex";
            lyde[0].play();
        }});
}
