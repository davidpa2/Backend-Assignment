import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  constructor(
    public api: ApiService,
    public userService: UserService
  ) {
    this.getCurrenciesHistory(); // First iteration

    setInterval(() => {
      this.getCurrenciesHistory();
      console.log('History interval');
    }, 30000)
  }

  getCurrenciesHistory() {
    // this.api.user.userGetUserGet().subscribe({
    //   next: user => {
    //     if (user) {
    //       this.userService.user = user;

          this.api.user.userGetCurrenciesHistoryGet().subscribe({
            next: history => {
              this.userService.currencyHistory = history;
            }
          });
    //     }
    //   },
    //   error: err => {
    //     console.log(err);
    //   }
    // })
  }
}
