using Microsoft.AspNetCore.Mvc;

namespace Modern_Business.Controllers
{
    public class ContactController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
