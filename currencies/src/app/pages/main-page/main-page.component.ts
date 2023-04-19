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

  ngOnInit(): void {
  }

  subscribeCurrency(currency: string) {
    console.log(currency);

    this.core.api.user.userSubscribeCurrencyPatch({ body: { currency } }).subscribe({
      next: res => {
        console.log(res);
        
      },
      error: err => {
        console.error(err);
      }
    })

    this.showCurrencies = false;
  }
}
