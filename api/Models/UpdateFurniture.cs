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

            string stm = $@"UPDATE Furniture SET Deleted = true WHERE id = @ItemID;";

            using var cmd = new MySqlCommand(stm, con);

            cmd.Parameters.AddWithValue("@ItemID", id);
            cmd.Prepare();

            cmd.ExecuteNonQuery();
        }
    }
}