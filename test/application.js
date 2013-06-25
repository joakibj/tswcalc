module('tswcalc', {
    setup: function() {
        tswcalc.init();
    }
});

test('should initate tswcalc submodules', 8, function() {
    ok(tswcalc);
    ok(tswcalc.data);
    ok(buttonHandler);
    ok(selectHandler);
    ok(tswcalc.buttonBar);
    ok(tswcalc.summary);
    ok(tswcalc.export);
    ok(tswcalc.import);
});