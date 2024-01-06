import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/interfaces/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  public books: Book[] = [];

  constructor(private service: BookService, private router: Router) { }

  ngOnInit(): void {
    this.service.getAllBooks().subscribe(
      data => {
        this.books = data;
        console.log("books :", this.books);
      },
      error => {
        console.error("Error fetching books:", error);
      }
    );
  }

  showBook(id: number) {
    this.router.navigate(["/show-book/"+id]);
  }

  updateBook(id: number) {
    this.router.navigate(["/update-book/"+id]);
  }

  deleteBook(id: number) {
    this.router.navigate(["/delete-book/"+id]);
  }

}
