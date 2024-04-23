//should pass the listing id 
function DisplayDescription() {
    // getElementByID(descriptionModel 000000) 
    //should get the description id + listing id / whatever identifies listing that was passed in from the parameter
    var modal = document.getElementById("descriptionModal 000000");
    var span = document.getElementsByClassName("close")[0];

    if (modal && span) {
        modal.style.display = "block";

        //closes modal
        span.onclick = function() {
        modal.style.display = "none";
        }
    
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    } else {
        console.error("Modal or close button element not found.");
    }
}

//should pass the listing id 
function DisplayImage() {
    // getElementByID(descriptionModel 000000) 
    //should get the description id + listing id / whatever identifies listing that was passed in from the parameter
    var modal = document.getElementById("imageModal 000000");
    var span = document.getElementsByClassName("close1")[0];

  
    if (modal && span) {
        modal.style.display = "block";

        span.onclick = function() {
        modal.style.display = "none";
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    } else {
        console.error("Modal or close button element not found.");
    }
}
