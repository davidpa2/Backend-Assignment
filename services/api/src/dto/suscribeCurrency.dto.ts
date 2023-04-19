import { Type } from '@sinclair/typebox';
import Ajv from 'ajv';
import addErrors from 'ajv-errors';

const SubscribeCurrencyDTOSchema = Type.Object({
    currency: Type.String({
        maxLength: 3,
        minLength: 3,
        errorMessage: {
            type: 'Wrong data type',
            minLength: 'Invalid currency',
            maxLength: 'Invalid currency'
        }
    })
}, {
    additionalProperties: false,
    errorMessage: {
        additionalProperties: 'Wrong data format'
    }
});

const ajv = new Ajv({ allErrors: true });
addErrors(ajv);

const validateSchema = ajv.compile(SubscribeCurrencyDTOSchema);

const SubscribeCurrencyDTO = (req: any, res: any, next: any) => {
    const isValidDTO = validateSchema(req.body);
    if (!isValidDTO) return res.status(400).send({ errors: validateSchema.errors?.map(error => error.message) })
    next();
}

export default SubscribeCurrencyDTO;