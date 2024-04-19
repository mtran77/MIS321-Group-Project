using api.Data;
using MySql.Data.MySqlClient;

namespace api.Models
{
    public class ReadAccountData
    {
        public Account GetAccount(int id)
        {
            ConnectionString myConnection = new ConnectionString();
            string cs = myConnection.Cs;

            using var con = new MySqlConnection(cs);
            con.Open();

            string stm = "SELECT * FROM Seller WHERE SellerID = @SellerID";
            using var cmd = new MySqlCommand(stm, con);
            cmd.Parameters.AddWithValue("@SellerID", id);
            cmd.Prepare();
            using MySqlDataReader rdr = cmd.ExecuteReader();

            rdr.Read();
            con.Close();
            Account myAccount = new Account(){SellerID = rdr.GetInt32(0), SellerEmail = rdr.GetString(1), SellerUsername = rdr.GetString(2), SellerPassword = rdr.GetString(3), SellerLocation = rdr.GetString(4), SellerAdmin = rdr.GetBoolean(5)};
            return myAccount;
        }

        public List<Account> GetAllAccounts()
        {
            ConnectionString myConnection = new ConnectionString();
            string cs = myConnection.Cs;

            using var con = new MySqlConnection(cs);
            con.Open();

            string stm = "SELECT * FROM Seller";
            using var cmd = new MySqlCommand(stm, con);
            using MySqlDataReader rdr = cmd.ExecuteReader();

            List<Account> allAccounts = new List<Account>();

            while(rdr.Read()){
                allAccounts.Add(new Account(){SellerID = rdr.GetInt32(0), SellerEmail = rdr.GetString(1), SellerUsername = rdr.GetString(2), SellerPassword = rdr.GetString(3), SellerLocation = rdr.GetString(4), SellerAdmin = rdr.GetBoolean(5)});
            }

            con.Close();
            return allAccounts;
        }

        
    }
}