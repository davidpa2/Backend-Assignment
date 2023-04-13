import { Router } from "express";
import UserController from "../controllers/user.controller";
import SuscribeCurrencyDTO from "../dto/suscribeCurrency.dto";

const userRouter = Router();

userRouter.patch("/suscribeCurrency", SuscribeCurrencyDTO, UserController.suscribeCurrency);

export default userRouter;