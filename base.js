var files = 0;
var tests = 0;
var failed = 0;
var passed = 0;
var skipped = 0;

var ftests = new Set();
var stests = new Set();

var rname = "";
var tname = "";

function run(name = "", rclosure) {
  rname = name;

  var tstart = Date.now();
  rclosure();
  var tend = Date.now();
  var dur = tend-tstart;

  print(`\n${rname}`);
  print(`Files:${files}, Tests:${tests}, Failed:${failed}, Passed:${passed}, Skipped:${skipped} (${dur} ms)`);

  if(failed==0 && skipped==0) {
    print("All tests successful.")
  }

  if(failed!=0) {
    print(`\n${failed} tests failed.`);
    for(var test of ftests) print(`\n*** Failed (given:${test.given}, expect:${test.expect}) @ ${test.pred}`);
  }

  if(skipped!=0) {
    print(`\n${skipped} tests skipped.`);
    for(var test of stests) print(`\n*** Skipped @ ${test.pred}`);
  }
}

function test(name = "", tclosure) {
  tname = name;
  files++;
  tclosure();
}

function toBe(skip, val) {
  tests++;

  if(skip) {
    skipped++;
    stests.add({run:rname, test:tname, pred: this});
    return false;
  } 

  var res = this.apply();

  if(res===val) {
    passed++;
    return true;
  } else {
    failed++;
    ftests.add({run:rname, test:tname, pred:this, expect:val, given:res});
    return true;
  }
}

function expect(pred, skip) {
  Object.defineProperty(pred, "toBe", {
    value: toBe.bind(pred, skip), writable: false, configurable: false,
  });

  return pred;
}
