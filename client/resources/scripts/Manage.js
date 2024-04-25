function DisplayEditingForm() {
    document.getElementById("EditListingForm").style.display = "block";
}

function closeEditingForm() {
    document.getElementById("EditListingForm").style.display = "none";
}

async function SaveListingEdits() {
    try {
        const id = document.getElementById("ItemID").value;
        const name = document.getElementById("ItemName").value;
        const price = document.getElementById("itemPrice").value;
        const condition = document.getElementById("itemCondition").value;
        const category = document.getElementById("itemCategory").value;
        const description = document.getElementById("itemDescription").value;
        const imageUrl = document.getElementById("furnitureImage").value;
        const deleted = false

        const editedListing = {
            id,
            price,
            category,
            deleted,
            imageUrl,
            sellerId,
            itemName,
            sellerLocation,
            condition,
            description
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
