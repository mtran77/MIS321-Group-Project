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

            string stm = "SELECT * FROM Furniture WHERE ItemID = @ItemID";
            using var cmd = new MySqlCommand(stm, con);
            cmd.Parameters.AddWithValue("@ItemID", id);
            cmd.Prepare();
            using MySqlDataReader rdr = cmd.ExecuteReader();

            rdr.Read();
            con.Close();
            string location = GetSellerLocation(rdr.GetInt32(0));
            return new Furniture(){ItemID = rdr.GetInt32(0), ItemPrice = rdr.GetInt32(1), ItemCategory = rdr.GetString(2), Deleted = rdr.GetBoolean(3), FurnitureImage = rdr.GetString(4), SellerID = rdr.GetInt32(5), ItemName = rdr.GetString(6), SellerLocation = location, ItemCondition = rdr.GetString(7), ItemDescription = rdr.GetString(8)};
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
                string location = GetSellerLocation(rdr.GetInt32(0));
                allFurniture.Add(new Furniture(){ItemID = rdr.GetInt32(0), ItemPrice = rdr.GetInt32(1), ItemCategory = rdr.GetString(2), Deleted = rdr.GetBoolean(3), FurnitureImage = rdr.GetString(4), SellerID = rdr.GetInt32(5), ItemName = rdr.GetString(6), SellerLocation = location, ItemCondition = rdr.GetString(7), ItemDescription = rdr.GetString(8)});
            }

            con.Close();
            return allFurniture;
        }

public string GetSellerLocation(int furnitureID)
{
    ConnectionString myConnection = new ConnectionString();
    string cs = myConnection.Cs;

    string location = string.Empty;

    using (var con = new MySqlConnection(cs))
    {
        con.Open();
        string query = @"
            SELECT Seller.SellerLocation
            FROM Furniture
            JOIN Seller ON Furniture.SellerID = Seller.SellerID
            WHERE Furniture.ItemID = @ItemID;";

        using (var cmd = new MySqlCommand(query, con))
        {
            cmd.Parameters.AddWithValue("@ItemID", furnitureID); // Make sure the variable name matches the method parameter

            using (var reader = cmd.ExecuteReader())
            {
                if (reader.Read())
                {
                    location = reader["SellerLocation"] as string;
                }
            }
        }
    }

    return location;
}
    }
}