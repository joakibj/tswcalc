
module('summary-dom', {
    setup: function() {
        renderSummary();
    }
});

test('should have required summary in DOM', 16, function() {
    ok($('#stat-hitpoints').length !== 0, 'stat-hitpoints exists');
    ok($('#stat-combat-power').length !== 0, 'stat-combat-power exists');
    ok($('#stat-attack-rating').length !== 0, 'stat-attack-rating exists');
    ok($('#stat-weapon-power').length !== 0, 'stat-weapon-power exists');
    ok($('#stat-heal-rating').length !== 0, 'stat-heal-rating exists');
    ok($('#stat-critical-rating').length !== 0, 'stat-critical-rating exists');
    ok($('#stat-critical-chance').length !== 0, 'stat-critical-chance exists');
    ok($('#stat-critical-power').length !== 0, 'stat-critical-power exists');
    ok($('#stat-critical-power-percentage').length !== 0, 'stat-critical-power-percentage exists');
    ok($('#stat-penetration-rating').length !== 0, 'stat-penetration-rating exists');
    ok($('#stat-hit-rating').length !== 0, 'stat-hit-rating exists');
    ok($('#stat-block-rating').length !== 0, 'stat-block-rating exists');
    ok($('#stat-defense-rating').length !== 0, 'stat-defense-rating exists');
    ok($('#stat-evade-rating').length !== 0, 'stat-evade-rating exists');
    ok($('#stat-physical-protection').length !== 0, 'stat-physical-protection exists');
    ok($('#stat-magical-protection').length !== 0, 'stat-magical-protection exists');
});

module('summary-unit-tests', {
    setup: function() {
        initiateSummary();
    }
});

test('should calculate critical chance', 2, function() {
    equal(summary.calculateCriticalChance(0), 5);
    equal(summary.calculateCriticalChance(309), 11.585374715895394);
});

test('should calculate critical power', 2, function() {
    equal(summary.calculateCriticalPowerPercentage(0), 25);
    equal(summary.calculateCriticalPowerPercentage(238), 42.60281680828159);
});

test('should calculate combat power', 2, function() {
    equal(summary.calculateCombatPower(0, 0), 75);
    equal(summary.calculateCombatPower(3049, 398), 647);
});

module('summary-integration-tests', {
    setup: function() {
        renderSummary();
        renderSlots();
        initiateSummary();
        initiateSelectHandlers();
        initiateButtonHandlers();
        initiateRaidCheckboxes();
    },
    teardown: function() {

    }
});

test('should collect primary stats at initial state', 5, function() {
    var sums = summary.collectPrimaryStats();

    equal(sums['combat-power'], 155);
    equal(sums['weapon-power'], 398);
    equal(sums['hitpoints'], 1970);
    equal(sums['attack-rating'], 0);
    equal(sums['heal-rating'], 0);
});

test('should collect primary stats for tank build', 5, function() {
    createTankBuild();

    var sums = summary.collectPrimaryStats();

    equal(sums['combat-power'], 504);
    equal(sums['weapon-power'], 457);
    equal(sums['hitpoints'], 10688);
    equal(sums['attack-rating'], 1565);
    equal(sums['heal-rating'], 0);
});

test('should collect offensive and defensive stats for initial state', 11, function() {
    var sums = summary.collectOffensiveDefensiveStats();

    equal(sums['critical-rating'], 0);
    equal(sums['critical-chance'], 5);
    equal(sums['critical-power'], 0);
    equal(sums['critical-power-percentage'], 25);
    equal(sums['penetration-rating'], 0);
    equal(sums['hit-rating'], 0);
    equal(sums['block-rating'], 0);
    equal(sums['defense-rating'], 0);
    equal(sums['evade-rating'], 0);
    equal(sums['physical-protection'], 249);
    equal(sums['magical-protection'], 249);
});

test('should collect offensive and defensive stats for tank build', 11, function() {
    createTankBuild();

    var sums = summary.collectOffensiveDefensiveStats();

    equal(sums['critical-rating'], 0);
    equal(sums['critical-chance'], 5);
    equal(sums['critical-power'], 0);
    equal(sums['critical-power-percentage'], 25);
    equal(sums['penetration-rating'], 0);
    equal(sums['hit-rating'], 504);
    equal(sums['block-rating'], 691);
    equal(sums['defense-rating'], 576);
    equal(sums['evade-rating'], 0);
    equal(sums['physical-protection'], 609);
    equal(sums['magical-protection'], 249);
});

test('should collect all stats and return two objects', 2, function() {
    createTankBuild();
    var expectedPrimaryStats = {
        'combat-power': 504,
        'weapon-power': 457,
        'hitpoints': 10688,
        'attack-rating': 1565,
        'heal-rating': 0
    };
    var expectedOffensiveDefensiveStats = {
        'none': NaN,
        'critical-rating': 0,
        'critical-chance': '5.00',
        'critical-power': 0,
        'critical-power-percentage': '25.00',
        'penetration-rating': 0,
        'hit-rating': 504,
        'block-rating': 691,
        'defense-rating': 576,
        'evade-rating': 0,
        'physical-protection': 609,
        'magical-protection': 249
    };

    var allSums = summary.collectAllStats();

    deepEqual(allSums.primary, expectedPrimaryStats);
    deepEqual(allSums.offensive_defensive, expectedOffensiveDefensiveStats);
});

test('should update all stats', 16, function() {
    createTankBuild();

    summary.updateAllStats();

    equal($('#stat-hitpoints').html(), '10688');
    equal($('#stat-combat-power').html(), '504');
    equal($('#stat-attack-rating').html(), '1565');
    equal($('#stat-weapon-power').html(), '457');
    equal($('#stat-heal-rating').html(), '0');
    equal($('#stat-critical-rating').html(), '0');
    equal($('#stat-critical-chance').html(), '5.00 %');
    equal($('#stat-critical-power').html(), '0');
    equal($('#stat-critical-power-percentage').html(), '25.0 %');
    equal($('#stat-penetration-rating').html(), '0');
    equal($('#stat-hit-rating').html(), '+504');
    equal($('#stat-block-rating').html(), '+691');
    equal($('#stat-defense-rating').html(), '+576');
    equal($('#stat-evade-rating').html(), '0');
    equal($('#stat-physical-protection').html(), '+609');
    equal($('#stat-magical-protection').html(), '+249');
});

test('should have initial costs at 10.0 price', 3, function() {
    summary.updateCosts();

    equal($('#bb-cost').html(), '480');
    equal($('#cu-cost').html(), '0');
    equal($('#af-cost').html(), '0');
});

test('should update costs for tank build', 3, function() {
    createTankBuild();

    summary.updateCosts();

    equal($('#bb-cost').html(), '1920');
    equal($('#cu-cost').html(), '1');
    equal($('#af-cost').html(), '2');
});

test('should collect offensive and defensive stats for NY raid DPS build with raid items that modify stats when activate raid button is checked', 11, function() {
    createDPSNYRaidBuild();
    summary.el.activateRaid.prop('checked', true);
    summary.el.activateRaid.change();

    var sums = summary.collectOffensiveDefensiveStats();

    equal(sums['critical-rating'], 0);
    equal(sums['critical-chance'], 5);
    equal(sums['critical-power'], 0);
    equal(sums['critical-power-percentage'], 50);
    equal(sums['penetration-rating'], 814);
    equal(sums['hit-rating'], 504);
    equal(sums['block-rating'], 328);
    equal(sums['defense-rating'], 288);
    equal(sums['evade-rating'], 0);
    equal(sums['physical-protection'], 792);
    equal(sums['magical-protection'], 324);
});