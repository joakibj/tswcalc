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

module('buttonbar-unit-tests', {
    setup: function() {
        renderButtonbar();
        renderSlots();
        buttonBar = new ButtonBar();
    }
});

test('should set role on slot', 1, function() {
    buttonBar.setRoleOnSlot('tank', 'head');

    equal($('#head-role').val(), 'tank');
});

test('should set ql on slot', 1, function() {
    buttonBar.setQlOnSlot('10.3', 'head');

    equal($('#head-ql').val(), '10.3');
});

test('should set glyph ql on slot', 1, function() {
    buttonBar.setGlyphQlOnSlot('10.3', 'head');

    equal($('#head-glyph-ql').val(), '10.3');
});

var summary = {};
module('buttonbar-integration-tests', {
    setup: function() {
        renderButtonbar();
        renderSlots();
        initiateButtonHandlers();
        initiateSelectHandlers();
        buttonBar = new ButtonBar();
        summary = new Summary();
    }
});

test('should reset slot', 7, function() {
    $('#head-ql').val('10.4');
    $('#head-role').val('tank');
    $('#head-glyph-ql').val('10.4');
    $('#head-primary-glyph').val('critical-rating');
    $('#head-secondary-glyph').val('magical-protection');
    $('#head-primary-glyph-dist-btn4').trigger('click');
    $('#head-secondary-glyph-dist-btn0').trigger('click');

    buttonBar.resetAllInput('head');

    equal($('#head-ql').val(), '10.0');
    equal($('#head-role').val(), 'none');
    equal($('#head-glyph-ql').val(), '10.0');
    equal($('#head-primary-glyph').val(), 'none');
    equal($('#head-secondary-glyph').val(), 'none');
    ok($('#head-primary-glyph-dist-btn0').hasClass('active'));
    ok($('#head-secondary-glyph-dist-btn0').hasClass('active'));
});