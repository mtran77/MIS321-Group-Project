using api.Data;
using MySql.Data.MySqlClient;

namespace api.Models
{
    public class SaveFurniture
    {
        public static void CreateFurnitureTable(){
            ConnectionString myConnection = new ConnectionString();
            string cs = myConnection.Cs;
            using var con = new MySqlConnection(cs);

            con.Open();

            string stm = @"CREATE TABLE furniture(item_id INTEGER PRIMARY KEY AUTO_INCREMENT, item_price INTEGER, item_color TEXT, item_category TEXT, item_type TEXT, sold TINYINT NOT NULL DEFAULT 0, deleted TINYINT NOT NULL DEFAULT 0)";

            using var cmd = new MySqlCommand(stm, con);
            cmd.ExecuteNonQuery();
        }

        public static void CreateFurniture(Furniture myFurniture)
        {
            ConnectionString myConnection = new ConnectionString();
            string cs = myConnection.Cs;

            using var con = new MySqlConnection(cs);
            con.Open();

            string stm = @"INSERT INTO Furniture(item_price, item_category, item_color, item_type, sold, deleted) VALUES(@item_price, @item_category, @item_color, @item_type, @sold, @deleted)";

            using var cmd = new MySqlCommand(stm, con);

            cmd.Parameters.AddWithValue("@item_price", myFurniture.ItemPrice);
            cmd.Parameters.AddWithValue("@item_category", myFurniture.ItemCategory);
            cmd.Parameters.AddWithValue("@item_type", myFurniture.ItemType);
            cmd.Parameters.AddWithValue("@item_color", myFurniture.ItemColor);
            cmd.Parameters.AddWithValue("@sold", myFurniture.Sold);
            cmd.Parameters.AddWithValue("@deleted", myFurniture.Deleted);


            cmd.Prepare();
            
            cmd.ExecuteNonQuery();
        }
    }
}