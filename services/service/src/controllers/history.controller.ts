import { uuid } from "uuidv4";
import HistoryModel from "../schemas/history.schema";

class HistoryController {
    static async storeCurrency(currencies: string[]) {
        currencies.forEach(currency => {
            console.log(currency);
            fetch(`https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${currency}&to_currency=EUR&apikey=BDQL0QRI3UKLTQ0J`)
                .then(response => response.json())
                .then(async json => {
                    console.log(json);
                    const historyLog = new HistoryModel(json);
                    historyLog._id = uuid();
                    await historyLog.save();
                });
        })
    }
}

export default HistoryController;