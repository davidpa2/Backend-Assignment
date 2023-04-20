import * as path from "path";
import * as mongoose from "mongoose";
import HistoryController from "./controllers/history.controller";

// [DB Connection]

const MONGODB_URI: string =
  process.env.MONGODB_URI || "mongodb://localhost:27017";

/**
 * connectToDatabase
 * Configures the global MongoDB connection based on the provided secrets.
 *
 * @returns Promise<string>
 */
async function connectToDatabase(connectionUri: string) {
  return new Promise((resolve, reject) => {
    // From mongoose@6.x.x onwards useNewUrlParser, useUnifiedTopology,
    // useCreateIndex are deprecated and default to true
    mongoose
      .connect(connectionUri)
      .then(() => resolve(connectionUri))
      .catch((error: any) => {
        console.log(error);
        reject(`${connectionUri}: ${error}`);
      });
  });
}
console.log("Connecting to database...");
connectToDatabase(MONGODB_URI);
console.log("Executing service...");

const currencyList = ['USD', 'JPY', 'AUD', 'CHF', 'CNY'];

function storeCurrencies() {
  var interval = setInterval(() => {
    HistoryController.storeCurrency(currencyList);
  }, 35000);
}
storeCurrencies();

// process.exit(0);
