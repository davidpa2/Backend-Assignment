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
    api.user.userGetUserGet().subscribe({
      next: user => {
          if (user.followedCurrencies?.length) {
            userService.user = user;
            this.getCurrenciesHistory();
          }
      },
      error: err => {
        console.error(err);
      }
    })

    setInterval(() => {
      if (userService.user.followedCurrencies.length) {
        this.getCurrenciesHistory();
        console.log('History interval');
      }
    }, 30000)
  }

  getCurrenciesHistory() {
    this.api.user.userGetCurrenciesHistoryGet().subscribe({
      next: history => {
        this.userService.currencyHistory = history.filter(c => c != null);
      }
    });
  }
}
