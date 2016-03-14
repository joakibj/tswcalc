module('buttonbar-dom', {
    setup: function() {
        renderButtonbar();
    }
});

test('should have required buttonbar buttons in DOM', 6, function() {
    ok($('#btn-all-3').length !== 0, 'all-dps button exists');
    ok($('#btn-all-2').length !== 0, 'all-healer button exists');
    ok($('#btn-all-1').length !== 0, 'all-tank button exists');
    ok($('#btn-all-10-4').length !== 0, 'all-10-4 button exists');
    ok($('#btn-all-10-5').length !== 0, 'all-10-5 button exists');
    ok($('#btn-reset').length !== 0, 'reset button exists');
});

module('buttonbar-integration-tests', {
    setup: function() {
        renderSummary();
        renderButtonbar();
        renderSlots();
        initiateButtonHandlers();
        initiateSelectHandlers();
        tswcalc.buttonBar.init();
        initiateSummary();
        createTankBuild();
    }
});

test('should set role on all slots to dps', 7, function() {
    tswcalc.buttonBar.setRoleOnAllSlots({
        target: {
            id: '#btn-all-dps'
        }
    });

    equal(tswcalc.slots.head.item().role, 'dps');
    equal(tswcalc.slots.ring.item().role, 'dps');
    equal(tswcalc.slots.neck.item().role, 'dps');
    equal(tswcalc.slots.wrist.item().role, 'dps');
    equal(tswcalc.slots.luck.item().role, 'dps');
    equal(tswcalc.slots.waist.item().role, 'dps');
    equal(tswcalc.slots.occult.item().role, 'dps');
});

test('should set ql and glyph ql on all slots to 10.5 with the exception of ql on raid items', 16, function() {
    tswcalc.buttonBar.setQlOnAllSlots({
        target: {
            id: '#btn-all-10-5'
        }
    });

    equal(tswcalc.slots.weapon.ql(), '10.5');
    equal(tswcalc.slots.weapon.glyphQl(), '10.5');
    equal(tswcalc.slots.head.ql(), '10.5');
    equal(tswcalc.slots.head.glyphQl(), '10.5');
    equal(tswcalc.slots.ring.ql(), '10.5');
    equal(tswcalc.slots.ring.glyphQl(), '10.5');
    equal(tswcalc.slots.neck.ql(), '10.5');
    equal(tswcalc.slots.neck.glyphQl(), '10.5');
    equal(tswcalc.slots.wrist.ql(), '10.4');
    equal(tswcalc.slots.wrist.glyphQl(), '10.5');
    equal(tswcalc.slots.luck.ql(), '10.5');
    equal(tswcalc.slots.luck.glyphQl(), '10.5');
    equal(tswcalc.slots.waist.ql(), '10.4');
    equal(tswcalc.slots.waist.glyphQl(), '10.5');
    equal(tswcalc.slots.occult.ql(), '10.5');
    equal(tswcalc.slots.occult.glyphQl(), '10.5');
});

test('should set ql and glyph ql on all slots to 10.4 with the exception of ql on raid items after changing QL then changing role', 23, function() {
    tswcalc.buttonBar.setQlOnAllSlots({
        target: {
            id: '#btn-all-10-4'
        }
    });
    tswcalc.buttonBar.setRoleOnAllSlots({
        target: {
            id: '#btn-all-1'
        }
    });

    equal(tswcalc.slots.weapon.ql(), '10.4');
    equal(tswcalc.slots.weapon.glyphQl(), '10.4');
    equal(tswcalc.slots.head.ql(), '10.4');
    equal(tswcalc.slots.head.glyphQl(), '10.4');
    equal(tswcalc.slots.ring.ql(), '10.4');
    equal(tswcalc.slots.ring.glyphQl(), '10.4');
    equal(tswcalc.slots.neck.ql(), '10.4');
    equal(tswcalc.slots.neck.glyphQl(), '10.4');
    equal(tswcalc.slots.wrist.ql(), '10.4');
    equal(tswcalc.slots.wrist.glyphQl(), '10.4');
    equal(tswcalc.slots.luck.ql(), '10.4');
    equal(tswcalc.slots.luck.glyphQl(), '10.4');
    equal(tswcalc.slots.waist.ql(), '10.4');
    equal(tswcalc.slots.waist.glyphQl(), '10.4');
    equal(tswcalc.slots.occult.ql(), '10.4');
    equal(tswcalc.slots.occult.glyphQl(), '10.4');
    equal(tswcalc.slots.head.item().role, 'tank');
    equal(tswcalc.slots.ring.item().role, 'tank');
    equal(tswcalc.slots.neck.item().role, 'tank');
    equal(tswcalc.slots.wrist.item().role, 'tank');
    equal(tswcalc.slots.luck.item().role, 'tank');
    equal(tswcalc.slots.waist.item().role, 'tank');
    equal(tswcalc.slots.occult.item().role, 'tank');
});

test('should reset all slots', 72, function() {
    tswcalc.buttonBar.resetAllSlots();

    assertReset(tswcalc.slots.weapon);
    assertReset(tswcalc.slots.head);
    assertReset(tswcalc.slots.ring);
    assertReset(tswcalc.slots.neck);
    assertReset(tswcalc.slots.wrist);
    assertReset(tswcalc.slots.luck);
    assertReset(tswcalc.slots.waist);
    assertReset(tswcalc.slots.occult);
});

function assertReset(slot) {
    equal(slot.item().role, 'dps');
    equal(slot.ql(), '10.0');
    equal(slot.glyphQl(), '10.0');
    equal(slot.primaryGlyph(), 'none');
    equal(slot.secondaryGlyph(), 'none');
    ok(slot.el.btn.primary[4].hasClass('active'));
    ok(slot.el.btn.secondary[0].hasClass('active'));
    equal(slot.signetId(), 'none');
    equal(slot.signetQuality(), 'none');
}