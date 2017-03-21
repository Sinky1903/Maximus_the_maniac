var maniac = require('../barbarian');
var beer = require('../beer');
var assert = require('assert');

describe("Barbarian", function() {

  beforeEach(function() {
    maniac.health = 50;
    maniac.angerlevel = 10;
  })

  it('should have a name', function() {
    assert.equal("Maximus", maniac.name);
  });

  it('should have a weapon', function() {
    assert.equal("machette", maniac.weapon);
  });

  it('should have full health before a sesh', function() {
    assert.equal(50, maniac.health);
  });

  it('should have 10 anger before a sesh', function() {
    assert.equal(10, maniac.angerlevel);
  });

  it('should have a fave beer', function() {
    assert.equal("Rolling Rock", maniac.favebeer);
  });

  it('should increase health by 2 for every fave beer drank and anger not increase', function() {
    maniac.drink("Rolling Rock");
    assert.equal(52, maniac.health);
    assert.equal(10, maniac.angerlevel);
  });

  it('should not increase health if not fave beer drank and increase angerlevel by 10', function() {
    maniac.drink("Tennents");
    assert.equal(50, maniac.health);
    assert.equal(20, maniac.angerlevel);
  })

})