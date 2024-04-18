using MySql.Data.MySqlClient; //added
using api.Data;

namespace api.Models
{
    public class Furniture
    {
        public int ItemID { get; set; }
        public int ItemPrice { get; set; }
        public string ItemCategory { get; set; }
        public bool Deleted { get; set; }
        public int SellerID { get; set; }
        public string FurnitureImage { get; set; }
        public string ItemName { get; set; }

    }
}