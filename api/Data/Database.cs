using MySql.Data.MySqlClient;
namespace api.Data
{
    public class Database
    {
        private string server = "";
        private string port = "3306";
        private string username = "";
        private string password = "";
        private string schema = "";

//NO USING STATMENT FOR VAR CON
public MySqlConnection GetPublicConnection() {
  string cs=$"server={server};user={username};database={schema};port={port};password={password}";
  var con = new MySqlConnection(cs); 
	return con;
}
    }
}