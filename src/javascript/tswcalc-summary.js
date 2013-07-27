var tswcalc = tswcalc || {};

tswcalc.summary = function() {

    var el = {};
    var elInit = function() {
        return {
            black_bullion_cost: $('#bb-cost'),
            criterion_upgrade_cost: $('#cu-cost'),
            astral_fuse_cost: $('#af-cost'),
            activateRaid: $('#summary-activate-raid')
        };
    };

    var init = function() {
        el = elInit();
        bindEvents();
    };

    var bindEvents = function() {
        el.activateRaid.on('change', activateRaidItems);
    };

    var activateRaidItems = function(event) {
        updateAllStats();
    };

    var updateAllStats = function() {
        updateCosts();
        updatePrimaryStats();
        updateOffensiveDefensiveStats();
    };

    var collectAllStats = function() {
        return {
            primary: collectPrimaryStats(),
            offensive_defensive: collectOffensiveDefensiveStats()
        };
    };

    var updateCosts = function() {
        var blackBullions = 0;
        var criterionUpgrades = 0;
        var astralFuses = 0;
        for (var slotId in tswcalc.slots) {
            if (tswcalc.slots.hasSlot(slotId)) {
                var slot = tswcalc.slots[slotId];
                blackBullions += slot.blackBullionCost();
                criterionUpgrades += slot.criterionUpgradeCost();
                astralFuses += slot.astralFuseCost();
            }
        }
        el.black_bullion_cost.html(blackBullions);
        el.criterion_upgrade_cost.html(criterionUpgrades);
        el.astral_fuse_cost.html(astralFuses);
    };

    var updatePrimaryStats = function() {
        var sums = collectPrimaryStats();

        for (var stat in sums) {
            if (sums.hasOwnProperty(stat)) {
                updateOnePrimaryStat(stat, sums[stat]);
            }
        }
    };

    var updateOnePrimaryStat = function(stat, value) {
        $('#stat-' + stat).text(value);
    };

    var collectPrimaryStats = function() {
        var sums = {
            'combat-power': 0,
            'weapon-power': 75,
            'hitpoints': 1970,
            'attack-rating': 0,
            'heal-rating': 0
        };

        for (var slotId in tswcalc.slots) {
            if (tswcalc.slots.hasSlot(slotId)) {
                var slot = tswcalc.slots[slotId];
                if(slot.isWeapon() && !slot.weaponDrawn) {
                    continue;
                }
                var role = slot.role();
                var ql = slot.ql();
                if (slot.group == 'major') {
                    var signet = slot.signet();
                    if (signet.id !== 0 && signet.id < 80) {
                        sums[signet.stat] += slot.determineSignetQualityValue(signet);
                    }
                }
                //TODO: refactor
                switch (role) {
                    case 'dps':
                        sums['attack-rating'] += tswcalc.data.custom_gear_data[slot.group].heal_dps['ql' + (ql)].rating;
                        break;
                    case 'healer':
                        sums['heal-rating'] += tswcalc.data.custom_gear_data[slot.group].heal_dps['ql' + (ql)].rating;
                        break;
                    case 'tank':
                        sums['hitpoints'] += tswcalc.data.custom_gear_data[slot.group].tank['ql' + (ql)].hitpoints;
                        break;
                    case 'none':
                        if (slot.isWeapon()) {
                            sums['weapon-power'] = tswcalc.data.custom_gear_data[slot.group][ql].weapon_power;
                        }
                        break;
                    default:
                        console.log('Illegal role value when collecting primary stats');
                        break;
                }
            }
        }
        sums['combat-power'] = calculateCombatPower(sums['attack-rating'], sums['weapon-power']);
        return sums;
    };

    var calculateCombatPower = function(attack_rating, weapon_power) {
        return Math.round((375 - (600 / (Math.pow(Math.E, (attack_rating / 1400)) + 1))) * (1 + (weapon_power / 375)));
    };

    var updateOffensiveDefensiveStats = function() {
        var sums = collectOffensiveDefensiveStats();

        updateGlyphValues();
        updateStats(sums);
        updateCosts();
    };

    var collectOffensiveDefensiveStats = function() {
        var sums = {
            'critical-rating': 0,
            'critical-chance': 0,
            'critical-power': 0,
            'critical-power-percentage': 0,
            'penetration-rating': 0,
            'hit-rating': 0,
            'block-rating': 0,
            'defense-rating': 0,
            'evade-rating': 0,
            'physical-protection': 249,
            'magical-protection': 249
        };
        for (var slotId in tswcalc.slots) {
            if (tswcalc.slots.hasSlot(slotId)) {
                var slot = tswcalc.slots[slotId];
                if(slot.isWeapon() && !slot.weaponDrawn) {
                    continue;
                }
                sums[slot.primaryGlyph()] += slot.primaryGlyphValue();
                sums[slot.secondaryGlyph()] += slot.secondaryGlyphValue();
            }
        }

        sums['critical-power-percentage'] = calculateCriticalPowerPercentage(sums['critical-power']);

        //TODO: refactor
        for (var slotId in tswcalc.slots) {
            if (tswcalc.slots.hasSlot(slotId)) {
                var slot = tswcalc.slots[slotId];
                if (el.activateRaid.is(':checked') && slot.signetId() >= 80) {
                    var signet = slot.signet();
                    if (signet.bonus !== undefined) {
                        for (var statIdx = 0; statIdx < signet.bonus.stat.length; statIdx++) {
                            if (signet.bonus.add !== undefined) {
                                sums[signet.bonus.stat[statIdx]] += signet.bonus.add;
                            } else if (signet.bonus.multiply !== undefined) {
                                if (signet.stack_max !== undefined) {
                                    sums[signet.bonus.stat[statIdx]] = (1 + (signet.bonus.multiply * signet.stack_max)) * sums[signet.bonus.stat[statIdx]];
                                } else {
                                    sums[signet.bonus.stat[statIdx]] = signet.bonus.multiply * sums[signet.bonus.stat[statIdx]];
                                }
                            }
                        }
                    }
                }
            }
        }
        sums['critical-chance'] = calculateCriticalChance(sums['critical-rating']);

        sums['critical-rating'] = parseInt(sums['critical-rating'].toFixed(0), 10);
        sums['critical-chance'] = sums['critical-chance'].toFixed(2);
        sums['critical-power-percentage'] = sums['critical-power-percentage'].toFixed(2);
        sums['penetration-rating'] = parseInt(sums['penetration-rating'].toFixed(0), 10);
        sums['magical-protection'] = parseInt(sums['magical-protection'].toFixed(0), 10);
        sums['physical-protection'] = parseInt(sums['physical-protection'].toFixed(0), 10);
        return sums;
    };

    var updateGlyphValues = function() {
        for (var slotId in tswcalc.slots) {
            if (tswcalc.slots.hasSlot(slotId)) {
                var slot = tswcalc.slots[slotId];
                slot.updateGlyphValues();
            }
        }
    };

    var calculateCriticalChance = function(critical_rating) {
        return 39 - (68 / (Math.pow(Math.E, (critical_rating / 787.6)) + 1));
    };

    var calculateCriticalPowerPercentage = function(critical_power) {
        return Math.sqrt(5 * critical_power + 625);
    };

    var updateStats = function(sums) {
        for (var stat in sums) {
            if (sums.hasOwnProperty(stat)) {
                if (sums[stat] > 0) {
                    $('#stat-' + stat).html(isStatPercentageBased(stat) ? sums[stat].toString().substring(0, 4) + " %" : '+' + sums[stat]);
                } else {
                    $('#stat-' + stat).html(isStatPercentageBased(stat) ? "0 %" : "0");
                }
            }
        }
    };

    var isStatPercentageBased = function(statName) {
        return statName == 'critical-power-percentage' || statName == 'critical-chance';
    };

    var checkActivateRaid = function() {
        el.activateRaid.prop('checked', true);
        el.activateRaid.change();
    };

    var oPublic = {
        init: init,
        calculateCriticalChance: calculateCriticalChance,
        calculateCriticalPowerPercentage: calculateCriticalPowerPercentage,
        calculateCombatPower: calculateCombatPower,
        collectPrimaryStats: collectPrimaryStats,
        collectOffensiveDefensiveStats: collectOffensiveDefensiveStats,
        collectAllStats: collectAllStats,
        updateCosts: updateCosts,
        updateOffensiveDefensiveStats: updateOffensiveDefensiveStats,
        updatePrimaryStats: updatePrimaryStats,
        updateAllStats: updateAllStats,
        checkActivateRaid: checkActivateRaid
    };

    return oPublic;
}();