module('tswcalc', {
    setup: function() {
        tswcalc.init();
    }
});

test('should initate tswcalc submodules', 7, function() {
    ok(tswcalc);
    ok(buttonHandler);
    ok(selectHandler);
    ok(tswcalc.buttonBar);
    ok(summary);
    ok(exportModule);
    ok(importModule);
});