using api.Data;
using MySql.Data.MySqlClient;

namespace api.Models
{
    public class UpdateFurniture
    {
            public static void DeleteListing(int id){
            ConnectionString myConnection = new ConnectionString();
            string cs = myConnection.Cs;

            using var con = new MySqlConnection(cs);
            con.Open();

            string stm = $@"UPDATE Furniture SET Deleted = true WHERE ItemID = @ItemID;";

            using var cmd = new MySqlCommand(stm, con);

            cmd.Parameters.AddWithValue("@ItemID", id);
            cmd.Prepare();

            cmd.ExecuteNonQuery();
        }
        public static void UpdateFurnitureItem(int id, Furniture myFurniture){
            ConnectionString myConnection = new ConnectionString();
            string cs = myConnection.Cs;
 
            using var con = new MySqlConnection(cs);
            con.Open();
 
            string stm = @"UPDATE Furniture
            SET ItemPrice = @ItemPrice, ItemCategory = @ItemCategory, Deleted = @Deleted, FurnitureImage = @FurnitureImage, SellerID = @SellerID, ItemName = @ItemName, ItemCondition = @ItemCondition, ItemDescription = @ItemDescription
            WHERE ItemID = @ItemID";
 
            using var cmd = new MySqlCommand(stm, con);
 
            cmd.Parameters.AddWithValue("@ItemID", id);
            cmd.Parameters.AddWithValue("@ItemPrice", myFurniture.ItemPrice);
            cmd.Parameters.AddWithValue("@ItemCategory", myFurniture.ItemCategory);
            cmd.Parameters.AddWithValue("@Deleted", myFurniture.Deleted);
            cmd.Parameters.AddWithValue("@FurnitureImage", myFurniture.FurnitureImage);
            cmd.Parameters.AddWithValue("@SellerID", myFurniture.SellerID);
            cmd.Parameters.AddWithValue("@ItemName", myFurniture.ItemName);
            cmd.Parameters.AddWithValue("@ItemCondition", myFurniture.ItemCondition);
            cmd.Parameters.AddWithValue("@ItemDescription", myFurniture.ItemDescription);
 
            cmd.Prepare();
 
            cmd.ExecuteNonQuery();
        }
    }
}