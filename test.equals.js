new Test('Object.equals/ Default', function() {

  // objects
  var object1 = {};
  var object2 = {};
  var object3 = {valueOf:function() {return 1;}};
  var object4 = {
    [Symbol.toPrimitive](hint) {
      return 1;
    }
  }

  // primitives
  var primitive1 = 1;
  var primitive2 = 2;

  this.expect(function() {
    return Object.equals(object1, object1);
  }).toBe(true);

  this.expect(function() {
    return Object.equals(object1, object1, null);
  }).toBe(true);

  this.expect(function() {
    return Object.equals(object1, object1, undefined);
  }).toBe(true);

  this.expect(function() {
    return Object.equals(object1, object1, 1);
  }).toBe(true);

  this.expect(function() {
    return Object.equals(object1, object1, {});
  }).toBe(true);



  this.expect(function() {
    return Object.equals(object1, object2);
  }).toBe(false);

  this.expect(function() {
    return Object.equals(object1, object2, null);
  }).toBe(false);

  this.expect(function() {
    return Object.equals(object1, object2, undefined);
  }).toBe(false);

  this.expect(function() {
    return Object.equals(object1, object2, 1);
  }).toBe(false);

  this.expect(function() {
    return Object.equals(object1, object2, {});
  }).toBe(false);



  this.expect(function() {
    return Object.equals(primitive1, primitive1);
  }).toBe(true);

  this.expect(function() {
    return Object.equals(primitive1, primitive1, null);
  }).toBe(true);

  this.expect(function() {
    return Object.equals(primitive1, primitive1, undefined);
  }).toBe(true);

  this.expect(function() {
    return Object.equals(primitive1, primitive1, 1);
  }).toBe(true);

  this.expect(function() {
    return Object.equals(primitive1, primitive1, {});
  }).toBe(true);



  this.expect(function() {
    return Object.equals(primitive1, primitive2);
  }).toBe(false);

  this.expect(function() {
    return Object.equals(primitive1, primitive2, null);
  }).toBe(false);

  this.expect(function() {
    return Object.equals(primitive1, primitive2, undefined);
  }).toBe(false);

  this.expect(function() {
    return Object.equals(primitive1, primitive2, 1);
  }).toBe(false);

  this.expect(function() {
    return Object.equals(primitive1, primitive2, {});
  }).toBe(false);




  this.expect(function() {
    return Object.equals(object1, primitive1);
  }).toBe(false);

  this.expect(function() {
    return Object.equals(object1, primitive1, null);
  }).toBe(false);

  this.expect(function() {
    return Object.equals(object1, primitive1, undefined);
  }).toBe(false);

  this.expect(function() {
    return Object.equals(object1, primitive1, 1);
  }).toBe(false);

  this.expect(function() {
    return Object.equals(object1, primitive1, {});
  }).toBe(false);



  this.expect(function() {
    return Object.equals(object3, primitive1);
  }).toBe(false);

  this.expect(function() {
    return Object.equals(object3, primitive1, null);
  }).toBe(false);

  this.expect(function() {
    return Object.equals(object3, primitive1, undefined);
  }).toBe(false);

  this.expect(function() {
    return Object.equals(object3, primitive1, 1);
  }).toBe(false);

  this.expect(function() {
    return Object.equals(object3, primitive1, {});
  }).toBe(false);



  this.expect(function() {
    return Object.equals(object4, primitive1);
  }).toBe(false);

  this.expect(function() {
    return Object.equals(object4, primitive1, null);
  }).toBe(false);

  this.expect(function() {
    return Object.equals(object4, primitive1, undefined);
  }).toBe(false);

  this.expect(function() {
    return Object.equals(object4, primitive1, 1);
  }).toBe(false);

  this.expect(function() {
    return Object.equals(object4, primitive1, {});
  }).toBe(false);

});
