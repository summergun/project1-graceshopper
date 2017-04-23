const {expect} = require('chai');
const db = require('../../server/db');

  describe('artist Model', () => {
    const {attributes} = db.models.Artist;

    it('Has fields as expected', () => {
      expect(attributes.firstName).to.be.a('object');
      expect(attributes.lastName).to.be.a('object');
      expect(attributes.imageURL).to.be.a('object');
 
    });

    it('Saves artist as expected', (done) => {
      db.models.Artist.findAll()
      .then((results) => {
        expect(results.length).to.equal(2);
        expect(results[0].firstName).to.equal('Nsync');
        expect(results[0].lastName).to.be.null;
        expect(results[0].imageURL).to.equal('test.jpg');
        done();
      })
    
        .catch(done);
    });
      });