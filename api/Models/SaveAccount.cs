using api.Data;
using MySql.Data.MySqlClient;

namespace api.Models
{
    public class SaveAccount
    {
            public static void CreateAccountTable(){
            ConnectionString myConnection = new ConnectionString();
            string cs = myConnection.Cs;
            using var con = new MySqlConnection(cs);

            con.Open();

            string stm = @"CREATE TABLE accounts(seller_id INTEGER PRIMARY KEY AUTO_INCREMENT, seller_username TEXT, seller_password TEXT, seller_location TEXT, admin TINYINT NOT NULL DEFAULT 0)";

            using var cmd = new MySqlCommand(stm, con);
            cmd.ExecuteNonQuery();
        }

        public static void CreateAccount(Account myAccount)
        {
            ConnectionString myConnection = new ConnectionString();
            string cs = myConnection.Cs;

            using var con = new MySqlConnection(cs);
            con.Open();

            string stm = @"INSERT INTO accounts(seller_username TEXT, seller_password TEXT, seller_location TEXT, admin TINYINT NOT NULL DEFAULT 0)";

            using var cmd = new MySqlCommand(stm, con);

            cmd.Parameters.AddWithValue("@seller_username", myAccount.SellerUsername);
            cmd.Parameters.AddWithValue("@seller_password", myAccount.SellerPassword);
            cmd.Parameters.AddWithValue("@seller_location", myAccount.SellerLocation);
            cmd.Parameters.AddWithValue("@admin", myAccount.Admin);

            cmd.Prepare();
            
            cmd.ExecuteNonQuery();
        }
    }
}