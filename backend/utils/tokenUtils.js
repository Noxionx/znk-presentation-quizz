export default function uniqToken (req, res, next) {
  const token = req.get('Authorization');
  if (token) {
    console.log(token);
    next();
  } else {
    throw new TypeError({
      statusCode: 400,
      clientMessage: 'Missing token',
    });
  }
}
