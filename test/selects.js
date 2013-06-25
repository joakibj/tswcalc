
module('selects-dom', {
    setup: function() {
        renderSlots();
    }
});

test('should have required selects in the DOM', 55, function() {
    for (var i = 0; i < tswcalc.data.template_data.slots.length; i++) {
        var slotId = tswcalc.data.template_data.slots[i].id_prefix;
        if (slotId != 'weapon') {
            ok($('#' + slotId + '-role').length !== 0, slotId + '-role exists');
        }
        ok($('#' + slotId + '-ql').length !== 0, slotId + '-ql exists');
        ok($('#' + slotId + '-glyph-ql').length !== 0, slotId + '-glyph-ql exists');
        ok($('#' + slotId + '-primary-glyph').length !== 0, slotId + '-primary-glyph exists');
        ok($('#' + slotId + '-secondary-glyph').length !== 0, slotId + '-secondary-glyph exists');
        ok($('#' + slotId + '-pick-signet').length !== 0, slotId + '-pick-signet exists');
        ok($('#' + slotId + '-signet-quality').length !== 0, slotId + '-signet-quality exists');
    }
});

test('should not have weapon-role select in the DOM', 1, function() {
    ok($('#weapon-role').length === 0, 'weapon-role is not in the DOM');
});

module('selects-events', {
    setup: function() {
        renderSlots();
        initiateSelectHandlers();
    }
});

test('should have required event listeners for change on selects in the DOM', 55, function() {
    for (var i = 0; i < tswcalc.data.template_data.slots.length; i++) {
        var slotId = tswcalc.data.template_data.slots[i].id_prefix;
        ok($._data($('#' + slotId + '-ql').get(0), 'events').change instanceof Array);
        if (slotId != 'weapon') {
            ok($._data($('#' + slotId + '-role').get(0), 'events').change instanceof Array);
        }
        ok($._data($('#' + slotId + '-glyph-ql').get(0), 'events').change instanceof Array);
        ok($._data($('#' + slotId + '-primary-glyph').get(0), 'events').change instanceof Array);
        ok($._data($('#' + slotId + '-secondary-glyph').get(0), 'events').change instanceof Array);
        ok($._data($('#' + slotId + '-pick-signet').get(0), 'events').change instanceof Array);
        ok($._data($('#' + slotId + '-signet-quality').get(0), 'events').change instanceof Array);
    }
});

module('selects-unit-tests', {
    setup: function() {
        renderSlots();
        initiateSelectHandlers();
    }
});

test('should have added signets to correct group', 8, function() {
    // None option must be taken into account
    equal($('#weapon-pick-signet option').size(), 16 + 1);
    equal($('#head-pick-signet option').size(), 5 + 16 + 1); //weapon signets also fit in the head
    equal($('#ring-pick-signet option').size(), 3 + 1);
    equal($('#neck-pick-signet option').size(), 3 + 1);
    equal($('#wrist-pick-signet option').size(), 3 + 1);
    equal($('#luck-pick-signet option').size(), 28 + 1);
    equal($('#waist-pick-signet option').size(), 28 + 1);
    equal($('#occult-pick-signet option').size(), 28 + 1);
});

test('should get signets for head', 1, function() {
    equal(tswcalc.select['head'].getSignetsForHead('head').length, 16);
});

