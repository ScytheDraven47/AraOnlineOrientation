








var modal21 = document.getElementById('myModal21');
var btn21 = document.getElementById("myimg21");
var span21 = document.getElementsByClassName("close21")[0];
btn21.onclick = function() {
    modal21.style.display = "block";
}
span21.onclick = function() {
    modal21.style.display = "none";
}

var modal22 = document.getElementById('myModal22');
var btn22 = document.getElementById("myimg22");
var span22 = document.getElementsByClassName("close22")[0];
btn22.onclick = function() {
    modal22.style.display = "block";
}
span22.onclick = function() {
    modal22.style.display = "none";
}


var modal23 = document.getElementById('myModal23');
var btn23 = document.getElementById("myimg23");
var span23 = document.getElementsByClassName("close23")[0];
btn23.onclick = function() {
    modal23.style.display = "block";
}
span23.onclick = function() {
    modal23.style.display = "none";
}


var modal24 = document.getElementById('myModal24');
var btn24 = document.getElementById("myimg24");
var span24 = document.getElementsByClassName("close24")[0];
btn24.onclick = function() {
    modal24.style.display = "block";
}
span24.onclick = function() {
    modal24.style.display = "none";
}

var modal25 = document.getElementById('myModal25');
var btn25 = document.getElementById("myimg25");
var span25 = document.getElementsByClassName("close25")[0];
btn25.onclick = function() {
    modal25.style.display = "block";
}
span25.onclick = function() {
    modal25.style.display = "none";
}





var modal20 = document.getElementById('myModal20');
var btn20 = document.getElementById("myimg20");
var span20 = document.getElementsByClassName("close20")[0];
btn20.onclick = function() {
    modal20.style.display = "block";
}
span20.onclick = function() {
    modal20.style.display = "none";
}






var modal1 = document.getElementById('myModal1');
var btn1 = document.getElementById("myimg1");
var span1 = document.getElementsByClassName("close1")[0];
btn1.onclick = function() {
    modal1.style.display = "block";
}
span1.onclick = function() {
    modal1.style.display = "none";
}













// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	
    if (event.target == modal1 ||event.target == modal20 ||event.target == modal21 ||event.target == modal22 ||event.target == modal23 ||event.target == modal24 ||event.target == modal25) {
  
modal1.style.display = "none";
		modal20.style.display = "none";
		modal21.style.display = "none";
		modal22.style.display = "none";
		modal23.style.display = "none";
		modal24.style.display = "none";
		modal25.style.display = "none";		
    }
}

/*
var modal = UIkit.modal(".modalSelector");
var modal = document.getElementById('myModal20');
if ( modal.isActive() ) {
    modal.hide();
} else {
    modal.show();
}

$('.modalSelector').on({

    'show.uk.modal': function(){
        console.log("Modal is visible.");
    },

    'hide.uk.modal': function(){
        console.log("Element is not visible.");
    }
});

*/



