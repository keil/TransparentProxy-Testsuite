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
function Test(name, closure, mode=Test.INTERPRETER) {
  if(!(this instanceof Test)) return new Test(...Array.from(arguments));

  this.name = name;
  this.closure = closure;
  this.mode = mode;

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


  witch(configuration.mode) {
          case Test.JIT:
                  var finished = inJit;
                  break;
          case Test.ION:
                  var finished = inIon;
                  break;
          case Test.INTERPRETER:
          default:    
                  var finished = (function() { return true; });
                  break;
  }

  do {
    var result = this.apply();
  }
  while (finished());

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
Test.run = function(configuration) {
  var tstart = Date.now();

  for(var test of Test.tests) {
    if(configuration.verbose) print(`\nRun: ${test.name}`);
    test.closure.apply(test);
  }

  var tend = Date.now();
  var duration = tend-tstart;

  var cases = Test.failed.size + Test.passed.size + Test.skipped.size;

  print(`\nTests:${Test.tests.size}, Cases:${cases}, Failed:${Test.failed.size}, Passed:${Test.passed.size}, Skipped:${Test.skipped.size} (${dur} ms)`);
  print(`JIT:${inJit()}, Ion:${inIon()}`);

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

/**
 * Test Mode
 **/

// Test interpreter only 
Test.INTERPRETER = 0;
// Test interpreter and baseline JIT 
Test.JIT         = 1;
// Test interpreter, baseline JIT, and IonMonkey 
Test.ION         = 2;
