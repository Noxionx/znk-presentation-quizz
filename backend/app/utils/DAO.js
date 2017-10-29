/*****************************************************************************
 * Data Access Configuration
 *****************************************************************************/

import q from 'q';
import mysql from 'mysql';

import { DB } from '../configs/serverConfig';

/*
 * Database Configuration
 */
const mysqlPool = mysql.createPool({
  host: DB.DB_HOST,
  user: DB.DB_USER,
  password: DB.DB_PASSWORD,
  database: DB.DB_NAME,
});

/*
 * Execute the query and return a Promise
 */
export function executeQuery (sql, args) {
  const deferred = q.defer();

  mysqlPool.getConnection((errConnection, connection) => {
    if (errConnection) {
      return deferred.reject(errConnection);
    }
    return connection.query(sql, args, (errQuery, rows) => {
      connection.release();
      if (errQuery) {
        return deferred.reject(errQuery);
      }
      return deferred.resolve(rows);
    });
  });

  return deferred.promise;
}

/*
 * Global Data Access Helpers for INSERT
return add({
  type: TABLES.XXX,
  data: data
});
 */
export function add (args) {
  return executeQuery(`INSERT INTO ${args.type} SET ?`, args.data);
}

/*
 * Global Data Access Helpers for INSERT Multiple
return addMult({
  type: TABLES.XXX,
  keys: [keys],
  data: [[val], [val]]
});
 */
export function addMult (args) {
  return args.data.length === 0 ?
    executeQuery(`INSERT INTO ${args.type} (${args.keys.join(', ')}) VALUES ?`, [args.data]) :
    null;
}

/*
 * Global Data Access Helpers for GET
return get({
  type: TABLES.XXX,
  select: 'property',
  where: 'property=?',
  whereArgs: [whereArgs],
  orderBy: 'property ASC/DESC'
});
 */
export function get (args) {
  const select = args.select || '*';
  const where = args.where ? `WHERE ${args.where}` : '';
  const orderBy = args.orderBy ? `ORDER BY ${args.orderBy}` : '';

  return executeQuery(`SELECT ${select} FROM ${args.type} ${where} ${orderBy}`, args.whereArgs);
}

/*
 * Global Data Access Helpers for UPDATE
return update({
  type: TABLES.XXX,
  data: data,
  where: 'property=?',
  whereArgs: [whereArgs]
});
 */
export function update (args) {
  const where = args.where ? `WHERE ${args.where}` : '';
  const sqlArgs = [args.data].concat(args.whereArgs);

  return executeQuery(`UPDATE ${args.type} SET ? ${where}`, sqlArgs);
}

/*
 * Global Data Access Helpers for DELETE
return remove({
  type: TABLES.XXX,
  where: 'property=?',
  whereArgs: [whereArgs]
});
 */
export function remove (args) {
  const where = args.where ? `WHERE ${args.where}` : '';

  return executeQuery(`DELETE FROM ${args.type} ${where}`, args.whereArgs);
}