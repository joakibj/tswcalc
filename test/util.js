module('util-unit-tests', {});

test('should capitalise word', 1, function() {
    deepEqual(capitalise('tswcalc'), 'Tswcalc');
});

test('should return blank if None/none', 2, function() {
    deepEqual(blankIfNone('none'), '');
    deepEqual(blankIfNone('None'), '');
});