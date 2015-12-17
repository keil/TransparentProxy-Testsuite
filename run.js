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

// Load tests
load("test.equality.js");

// Run all created tests
Test.run({
        // set verbose mode
        verbose:true,
        // enforce evaluation mode
        mode:Test.Interpreter
});
