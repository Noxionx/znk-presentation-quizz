const results = [];

function checkData (data) {
  if (!data.test) {
    throw {
      statusCode: 400,
      clientMessage: 'Missing data'
    }
  }
}

export function getAll () {
  return results;
}

export function add (data) {
  checkData(data)
  results.push(data);
}
