const knapper = document.getElementsByClassName("type_knap");
let klikket = false;

for (let i = 0; i < knapper.length; i++) {
knapper[i].addEventListener("click", function() {

        if (klikket == false) {
            knapper[i].style.boxShadow = "0px 0px 40px #7bb1f1";
            klikket = true;

        }else {
            for (let i = 0; i < knapper.length; i++) {
                knapper[i].style.boxShadow = "none";
            }
            knapper[i].style.boxShadow = "0px 0px 40px #7bb1f1";
        }});
}