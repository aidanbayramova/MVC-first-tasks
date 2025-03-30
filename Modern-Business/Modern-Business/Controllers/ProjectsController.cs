using Microsoft.AspNetCore.Mvc;

namespace Modern_Business.Controllers
{
    public class ProjectsController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
