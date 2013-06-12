module('slots-unit-tests', {
    setup: function() {
        renderSlots();
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
    equal(slots.head.glyphql(), '10.5');
});

test('should get talisman glyphs', 2, function() {
    equal(slots.head.primaryglyph(), 'block-rating');
    equal(slots.head.secondaryglyph(), 'none');
});

