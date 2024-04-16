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

        // public string Cs{get; set;}
        // public Database(){
        //     string server = "cig4l2op6r0fxymw.cbetxkdyhwsb.us-east-1.rds.amazonaws.com";
        //     string database = "kjbkrigyvj26w36k";
        //     string port = "3306";
        //     string userName = "eqjeg8o7pm96v95h";
        //     string password = "y7cvv726yrioi3sp";

        //     Cs = $"server={server};user={userName};database={database};port={port};password={password}";
        // }

        
    }
}