using api.Data;
using MySql.Data.MySqlClient;

namespace api.Models
{
    public class ReadFurnitureData
    {
        public Furniture GetFurniture(int id)
        {
            ConnectionString myConnection = new ConnectionString();
            string cs = myConnection.Cs;

            using var con = new MySqlConnection(cs);
            con.Open();

            string stm = "SELECT * FROM Furniture WHERE id = @ItemID";
            using var cmd = new MySqlCommand(stm, con);
            cmd.Parameters.AddWithValue("@item_id", id);
            cmd.Prepare();
            using MySqlDataReader rdr = cmd.ExecuteReader();

            rdr.Read();
            con.Close();
            return new Furniture(){ItemID = rdr.GetInt32(0), ItemPrice = rdr.GetInt32(1), ItemCategory = rdr.GetString(2), Deleted = rdr.GetBoolean(3), FurnitureImage = rdr.GetString(4), SellerID = rdr.GetInt32(5), ItemName = rdr.GetString(6)};
        }

        public List<Furniture> GetAllFurniture()
        {
            ConnectionString myConnection = new ConnectionString();
            string cs = myConnection.Cs;

            using var con = new MySqlConnection(cs);
            con.Open();

            string stm = "SELECT * FROM Furniture";
            using var cmd = new MySqlCommand(stm, con);
            using MySqlDataReader rdr = cmd.ExecuteReader();

            List<Furniture> allFurniture = new List<Furniture>();

            while(rdr.Read()){
                allFurniture.Add(new Furniture(){ItemID = rdr.GetInt32(0), ItemPrice = rdr.GetInt32(1), ItemCategory = rdr.GetString(2), Deleted = rdr.GetBoolean(3), FurnitureImage = rdr.GetString(4), SellerID = rdr.GetInt32(5), ItemName = rdr.GetString(6)});
            }

            con.Close();
            return allFurniture;
        }
    }
}