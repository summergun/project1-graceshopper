const {expect} = require('chai');
const db = require('../../server/db');

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

  describe('Order Model', () => {
    const {attributes} = db.models.Orders;

    it('Has fields as expected', () => {
      expect(attributes.completedDate).to.be.a('object');
      expect(attributes.orderPrice).to.be.a('object');
      expect(attributes.tax).to.be.a('object');
    });

  });
});
