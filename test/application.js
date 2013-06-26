module('tswcalc', {
    setup: function() {
        tswcalc.init();
    }
});

test('should initate tswcalc submodules', 9, function() {
    ok(tswcalc);
    ok(tswcalc.data);
    ok(tswcalc.button);
    ok(tswcalc.checkbox);
    ok(tswcalc.select);
    ok(tswcalc.buttonBar);
    ok(tswcalc.summary);
    ok(tswcalc.export);
    ok(tswcalc.import);
});