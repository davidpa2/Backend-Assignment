import { uuid } from "uuidv4";
import HistoryModel from "../schemas/history.schema";

class HistoryController {
    static async storeCurrency(currencies: string[]) {
        currencies.forEach(currency => {
            console.log(currency);
            
            fetch(`https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${currency}&to_currency=EUR&apikey=BDQL0QRI3UKLTQ0J`)
                .then(response => response.json())
                .then(async json => {
                    const historyLog = new HistoryModel({
                        _id: uuid(),
                        fromCurrencyCode: json["Realtime Currency Exchange Rate"]["1. From_Currency Code"],
                        fromCurrencyName: json["Realtime Currency Exchange Rate"]["2. From_Currency Name"],
                        toCurrencyCode: json["Realtime Currency Exchange Rate"]["3. To_Currency Code"],
                        toCurrencyName: json["Realtime Currency Exchange Rate"]["4. To_Currency Name"],
                        exchangeRate: json["Realtime Currency Exchange Rate"]["5. Exchange Rate"],
                        lastRefreshed: json["Realtime Currency Exchange Rate"]["6. Last Refreshed"],
                        timeZone: json["Realtime Currency Exchange Rate"]["7. Time Zone"],
                        bidPrice: json["Realtime Currency Exchange Rate"]["8. Bid Price"],
                        askPrice: json["Realtime Currency Exchange Rate"]["9. Ask Price"],
                    });
                    await historyLog.save();
                });
        })
    }
}

export default HistoryController;