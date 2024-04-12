using MySql.Data.MySqlClient; //added
using api.Data;

namespace api.Models
{
    public class Furniture
    {
        public int ItemID { get; set; }
        public int ItemPrice { get; set; }
        public string ItemColor { get; set; }
        public string ItemCategory { get; set; }
        public string ItemType { get; set; }

        public override string ToString()
        {
            return $"{{\"ItemID\":\"{ItemID}\",\"ItemPrice\":\"{ItemPrice}\",\"ItemColor\":\"{ItemColor}\",\"ItemCategory\":\"{ItemCategory}\",\"ItemType\":\"{ItemType}\"}}";
        }
    }
}