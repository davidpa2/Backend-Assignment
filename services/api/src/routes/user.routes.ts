import { Router } from "express";
import UserController from "../controllers/user.controller";
import SuscribeCurrencyDTO from "../dto/suscribeCurrency.dto";

const userRouter = Router();

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
 *           example: EUR 
 *       required:
 *         - name
 *     ErrorsSchema:
 *       type: object
 *       properties:
 *         errors: 
 *           type: array
 *           items: 
 *             type: string
 *             example: Must have required property 'currency'
 */
userRouter.patch("/subscribeCurrency", SuscribeCurrencyDTO, UserController.suscribeCurrency);

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
 *               $ref: "#/components/schemas/ProfileSchema"
 *       5XX:
 *         description: Error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/ErrorsSchema"
 * components:
 *   schemas:
 *     ProfileSchema:
 *       type: object
 *       properties:
 *         currency: 
 *           type: string
 *           example: EUR
 *         currencyLog: 
 *           type: array
 *           example: [] 
 */
userRouter.get("/getCurrenciesHistory", UserController.getCurrenciesHistory)

export default userRouter;