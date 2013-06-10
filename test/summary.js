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

module('summary', {
    setup: function() {
        summary = new Summary();
        renderSummary();
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