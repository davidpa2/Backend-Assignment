import { Router } from "express";
import UserController from "../controllers/user.controller";
import SuscribeCurrencyDTO from "../dto/suscribeCurrency.dto";

const userRouter = Router();

userRouter.patch("/suscribeCurrency", SuscribeCurrencyDTO, UserController.suscribeCurrency);

userRouter.get("/getCurrenciesHistory", UserController.getCurrenciesHistory)

export default userRouter;