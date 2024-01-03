using angnet.Data;
using Microsoft.AspNetCore.Mvc;

namespace angnet.Controllers
{
    [Route("api/[controller]")]
    public class BooksController : Controller 
    {
        private IBookService _service;
        public BooksController(IBookService service) {
            _service = service;
        }

        //Create / Add new book
        [HttpPost("AddBook")]
        public IActionResult AddBook([FromBody]Book book)
        {
            _service.AddBook(book);
            return Ok("Added");
        }

        //Read all books
        [HttpGet("[action]")]
        public IActionResult GetBooks()
        {
            var allBooks = _service.GetAllBooks();
            return Ok(allBooks);
        }

        //Update an exisisting book
        [HttpPut("UpdateBook/{id}")]
        public IActionResult UpdateBook(int id, [FromBody]Book book) 
        {
            _service.UpdateBook(id, book);
            return Ok(book);
        }

        //Delete an exsisiting book
        [HttpDelete("Delete/{id}")]
        public IActionResult DeleteBook(int id) 
        {
            _service.DeleteBook(id);
            return Ok();
        }

        //Get a single book by id
        [HttpGet("SingleBook/{id}")]
        public IActionResult GetBookById(int id) 
        {
            var book = _service.GetBookById(id);
            return Ok(book);
        }
    }
}