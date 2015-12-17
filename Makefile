# The test suite requires a symlink to the current implmenetation 
default:
	./js --no-baseline --no-ion -f base.js -f test.js -f run.js

jit:
	./js --no-ion -f base.js -f test.js -f run.jit.js

ion:
	./js -f base.js -f test.js -f run.ion.js
