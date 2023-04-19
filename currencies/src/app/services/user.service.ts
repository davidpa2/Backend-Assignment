import { Injectable } from '@angular/core';
import { HistorySchema, UserSchema } from './api/models';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: UserSchema;
  currencyHistory: HistorySchema;
  constructor() { }
}
