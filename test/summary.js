function renderSummary() {
    dust.render('summary', {},

    function(err, out) {
        if (err) {
            console.log(err);
        }
        $('#qunit-fixture').html(out);
    });
};

var summary = {};

module('summary-unit-tests', {
    setup: function() {
        summary = new Summary();
    },
    teardown: function() {

    }
});

test('should calculate critical chance', 2, function() {
    equal(summary.calculateCriticalChance(0), 5);
    equal(summary.calculateCriticalChance(309), (11.59));
});

test('should calculate critical power', 2, function() {
    equal(summary.calculateCriticalPowerPercentage(0), 25);
    equal(summary.calculateCriticalPowerPercentage(238), 42.6);
});

test('should calculate combat power', 2, function() {
    equal(summary.calculateCombatPower(0, 0), 75);
    equal(summary.calculateCombatPower(3049, 398), 647);
});

test('should get glyph value', 7, function() {
    equal(summary.getGlyphValue('none', '10.0', 'major', 4), 0, 'return 0 if state is none');
    equal(summary.getGlyphValue('critical-rating', '10.0', 'major', null), 0, 'return 0 if dist is null');
    equal(summary.getGlyphValue('critical-rating', '10.4', 'major', 4), 279);
    equal(summary.getGlyphValue('critical-rating', '10.4', 'major', 3), 210);
    equal(summary.getGlyphValue('critical-rating', '10.4', 'major', 2), 140);
    equal(summary.getGlyphValue('critical-rating', '10.4', 'major', 1), 70);
    equal(summary.getGlyphValue('critical-rating', '10.4', 'major', 0), 0);
});

module('summary-dom', {
    setup: function() {
        summary = new Summary();
        renderSummary();
    },
    teardown: function() {

    }
});

test('should have required summary in DOM', 16, function() {
    ok($('#stat-hitpoints').length != 0, 'stat-hitpoints exists');
    ok($('#stat-combat-power').length != 0, 'stat-combat-power exists');
    ok($('#stat-attack-rating').length != 0, 'stat-attack-rating exists');
    ok($('#stat-weapon-power').length != 0, 'stat-weapon-power exists');
    ok($('#stat-heal-rating').length != 0, 'stat-heal-rating exists');
    ok($('#stat-critical-rating').length != 0, 'stat-critical-rating exists');
    ok($('#stat-critical-chance').length != 0, 'stat-critical-chance exists');
    ok($('#stat-critical-power').length != 0, 'stat-critical-power exists');
    ok($('#stat-critical-power-percentage').length != 0, 'stat-critical-power-percentage exists');
    ok($('#stat-penetration-rating').length != 0, 'stat-penetration-rating exists');
    ok($('#stat-hit-rating').length != 0, 'stat-hit-rating exists');
    ok($('#stat-block-rating').length != 0, 'stat-block-rating exists');
    ok($('#stat-defense-rating').length != 0, 'stat-defense-rating exists');
    ok($('#stat-evade-rating').length != 0, 'stat-evade-rating exists');
    ok($('#stat-physical-protection').length != 0, 'stat-physical-protection exists');
    ok($('#stat-magical-protection').length != 0, 'stat-magical-protection exists');
});

module('summary-integration-tests', {
    setup: function() {
        summary = new Summary();
        renderSummary();
    },
    teardown: function() {

    }
});