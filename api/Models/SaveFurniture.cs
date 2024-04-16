using api.Data;
using MySql.Data.MySqlClient;

namespace api.Models
{
    public class SaveFurniture
    {
        public static void CreateMovieTable(){
            Database myConnection = new Database();
            using var con = new MySqlConnection(Database.GetPublicConnection());

            con.Open();

            string stm = @"CREATE TABLE furniture(item_id INTEGER PRIMARY KEY AUTO_INCREMENT, item_price INTEGER, item_color TEXT, item_category TEXT, item_type TEXT)";

            using var cmd = new MySqlCommand(stm, con);
            cmd.ExecuteNonQuery();
        }

        public static void CreateFurniture(Furniture myFurniture)
        {
            ConnectionString myConnection = new ConnectionString();
            string cs = myConnection.Cs;

            using var con = new MySqlConnection(Database.GetPublicConnection());
            con.Open();

            string stm = @"INSERT INTO Furniture(item_price, item_category, item_color item_type) VALUES(@item_price, @item_category, @item_color @item_type)";

            using var cmd = new MySqlCommand(stm, con);

            cmd.Parameters.AddWithValue("@item_price", myFurniture.ItemPrice);
            cmd.Parameters.AddWithValue("@item_category", myFurniture.ItemCategory);
            cmd.Parameters.AddWithValue("@item_type", myFurniture.ItemType);
            cmd.Parameters.AddWithValue("@item_color", myFurniture.ItemColor);

            cmd.Prepare();
            
            cmd.ExecuteNonQuery();
        }
    }
}