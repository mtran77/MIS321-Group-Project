function DisplayDescription() {
    var modal = document.getElementById("editingModal 000000");
    var span = document.getElementsByClassName("close")[0];

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