import { uuid } from "uuidv4";
import HistoryModel from "../schemas/history.schema";

class HistoryController {
    static async storeCurrency(currencies: string[]) {
        currencies.forEach(currency => {
            console.log(currency);
            
            fetch(`https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${currency}&to_currency=EUR&apikey=BDQL0QRI3UKLTQ0J`)
                .then(response => response.json())
                .then(async json => {
                    const jsonTitle = json["Realtime Currency Exchange Rate"];
                    const historyLog = new HistoryModel({
                        _id: uuid(),
                        fromCurrencyCode: jsonTitle["1. From_Currency Code"],
                        fromCurrencyName: jsonTitle["2. From_Currency Name"],
                        toCurrencyCode: jsonTitle["3. To_Currency Code"],
                        toCurrencyName: jsonTitle["4. To_Currency Name"],
                        exchangeRate: jsonTitle["5. Exchange Rate"],
                        lastRefreshed: jsonTitle["6. Last Refreshed"],
                        timeZone: jsonTitle["7. Time Zone"],
                        bidPrice: jsonTitle["8. Bid Price"],
                        askPrice: jsonTitle["9. Ask Price"],
                    });
                    await historyLog.save();
                });
        })
    }
}

export default HistoryController;