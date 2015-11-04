/*
 * Transparent Object Proxies 
 * https://proglang.informatik.uni-freiburg.de/proxy/
 *
 * Copyright (c) 2014-2015, Proglang, University of Freiburg.
 * http://proglang.informatik.uni-freiburg.de/
 * All rights reserved.
 *
 * Released under the MIT license.
 *
 * Author Matthias Keil
 * http://www.informatik.uni-freiburg.de/~keilr/
 */

/** 
 * Test Object.equals comparison operators
 * (without key/ with arbitrary key)
 */
(function() {

  var object1 = {};
  var object2 = {};
  var object4 = {valueOf:function() { return 1;} };

  var primitive1 = 1;
  var primitive2 = 2;

  assertTrue(function() {
    return Object.equals(object1, object1);
  });

  assertTrue(function() {
    return Object.equals(object1, object1, null);
  });

  assertFalse(function() {
    return Object.equals(object1, object2);
  });

  assertFalse(function() {
    return Object.equals(object1, object2, null);
  });

  assertTrue(function() {
    return Object.equals(primitive1, primitive1);
  });

  assertTrue(function() {
    return Object.equals(primitive1, primitive1, null);
  });

  assertFalse(function() {
    return Object.equals(primitive1, primitive2);
  });

  assertFalse(function() {
    return Object.equals(primitive1, primitive2, null);
  });

  assertFalse(function() {
    return Object.equals(object1, primitive1);
  });

  assertFalse(function() {
    return Object.equals(object1, primitive1, null);
  });

  assertFalse(function() {
    return Object.equals(object4, primitive1);
  });

  assertFalse(function() {
    return Object.equals(object4, primitive1, null);
  });

})();

/** 
 * Test Object.equals comparison operators
 * (without key/ with arbitrary key)
 */
(function() {

  var target1 = {};
  var target2 = {};

  var proxy1 = new Proxy(target1, {});
  var proxy2 = new Proxy(target1, {});

  assertFalse(function() {
    return Object.equals(proxy1, proxy2);
  });

  assertFalse(function() {
    return Object.equals(proxy1, proxy2, null);
  });

  var proxy3 = new Proxy(new Proxy(target1, {}), {});

  assertFalse(function() {
    return Object.equals(proxy1, proxy2);
  });

  assertFalse(function() {
    return Object.equals(proxy1, proxy2, null);
  });

  var proxy4 = new Proxy(target2, {});

  assertFalse(function() {
    return Object.equals(proxy1, proxy2);
  });

  assertFalse(function() {
    return Object.equals(proxy1, proxy2, null);
  });

})();

/** 
 * Test Object.equals comparison operators
 * (without key/ with arbitrary key)
 */
(function() {

  var target1 = {};
  var target2 = {};

  var proxy1 = new TransparentProxy(target1, {});
  var proxy2 = new TransparentProxy(target1, {});

  assertTrue(function() {
    return Object.equals(proxy1, proxy2);
  });

  assertTrue(function() {
    return Object.equals(proxy1, proxy2, null);
  });

  var proxy3 = new TransparentProxy(new TransparentProxy(target1, {}), {});

  assertTrue(function() {
    return Object.equals(proxy1, proxy3);
  });

  assertTrue(function() {
    return Object.equals(proxy1, proxy3, null);
  });

  var proxy4 = new TransparentProxy(target2, {});

  assertFalse(function() {
    return Object.equals(proxy1, proxy4);
  });

  assertFalse(function() {
    return Object.equals(proxy1, proxy4, null);
  });

  var proxy5 = new TransparentProxy(new Proxy(target1, {}), {});

  assertFalse(function() {
    return Object.equals(proxy1, proxy5);
  });

  assertFalse(function() {
    return Object.equals(proxy1, proxy5, null);
  });

})();
