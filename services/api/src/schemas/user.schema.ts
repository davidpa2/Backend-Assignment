import mongoose from "mongoose";
const { Schema, model } = mongoose;

const UserSchema = new Schema({
    _id: { type: String, _id: false },
    name: { type: String, require: true, minLength: 2, maxLength: 20 },
    surname: { type: String, require: true, minLength: 4, maxLength: 50 },
    followedCurrencies: { type: Array }
});

const UserModel = model("user", UserSchema);

export default UserModel;