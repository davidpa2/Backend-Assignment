import { Router } from "express";
import UserController from "../controllers/user.controller";
import SubscribeCurrencyDTO from "../dto/suscribeCurrency.dto";

const userRouter = Router();

/**
 * @openapi
 * /user/getUser:
 *   get:
 *     summary: Get default user
 *     tags:
 *       - Users
 *     responses:
 *       200:
 *         description: Default user
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/UserSchema"
 *       5XX:
 *         description: Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/ErrorsSchema"
 * components:
 *   schemas:
 *     ErrorsSchema:
 *       type: object
 *       properties:
 *         errors: 
 *           type: array
 *           items: 
 *             type: string
 *             example: Must have required property 'currency'
 *     UserSchema:
 *       type: object
 *       properties:
 *         name: 
 *           type: string
 *           example: Jessica
 *         surname: 
 *           type: string
 *           example: Friedrich
 *         followedCurrencies: 
 *           type: array
 *           example: [] 
 */
userRouter.get("/getUser", UserController.getUser)

userRouter.delete("/deleteUser", UserController.deleteUser)

/**
 * @openapi
 * /user/subscribeCurrency:
 *   patch:
 *     summary: Suscribe to a currency
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/SuscribeCurrencySchema"
 *     responses:
 *       200:
 *         description: Successfully subscribed to currency!
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *       5XX:
 *         description: Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/ErrorsSchema"
 * components:
 *   schemas:
 *     SuscribeCurrencySchema:
 *       type: object
 *       properties:
 *         currency: 
 *           type: string
 *           example: USD 
 *       required:
 *         - name
 */
userRouter.patch("/subscribeCurrency", SubscribeCurrencyDTO, UserController.subscribeCurrency);

/**
 * @openapi
 * /user/unsubscribeCurrency:
 *   patch:
 *     summary: Unsuscribe to a currency
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/SuscribeCurrencySchema"
 *     responses:
 *       200:
 *         description: Successfully unsubscribed to currency!
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *       5XX:
 *         description: Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/ErrorsSchema"
 */
userRouter.patch("/unsubscribeCurrency", SubscribeCurrencyDTO, UserController.unsubscribeCurrency);

/**
 * @openapi
 * /user/getCurrenciesHistory:
 *   get:
 *     summary: Get currencies history
 *     tags:
 *       - Users
 *     responses:
 *       200:
 *         description: Currency history logs
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/HistorySchema"
 *       5XX:
 *         description: Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/ErrorsSchema"
 * components:
 *   schemas:
 *     HistorySchema:
 *       type: array
 *       items:
 *         type: object
 *         properties:
 *           currency: 
 *             type: string
 *             example: EUR
 *           currencyLog: 
 *             type: array
 *             example: [] 
 */
userRouter.get("/getCurrenciesHistory", UserController.getCurrenciesHistory)

export default userRouter;