const knapper = document.getElementsByClassName("type_knap");
const tekst = document.getElementsByClassName("absolute_text");
let klikket = false;

for (let i = 0; i < knapper.length; i++) {
knapper[i].addEventListener("click", function() {

        if (klikket == false) {
            knapper[i].style.boxShadow = "0px 0px 40px #7bb1f1";
            klikket = true;
            tekst[i].style.display = "flex";

        }else {
            for (let i = 0; i < knapper.length; i++) {
                knapper[i].style.boxShadow = "none";
                tekst[i].style.display = "none";
            }
            knapper[i].style.boxShadow = "0px 0px 40px #7bb1f1";
            tekst[i].style.display = "flex";
        }});
}