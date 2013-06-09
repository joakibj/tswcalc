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
        selectHandler = [];
        $('#qunit-fixture').html(' ');
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
    for (var i = 0; i < template_data.slots.length; i++) {
        for (var suffix = 0; suffix < selectSuffixes.length; suffix++) {
            if (template_data.slots[i].id_prefix == 'weapon' && selectSuffixes[suffix] == '-role') {} else {
                ok($._data($('#' + template_data.slots[i].id_prefix + selectSuffixes[suffix]).get(0), 'events').change instanceof Array, template_data.slots[i].id_prefix + selectSuffixes[suffix] + ' change event exists');
            }
        }
    }
});

test('should have added signets to correct group', 4, function() {
    // None option must be taken into account
    equal($('#weapon-pick-signet option').size(), 16 + 1);
    equal($('#head-pick-signet option').size(), 5 + 16 + 1); //weapon signets also fit in the head
    equal($('#ring-pick-signet option').size(), 3 + 1);
    equal($('#occult-pick-signet option').size(), 28 + 1);
});

test('should get role', 1, function() {
    $('#head-role').val('tank');
    equal(selectHandler['head'].getRole(), 'tank');
});

test('should get slot ql', 1, function() {
    $('#head-ql').val('10.3');
    equal(selectHandler['head'].getQl(), '10.3');
});

test('should get glyph ql', 1, function() {
    $('#head-glyph-ql').val('10.3');
    equal(selectHandler['head'].getGlyphQl(), '10.3');
});

test('should get glyphs', 2, function() {
    $('#head-primary-glyph').val('critical-rating');
    $('#head-secondary-glyph').val('defense-rating');
    equal(selectHandler['head'].getGlyph('primary'), 'critical-rating', 'Primary glyph select');
    equal(selectHandler['head'].getGlyph('secondary'), 'defense-rating', 'Secondary glyph select');
});

test('should get signet quality', 1, function() {
    $('#head-signet-quality').val('epic');
    equal(selectHandler['head'].getSignetQuality(), 'epic');
});

test('should get signet', 1, function() {
    $('#head-pick-signet').val('12');
    equal(selectHandler['head'].getSignet(), '12');
});

test('should get signets for head', 1, function() {
    equal(selectHandler['head'].getSignetsForHead('head').length, 16);
});

test('should get single signet value based on quality', 1, function() {
    $('#head-pick-signet').val('12');
    $('#head-signet-quality').val('epic');
    var signet = signet_data.find('head', selectHandler['head'].getSignet());

    equal(selectHandler['head'].determineSignetQualityValue(signet), 141);
});

test('should get indexed signet value based on quality', 2, function() {
    $('#occult-pick-signet').val('47');
    $('#occult-signet-quality').val('epic');
    var signet = signet_data.find('minor', selectHandler['occult'].getSignet());

    equal(selectHandler['occult'].determineSignetQualityValue(signet, 0), 150);
    equal(selectHandler['occult'].determineSignetQualityValue(signet, 1), 57);
});

test('should get signet description for single value replace', 1, function() {
    $('#head-pick-signet').val('12');
    $('#head-signet-quality').val('epic');
    var signet = signet_data.find('head', selectHandler['head'].getSignet());

    equal(selectHandler['head'].getSignetDescription(signet), 'When you hit a weakened target you have a 5% chance to be healed for 141 every 2 seconds for 8 seconds.');
});

test('should get signet description for multiple value replace', 1, function() {
    $('#occult-pick-signet').val('47');
    $('#occult-signet-quality').val('epic');
    var signet = signet_data.find('minor', selectHandler['occult'].getSignet());

    equal(selectHandler['occult'].getSignetDescription(signet), 'When your health is below 50% you are healed for 150 and affected by a heal over time effect healing you for 57 every 2 seconds for 8 seconds.');
});

test('should update signet description', 1, function() {
    $('#head-pick-signet').val('12');
    $('#head-signet-quality').val('epic');
    selectHandler['head'].updateSignetDescription();

    equal($('#head-signet-description').html(), 'When you hit a weakened target you have a 5% chance to be healed for 141 every 2 seconds for 8 seconds.');
});

test('should update signet description to blank if no signet is picked', 1, function() {
    $('#head-pick-signet').val('none');
    $('#head-signet-quality').val('normal');
    selectHandler['head'].updateSignetDescription();

    equal($('#head-signet-description').html(), '');
});