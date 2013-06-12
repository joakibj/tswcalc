
module('util-unit-tests', {});

test('should capitalise word', 1, function() {
    equal(capitalise('tswcalc'), 'Tswcalc');
});