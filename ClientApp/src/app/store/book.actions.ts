import { Action } from "@ngrx/store";
import { Book } from "../interfaces/book";
import * as types from './action.types';

export class loadBooksAction implements Action
{
    readonly type = types.LOAD_BOOKS;
    constructor() {}
}

export class loadBooksSuccessActivation implements Action
{
    readonly type = types.LOAD_BOOKS_SUCCESS;
    constructor(public payload: Book[]) {}
}