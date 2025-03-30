using Microsoft.AspNetCore.Mvc;

namespace Front_end__Mini_Project.Controllers
{
    public class ShopController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
