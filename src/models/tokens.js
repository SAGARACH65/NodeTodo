import bookshelf from '../db';

const TABLE_NAME = 'tokens';

/**
 * Todos model.
 */
class Tokens extends bookshelf.Model {
  get tableName() {
    return TABLE_NAME;
  }

  get hasTimestamps() {
    return true;
  }
}

export default Tokens;
