export default function errorHandler (err, req, res, next) {
  if (err) {
    console.log(err);
  }
  res.status(err.statusCode || 500).send({
    msg: err.clientMessage || 'An error has occured',
  });
}
