using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using api.Models; 

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FurnitureController : ControllerBase
    {
        // GET: api/Furniture
        [EnableCors("OpenPolicy")]
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Furniture/5
        [EnableCors("OpenPolicy")]
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Furniture
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/Furniture/5
        [EnableCors("OpenPolicy")]
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }
        
        // DELETE: api/Furniture/5
        [EnableCors("OpenPolicy")]
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
