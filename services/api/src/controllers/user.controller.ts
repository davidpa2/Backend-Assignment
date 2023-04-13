import UserModel from "../schemas/user.schema";
import { uuid } from "uuidv4";

class UserController {
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
}

export default UserController;