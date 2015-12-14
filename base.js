



/**
 * Constructor function for tests
 */
function Test(name, test) {
  if(this ..)


  this.name = name;
  this.test = test;
  Test.tests.add(this);
}

/**
 * Lists of all tests
 **/
Test.tests = new Set();

/**
 * Lists of all test cases
 **/
Test.failed = new Set();
Test.skipped = new Set();
Test.passed = new Set();

/**
 * Runs the created test tests 
 **/
Test.run = function(verbose=false) {
  var tstart = Date.now();

  for(var test of Test.tests) {
    if(verbose) print(`\n;;; Run ${test.name}`);
    test.test.apply({});
  }
  
  var tend = Date.now();
  var dur = tend-tstart;

  var cases = Test.failed.size + Test.passed.size + Test.skipped.size;

  print(`\nTests:${Test.tests.size}, Cases:${cases}, Failed:${Test.failed.size}, Passed:${Test.passed.size}, Skipped:${Test.skipped.size} (${dur} ms)`);

  if(Test.failed.size==0 && Test.skipped.size==0) {
    print(";;; All tests successful.")
  }

  if(Test.failed.size!=0) {
    print(`\n${Test.failed.size} tests failed.`);
    for(var test of Test.failed) print(`\n*** Failed (given:${test.given}, expect:${test.expect}) @ ${test.pred}`);
  }

  if(Test.skipped.size!=0) {
    print(`\n${Test.skipped.size} tests skipped.`);
    for(var test of Test.skipped) print(`\n*** Skipped @ ${test.pred}`);
  }
};

/**
 * Function toBe 
 **/
Test.toBe = function(skip, value) {

  if(skip) {
    Test.skipped.add({predicate:this});
    return true;
  } 

  var result = this.apply();

  if(result===value) {
    Test.passed.add({predicate:this});
    return true;
  } else {
    Test.failed.add({predicate:this, expect:value, given:result});
    return true;
  }
}

/**
 * Function expect
 **/
Test.expect = function (predicate, skip=false) {
  Object.defineProperty(predicate, "toBe", {
    value: Test.toBe.bind(predicate, skip), writable: false, configurable: false,
  });
  return predicate;
}

/**
 * Function expect true
 **/
Test.expectTrue = function (predicate, skip=false) {
  return Test.toBe.call(predicate, skip, true);
}

/**
 * Function expect false
 **/
Test.expectFalse = function (predicate, skip=false) {
  return Test.toBe.call(predicate, skip, false);
}
