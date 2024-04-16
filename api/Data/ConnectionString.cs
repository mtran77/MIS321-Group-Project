namespace api.Data
{
    public class ConnectionString
    {
        public string Cs{get; set;}
        public ConnectionString(){
            string server = "cig4l2op6r0fxymw.cbetxkdyhwsb.us-east-1.rds.amazonaws.com";
            string database = "kjbkrigyvj26w36k";
            string port = "3306";
            string userName = "eqjeg8o7pm96v95h";
            string password = "	y7cvv726yrioi3sp";

            Cs = $"server={server};user={userName};database={database};port={port};password={password}";
        }
    }
}