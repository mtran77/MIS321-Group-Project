using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using api.Models;
using Mysqlx.Crud;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FurnitureController : ControllerBase
    {
        // GET: api/Furniture
        [HttpGet]
        public List<Furniture> Get()
        {
            ReadFurnitureData readObject = new ReadFurnitureData();
            return readObject.GetAllFurniture();
        }

        // GET: api/Furniture/5
        [HttpGet("{id}", Name = "GetFurniture")]
        public Furniture Get(int id)
        {
            ReadFurnitureData readObject = new ReadFurnitureData();
            List<Furniture> myFurniture =  readObject.GetAllFurniture();
            foreach(Furniture furniture in myFurniture){
                if(furniture.ItemID == id){
                    return furniture;
                }
            } return new Furniture();
        }

        // POST: api/Furniture
        [HttpPost]
        public void Post([FromBody] Furniture furniture)
        {
            SaveFurniture.CreateFurniture(furniture);
        }

        // PUT: api/Furniture/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
            
        }

        // DELETE: api/Furniture/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            UpdateFurniture.DeleteListing(id);
        }
    }
}
