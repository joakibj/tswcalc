module('dom', {
    setup: function() {
        initiateTswCalc();
    },
    teardown: function() {

    }
});

var selectSuffixes = ['-role', '-ql', '-glyph-ql', '-primary-glyph', '-secondary-glyph', '-pick-signet', '-signet-quality'];

test('should have required selects in the DOM', (selectSuffixes.length * template_data.slots.length) - 1, function() {
    for (var i = 0; i < template_data.slots.length; i++) {
        for (var suffix = 0; suffix < selectSuffixes.length; suffix++) {
            if (template_data.slots[i].id_prefix == 'weapon' && selectSuffixes[suffix] == '-role') {} else {
                ok($('#' + template_data.slots[i].id_prefix + selectSuffixes[suffix]).length != 0, template_data.slots[i].id_prefix + selectSuffixes[suffix] + ' exists');
            }
        }
    }
});

test('should not have weapon-role select in the DOM', 1, function() {
    ok($('#weapon-role').length == 0, 'weapon-role is not in the DOM');
});

test('should have required buttons in the DOM', (10 * template_data.slots.length), function() {
    for (var i = 0; i < template_data.slots.length; i++) {
        for (var button = 0; button <= 4; button++) {
            ok($('#' + template_data.slots[i].id_prefix + '-primary-glyph-dist-btn' + button).length != 0, "Primary glyph button " + button + " exists");
            ok($('#' + template_data.slots[i].id_prefix + '-secondary-glyph-dist-btn' + button).length != 0, "Secondary glyph button " + button + " exists");
        };
    }
});

test('should have required buttonbar buttons in DOM', 6, function() {
    ok($('#btn-all-dps').length != 0, 'all-dps button exists');
    ok($('#btn-all-healer').length != 0, 'all-healer button exists');
    ok($('#btn-all-tank').length != 0, 'all-tank button exists');
    ok($('#btn-all-10-4').length != 0, 'all-10-4 button exists');
    ok($('#btn-all-10-5').length != 0, 'all-10-5 button exists');
    ok($('#btn-reset').length != 0, 'reset button exists');
});

test('should have required summary in DOM', 16, function() {
    ok($('#stat-hitpoints').length != 0, 'stat-hitpoints exists');
    ok($('#stat-combat-power').length != 0, 'stat-combat-power exists');
    ok($('#stat-attack-rating').length != 0, 'stat-attack-rating exists');
    ok($('#stat-weapon-power').length != 0, 'stat-weapon-power exists');
    ok($('#stat-heal-rating').length != 0, 'stat-heal-rating exists');
    ok($('#stat-critical-rating').length != 0, 'stat-critical-rating exists');
    ok($('#stat-critical-chance').length != 0, 'stat-critical-chance exists');
    ok($('#stat-critical-power').length != 0, 'stat-critical-power exists');
    ok($('#stat-critical-power-percentage').length != 0, 'stat-critical-power-percentage exists');
    ok($('#stat-penetration-rating').length != 0, 'stat-penetration-rating exists');
    ok($('#stat-hit-rating').length != 0, 'stat-hit-rating exists');
    ok($('#stat-block-rating').length != 0, 'stat-block-rating exists');
    ok($('#stat-defense-rating').length != 0, 'stat-defense-rating exists');
    ok($('#stat-evade-rating').length != 0, 'stat-evade-rating exists');
    ok($('#stat-physical-protection').length != 0, 'stat-physical-protection exists');
    ok($('#stat-magical-protection').length != 0, 'stat-magical-protection exists');
});

module('event listeners', {
    setup: function() {
        initiateTswCalc();
    },
    teardown: function() {

    }
});

test('should have required event listeners for change on selects in the DOM', 63, function() {
    for (var i = 0; i < template_data.slots.length; i++) {
        ok(typeof selectHandler[template_data.slots[i].id_prefix] != 'undefined', 'Button handler created for ' + template_data.slots[i].id_prefix);
        for (var suffix = 0; suffix < selectSuffixes.length; suffix++) {
            if (template_data.slots[i].id_prefix == 'weapon' && selectSuffixes[suffix] == '-role') {} else {
                ok($._data($('#' + template_data.slots[i].id_prefix + selectSuffixes[suffix]).get(0), 'events').change instanceof Array, template_data.slots[i].id_prefix + selectSuffixes[suffix] + ' change event exists');
            }
        }
    }
});

test('should have initialised button handlers for slot', 88, function() {
    for (var i = 0; i < template_data.slots.length; i++) {
        ok(typeof buttonHandler[template_data.slots[i].id_prefix] != 'undefined', 'Button handler created for ' + template_data.slots[i].id_prefix);
        for (var button = 0; button <= 4; button++) {
            ok($._data($('#' + template_data.slots[i].id_prefix + '-primary-glyph-dist-btn' + button).get(0), 'events').click instanceof Array, "Primary glyph button " + button + " has a click event");
            ok($._data($('#' + template_data.slots[i].id_prefix + '-secondary-glyph-dist-btn' + button).get(0), 'events').click instanceof Array, "Secondary glyph button " + button + " has a click event");
        };
    }
});

test('buttons in buttonbar should have click listeners', 6, function() {
    ok($._data($('#btn-all-dps').get(0), 'events').click instanceof Array, 'btn-all-dps click listener exists');
    ok($._data($('#btn-all-healer').get(0), 'events').click instanceof Array, 'btn-all-healer click listener exists');
    ok($._data($('#btn-all-tank').get(0), 'events').click instanceof Array, 'btn-all-tank click listener exists');
    ok($._data($('#btn-all-10-4').get(0), 'events').click instanceof Array, 'btn-all-10-4 click listener exists');
    ok($._data($('#btn-all-10-5').get(0), 'events').click instanceof Array, 'btn-all-10-5 click listener exists');
    ok($._data($('#btn-reset').get(0), 'events').click instanceof Array, 'btn-reset click listener exists');
});