import mongoose from "mongoose";
const { Schema, model } = mongoose;

const HistorySchema = new Schema({
    _id: { type: String, _id: false },
    fromCurrencyCode: { type: String, require: true },
    fromCurrencyName: { type: String, require: true },
    toCurrencyCode: { type: String, require: true },
    toCurrencyName: { type: String, require: true },
    exchangeRate: { type: String, require: true },
    lastRefreshed: { type: String, require: true },
    timeZone: { type: String, require: true },
    bidPrice: { type: String, require: true },
    askPrice: { type: String, require: true },
});

const HistoryModel = model("history", HistorySchema);

export default HistoryModel;
