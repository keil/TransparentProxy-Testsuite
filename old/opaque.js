
(function() {

  /* TEST
   * ..
   */
  assertFalse(function() {
    return proxy1==proxy4;
  }, "name");

})();

(function() {


  /* TEST
   * ..
   */
  assertFalse(function() {
    return proxy3==proxy4;
  }, "namesdf");

})();

(function() {

  /* TEST
   * ..
   */
  assertFalse(function() {
    return proxy2==proxy4;
  }, "names");

})();




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

  var proxy1 = new Proxy(target1, {});
  var proxy2 = new Proxy(target1, {});

  assertFalse(function() {
    return proxy1==proxy2;
  });

  var proxy3 = new Proxy(new Proxy(target1, {}), {});

  assertFalse(function() {
    return proxy1==proxy3;
  });

  var proxy4 = new Proxy(target2, {});

  assertFalse(function() {
    return proxy1==proxy4;
  });

})();

/** 
 * Test === comparison operators
 */
(function() {

  var target1 = {};
  var target2 = {};

  var proxy1 = new Proxy(target1, {});
  var proxy2 = new Proxy(target1, {});

  assertFalse(function() {
    return proxy1===proxy2;
  });

  var proxy3 = new Proxy(new Proxy(target1, {}), {});

  assertFalse(function() {
    return proxy1===proxy3;
  });

  var proxy4 = new Proxy(target2, {});

  assertFalse(function() {
    return proxy1===proxy4;
  });

})();

/** 
 * Test != comparison operators
 */
(function() {

  var target1 = {};
  var target2 = {};

  var proxy1 = new Proxy(target1, {});
  var proxy2 = new Proxy(target1, {});

  assertTrue(function() {
    return proxy1!=proxy2;
  });

  var proxy3 = new Proxy(new Proxy(target1, {}), {});

  assertTrue(function() {
    return proxy1!=proxy3;
  });

  var proxy4 = new Proxy(target2, {});

  assertTrue(function() {
    return proxy1!=proxy4;
  });

})();

/** 
 * Test !== comparison operators
 */
(function() {

  var target1 = {};
  var target2 = {};

  var proxy1 = new Proxy(target1, {});
  var proxy2 = new Proxy(target1, {});

  assertTrue(function() {
    return proxy1!==proxy2;
  });

  var proxy3 = new Proxy(new Proxy(target1, {}), {});

  assertTrue(function() {
    return proxy1!==proxy3;
  });

  var proxy4 = new Proxy(target2, {});

  assertTrue(function() {
    return proxy1!==proxy4;
  });

})();
