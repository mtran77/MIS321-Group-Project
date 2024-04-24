function DisplayEditingForm() {
    document.getElementById("EditListingForm").style.display = "block";
}

function closeEditingForm() {
    document.getElementById("EditListingForm").style.display = "none";
}

async function SaveListingEdits() {
    try {
        const id = document.getElementById("currentListingId").value;
        const listingName = document.getElementById("ListingName").value;
        const price = document.getElementById("Price").value;
        const condition = document.getElementById("listingCondition").value;
        const category = document.getElementById("listingCategory").value;
        const description = document.getElementById("Description").value;
        const imageUrl = document.getElementById("imageUrl").value;

        const editedListing = {
            listingName,
            price,
            condition,
            category,
            description,
            imageUrl
        };

        const response = await fetch(`api/Furniture/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(editedListing)
        });

        if (response.ok) {
            alert("Listing edits saved successfully.");
            
        } 
        else {
            alert("Error saving listing edits. Please try again later.");
        }
    } catch (error) {
        console.error('Error saving listing edits:', error);
        alert("An error occurred. Please try again later.");
    }
}
