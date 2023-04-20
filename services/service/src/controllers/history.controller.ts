import { uuid } from "uuidv4";
import HistoryModel from "../schemas/history.schema";

class HistoryController {
    static async storeCurrency(currencies: string[]) {
        currencies.forEach(currency => {
            console.log(currency);

            fetch(`https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${currency}&to_currency=EUR&apikey=BDQL0QRI3UKLTQ0J`)
                .then(async response => await response.json())
                .then(async json => {
                    const jsonTitle = json["Realtime Currency Exchange Rate"];
                    const historyLog = new HistoryModel({
                        _id: uuid(),
                        fromCurrencyCode: jsonTitle[0],
                        fromCurrencyName: jsonTitle[1],
                        toCurrencyCode: jsonTitle[2],
                        toCurrencyName: jsonTitle[3],
                        exchangeRate: jsonTitle[4],
                        lastRefreshed: jsonTitle[5],
                        timeZone: jsonTitle[6],
                        bidPrice: jsonTitle[7],
                        askPrice: jsonTitle[8],
                    });
                    await historyLog.save();
                });
        })
    }
}

export default HistoryController;