function renderSlots() {
    dust.render('slots', {
        slots: template_data.slots,
        signets: signet_data
    },

    function(err, out) {
        if (err) {
            console.log(err);
        }
        $('#qunit-fixture').html(out);
    });
};

var selectHandler = [];

module('selects', {
    setup: function() {
        renderSlots();
        for (var i = 0; i < template_data.slots.length; i++) {
            selectHandler[template_data.slots[i].id_prefix] = new SelectHandler(template_data.slots[i]);
            selectHandler[template_data.slots[i].id_prefix].initiate();
        }
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

test('should have required event listeners for change on selects in the DOM', (selectSuffixes.length * template_data.slots.length) - 1, function() {
    var selectHandler = [];
    for (var i = 0; i < template_data.slots.length; i++) {
        selectHandler[template_data.slots[i].id_prefix] = new SelectHandler(template_data.slots[i]);
        selectHandler[template_data.slots[i].id_prefix].initiate();
        for (var suffix = 0; suffix < selectSuffixes.length; suffix++) {
            if (template_data.slots[i].id_prefix == 'weapon' && selectSuffixes[suffix] == '-role') {} else {
                ok($._data($('#' + template_data.slots[i].id_prefix + selectSuffixes[suffix]).get(0), 'events').change instanceof Array, template_data.slots[i].id_prefix + selectSuffixes[suffix] + ' change event exists');
            }
        }
    }
});

test('should have added signets to correct group', 4, function() {
    ok($('#weapon-pick-signet option').size(), 16);
    ok($('#head-pick-signet option').size(), 5);
    ok($('#ring-pick-signet option').size(), 3);
    ok($('#occult-pick-signet option').size(), 28);
});

test('should get role', 1, function() {
    $('#head-role').val('tank');
    ok(selectHandler['head'].getRole(), 'tank');
});

test('should get slot ql', 1, function() {
    $('#head-ql').val('10.3');
    ok(selectHandler['head'].getQl(), '10.3');
});

test('should get glyph ql', 1, function() {
    $('#head-glyph-ql').val('10.3');
    ok(selectHandler['head'].getGlyphQl(), '10.3');
});

test('should get glyphs', 2, function() {
    $('#head-primary-glyph').val('critical-rating');
    $('#head-secondary-glyph').val('defense-rating');
    ok(selectHandler['head'].getGlyph('primary'), 'critical-rating', 'Primary glyph select');
    ok(selectHandler['head'].getGlyph('secondary'), 'defense-rating', 'Secondary glyph select');
});

test('should get signet quality', 1, function() {
    $('#head-signet-quality').val('epic');
    ok(selectHandler['head'].getSignetQuality(), 'epic');
});

test('should get signet', 1, function() {
    $('#head-pick-signet').val('12');
    ok(selectHandler['head'].getSignet(), '12');
});

test('should get signets for head', 1, function() {
    ok(selectHandler['head'].getSignetsForHead('head').length, 5);
});

test('should get signet value based on quality', 1, function() {
    $('#head-pick-signet').val('12');
    $('#head-signet-quality').val('epic');
    var signet = signet_data.find('head', selectHandler['head'].getSignet());

    ok(selectHandler['head'].determineSignetQualityValue(signet), 141);
});









