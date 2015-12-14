/**
 *
 * JavaScript Test Suite
 * =====================
 *
 * Copyright (c) 2015, Proglang, University of Freiburg.
 * http://proglang.informatik.uni-freiburg.de/
 * All rights reserved.
 *
 * Author Matthias Keil
 * http://www.informatik.uni-freiburg.de/~keilr/
 *
 **/

/**
 * Constructor function for tests
 **/
function Test(name, closure) {
  if(!(this instanceof Test)) return new Test(...Array.from(arguments));

  this.name = name;
  this.closure = closure;

  Test.tests.add(this);
}

/**
 * Function toBe
 **/
Test.prototype.toBe = function (name="unnamed test", skip=false, value=undefined) {
  if(skip) {
    Test.skipped.add({name:name, predicate:this});
    return true;
  } 

  var result = this.apply();

  if(result===value) {
    Test.passed.add({name:name, predicate:this});
    return true;
  } else {
    Test.failed.add({name:name, predicate:this, expect:value, given:result});
    return true;
  }
}

/**
 * Function expect 
 **/
Test.prototype.expect = function(predicate, skip=false) {
  Object.defineProperty(predicate, "toBe", {
    value:Test.prototype.toBe.bind(predicate, this.name, skip), writable: false, configurable: false
  });

  return predicate;
}

/**
 * Function expect true
 **/
Test.expectTrue = function (predicate, skip=false) {
  return Test.prototype.toBe.apply(predicate, this.name, skip, true);
}

/**
 * Function expect false
 **/
Test.expectFalse = function (predicate, skip=false) {
  return Test.prototype.toBe.apply(predicate, this.name, skip, false);
}

/**
 * Lists of all tests
 **/
Test.tests = new Set();

/**
 * Lists of all test cases
 **/
Test.failed  = new Set();
Test.skipped = new Set();
Test.passed  = new Set();

/**
 * Runs the created test tests 
 **/
Test.run = function(verbose=false, ion=false, baseline=false) {
  var tstart = Date.now();

  for(var test of Test.tests) {
    if(verbose) print(`\nRun: ${test.name}`);
    test.closure.apply(test);
  }

  var tend = Date.now();
  var dur = tend-tstart;

  var cases = Test.failed.size + Test.passed.size + Test.skipped.size;

  print(`\nTests:${Test.tests.size}, Cases:${cases}, Failed:${Test.failed.size}, Passed:${Test.passed.size}, Skipped:${Test.skipped.size} (${dur} ms)`);

  if(Test.failed.size==0 && Test.skipped.size==0) {
    print("All tests successful.")
  }

  if(Test.failed.size!=0) {
    print(`\n${Test.failed.size} tests failed.`);
    for(var test of Test.failed) print(`\n*** Failed: ${test.name}: (given:${test.given}, expect:${test.expect}) @ ${test.predicate}`);
  }

  if(Test.skipped.size!=0) {
    print(`\n${Test.skipped.size} tests skipped.`);
    for(var test of Test.skipped) print(`\n**** Skipped ${test.name}: ${test.predicate}`);
  }
}
