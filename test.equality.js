new Test('Equality Operator (==)', function() {

  // target values
  var target1 = {};
  var target2 = {};

  this.expect(function() {
    return target1 == new Proxy(target1, {});
  }).toBe(false);

  this.expect(function() {
    return new Proxy(target1, {}) == new Proxy(target1, {});
  }).toBe(false);

  this.expect(function() {
    return new Proxy(target1, {}) == new Proxy(target2, {});
  }).toBe(false);

});
