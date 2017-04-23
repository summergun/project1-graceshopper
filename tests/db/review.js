const { expect } = require('chai');
const db = require('../../server/db');

describe('review Model', () => {
  const { attributes } = db.models.Reviews;

  it('Has fields as expected', () => {
    expect(attributes.rating).to.be.a('object');
    expect(attributes.title).to.be.a('object');
    expect(attributes.content).to.be.a('object');
  });

});
