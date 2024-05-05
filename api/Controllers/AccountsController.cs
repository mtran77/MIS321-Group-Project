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
    public class AccountsController : ControllerBase
    {
        // GET: api/Account
        [HttpGet]
        public List<Account> Get()
        {
            ReadAccountData readObject = new ReadAccountData();
            return readObject.GetAllAccounts();
        }

        // GET: api/Account/5
        [HttpGet("{id}", Name = "GetAccount")]
        public Account Get(int id)
        {
            ReadAccountData readObject = new ReadAccountData();
            List<Account> myAccounts =  readObject.GetAllAccounts();
            foreach(Account account in myAccounts){
                if(account.SellerID == id){
                    return account;
                }
            } return new Account();
            // ReadAccountData readObject = new ReadAccountData();
            // return readObject.GetAccount(id);
        }

        [HttpGet("{username}/{password}", Name = "GetAccountByUsernameAndPassword")]
        public Account Get(string username, string password)
        {
            ReadAccountData readObject = new ReadAccountData();
            List<Account> myAccounts =  readObject.GetAllAccounts();
            foreach(Account account in myAccounts){
                if(account.SellerUsername == username && account.SellerPassword == password){
                    return account;
                }
            } return new Account();
            // ReadAccountData readObject = new ReadAccountData();
            // return readObject.GetAccount(id);
        }

        // POST: api/Account
        [HttpPost]
        public void Post([FromBody] Account account)
        {
            SaveAccount.CreateAccount(account);
        }

        // PUT: api/Account/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {

        }

        // DELETE: api/Account/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {

        }
    }
}