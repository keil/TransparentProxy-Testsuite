new Test('Inequality (!==)/ Default', function() {

  // target values
  var target1 = {};
  var target2 = {};

  // primitive
  var primitive1 = 1;
  var primitive2 = "1";

  this.expect(function() {
    return target1 !== target1;
  }).toBe(false);

  this.expect(function() {
    return target1 !== target2;
  }).toBe(true);

  this.expect(function() {
    return primitve1 !== primitve1;
  }).toBe(true);

  this.expect(function() {
    return primitve1 !== primitve2;
  }).toBe(true);

});

new Test('Inequality (!==)/ Opaque', function() {

  // target values
  var target1 = {};
  var target2 = {};

  this.expect(function() {
    return target1 !== new Proxy(target1, {});
  }).toBe(true);

  this.expect(function() {
    return new Proxy(target1, {}) !== new Proxy(target1, {});
  }).toBe(true);

  this.expect(function() {
    return new Proxy(target1, {}) !== new Proxy(target2, {});
  }).toBe(true);

});

new Test('Inequality (!==)/ Transparent', function() {

  // target values
  var target1 = {};
  var target2 = {};

  this.expect(function() {
    return target1 !== new TransparentProxy(target1, {});
  }).toBe(false);

  this.expect(function() {
    return new TransparentProxy(target1, {}) !== new TransparentProxy(target1, {});
  }).toBe(false);

  this.expect(function() {
    return new TransparentProxy(target1, {}) !== new TransparentProxy(target2, {});
  }).toBe(true);

});

new Test('Inequality (!==)/ Nested', function() {

  // target values
  var target1 = {};
  var target2 = {};

  this.expect(function() {
    return target1 !== new TransparentProxy(new TransparentProxy(target1, {}), {});
  }).toBe(false);

 this.expect(function() {
    return target1 !== new TransparentProxy(new TransparentProxy(target2, {}), {});
  }).toBe(true);

  this.expect(function() {
    return new TransparentProxy(target1, {}) !== new TransparentProxy(new TransparentProxy(target1, {}), {});
  }).toBe(false);

  this.expect(function() {
    return new TransparentProxy(target1, {}) !== new TransparentProxy(new TransparentProxy(target2, {}), {});
  }).toBe(true);

  this.expect(function() {
    return new TransparentProxy(target1, {}) !== new TransparentProxy(new Proxy(target1, {}), {});
  }).toBe(true);

  this.expect(function() {
    return new Proxy(target1, {}) !== new TransparentProxy(new TransparentProxy(target1, {}), {});
  }).toBe(true);

});
