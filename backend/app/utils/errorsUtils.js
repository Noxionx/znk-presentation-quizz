export default function errorHandler (err, req, res, next) {
  console.error(err);

  res.status(err.statusCode || 500).send({
    msg: err.clientMessage || 'An error has occured',
  });
}

export function buildError (data) {
  const err = new Error(data.message || data.clientMessage);
  return {
    ...err,
    ...data,
  };
}
