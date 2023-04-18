import { Component, OnInit } from '@angular/core';
import { CoreService } from 'src/app/services/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  showCurrencies = false;
  currencyList = [
    { currencyCode: "USD", name: "American dollar" },
    { currencyCode: "JPY", name: "Japanese yen" },
    { currencyCode: "GBP", name: "Pound sterling" },
    { currencyCode: "AUD", name: "Australian dollar" },
    { currencyCode: "CHF", name: "Swiss franc" },
    { currencyCode: "CNH", name: "Chinese renminbi" },
  ];

  constructor(private core: CoreService) { }

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
