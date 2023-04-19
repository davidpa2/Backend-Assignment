import HistoryModel from "../schemas/history.schema";
import UserModel from "../schemas/user.schema";
import { uuid } from "uuidv4";

export interface IHistory {
    currency: string,
    currencyLog: Object[]
}

class UserController {

    static async getUser(req: any, res: any) {
        var user = await UserModel.findOne().exec();
        if (!user) return res.status(409).send({ 'error': 'There is no user registered yet' });

        return res.send(user);
    }


    static async subscribeCurrency(req: any, res: any) {
        const { currency } = req.body;

        var user = await UserModel.findOne().exec();

        if (!user) {
            const user = new UserModel({
                _id: uuid(), followedCurrencies: [currency], name: 'User', surname: 'an user'
            })
            await user.save();
        } else {
            if (user.followedCurrencies.indexOf(currency) == -1) {
                user.followedCurrencies.push(currency);
                await user.save();
            }
        }
        return res.status(200).send('Successfully suscribed to currency');
    }


    static async getCurrenciesHistory(req: any, res: any) {
        var user = await UserModel.findOne().exec();
        if (!user) return res.status(409).send('There is no user registered yet')

        var jsonResponse: IHistory[] = [];
        var i = 0;

        var promise = new Promise<IHistory[]>((resolve, reject) => {
            user?.followedCurrencies.forEach(async (currency: string) => {
                var currencyLog = await HistoryModel.find({ fromCurrencyCode: currency }).limit(10).sort({"lastRefreshed": -1}).exec();
                console.log(currencyLog);
                if (currencyLog.length) {
                    jsonResponse[i] = { currency, currencyLog: currencyLog };
                }
                i++;
                if (i == user?.followedCurrencies.length) {
                    resolve(jsonResponse);
                }
            })
        })
        promise.then(value => {
            res.send(value)
        })
    }
}

export default UserController;