import { buildError } from '../utils/errorsUtils';

export default function uniqToken (req, res, next) {
  const token = req.get('Authorization');
  if (token) {
    console.log(token);
    next();
  } else {
    throw buildError({
      statusCode: 400,
      clientMessage: 'Missing token',
    });
  }
}
