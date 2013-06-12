var summary = {};
module('slots-unit-tests', {
    setup: function() {
        summary = new Summary();
        renderSlots();
        initiateSelectHandlers();
        initiateButtonHandlers();
        slots.init();
        createTankBuild();
    }
});

test('should get talisman role', 1, function() {
    equal(slots.head.role(), 'tank');
});

test('should get talisman ql', 1, function() {
    equal(slots.head.ql(), '10.4');
});

test('should get talisman glyph ql', 1, function() {
    equal(slots.head.glyphQl(), '10.5');
});

test('should get talisman glyphs', 2, function() {
    equal(slots.head.primaryGlyph(), 'block-rating');
    equal(slots.head.secondaryGlyph(), 'none');
});

test('should get talisman glyph distribution', 2, function() {
    equal(slots.head.primaryDist(), '4');
    equal(slots.head.secondaryDist(), '0');
});

test('should get talisman signet id and quality', 2, function() {
    equal(slots.head.signetId(), '18');
    equal(slots.head.signetQuality(), 'epic');
});

test('should get talisman signet object', 1, function() {
    deepEqual(slots.head.signet(), signet_data.find('head', '18'));
});

test('should get talisman signet None object if signet Id cannot be found', 1, function() {
    deepEqual(slots.wrist.signet(), signet_data.noneSignet());
});

test('should collect current slot state', 9, function() {
    var slotState = slots.head.state();

    deepEqual(slotState.ql, '10.4');
    deepEqual(slotState.role, 'tank');
    deepEqual(slotState.glyph_ql, '10.5');
    deepEqual(slotState.primary_glyph, 'block-rating');
    deepEqual(slotState.secondary_glyph, 'none');
    deepEqual(slotState.primary_dist, '4');
    deepEqual(slotState.secondary_dist, '0');
    deepEqual(slotState.signet_quality, 'epic');
    deepEqual(slotState.signet_id, '18');
});

test('should collect current mapped slot state', 9, function() {
    var slotState = slots.head.mappedState();

    deepEqual(slotState.ql, '4');
    deepEqual(slotState.role, 1);
    deepEqual(slotState.glyph_ql, '5');
    deepEqual(slotState.primary_glyph, 5);
    deepEqual(slotState.secondary_glyph, 0);
    deepEqual(slotState.primary_dist, '4');
    deepEqual(slotState.secondary_dist, '0');
    deepEqual(slotState.signet_quality, 3);
    deepEqual(slotState.signet_id, '18');
});

test('should collect all slot states', 9, function() {
    var slotStates = slots.state();

    deepEqual(slotStates.head.ql, '10.4');
    deepEqual(slotStates.head.role, 'tank');
    deepEqual(slotStates.head.glyph_ql, '10.5');
    deepEqual(slotStates.head.primary_glyph, 'block-rating');
    deepEqual(slotStates.head.secondary_glyph, 'none');
    deepEqual(slotStates.head.primary_dist, '4');
    deepEqual(slotStates.head.secondary_dist, '0');
    deepEqual(slotStates.head.signet_quality, 'epic');
    deepEqual(slotStates.head.signet_id, '18');
});

test('should collect all mapped slot states', 9, function() {
    var slotStates = slots.mappedState();

    deepEqual(slotStates.head.ql, '4');
    deepEqual(slotStates.head.role, 1);
    deepEqual(slotStates.head.glyph_ql, '5');
    deepEqual(slotStates.head.primary_glyph, 5);
    deepEqual(slotStates.head.secondary_glyph, 0);
    deepEqual(slotStates.head.primary_dist, '4');
    deepEqual(slotStates.head.secondary_dist, '0');
    deepEqual(slotStates.head.signet_quality, 3);
    deepEqual(slotStates.head.signet_id, '18');
});

