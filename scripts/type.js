/*------------------
-------Type--------
------------------*/
const knapper = document.getElementsByClassName("type_klik");
let klikket = false;

knapper[0].addEventListener("click", function() {
if (klikket == true) {
    knapper[0].style.boxShadow = " none";
    klikket = false;
} else {
    knapper[0].style.boxShadow = " 0px 0px 40px #7bb1f1";
    klikket = true;
}
});

knapper[1].addEventListener("click", function() {
    if (klikket == true) {
        knapper[1].style.boxShadow = " none";
        klikket = false;
    } else {
        knapper[1].style.boxShadow = " 0px 0px 40px #7bb1f1";
        klikket = true;
    }
    });