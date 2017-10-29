import q from 'q';
import { TABLES } from '../configs/serverConfig';
import { executeQuery } from '../utils/DAO';

/**
 * Create Results table
 */
q()
  .then(() => {
    const query = `CREATE TABLE ${TABLES.RESULTS} (` +
    'id INT UNSIGNED AUTO_INCREMENT,' +
    'user_id VARCHAR(64) NOT NULL UNIQUE,' +
    'created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,' +
    'updated_at TIMESTAMP DEFAULT now() ON UPDATE now(),' +
    'PRIMARY KEY (id)' +
    ');';
    return executeQuery(query)
      .then(console.log)
      .catch(console.log);
  })
  .then(() => {
    const query = `CREATE UNIQUE INDEX result_user_id ON ${TABLES.RESULTS} (user_id);`;
    return executeQuery(query)
      .then(console.log)
      .catch(console.log);
  })
  .then(console.log)
  .catch(console.log);
