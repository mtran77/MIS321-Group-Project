//should pass the listing id 
function DisplayDescription() {
    // getElementByID(descriptionModel 000000) 
    //should get the description id + listing id / whatever identifies listing that was passed in from the parameter
    var modal = document.getElementById("descriptionModal 000000");

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    modal.style.display = "block";
}
var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    //should get the description id + listing id / whatever identifies listing that was passed in from the parameter

    var modal = document.getElementById("descriptionModal 000000");
    modal.style.display = "none";
}

//should pass the listing id 
function DisplayImage() {
    // getElementByID(descriptionModel 000000) 
    //should get the description id + listing id / whatever identifies listing that was passed in from the parameter
    var modal = document.getElementById("imageModal 000000");

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    modal.style.display = "block";
}
var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    //should get the description id + listing id / whatever identifies listing that was passed in from the parameter

    var modal = document.getElementById("imageModal 000000");
    modal.style.display = "none";
}
