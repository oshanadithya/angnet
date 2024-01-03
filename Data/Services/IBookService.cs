using System.Collections.Generic;
using angnet.Data;

namespace angnet.Data
{
    public interface IBookService
    {
        List<Book> GetAllBooks();
        Book GetBookId(int id);
        void UpdateBook(int id, Book newBook);
        void DeleteBook(int id);
        void AddBook(Book newBook);
    }
}