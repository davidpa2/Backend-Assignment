import express, { Application, Request, Response } from "express";
import * as mongoose from "mongoose";
import userRouter from "./routes/user.routes";
import swaggerDocs from "./swagger";
var cors = require('cors');

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
connectToDatabase(MONGODB_URI);

// [Express setup]

const app: Application = express();
app.use(express.json());
app.use(cors())
app.use('/user', userRouter);


// [Express start]

const PORT: number | string = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening to ${PORT}....`);
  console.log("Press Ctrl+C to quit.");
  swaggerDocs(app, PORT);
});
