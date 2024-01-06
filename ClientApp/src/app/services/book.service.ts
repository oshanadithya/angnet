import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../interfaces/book';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  _baseURL: string = "api/Books";

  constructor(private http: HttpClient) {}

  getAllBooks() {
    return this.http.get<Book[]>(this._baseURL + "/GetBooks");
  }
}
