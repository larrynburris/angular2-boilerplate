using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using ASPNET5_Angular2_Boilerplate.Web.Models;
using ASPNET5_Angular2_Boilerplate.Web.Classes;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace ASPNET5_Angular2_Boilerplate.Web.API
{
    [Route("api/[controller]")]
    public class HeroesController : Controller
    {
        // GET: api/heroes
        [HttpGet]
        public IEnumerable<DOTAHero> Get()
        {
            var hm = new HeroManager();
            return hm.GetAll;
        }

        // GET api/heroes/{id}
        [HttpGet("{id}")]
        public DOTAHero Get(int id)
        {
            var hm = new HeroManager();
            return hm.GetHeroByID(id);
        }
    }
}
