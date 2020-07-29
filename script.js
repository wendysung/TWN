const open = document.getElementById('btn-open');
const modalContainter = document.getElementById('modal_cointainer');
const close = document.getElementById('btn-close');

open.onclick = function(){
    modalContainter.style.display = "inherit";
}

close.onclick = function(){
    modalContainter.style.display = "none";
}