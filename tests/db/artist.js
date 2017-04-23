const {expect} = require('chai');
const db = require('../../server/db');

  describe('artist Model', () => {
    const {attributes} = db.models.Artist;

    it('Has fields as expected', () => {
      expect(attributes.firstName).to.be.a('object');
      expect(attributes.lastName).to.be.a('object');
      expect(attributes.imageURL).to.be.a('object');
 
    });
     });