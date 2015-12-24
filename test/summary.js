
module('summary-dom', {
    setup: function() {
        renderSummary();
    }
});

test('should have required summary in DOM', 17, function() {
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
    ok($('#stat-evade-chance').length !== 0, 'stat-evade-chance exists');
    ok($('#stat-physical-protection').length !== 0, 'stat-physical-protection exists');
    ok($('#stat-magical-protection').length !== 0, 'stat-magical-protection exists');
});

module('summary-unit-tests', {
    setup: function() {
        initiateSummary();
    }
});

test('should calculate critical chance', 2, function() {
    equal(tswcalc.summary.calculateCriticalChance(0), 4.990000000000002);
    equal(tswcalc.summary.calculateCriticalChance(309), 14.671074609766634);
});

test('should calculate critical power', 2, function() {
    equal(tswcalc.summary.calculateCriticalPowerPercentage(0), 25);
    equal(tswcalc.summary.calculateCriticalPowerPercentage(238), 42.60281680828159);
});

test('should calculate combat power', 2, function() {
    equal(tswcalc.summary.calculateCombatPower(0, 0), 75);
    equal(tswcalc.summary.calculateCombatPower(3049, 398), 647);
});

test('should calculate evade chance', 2, function() {
    equal(tswcalc.summary.calculateEvadeChance(0), 4.98);
    equal(tswcalc.summary.calculateEvadeChance(2174), 24.51602672866029);
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
    var sums = tswcalc.summary.collectPrimaryStats();

    equal(sums['combat-power'], 155);
    equal(sums['weapon-power'], 398);
    equal(sums['hitpoints'], 2070);
    equal(sums['attack-rating'], 0);
    equal(sums['heal-rating'], 0);
});

test('should collect primary stats for tank build', 5, function() {
    createTankBuild();

    var sums = tswcalc.summary.collectPrimaryStats();

    equal(sums['combat-power'], 504);
    equal(sums['weapon-power'], 457);
    equal(sums['hitpoints'], 10788);
    equal(sums['attack-rating'], 1565);
    equal(sums['heal-rating'], 0);
});

test('should collect offensive and defensive stats for initial state', 12, function() {
    var sums = tswcalc.summary.collectOffensiveDefensiveStats();

    equal(sums['critical-rating'], 0);
    equal(sums['critical-chance'], 4.99);
    equal(sums['critical-power'], 0);
    equal(sums['critical-power-percentage'], 25);
    equal(sums['penetration-rating'], 0);
    equal(sums['hit-rating'], 0);
    equal(sums['block-rating'], 0);
    equal(sums['defense-rating'], 0);
    equal(sums['evade-rating'], 0);
    equal(sums['evade-chance'], 5.0);
    equal(sums['physical-protection'], 300);
    equal(sums['magical-protection'], 300);
});

test('should collect offensive and defensive stats for tank build', 12, function() {
    createTankBuild();

    var sums = tswcalc.summary.collectOffensiveDefensiveStats();

    equal(sums['critical-rating'], 0);
    equal(sums['critical-chance'], 4.99);
    equal(sums['critical-power'], 0);
    equal(sums['critical-power-percentage'], 25);
    equal(sums['penetration-rating'], 0);
    equal(sums['hit-rating'], 504);
    equal(sums['block-rating'], 691);
    equal(sums['defense-rating'], 576);
    equal(sums['evade-rating'], 0);
    equal(sums['evade-chance'], 5.0);
    equal(sums['physical-protection'], 660);
    equal(sums['magical-protection'], 300);
});

test('should collect all stats and return two objects', 2, function() {
    createTankBuild();
    var expectedPrimaryStats = {
        'combat-power': 504,
        'weapon-power': 457,
        'hitpoints': 10788,
        'attack-rating': 1565,
        'heal-rating': 0
    };
    var expectedOffensiveDefensiveStats = {
        'none': NaN,
        'critical-rating': 0,
        'critical-chance': '4.99',
        'critical-power': 0,
        'critical-power-percentage': '25.00',
        'penetration-rating': 0,
        'hit-rating': 504,
        'block-rating': 691,
        'defense-rating': 576,
        'evade-rating': 0,
        'evade-chance': '5.0',
        'physical-protection': 660,
        'magical-protection': 300
    };

    var allSums = tswcalc.summary.collectAllStats();

    deepEqual(allSums.primary, expectedPrimaryStats);
    deepEqual(allSums.offensive_defensive, expectedOffensiveDefensiveStats);
});

test('should update all stats', 17, function() {
    createTankBuild();

    tswcalc.summary.updateAllStats();

    equal($('#stat-hitpoints').html(), '10788');
    equal($('#stat-combat-power').html(), '504');
    equal($('#stat-attack-rating').html(), '1565');
    equal($('#stat-weapon-power').html(), '457');
    equal($('#stat-heal-rating').html(), '0');
    equal($('#stat-critical-rating').html(), '0');
    equal($('#stat-critical-chance').html(), '4.99 %');
    equal($('#stat-critical-power').html(), '0');
    equal($('#stat-critical-power-percentage').html(), '25.0 %');
    equal($('#stat-penetration-rating').html(), '0');
    equal($('#stat-hit-rating').html(), '+504');
    equal($('#stat-block-rating').html(), '+691');
    equal($('#stat-defense-rating').html(), '+576');
    equal($('#stat-evade-rating').html(), '0');
    equal($('#stat-evade-chance').html(), '5.0 %');
    equal($('#stat-physical-protection').html(), '+660');
    equal($('#stat-magical-protection').html(), '+300');
});

test('should have initial costs at 10.0 price, including secondary weapon', 4, function() {
    tswcalc.summary.updateCosts();

    equal($('#bb-cost').html(), '2700');
    equal($('#pantheon-cost').html(), '0');
    equal($('#cu-cost').html(), '0');
    equal($('#af-cost').html(), '0');
});

test('should update costs for tank build, including secondary weapon', 4, function() {
    createTankBuild();

    tswcalc.summary.updateCosts();

    equal($('#bb-cost').html(), '19900');
    equal($('#pantheon-cost').html(), '0');
    equal($('#cu-cost').html(), '2');
    equal($('#af-cost').html(), '2');
});

test('should collect offensive and defensive stats for NY raid DPS build with raid items that modify stats when activate raid button is checked', 12, function() {
    createDPSNYRaidBuild();
    tswcalc.summary.checkActivateRaid();

    var sums = tswcalc.summary.collectOffensiveDefensiveStats();

    equal(sums['critical-rating'], 379);
    equal(sums['critical-chance'], 16.78);
    equal(sums['critical-power'], 0);
    equal(sums['critical-power-percentage'], 50);
    equal(sums['penetration-rating'], 814);
    equal(sums['hit-rating'], 504);
    equal(sums['block-rating'], 0);
    equal(sums['defense-rating'], 288);
    equal(sums['evade-rating'], 0);
    equal(sums['evade-chance'], 5.0);
    equal(sums['physical-protection'], 858);
    equal(sums['magical-protection'], 390);
});

test('should have pure anima bonus', 14, function() {
    createTankBuild();

    tswcalc.miscslot.pureAnima('health');
    tswcalc.summary.updateAllStats();
    equal($('#stat-hitpoints').html(), '11728');
    equal($('#stat-attack-rating').html(), '1565');
    equal($('#stat-heal-rating').html(), '0');

    tswcalc.miscslot.pureAnima('attack-rating');
    tswcalc.summary.updateAllStats();
    equal($('#stat-hitpoints').html(), '10788');
    equal($('#stat-attack-rating').html(), '1805');
    equal($('#stat-combat-power').html(), '544');
    equal($('#stat-heal-rating').html(), '0');

    tswcalc.miscslot.pureAnima('heal-rating');
    tswcalc.summary.updateAllStats();
    equal($('#stat-hitpoints').html(), '10788');
    equal($('#stat-attack-rating').html(), '1565');
    equal($('#stat-heal-rating').html(), '240');
	
    tswcalc.miscslot.pureAnima('benefaction-tonic');
    tswcalc.summary.updateAllStats();
    equal($('#stat-hitpoints').html(), '11258');
    equal($('#stat-attack-rating').html(), '1685');
    equal($('#stat-combat-power').html(), '525');
    equal($('#stat-heal-rating').html(), '120');
});

test('should have anima bonus', 5, function() {
    createTankBuild();

    tswcalc.miscslot.anima('block-rating');
    tswcalc.summary.updateAllStats();
    equal($('#stat-block-rating').html(), '+791');
    
    tswcalc.miscslot.anima('critical-rating');
    tswcalc.summary.updateAllStats();
    equal($('#stat-critical-rating').html(), '+119');
    equal($('#stat-critical-chance').html(), '8.76 %');

    tswcalc.miscslot.anima('evade-rating');
    tswcalc.summary.updateAllStats();
    equal($('#stat-evade-rating').html(), '+110');
    equal($('#stat-evade-chance').html(), '6.7 %');
});

test('should calculate primary stats for 10.6+ QLs', 1, function() {
    create10_6To10_9MixBuild();
    
    var expectedPrimaryStats = {
        'combat-power': 677,
        'weapon-power': 510,
        'hitpoints': 6233,
        'attack-rating': 2466,
        'heal-rating': 1515
    };

    var allSums = tswcalc.summary.collectAllStats();

    deepEqual(allSums.primary, expectedPrimaryStats);
});

test('should calculate costs for 10.6+ QL build', 4, function() {
    create10_6To10_9MixBuild();

    tswcalc.summary.updateCosts();

    equal($('#bb-cost').html(), '19600');
    equal($('#pantheon-cost').html(), '1930');
    equal($('#cu-cost').html(), '9');
    equal($('#af-cost').html(), '0');
});

test('should include currency costs when includeItemCosts checked', 4, function() {
    create10_6To10_9MixBuild();

    tswcalc.summary.updateCosts();
    tswcalc.summary.checkIncludeItemCosts();

    equal($('#bb-cost').html(), '21850');
    equal($('#pantheon-cost').html(), '2290');
    equal($('#cu-cost').html(), '9');
    equal($('#af-cost').html(), '0');
});


test('combat power above 5200 check', 3, function() {
    create10_9DPSBuild();

    var expectedPrimaryStats = {
        'combat-power': 899,
        'weapon-power': 510,
        'hitpoints': 2070,
        'attack-rating': 5868,
        'heal-rating': 0
    };

    var allSums = tswcalc.summary.collectAllStats();

    deepEqual(allSums.primary, expectedPrimaryStats);
    
    //Add epic violences
    $('#ring-signet-quality').val('epic');
    $('#ring-pick-signet').val('21');
    $('#neck-signet-quality').val('epic');
    $('#neck-pick-signet').val('21');
    $('#wrist-signet-quality').val('epic');
    $('#wrist-pick-signet').val('21');
    
    expectedPrimaryStats = {
        'combat-power': 929,
        'weapon-power': 510,
        'hitpoints': 2070,
        'attack-rating': 6291,
        'heal-rating': 0
    };

    var allSums = tswcalc.summary.collectAllStats();

    deepEqual(allSums.primary, expectedPrimaryStats);
    
    //Now with a 10.5 weapon
    $('#weapon-ql').val('10.5');
    
    expectedPrimaryStats = {
        'combat-power': 874,
        'weapon-power': 457,
        'hitpoints': 2070,
        'attack-rating': 6291,
        'heal-rating': 0
    };

    var allSums = tswcalc.summary.collectAllStats();

    deepEqual(allSums.primary, expectedPrimaryStats);
});
