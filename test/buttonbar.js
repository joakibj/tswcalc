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

var buttonBar = {};
var buttonHandler = {};

module('buttonbar-events', {
    setup: function() {
        renderButtonbar();
        buttonBar = new ButtonBar();
        buttonBar.initiate();
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

module('buttonbar-integration-tests', {
    setup: function() {
        renderButtonbar();
        renderSlots();
        initiateButtonHandlers();
        initiateSelectHandlers();
        initiateRaidCheckboxes();
        buttonBar = new ButtonBar();
        initiateSummary();
        createTankBuild();
    }
});

test('should set role on all slots to dps', 7, function() {
    buttonBar.setRoleOnAllSlots({
        target: {
            id: '#btn-all-dps'
        }
    });

    equal(slots.head.role(), 'dps');
    equal(slots.ring.role(), 'dps');
    equal(slots.neck.role(), 'dps');
    equal(slots.wrist.role(), 'dps');
    equal(slots.luck.role(), 'dps');
    equal(slots.waist.role(), 'dps');
    equal(slots.occult.role(), 'dps');
});

test('should set ql and glyph ql on all slots to 10.5 with the exception of ql on raid items', 16, function() {
    buttonBar.setQlOnAllSlots({
        target: {
            id: '#btn-all-10-5'
        }
    });

    equal(slots.weapon.ql(), '10.5');
    equal(slots.weapon.glyphQl(), '10.5');
    equal(slots.head.ql(), '10.5');
    equal(slots.head.glyphQl(), '10.5');
    equal(slots.ring.ql(), '10.5');
    equal(slots.ring.glyphQl(), '10.5');
    equal(slots.neck.ql(), '10.5');
    equal(slots.neck.glyphQl(), '10.5');
    equal(slots.wrist.ql(), '10.4');
    equal(slots.wrist.glyphQl(), '10.5');
    equal(slots.luck.ql(), '10.5');
    equal(slots.luck.glyphQl(), '10.5');
    equal(slots.waist.ql(), '10.4');
    equal(slots.waist.glyphQl(), '10.5');
    equal(slots.occult.ql(), '10.5');
    equal(slots.occult.glyphQl(), '10.5');
});

test('should set ql and glyph ql on all slots to 10.4 with the exception of ql on raid items after changing QL then changing role', 23, function() {
    buttonBar.setQlOnAllSlots({
        target: {
            id: '#btn-all-10-4'
        }
    });
    buttonBar.setRoleOnAllSlots({
        target: {
            id: '#btn-all-tank'
        }
    });

    equal(slots.weapon.ql(), '10.4');
    equal(slots.weapon.glyphQl(), '10.4');
    equal(slots.head.ql(), '10.4');
    equal(slots.head.glyphQl(), '10.4');
    equal(slots.ring.ql(), '10.4');
    equal(slots.ring.glyphQl(), '10.4');
    equal(slots.neck.ql(), '10.4');
    equal(slots.neck.glyphQl(), '10.4');
    equal(slots.wrist.ql(), '10.4');
    equal(slots.wrist.glyphQl(), '10.4');
    equal(slots.luck.ql(), '10.4');
    equal(slots.luck.glyphQl(), '10.4');
    equal(slots.waist.ql(), '10.4');
    equal(slots.waist.glyphQl(), '10.4');
    equal(slots.occult.ql(), '10.4');
    equal(slots.occult.glyphQl(), '10.4');
    equal(slots.head.role(), 'tank');
    equal(slots.ring.role(), 'tank');
    equal(slots.neck.role(), 'tank');
    equal(slots.wrist.role(), 'tank');
    equal(slots.luck.role(), 'tank');
    equal(slots.waist.role(), 'tank');
    equal(slots.occult.role(), 'tank');
});

test('should reset all slots', 80, function() {
    buttonBar.resetAllSlots();

    assertReset(slots.weapon);
    assertReset(slots.head);
    assertReset(slots.ring);
    assertReset(slots.neck);
    assertReset(slots.wrist);
    assertReset(slots.luck);
    assertReset(slots.waist);
    assertReset(slots.occult);
});

function assertReset(slot) {
    equal(slot.role(), 'none');
    equal(slot.ql(), '10.0');
    equal(slot.glyphQl(), '10.0');
    equal(slot.primaryGlyph(), 'none');
    equal(slot.secondaryGlyph(), 'none');
    ok(slot.el.btn.primary[0].hasClass('active'));
    ok(slot.el.btn.secondary[0].hasClass('active'));
    ok(!slot.el.btn.nyraid.is(':checked'));
    equal(slot.signetId(), 'none');
    equal(slot.signetQuality(), 'none');
}