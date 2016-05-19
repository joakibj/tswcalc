
module('selects-dom', {
    setup: function() {
        renderSlots();
    }
});

test('should have required selects in the DOM', 61, function() {
    for (var i = 0; i < tswcalc.data.template_data.slots.length; i++) {
        var slotId = tswcalc.data.template_data.slots[i].id_prefix;
        if (slotId != 'weapon' && slotId != 'weapon2') {
            ok($('#' + slotId + '-itemId').length !== 0, slotId + '-itemId exists');
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

test('should have required event listeners for change on selects in the DOM', 61, function() {
    for (var i = 0; i < tswcalc.data.template_data.slots.length; i++) {
        var slotId = tswcalc.data.template_data.slots[i].id_prefix;
        ok($._data($('#' + slotId + '-ql').get(0), 'events').change instanceof Array);
        if (slotId != 'weapon' && slotId != 'weapon2') {
            ok($._data($('#' + slotId + '-itemId').get(0), 'events').change instanceof Array);
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
        renderButtonbar();
        renderSlots();
        initiateSelectHandlers();
        initiateSummary();
    }
});

test('should have added signets to correct group', 8, function() {
    // None option must be taken into account
    equal($('#weapon-pick-signet option').size(), 23);
    equal($('#head-pick-signet option').size(), 37); //weapon signets also fit in the head
    equal($('#ring-pick-signet option').size(), 16);
    equal($('#neck-pick-signet option').size(), 16);
    equal($('#wrist-pick-signet option').size(), 16);
    equal($('#luck-pick-signet option').size(), 41);
    equal($('#waist-pick-signet option').size(), 41);
    equal($('#occult-pick-signet option').size(), 41);
});

test('should get signets for head', 1, function() {
    equal(tswcalc.select['head'].getSignetsForHead('head').length, 22);
});

module('selects-integration-tests', {
    setup: function() {
        renderButtonbar();
        renderSlots();
        initiateButtonHandlers();
        initiateSelectHandlers();
        tswcalc.slots.init();
    }
});

test('should only allow epic version of signet when cadoro signets are selected', 5, function() {
    tswcalc.slots['head'].itemId('3');
    tswcalc.slots['head'].signetId('53');
    tswcalc.slots['head'].el.signetId.change();

    equal($('#head-name').html(), ': Forgotten Ashes');
    equal($('#head-pick-signet').val(), '53');
    equal($('#head-signet-quality').val(), 'epic');
    deepEqual($('#head-signet-quality').attr('disabled'), 'disabled', 'quality select disabled');
    deepEqual($('#head-signet-description').html(), 'Whenever you hit you gain a single Kingdom counter which increases your Hit Rating by 6 for 4 seconds per stack. This effect can stack up to 20 times. An additional stack is gained if an attack penetrates or critically hits.');
});

test('should only allow epic version of signet when quality different than normal is selected before cadoro signet', 4, function() {
    tswcalc.slots['head'].signetId('20');
    tswcalc.slots['head'].signetQuality('elite');
    tswcalc.slots['head'].el.signetId.change();
    tswcalc.slots['head'].signetId('53');
    tswcalc.slots['head'].el.signetId.change();

    equal($('#head-pick-signet').val(), '53');
    equal($('#head-signet-quality').val(), 'epic');
    deepEqual($('#head-signet-quality').attr('disabled'), 'disabled', 'quality select disabled');
    deepEqual($('#head-signet-description').html(), 'Whenever you hit you gain a single Kingdom counter which increases your Hit Rating by 6 for 4 seconds per stack. This effect can stack up to 20 times. An additional stack is gained if an attack penetrates or critically hits.');
});

test('should enable signet quality when a cadoro signet has been selected and then changed to a different signet', 1, function() {
    tswcalc.slots['head'].signetId('53');
    tswcalc.slots['head'].el.signetId.change();
    tswcalc.slots['head'].signetId('20');
    tswcalc.slots['head'].el.signetId.change();

    deepEqual($('#head-pick-signet').attr('disabled'), undefined, 'quality select enabled');
});

test('should enable changing of weapon type and set the slot name', 1, function() {
    tswcalc.slots['weapon'].wtype('blade');
    tswcalc.slots['weapon'].el.wtype.change();

    deepEqual(tswcalc.slots['weapon'].name(), ': Blade');
});

test('should enable changing of weapon2 type and set the slot name', 1, function() {
    tswcalc.slots['weapon2'].wtype('blade');
    tswcalc.slots['weapon2'].el.wtype.change();

    deepEqual(tswcalc.slots['weapon2'].name(), ': Blade');
});

test('should enable changing of weapon type to none and set the slot name to blank', 1, function() {
    tswcalc.slots['weapon'].wtype('blade');
    tswcalc.slots['weapon'].el.wtype.change();
    tswcalc.slots['weapon'].wtype('none');
    tswcalc.slots['weapon'].el.wtype.change();

    deepEqual(tswcalc.slots['weapon'].name(), '');
});

test('should enable changing of weapon2 type to none and set the slot name to blank', 1, function() {
    tswcalc.slots['weapon2'].wtype('blade');
    tswcalc.slots['weapon2'].el.wtype.change();
    tswcalc.slots['weapon2'].wtype('none');
    tswcalc.slots['weapon2'].el.wtype.change();

    deepEqual(tswcalc.slots['weapon2'].name(), '');
});
