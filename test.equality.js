new Test('Proxy/ Equality Operator (==)', function() {

  // target values
  var target1 = {};
  var target2 = {};

  Test.expect(function() {
    return target1 == new Proxy(target1, {});
  }).toBe(false);

  Test.expect(function() {
    return new Proxy(target1, {}) == new Proxy(target1, {});
  }).toBe(false);

  Test.expect(function() {
    return new Proxy(target1, {}) == new Proxy(target2, {});
  }).toBe(false);

});


/*

test('Proxy/ Equality Operator (==)', function() {

  // target values
  var target1 = {};
  var target2 = {};

  expect(function() {
    return target1 == new Proxy(target1, {});
  }).toBe(false);

  expect(function() {
    return new Proxy(target1, {}) == new Proxy(target1, {});
  }).toBe(false);

  expect(function() {
    return new Proxy(target1, {}) == new Proxy(target2, {});
  }).toBe(false);

});

test('TransparentProxy/ Equality Operator (==)', function() {

  // target values
  var target1 = {};
  var target2 = {};

  expect(function() {
    return target1 == new TransparentProxy(target1, {});
  }).toBe(true);

  expect(function() {
    return target1 == new TransparentProxy(target2, {});
  }).toBe(false);

  expect(function() {
    return new TransparentProxy(target1, {}) == new TransparentProxy(target1, {});
  }).toBe(true);

  expect(function() {
    return new TransparentProxy(target1, {}) == new TransparentProxy(target2, {});
  }).toBe(false);

  expect(function() {
    return target2 == new TransparentProxy(new TransparentProxy(target1, {}), {});
  }).toBe(false);

  expect(function() {
    return target2 == new TransparentProxy(new TransparentProxy(target1, {}), {});
  }).toBe(false);

  expect(function() {
    return new TransparentProxy(target1, {}) == new TransparentProxy(new TransparentProxy(target1, {}), {});
  }).toBe(true);

  expect(function() {
    return new TransparentProxy(target2, {}) == new TransparentProxy(new TransparentProxy(target1, {}), {});
  }).toBe(false);

});

test('TransparentProxy (nested)/ Equality Operator (==)', function() {

  // target values
  var target1 = {};
  var target2 = {};

  expect(function() {
    return target2 == new TransparentProxy(new TransparentProxy(target1, {}), {});
  }).toBe(false);

  expect(function() {
    return target2 == new TransparentProxy(new TransparentProxy(target1, {}), {});
  }).toBe(false);

  expect(function() {
    return new TransparentProxy(target1, {}) == new TransparentProxy(new TransparentProxy(target1, {}), {});
  }).toBe(true);

  expect(function() {
    return new TransparentProxy(target2, {}) == new TransparentProxy(new TransparentProxy(target1, {}), {});
  }).toBe(false);

});

*/
