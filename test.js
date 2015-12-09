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

var start = new Date();

function run(file) {
  print("# " + file);
  load(file);
}

function assert(closure, value) {
  try {
    var result = closure();
  } catch(error) {
    throw error;
  } finally {
    if(result !== value) 
      throw new Error("Expect: " + value + "\nGiven:  " + result + "\n" + closure.toString());        
    return true;
  }
}

function assertTrue(closure) {
  return assert(closure, true);
}

function assertFalse(closure) {
  return assert(closure, false);
}

/**
 * Run test cases
 */
try {

  run("equals/opaque.js");
  run("equals/transparent.js");
  run("equals/objectequals.js"); // TODO

  var end = new Date();
  print("\nTest suite finished after: " + (end-start) + "ms ");
  quit(); 
} catch (error) {
  print("");
  print("Assertion Failure");
  print("=================");
  print(error.message);
  print(error.stack);
  quit();
}
