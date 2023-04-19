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
        if (!user) return res.status(409).send({'error': 'There is no user registered yet'});

        return res.send(user);
    }

    static async suscribeCurrency(req: any, res: any) {
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
        return res.send('Successfully suscribed to currency');
    }


    static async getCurrenciesHistory(req: any, res: any) {
        var user = await UserModel.findOne().exec();
        if (!user) return res.status(409).send('There is no user registered yet')

        var jsonResponse: IHistory[];
        var i = 0;
        res.send(user.followedCurrencies.forEach((currency: string) => {
            return new Promise<IHistory[]>(async (resolve, reject) => {
                var currencyLog = await HistoryModel.find({ fromCurrencyCode: currency }).exec();
                console.log(currencyLog);
                if (currencyLog.length) {
                    jsonResponse.push({ currency, currencyLog: currencyLog });
                    // jsonResponse[currency] = currencyLog;
                }
                i++;
                if (i == user?.followedCurrencies.length) {
                    resolve(jsonResponse);
                }
            })
        }))
        // console.log(jsonResponse);

        // return res.send(jsonResponse);
    }
}

export default UserController;