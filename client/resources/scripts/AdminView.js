//should pass the listing id 
function DisplayDescription() {
    // getElementByID(descriptionModel 000000) 
    //should get the description id + listing id / whatever identifies listing that was passed in from the parameter
    var modal = document.getElementById("descriptionModal 000000");

    if (modal) {
        modal.style.display = "block";

        //closes modal
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }
}

//should pass the listing id 
function DisplayImage() {
    // getElementByID(descriptionModel 000000) 
    //should get the description id + listing id / whatever identifies listing that was passed in from the parameter
    var modal = document.getElementById("imageModal 000000");
  
  
    if (modal ) {
        modal.style.display = "block";
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }
}
