function DisplayEditingForm() {
    document.getElementById("EditListingForm").style.display = "block";
}

function closeEditingForm() {
    document.getElementById("EditListingForm").style.display = "none";
}

async function SaveListingEdits() {
    try {
        const name = document.getElementById("name").value;
        const price = document.getElementById("price").value;
        const condition = document.getElementById("condition").value;
        const category = document.getElementById("category").value;
        const description = document.getElementById("description").value;
        const imageUrl = document.getElementById("imageUrl").value;
        const deleted = false;
        const id = 100;
        const sellerID = localStorage.getItem('SellerID')
  
        const listing = {
          itemID: id,
          itemPrice: price,
          itemCategory: category,
          deleted: deleted,
          furnitureImage: imageUrl,
          sellerID: sellerID,
          itemName: name,
          sellerLocation: "string",
          itemCondition: condition,
          itemDescription: description
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
