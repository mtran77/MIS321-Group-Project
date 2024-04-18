using MySql.Data.MySqlClient;

namespace api.Data
{
    public class Database
    {
        private string server = "cig4l2op6r0fxymw.cbetxkdyhwsb.us-east-1.rds.amazonaws.com";
        private string port = "3306";
        private string username = "eqjeg8o7pm96v95h";
        private string password = "y7cvv726yrioi3sp";
        private string schema = "kjbkrigyvj26w36k";

        public MySqlConnection GetPublicConnection()
        {
            string cs = $"server={server};user={username};database={schema};port={port};password={password}";
            var con = new MySqlConnection(cs);
            return con;
        }
    }
}
