module('tswcalc', {
    setup: function() {
        initiateTswCalc();
    },
    teardown: function() {

    }
});

test('should initate tswcalc submodules', 6, function() {
    ok(buttonHandler);
    ok(selectHandler);
    ok(buttonBar);
    ok(summary);
    ok(exportModule);
    ok(importModule);
});