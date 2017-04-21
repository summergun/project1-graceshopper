const db = require('../server/db');

describe('Database Objects', function(){

  beforeEach((done) => {
    db.sync(true)
      .then(() => done())
      .catch(done);
  });

  afterEach((done) => {
    db.sync(true)
      .then(() => done())
      .catch(done);
  });

  describe('Database Connection', () => {

    it('Can connect to db', (done) => {
      db.sync(true)
      .then(() => done())
      .catch(done);
    });

  });
});
