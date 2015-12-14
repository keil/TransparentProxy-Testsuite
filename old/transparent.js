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
 * Test == comparison operators
 */
(function() {

  var target1 = {};
  var target2 = {};

  var proxy1 = new TransparentProxy(target1, {});
  var proxy2 = new TransparentProxy(target1, {});

  assertTrue(function() {
    return proxy1==proxy2;
  });

  var proxy3 = new TransparentProxy(new TransparentProxy(target1, {}), {});

  assertTrue(function() {
    return proxy1==proxy3;
  });

  var proxy4 = new TransparentProxy(target2, {});

  assertFalse(function() {
    return proxy1==proxy4;
  });

  var proxy5 = new TransparentProxy(new Proxy(target1, {}), {});

  assertFalse(function() {
    return proxy1==proxy5;
  });

})();

/** 
 * Test === comparison operators
 */
(function() {

  var target1 = {};
  var target2 = {};

  var proxy1 = new TransparentProxy(target1, {});
  var proxy2 = new TransparentProxy(target1, {});

  assertTrue(function() {
    return proxy1===proxy2;
  });

  var proxy3 = new TransparentProxy(new TransparentProxy(target1, {}), {});

  assertTrue(function() {
    return proxy1===proxy3;
  });

  var proxy4 = new TransparentProxy(target2, {});

  assertFalse(function() {
    return proxy1===proxy4;
  });

    var proxy5 = new TransparentProxy(new Proxy(target1, {}), {});

  assertFalse(function() {
    return proxy1===proxy5;
  });


})();

/** 
 * Test != comparison operators
 */
(function() {

  var target1 = {};
  var target2 = {};

  var proxy1 = new TransparentProxy(target1, {});
  var proxy2 = new TransparentProxy(target1, {});

  assertFalse(function() {
    return proxy1!=proxy2;
  });

  var proxy3 = new TransparentProxy(new TransparentProxy(target1, {}), {});

  assertFalse(function() {
    return proxy1!=proxy3;
  });

  var proxy4 = new TransparentProxy(target2, {});

  assertTrue(function() {
    return proxy1!=proxy4;
  });

  var proxy5 = new TransparentProxy(new Proxy(target1, {}), {});

  assertTrue(function() {
    return proxy1!=proxy5;
  });

})();

/** 
 * Test !== comparison operators
 */
(function() {

  var target1 = {};
  var target2 = {};

  var proxy1 = new TransparentProxy(target1, {});
  var proxy2 = new TransparentProxy(target1, {});

  assertFalse(function() {
    return proxy1!==proxy2;
  });

  var proxy3 = new TransparentProxy(new TransparentProxy(target1, {}), {});

  assertFalse(function() {
    return proxy1!==proxy3;
  });

  var proxy4 = new TransparentProxy(target2, {});

  assertTrue(function() {
    return proxy1!==proxy4;
  });

  var proxy5 = new TransparentProxy(new Proxy(target1, {}), {});

  assertTrue(function() {
    return proxy1!==proxy5;
  });

})();
