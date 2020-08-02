//getting node list of btn-open
var modalOpenBtns = document.querySelectorAll('.modal-open');

//accessing each modal buttons's data
modalOpenBtns.forEach(function(btn) {
    btn.onclick = function(){
        var modal = btn.getAttribute('data-modal');

        var mondalContainer = document.getElementById(modal);
        mondalContainer.style.display = "block";
    }
})

var modalCloseBtns = document.querySelectorAll('.btn-close')

modalCloseBtns.forEach(function(btn){
    btn.onclick = function(){
        var modal = (btn.closest('.modal-container').style.display = 'none');
    }
})