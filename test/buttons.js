module('glyphbuttons-dom', {
    setup: function() {
        renderGlyphButtons('weapon', '-primary-glyph');
        renderGlyphButtons('weapon', '-secondary-glyph');
    }
});

test('should have required buttons in the DOM', 10, function() {
    for (var button = 0; button <= 4; button++) {
        ok($('#weapon-primary-glyph-dist-btn' + button).length !== 0, "Primary glyph button " + button + " exists");
        ok($('#weapon-secondary-glyph-dist-btn' + button).length !== 0, "Secondary glyph button " + button + " exists");
    }
});

module('glyphbuttons-events', {
    setup: function() {
        renderGlyphButtons('weapon', '-primary-glyph');
        renderGlyphButtons('weapon', '-secondary-glyph');
    }
});

test('should have initialised button handlers for slot', 10, function() {
    tswcalc.slots['weapon'] = new tswcalc.slots.Slot('weapon', 'Weapon', 'weapon');
    tswcalc.button['weapon'] = new tswcalc.button.DistributionButtonHandler('weapon');
    tswcalc.button['weapon'].init();
    for (var button = 0; button <= 4; button++) {
        ok($._data($('#weapon-primary-glyph-dist-btn' + button).get(0), 'events').click instanceof Array, "Primary glyph button " + button + " has a click event");
        ok($._data($('#weapon-secondary-glyph-dist-btn' + button).get(0), 'events').click instanceof Array, "Secondary glyph button " + button + " has a click event");
    }
});


module('glyphbuttons-unit-tests', {
    setup: function() {
        renderGlyphButtons('weapon', '-primary-glyph');
        renderGlyphButtons('weapon', '-secondary-glyph');
        tswcalc.slots['weapon'] = new tswcalc.slots.Slot('weapon', 'Weapon', 'weapon');
        tswcalc.button['weapon'] = new tswcalc.button.DistributionButtonHandler('weapon');
        tswcalc.button['weapon'].activate('primary', 0);
        tswcalc.button['weapon'].activate('secondary', 0);
    }
});

test('should set primary and secondary button to active and deactivate the siblings', 4, function() {
    tswcalc.button['weapon'].activate('primary', 2);
    tswcalc.button['weapon'].activate('secondary', 3);

    ok($('#weapon-primary-glyph-dist-btn2').hasClass('active'));
    ok($('#weapon-secondary-glyph-dist-btn3').hasClass('active'));
    ok($('#weapon-primary-glyph-dist > button.btn.active').length == 1);
    ok($('#weapon-secondary-glyph-dist > button.btn.active').length == 1);
});

test('should get inverse glyph', 2, function() {
    equal(tswcalc.button['weapon'].inverse('primary'), 'secondary', 'The inverse glyph of primary is secondary');
    equal(tswcalc.button['weapon'].inverse('secondary'), 'primary', 'The inverse glyph of secondary is primary');
});

test('should get dist', 2, function() {
    tswcalc.button['weapon'].activate('primary', 2);
    tswcalc.button['weapon'].activate('secondary', 3);

    deepEqual(tswcalc.button['weapon'].getDist('primary'), 2);
    deepEqual(tswcalc.button['weapon'].getDist('secondary'), 3);
});

test('should automatically balance primary and secondary glyph distribution to always be a sum of 4 when primary is clicked', 14, function() {
    tswcalc.button['weapon'].activate('primary', 4);
    tswcalc.button['weapon'].activate('secondary', 0);
    tswcalc.button['weapon'].balance('primary');

    equal(tswcalc.slots.weapon.primaryDist(), 4);
    equal(tswcalc.slots.weapon.secondaryDist(), 0);

    tswcalc.button['weapon'].activate('primary', 3);
    tswcalc.button['weapon'].activate('secondary', 0);
    tswcalc.button['weapon'].balance('primary');

    equal(tswcalc.slots.weapon.primaryDist(), 3);
    equal(tswcalc.slots.weapon.secondaryDist(), 1);

    tswcalc.button['weapon'].activate('primary', 2);
    tswcalc.button['weapon'].activate('secondary', 0);
    tswcalc.button['weapon'].balance('primary');

    equal(tswcalc.slots.weapon.primaryDist(), 2);
    equal(tswcalc.slots.weapon.secondaryDist(), 2);

    tswcalc.button['weapon'].activate('primary', 1);
    tswcalc.button['weapon'].activate('secondary', 0);
    tswcalc.button['weapon'].balance('primary');

    equal(tswcalc.slots.weapon.primaryDist(), 1);
    equal(tswcalc.slots.weapon.secondaryDist(), 3);

    tswcalc.button['weapon'].activate('primary', 0);
    tswcalc.button['weapon'].activate('secondary', 0);
    tswcalc.button['weapon'].balance('primary');

    equal(tswcalc.slots.weapon.primaryDist(), 0);
    equal(tswcalc.slots.weapon.secondaryDist(), 4);

    tswcalc.button['weapon'].activate('primary', 4);
    tswcalc.button['weapon'].activate('secondary', 4);
    tswcalc.button['weapon'].balance('primary');

    equal(tswcalc.slots.weapon.primaryDist(), 4);
    equal(tswcalc.slots.weapon.secondaryDist(), 0);

    tswcalc.button['weapon'].activate('primary', 3);
    tswcalc.button['weapon'].activate('secondary', 4);
    tswcalc.button['weapon'].balance('primary');

    equal(tswcalc.slots.weapon.primaryDist(), 3);
    equal(tswcalc.slots.weapon.secondaryDist(), 1);
});

test('should automatically balance primary and secondary glyph distribution to always be a sum of 4 when secondary is clicked', 14, function() {
    tswcalc.button['weapon'].activate('secondary', 4);
    tswcalc.button['weapon'].balance('secondary');

    equal(tswcalc.slots.weapon.primaryDist(), 0);
    equal(tswcalc.slots.weapon.secondaryDist(), 4);

    tswcalc.button['weapon'].activate('secondary', 3);
    tswcalc.button['weapon'].balance('secondary');

    equal(tswcalc.slots.weapon.primaryDist(), 1);
    equal(tswcalc.slots.weapon.secondaryDist(), 3);

    tswcalc.button['weapon'].activate('secondary', 2);
    tswcalc.button['weapon'].balance('secondary');

    equal(tswcalc.slots.weapon.primaryDist(), 2);
    equal(tswcalc.slots.weapon.secondaryDist(), 2);

    tswcalc.button['weapon'].activate('secondary', 1);
    tswcalc.button['weapon'].balance('secondary');

    equal(tswcalc.slots.weapon.primaryDist(), 3);
    equal(tswcalc.slots.weapon.secondaryDist(), 1);

    tswcalc.button['weapon'].activate('secondary', 0);
    tswcalc.button['weapon'].balance('secondary');

    equal(tswcalc.slots.weapon.primaryDist(), 4);
    equal(tswcalc.slots.weapon.secondaryDist(), 0);

    tswcalc.button['weapon'].activate('primary', 4);
    tswcalc.button['weapon'].activate('secondary', 4);
    tswcalc.button['weapon'].balance('secondary');

    equal(tswcalc.slots.weapon.primaryDist(), 0);
    equal(tswcalc.slots.weapon.secondaryDist(), 4);

    tswcalc.button['weapon'].activate('primary', 4);
    tswcalc.button['weapon'].activate('secondary', 3);
    tswcalc.button['weapon'].balance('secondary');

    equal(tswcalc.slots.weapon.primaryDist(), 1);
    equal(tswcalc.slots.weapon.secondaryDist(), 3);
});

module('glyphbuttons-integration-tests', {
    setup: function() {
        renderSlots();
        renderGlyphButtons('weapon', '-primary-glyph');
        renderGlyphButtons('weapon', '-secondary-glyph');
        tswcalc.slots.init();
        tswcalc.button.init();
        tswcalc.summary.init();
    }
});

test('should balance distribution when button is pressed', 4, function() {
    tswcalc.slots.weapon.el.btn.primary[3].click();

    equal(tswcalc.slots.weapon.primaryDist(), 3);
    equal(tswcalc.slots.weapon.secondaryDist(), 1);

    tswcalc.slots.head.el.btn.secondary[2].click();

    equal(tswcalc.slots.head.primaryDist(), 2);
    equal(tswcalc.slots.head.secondaryDist(), 2);
});