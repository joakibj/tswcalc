function renderButtonbar() {
    dust.render('buttonbar', {},

    function(err, out) {
        if (err) {
            console.log(err);
        }
        $('#qunit-fixture').html(out);
    });
};

function renderSlots() {
    dust.render('slots', {
        slots: template_data.slots,
        signets: signet_data
    },

    function(err, out) {
        if (err) {
            console.log(err);
        }
        $('#qunit-fixture').append(out);
    });
};

var buttonBar = {};
var buttonHandler = {};

module('buttonbar', {
    setup: function() {
        renderButtonbar();
        renderSlots();
        buttonBar = new ButtonBar();
    },
    teardown: function() {

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

test('should reset slot', 5, function() {
    $('#head-ql').val('10.4');
    $('#head-role').val('tank');
    $('#head-glyph-ql').val('10.4');
    $('#head-primary-glyph').val('critical-rating');
    $('#head-secondary-glyph').val('magical-protection');

    buttonBar.resetAllInput('head');

    equal($('#head-ql').val(), '10.0');
    equal($('#head-role').val(), 'none');
    equal($('#head-glyph-ql').val(), '10.0');
    equal($('#head-primary-glyph').val(), 'none');
    equal($('#head-secondary-glyph').val(), 'none');
});