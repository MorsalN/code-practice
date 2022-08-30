var chai = require('chai');

var assert = chai.assert; //This is just so we don’t need to keep typing chai.assert everywhere

describe('Array', function() {
  it('should start empty', function() { //it functions to create the individual tests – each it should explain one specific behavior
    var arr = []; //Since we are testing that an array should start empty, we need to create an array and then ensure it’s empty.

    assert.equal(arr.length, 0); //assert.equal(actual value, expected value)
  });
});