using api.Data;
using MySql.Data.MySqlClient;

namespace api.Models
{
    public class SaveAccount
    {
        public static void CreateAccount(Account myAccount)
        {
            ConnectionString myConnection = new ConnectionString();
            string cs = myConnection.Cs;

            using var con = new MySqlConnection(cs);
            con.Open();

            string stm = @"INSERT INTO Seller(SellerUsername, SellerEmail, SellerPassword, SellerLocation, SellerAdmin) VALUES(@SellerUsername, @SellerEmail, @SellerPassword, @SellerLocation, @SellerAdmin)";

            using var cmd = new MySqlCommand(stm, con);

            cmd.Parameters.AddWithValue("@SellerUsername", myAccount.SellerUsername);
            cmd.Parameters.AddWithValue("@SellerEmail", myAccount.SellerEmail);
            cmd.Parameters.AddWithValue("@SellerPassword", myAccount.SellerPassword);
            cmd.Parameters.AddWithValue("@SellerLocation", myAccount.SellerLocation);
            cmd.Parameters.AddWithValue("@SellerAdmin", myAccount.SellerAdmin);

            cmd.Prepare();
            
            cmd.ExecuteNonQuery();
        }
    }
}