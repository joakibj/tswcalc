module('buttonbar-dom', {
    setup: function() {
        renderButtonbar();
    }
});

test('should have required buttonbar buttons in DOM', 6, function() {
    ok($('#btn-all-dps').length !== 0, 'all-dps button exists');
    ok($('#btn-all-healer').length !== 0, 'all-healer button exists');
    ok($('#btn-all-tank').length !== 0, 'all-tank button exists');
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
        initiateRaidCheckboxes();
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

    equal(tswcalc.slots.head.role(), 'dps');
    equal(tswcalc.slots.ring.role(), 'dps');
    equal(tswcalc.slots.neck.role(), 'dps');
    equal(tswcalc.slots.wrist.role(), 'dps');
    equal(tswcalc.slots.luck.role(), 'dps');
    equal(tswcalc.slots.waist.role(), 'dps');
    equal(tswcalc.slots.occult.role(), 'dps');
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
            id: '#btn-all-tank'
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
    equal(tswcalc.slots.head.role(), 'tank');
    equal(tswcalc.slots.ring.role(), 'tank');
    equal(tswcalc.slots.neck.role(), 'tank');
    equal(tswcalc.slots.wrist.role(), 'tank');
    equal(tswcalc.slots.luck.role(), 'tank');
    equal(tswcalc.slots.waist.role(), 'tank');
    equal(tswcalc.slots.occult.role(), 'tank');
});

test('should reset all slots', 80, function() {
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
    equal(slot.role(), 'none');
    equal(slot.ql(), '10.0');
    equal(slot.glyphQl(), '10.0');
    equal(slot.primaryGlyph(), 'none');
    equal(slot.secondaryGlyph(), 'none');
    ok(slot.el.btn.primary[4].hasClass('active'));
    ok(slot.el.btn.secondary[0].hasClass('active'));
    ok(!slot.el.btn.nyraid.is(':checked'));
    equal(slot.signetId(), 'none');
    equal(slot.signetQuality(), 'none');
}