import { Component, OnInit } from '@angular/core';
import { CoreService } from 'src/app/services/core';
import { currencyList } from 'src/app/services/currencyList';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  showCurrencies = false;
  currencyList = currencyList;

  constructor(private core: CoreService, public userService: UserService) { }

  ngOnInit(): void { }

  subscribeCurrency(currency: string) {
    this.core.api.user.userSubscribeCurrencyPatch({ body: { currency } }).subscribe({
      next: res => {
        if (!this.userService.user) {
          this.core.api.user.userGetUserGet().subscribe({
            next: user => {
              if (user) {
                this.core.userService.user = user;
                this.core.getCurrenciesHistory();
              }
            },
            error: err => {
              console.error(err);
            }
          })
        } else {
          this.core.getCurrenciesHistory();
        }
      },
      error: err => {
        console.error(err);
      }
    })
    this.showCurrencies = false;
  }

  unsubscribeCurrency(currency: string) {
    this.core.api.user.userUnsubscribeCurrencyPatch({ body: { currency } }).subscribe({
      next: res => {
        this.core.userService.currencyHistory = this.core.userService.currencyHistory.filter(c => c != currency);
        this.core.getCurrenciesHistory();
      },
      error: err => {
        console.error(err);
      },
    })
  }

  checkCurrency(currency: string) {
    if (this.userService.currencyHistory.length) {
      return this.userService.currencyHistory?.some(element => element.currency === currency)
    }
  }
}
