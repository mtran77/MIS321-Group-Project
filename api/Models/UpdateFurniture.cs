using api.Data;
using MySql.Data.MySqlClient;

namespace api.Models
{
    public class UpdateFurniture
    {
            public static void MarkAsSold(int id){
            ConnectionString myConnection = new ConnectionString();
            string cs = myConnection.Cs;

            using var con = new MySqlConnection(cs);

            con.Open();

            string stm = $@"UPDATE furniture SET sold = NOT sold WHERE item_id = @id;";

            using var cmd = new MySqlCommand(stm, con);

            cmd.Parameters.AddWithValue("@item_id", id);
            cmd.Prepare();

            cmd.ExecuteNonQuery();
        }

            public static void DeleteListing(int id){
            ConnectionString myConnection = new ConnectionString();
            string cs = myConnection.Cs;

            using var con = new MySqlConnection(cs);
            con.Open();

            string stm = $@"UPDATE movies SET deleted = true WHERE id = @item_id;";

            using var cmd = new MySqlCommand(stm, con);

            cmd.Parameters.AddWithValue("@item_id", id);
            cmd.Prepare();

            cmd.ExecuteNonQuery();
        }
    }
}