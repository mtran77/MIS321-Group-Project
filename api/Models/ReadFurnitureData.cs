using api.Data;
using MySql.Data.MySqlClient;

namespace api.Models
{
    public class ReadFurnitureData
    {
        public Furniture GetFurniture(int Id)
        {
            ConnectionString myConnection = new ConnectionString();
            string cs = myConnection.Cs;

            using var con = new MySqlConnection(cs);
            con.Open();

            string stm = "SELECT * FROM furniture WHERE item_id = @item_id";
            using var cmd = new MySqlCommand(stm, con);
            cmd.Parameters.AddWithValue("@item_id", Id);
            cmd.Prepare();
            using MySqlDataReader rdr = cmd.ExecuteReader();

            rdr.Read();
            con.Close();
            return new Furniture(){ItemID = rdr.GetInt32(0), ItemPrice = rdr.GetInt32(1), ItemColor = rdr.GetString(2), ItemCategory = rdr.GetString(3), ItemType = rdr.GetString(4), Sold = rdr.GetBoolean(5), Deleted = rdr.GetBoolean(6)};
        }

        public List<Furniture> GetAllFurniture()
        {
            ConnectionString myConnection = new ConnectionString();
            string cs = myConnection.Cs;

            using var con = new MySqlConnection(cs);
            con.Open();

            string stm = "SELECT * FROM furniture";
            using var cmd = new MySqlCommand(stm, con);
            using MySqlDataReader rdr = cmd.ExecuteReader();

            List<Furniture> allFurniture = new List<Furniture>();

            while(rdr.Read()){
                allFurniture.Add(new Furniture(){ItemID = rdr.GetInt32(0), ItemPrice = rdr.GetInt32(1), ItemColor = rdr.GetString(2), ItemCategory = rdr.GetString(3), ItemType = rdr.GetString(4)});
            }

            con.Close();
            return allFurniture;
        }
    }
}