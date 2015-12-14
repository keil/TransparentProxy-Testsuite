/**
 * Test Object.equals on non-proxy values.
 */
test('Object.equals #1', function() {

  var object1 = {};
  var object2 = {};

  var object3 = {
    [Symbol.toPrimitive](hint) {
      return 1;
    }
  };
  var object4 = {valueOf:function() { return 1;} };

  var primitive1 = 1;
  var primitive2 = 2;



  expect(function() {
    return Object.equals(primitive1, primitive1);
  }).toBe(true);

  expect(function() {
    return Object.equals(primitive1, primitive1, null);
  }).toBe(true);

  expect(function() {
    return Object.equals(primitive1, primitive2);
  }).toBe(false);

  expect(function() {
    return Object.equals(primitive1, primitive2, null);
  }).toBe(false);



  expect(function() {
    return Object.equals(object1, object1);
  }).toBe(true);

  expect(function() {
    return Object.equals(object1, object1, null);
  }).toBe(true);

  expect(function() {
    return Object.equals(object1, object2);
  }).toBe(false);

  expect(function() {
    return Object.equals(object1, object2, null);
  }).toBe(false);



  expect(function() {
    return Object.equals(object1, primitive1);
  }).toBe(false);

  expect(function() {
    return Object.equals(object1, primitive1, null);
  }).toBe(false);

  expect(function() {
    return Object.equals(object4, primitive1);
  }).toBe(false);

  expect(function() {
    return Object.equals(object4, primitive1, null);
  }).toBe(false);



  expect(function() {
    return Object.equals(object3, primitive1);
  }).toBe(false);

  expect(function() {
    return Object.equals(object3, primitive1, null);
  }).toBe(false);

  expect(function() {
    return Object.equals(object3, primitive2);
  }).toBe(false);

  expect(function() {
    return Object.equals(object3, primitive2, null);
  }).toBe(false);



  expect(function() {
    return Object.equals(object4, primitive1);
  }).toBe(false);

  expect(function() {
    return Object.equals(object4, primitive1, null);
  }).toBe(false);

  expect(function() {
    return Object.equals(object4, primitive2);
  }).toBe(false);

  expect(function() {
    return Object.equals(object4, primitive2, null);
  }).toBe(false);

});
