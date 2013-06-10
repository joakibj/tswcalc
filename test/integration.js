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