import { Injectable } from '@angular/core';
import { UsersService } from './api/services';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(
        public user: UsersService
    ) { }
}
