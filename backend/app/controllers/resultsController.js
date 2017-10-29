import q from 'q';
import { buildError } from '../utils/errorsUtils';
import { TABLES } from '../configs/serverConfig';
import { add, get } from '../utils/DAO';

function checkData (data) {
  if (!data['user_id']) {
    throw buildError({
      statusCode: 400,
      clientMessage: 'Missing data',
    });
  }
}

export function getAllResults () {
  return q()
    .then(() => (
      get({
        type: TABLES.RESULTS,
        select: '*',
      })
    ));
}

export function addResult (data) {
  return q()
    .then(() => checkData(data))
    .then(() => (
      add({
        type: TABLES.RESULTS,
        data,
      })
    ))
    .then((rows) => {
      if (rows.affectedRows !== 1 || !rows.insertId) {
        throw String('Unable to add results data');
      }
      return rows.insertId;
    }, (err) => {
      throw err;
    });
}
