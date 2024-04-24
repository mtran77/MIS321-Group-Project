namespace api.Models
{
    public class Account
    {
        public int SellerID { get; set; }
        public string SellerEmail { get; set; }
        public string SellerUsername { get; set; }
        public string SellerPassword { get; set; }
        public string SellerLocation { get; set; }
        public bool SellerAdmin { get; set; } = false;

    }
}