//Hvis der bliver trykket på videre knappen, skal der ske en animation som leder op til verdenskortet
const header = document.getElementsByTagName("header");
const footer = document.getElementsByTagName("footer");
const indhold = document.getElementsByClassName("type_container");
const reagensglas = document.getElementsByClassName("type_reagens_wrapper");
const bakterie = document.getElementById("bakterie_animation");
const animation = document.getElementById("smittevej_tekst");
const fyld = document.getElementById("fyld");

//audio
let lyde = document.getElementsByTagName("audio");

//footer knappen
const footerKnap = document.getElementsByClassName("hoejre");


footerKnap[0].addEventListener("click", function() {
    //header fade ud
    header[0].style.transition = "1s all ease";  
    header[0].style.opacity = "0";

    //indhold fade ud
    indhold[0].style.transition = "1s all ease";  
    indhold[0].style.opacity = "0";

    //footer fade ud
    footer[0].style.transition = "1s all ease";  
    footer[0].style.opacity = "0";

    //start animation
    reagensglas[0].style.transition = "1s all ease"; 
    reagensglas[0].style.animationName = "slideCenter";
    bakterie.style.animationName = "bakterie";
    animation.style.animationName = "smittevejTekst";

    //timer til side skift
    setTimeout(skiftSide, 10000)
    
});

function skiftSide(){
    window.location.href = "video.html";
};
//knapperne

const knapper = document.getElementsByClassName("type_knap");
let klikket = false;


for (let i = 0; i < knapper.length; i++) {
knapper[i].addEventListener("click", function() {

        if (klikket == false) {
            knapper[i].style.boxShadow = "0px 0px 40px #7bb1f1";
            lyde[i].play();
            klikket = true;
            fyld.setAttribute("d", "M14 323C14 342.33 29.67 358 49 358V358C68.33 358 84 342.33 84 323V24H14V323Z");

            //aktiver footer knappen
            footerKnap[0].style.backgroundColor = "#ffffff";
            footerKnap[0].style.pointerEvents = "all";


        }else {
            for (let i = 0; i < knapper.length; i++) {
                knapper[i].style.boxShadow = "none";
            }
            knapper[i].style.boxShadow = "0px 0px 40px #7bb1f1";
            lyde[i].play();
        }});
}






