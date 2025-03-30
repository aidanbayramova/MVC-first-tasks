using Microsoft.AspNetCore.Mvc;

namespace Modern_Business.Controllers
{
    public class ResumeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
