using api.Data;
using MySql.Data.MySqlClient;

namespace api.Models
{
    public class SaveFurniture
    {
        public static void CreateFurniture(Furniture myFurniture)
        {
            ConnectionString myConnection = new ConnectionString();
            string cs = myConnection.Cs;

            using var con = new MySqlConnection(cs);
            con.Open();

            string stm = @"INSERT INTO Furniture(ItemPrice, ItemCategory, Deleted, FurnitureImage, SellerID) VALUES(@ItemPrice, @ItemCategory, @Deleted, @FurnitureImage, @SellerID)";

            using var cmd = new MySqlCommand(stm, con);

            cmd.Parameters.AddWithValue("@ItemPrice", myFurniture.ItemPrice);
            cmd.Parameters.AddWithValue("@ItemCategory", myFurniture.ItemCategory);
            cmd.Parameters.AddWithValue("@deleted", myFurniture.Deleted);
            cmd.Parameters.AddWithValue("@FurnitureImage", myFurniture.FurnitureImage);
            cmd.Parameters.AddWithValue("@SellerID", myFurniture.SellerID);

            cmd.Prepare();
            
            cmd.ExecuteNonQuery();
        }
    }
}