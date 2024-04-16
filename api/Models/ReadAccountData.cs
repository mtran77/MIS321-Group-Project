namespace api.Models
{
    public class ReadAccountData
    {
        public Account GetAccount(int Id)
        {
            Database myConnection = new Database();
            string cs = myConnection.Cs;

            using var con = new MySqlConnection(cs);
            con.Open();

            string stm = "SELECT * FROM accounts WHERE seller_id = @seller_id";
            using var cmd = new MySqlCommand(stm, con);
            cmd.Parameters.AddWithValue("@seller_id", SellerId);
            cmd.Prepare();
            using MySqlDataReader rdr = cmd.ExecuteReader();

            rdr.Read();
            con.Close();
            return new Account(){SellerID = rdr.GetInt32(0), SellerEmail = rdr.GetString(1), SellerUsername = rdr.GetString(2), SellerPassword = rdr.GetString(3), SellerPassword = rdr.GetString(4)};
        }

        public List<Account> GetAllMovies()
        {
            ConnectionString myConnection = new ConnectionString();
            string cs = myConnection.Cs;

            using var con = new MySqlConnection(cs);
            con.Open();

            string stm = "SELECT * FROM Accounts";
            using var cmd = new MySqlCommand(stm, con);
            using MySqlDataReader rdr = cmd.ExecuteReader();

            List<Account> allAccounts = new List<Account>();

            while(rdr.Read()){
                allAccounts.Add(new Account(){SellerID = rdr.GetInt32(0), SellerEmail = rdr.GetString(1), SellerUsername = rdr.GetString(2), SellerPassword = rdr.GetString(3), SellerPassword = rdr.GetString(4)});
            }

            con.Close();
            return allAccounts;
        }
    }
}