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
 * Verbose Mode
 * - true
 * - false
 */ 
Test.verbose = true;

/**
 * Evaluation Mode
 * - Test.Interpreter
 * - Test.Baseline
 * - Test.IonMonkey
 */ 
Test.mode = Test.IonMonkey;

/** 
 * Run all created tests
 */
Test.run();
