const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
    it('should return 4 when inputs are 1 and 3', function() {
        assert.strictEqual(calculateNumber(1, 3), 4);
    });

    it('should return 5 when inputs are 1.4 and 3.6', function() {
        assert.strictEqual(calculateNumber(1.4, 3.6), 5);
    });

    it('should return 6 when inputs are 2.5 and 3.5', function() {
        assert.strictEqual(calculateNumber(2.5, 3.5), 7);
    });

    it('should return -4 when inputs are -1.2 and -2.8', function() {
        assert.strictEqual(calculateNumber(-1.2, -2.8), -4);
    });

    it('should return 0 when inputs are 0.1 and -0.1', function() {
        assert.strictEqual(calculateNumber(0.1, -0.1), 0);
    });
});
