let imga = null ;
imga = document.getElementById("image");
function init() {
    imga = document.getElementById('image')

    imga.style.left = "0px"
}

function moveright() {
    imga.style.left = parseInt(imga.style.left) + 1000 + 'px' ;

}
window.onload = init;