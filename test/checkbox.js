
module('checkbox-integration-tests', {
    setup: function() {
        renderSlots();
        initiateSelectHandlers();
        initiateSummary();
        tswcalc.checkbox['head'] = new tswcalc.checkbox.RaidCheckbox('head');
        tswcalc.checkbox['head'].initiate();
    }
});

test('should change slot to raid item based on role', 11, function() {
    tswcalc.slots.head.role('healer');
    tswcalc.checkbox['head'].changeToRaidItem();

    equal($('#head-name').html(), ': Blood of the Old Ones');
    equal($('#head-signet-img-icon').attr('src'), 'assets/images/icons/blood_of_the_old_ones.png');
    equal($('#head-signet-img-quality').attr('src'), 'assets/images/icons/epic.png');
    ok($('#head-signet-quality').attr('disabled'), 'signet quality select is disabled');
    ok($('#head-pick-signet').attr('disabled'), 'signet pick select is disabled');
    ok($('#head-ql').attr('disabled'), 'ql select is disabled');
    equal($('#head-ql').val(), '10.4');
    equal($('#head-pick-signet').val(), '80');
    equal($('#head-signet-description').html(), 'Whenever you apply a heal effect to a friend, there is a 10% chance that you will heal the target for an additional 3% of their maximum health. 5 seconds cooldown.');
    equal($('#head-pick-signet').find("option[value='80']").length, 1);
    equal($('#head-pick-signet option').size(), 8 + 16 + 1 + 1);
});

test('should change slot to custom item, from raid item', 12, function() {
    tswcalc.slots.head.role('healer');
    tswcalc.checkbox['head'].changeToRaidItem();

    tswcalc.checkbox['head'].changeToCustomItem();

    equal($('#head-name').html(), '');
    equal($('#head-signet-img-icon').attr('src'), 'assets/images/icons/head_dps.png');
    equal($('#head-signet-img-quality').attr('src'), 'assets/images/icons/normal.png');
    deepEqual($('#head-signet-quality').attr('disabled'), undefined, 'signet quality select is not disabled');
    deepEqual($('#head-pick-signet').attr('disabled'), undefined, 'signet pick select is not disabled');
    deepEqual($('#head-ql').attr('disabled'), undefined, 'ql select is not disabled');
    equal($('#head-ql').val(), '10.4');
    equal($('#head-pick-signet').val(), 'none');
    equal($('#head-signet-quality').val(), 'none');
    equal($('#head-signet-description').html(), '');
    equal($('#head-pick-signet').find("option[value='80']").length, 0);
    equal($('#head-pick-signet option').size(), 8 + 16 + 1);
});

test('should not change slot to raid item when there is no raid item for the slot+role', 11, function() {
    tswcalc.checkbox['wrist'] = new tswcalc.checkbox.RaidCheckbox('wrist');
    tswcalc.checkbox['wrist'].initiate();

    tswcalc.slots.wrist.role('healer');
    tswcalc.checkbox['wrist'].changeToRaidItem();

    equal($('#wrist-name').html(), '');
    equal($('#wrist-signet-img-icon').attr('src'), 'assets/images/icons/major_dps.png');
    equal($('#wrist-signet-img-quality').attr('src'), 'assets/images/icons/normal.png');
    deepEqual($('#wrist-signet-quality').attr('disabled'), undefined, 'signet quality select is not disabled');
    deepEqual($('#wrist-pick-signet').attr('disabled'), undefined, 'signet pick select is not disabled');
    deepEqual($('#head-ql').attr('disabled'), undefined, 'ql select is not disabled');
    equal($('#head-ql').val(), '10.0');
    equal($('#wrist-pick-signet').val(), 'none');
    equal($('#wrist-signet-quality').val(), 'none');
    equal($('#wrist-signet-description').html(), '');
    equal($('#wrist-pick-signet option').size(), 3 + 3 + 1);
});