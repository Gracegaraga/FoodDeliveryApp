using Microsoft.AspNetCore.Mvc;
using FoodDeliveryBackend.Models;
using System.Collections.Generic;
using System.Linq;

namespace FoodDeliveryBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class FoodController : ControllerBase
    {
        private readonly AppDbContext _context;

        public FoodController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public ActionResult<IEnumerable<FoodItem>> Get()
        {
            var foodItems = _context.FoodItems.ToList();
            return Ok(foodItems);
        }
    }
}
