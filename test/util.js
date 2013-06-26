module('util-unit-tests', {});

test('should capitalise word', 1, function() {
    deepEqual(tswcalc.util.capitalise('tswcalc'), 'Tswcalc');
});

test('should return blank if None/none', 2, function() {
    deepEqual(tswcalc.util.blankIfNone('none'), '');
    deepEqual(tswcalc.util.blankIfNone('None'), '');
});