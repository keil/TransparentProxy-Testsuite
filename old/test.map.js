/** Test JavaScrip Map (non-proxy)
 */
test("Map (non-proxy)", function() {

  var map = new Map();

  var target1 = {};
  var target2 = {};

  map.set(target1, "1");

  Test.expect(function() {
    return map.has(target1);
  }).toBe(true);

  expect(function() {
    return map.has(target2);
  }).toBe(false);

  expect(function() {
    return map.get(target1);
  }).toBe("1");

  expect(function() {
    return map.get(target2);
  }).toBe(undefined);

});

/** Test JavaScrip Map (proxy)
 */
/*test("Map (proxy)", function() {

  var map = new Map();

  var target1 = {};
  var target2 = {};

  var proxy1 = new Proxy(target1, {});
  var proxy2 = new Proxy(target2, {});

  map.set(target1, "1");
  map.set(pro1, "1");

  expect(function() {
    return map.has(proxy1);
  }).toBe(true);


  expect(function() {
    return map.has(proxy1);
  }).toBe(true);

  expect(function() {
    return map.has(proxy2);
  }).toBe(false);

  expect(function() {
    return map.get(proxy1);
  }).toBe("1");

  expect(function() {
    return map.get(proxy2);
  }).toBe(undefined);

}); */



/** Test JavaScrip Map (proxy)
 */
test("Map.prototype.has (transparent proxy)", function() {

  var map = new Map();

  var target1 = {};
  var target2 = {};
 
  var tproxy1 = new TransparentProxy(target1, {});
  var tproxy2 = new TransparentProxy(target2, {});

  map.set(target1, "1");

  expect(function() {
    return map.has(target1);
  }).toBe(true);

  expect(function() {
    return map.has(tproxy1);
  }).toBe(true);

  expect(function() {
    return map.has(target2);
  }).toBe(false);

  expect(function() {
    return map.has(tproxy2);
  }).toBe(false);

});

/** Test JavaScrip Map (proxy)
 */
test("Map.prototype.get (transparent proxy)", function() {

  var map = new Map();

  var target1 = {};
  var target2 = {};
 
  var tproxy1 = new TransparentProxy(target1, {});
  var tproxy2 = new TransparentProxy(target2, {});

  map.set(target1, "1");

  expect(function() {
    return map.has(target1);
  }).toBe(true);

  expect(function() {
    return map.has(tproxy1);
  }).toBe(true);

  expect(function() {
    return map.has(target2);
  }).toBe(false);

  expect(function() {
    return map.has(tproxy2);
  }).toBe(false);

});


// TODO, different constr4uctore



/** Test JavaScrip Map (proxy)
 */
test("Map.prototype.get (transparent proxy)", function() {

  var map = new Map();

  var key = {};

  var target1 = {};
//  var target2 = {};
 
  var tproxy1 = new TransparentProxy(target1, {}, key);
//  var tproxy2 = new TransparentProxy(target2, {}, key);

  map.set(target1, 1);
  map.set(tproxy1, 2);

  expect(function() {
    return map.has(target1);
  }).toBe(true);

  expect(function() {
    return map.has(tproxy1);
  }).toBe(true);

  expect(function() {
    return map.get(target1);
  }).toBe(2);

  expect(function() {
    return map.get(tproxy1);
  }).toBe(2);

  expect(function() {
    return map.size;
  }).toBe(1);

  expect(function() {
    return map.keys().next().value === target1;
  }).toBe(true);

  expect(function() {
    return map.keys().next().value === tproxy1;
  }).toBe(true);

  expect(function() {
    return Object.equals(map.keys().next().value, target1, key);
  }).toBe(true);

  expect(function() {
    return Object.equals(map.keys().next().value, tproxy1, key);
  }).toBe(false);

// foreach
// entries
 
});
