namespace FoodDeliveryBackend.Models
{
    public class FoodItem
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public double Price { get; set; }  // Changed to double
        public string Description { get; set; } = string.Empty;
        public string ImageUrl { get; set; } = string.Empty;
    }
}
