//ngrx deprecated version

// import { Actions, ofType, Effect } from "@ngrx/effects";
// // import { Observable } from "rxjs";
// import { BookService } from "../services/book.service";
// import { Action } from "@ngrx/store";
// import * as types from "./action.types";
// import * as bookActions from "./book.actions";
// import { Observable } from "rxjs";
// import {mergeMap, map} from 'rxjs/operator';
// import { Book } from "../interfaces/book";


// export class BookEffects
// {
//     constructor(private service: BookService, private actions$: Actions) {}

//     @Effect() loadBooks$: Observable<Action> = this.actions$.pipe(
//         ofType<bookActions.loadBooksAction>(types.LOAD_BOOKS),
//         mergeMap(() => 
//             this.service.getAllBooks().pipe(map((books: Book[]) => 
//                 new bookActions.loadBooksSuccessActivation(books))
//             )
//         )
//     )
// }

//ngrx new version

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map } from 'rxjs/operators';
import { BookService } from '../services/book.service';
import * as types from './action.types';
import * as bookActions from './book.actions';
import { Action } from '@ngrx/store';
import { of } from 'rxjs';
import { Book } from '../interfaces/book';

@Injectable()
export class BookEffects {
  constructor(private service: BookService, private actions$: Actions) {}

  loadBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType<bookActions.loadBooksAction>(types.LOAD_BOOKS),
      mergeMap(() =>
        this.service.getAllBooks().pipe(
          map((books: Book[]) => new bookActions.loadBooksSuccessActivation(books)),
          // Handle errors if needed
          // catchError(error => of(bookActions.loadBooksFailureActivation({ error })))
        )
      )
    )
  );
}
