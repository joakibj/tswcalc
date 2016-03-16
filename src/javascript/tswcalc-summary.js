var tswcalc = tswcalc || {};

tswcalc.summary = function() {

    var el = {};
    var elInit = function() {
        return {
            black_bullion_cost: $('#bb-cost'),
            pantheon_cost: $('#pantheon-cost'),
            criterion_upgrade_cost: $('#cu-cost'),
            astral_fuse_cost: $('#af-cost'),
            supernal_upgrade_cost: $('#su-cost'),
            eleventh_hour_cost: $('#11th-cost'),
            activateRaid: $('#summary-activate-raid'),
            includeItemCosts: $('#summary-include-item-costs')
        };
    };

    var init = function() {
        el = elInit();
        bindEvents();
    };

    var bindEvents = function() {
        el.activateRaid.on('change', activateRaidItems);
        el.includeItemCosts.on('change', updateAllStats);
    };

    var activateRaidItems = function(event) {
        updateAllStats();
    };

    var updateAllStats = function() {
        updateCosts();
        updatePrimaryStats();
        updateOffensiveDefensiveStats();
        updateGlyphValues();
        updateURL();
    };
    
   var updateURL = function(event) {
        window.location.hash = tswcalc.export.createExportUrl();
    };

    var collectAllStats = function() {
        return {
            primary: collectPrimaryStats(),
            offensive_defensive: collectOffensiveDefensiveStats()
        };
    };

    var updateCosts = function() {
        var blackBullions = 0;
        var pantheons = 0;
        var criterionUpgrades = 0;
        var supernalUpgrades = 0;
        var astralFuses = 0;
        var eleventhHourKits = 0;
        for (var slotId in tswcalc.slots) {
            if (tswcalc.slots.hasSlot(slotId)) {
                var slot = tswcalc.slots[slotId];
                blackBullions += slot.blackBullionCost();
                pantheons += slot.markOfThePantheonCost();
                criterionUpgrades += slot.criterionUpgradeCost();
                supernalUpgrades += slot.supernalUpgradeCost();
                astralFuses += slot.astralFuseCost();
                eleventhHourKits += slot.eleventhHourCost();
            }
        }
        if(el.includeItemCosts.is(':checked')) {
            blackBullions += tswcalc.data.costs.item.criterion.bullion * criterionUpgrades;
            pantheons += tswcalc.data.costs.item.criterion.pantheon * criterionUpgrades;
            blackBullions += tswcalc.data.costs.item.astral.bullion * astralFuses;
            pantheons += tswcalc.data.costs.item.astral.pantheon * astralFuses;
        }
        el.black_bullion_cost.html(blackBullions);
        el.pantheon_cost.html(pantheons);
        el.criterion_upgrade_cost.html(criterionUpgrades);
        el.supernal_upgrade_cost.html(supernalUpgrades);
        el.astral_fuse_cost.html(astralFuses);
        el.eleventh_hour_cost.html(eleventhHourKits);
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
            'hitpoints': 2070,
            'attack-rating': 0,
            'heal-rating': 0
        };

        for (var slotId in tswcalc.slots) {
            if (tswcalc.slots.hasSlot(slotId)) {
                var slot = tswcalc.slots[slotId];
                if(slot.isWeapon() && !slot.weaponDrawn) {
                    continue;
                }
                var ql = slot.ql();
                if (slot.group == 'major') {
                    var signet = slot.signet();
                    if (signet.id !== 0 && signet.id < 80) {
                        sums[signet.stat] += slot.determineSignetQualityValue(signet);
                    }
                }
                //TODO: refactor
                if (slot.isWeapon()) {
                    sums['weapon-power'] = tswcalc.data.custom_gear_data[slot.group][ql].weapon_power;
                }
                else {
                    switch (slot.item().role) {
                        case 'dps':
                            sums['attack-rating'] += tswcalc.data.custom_gear_data[slot.group].heal_dps['ql' + (ql)].rating;
                            break;
                        case 'healer':
                            sums['heal-rating'] += tswcalc.data.custom_gear_data[slot.group].heal_dps['ql' + (ql)].rating;
                            break;
                        case 'tank':
                            sums['hitpoints'] += tswcalc.data.custom_gear_data[slot.group].tank['ql' + (ql)].hitpoints;
                            break;
                        default:
                            console.log('Illegal role value when collecting primary stats');
                            break;
                    }
                }
            }
        }
        var pureAnima = tswcalc.miscslot.pureAnima();
        pureAnima.bonus.forEach(function(bonus){
            sums[bonus.stat] += bonus.add;
        });
        sums['combat-power'] = calculateCombatPower(sums['attack-rating'], sums['weapon-power']);
        return sums;
    };

    var calculateCombatPower = function(attack_rating, weapon_power) {
        if (attack_rating < 5200){
            return Math.round((375 - (600 / (Math.pow(Math.E, (attack_rating / 1400)) + 1))) * (1 + (weapon_power / 375)));
        } else {
            var arMultiplier = .00008 * weapon_power + .0301;
            return Math.round(204.38 + .5471 * weapon_power + arMultiplier * attack_rating);
        }
    };

    var updateOffensiveDefensiveStats = function() {
        var sums = collectOffensiveDefensiveStats();
        updateStats(sums);
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
            'evade-chance': 0,
            'physical-protection': 300,
            'magical-protection': 300
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

        var anima = tswcalc.miscslot.anima();
        sums[anima.bonus.stat] += anima.bonus.add;
        sums['critical-power-percentage'] = calculateCriticalPowerPercentage(sums['critical-power']);

        //TODO: refactor
        if (el.activateRaid.is(':checked')) {
            for (var slotId in tswcalc.slots) {
                if (tswcalc.slots.hasSlot(slotId)) {
                    var signet = tswcalc.slots[slotId].signet();
                    if (signet.bonus !== undefined) {
                        for (var statIdx = 0; statIdx < signet.bonus.stat.length; statIdx++) {
                            if (signet.bonus.add !== undefined) {
                                sums[signet.bonus.stat[statIdx]] += signet.bonus.add;
                            } else if (signet.bonus.multiply !== undefined) {
                                sums[signet.bonus.stat[statIdx]] = signet.bonus.multiply * sums[signet.bonus.stat[statIdx]];
                            }
                        }
                    }
                }
            }
        }
        sums['critical-chance'] = calculateCriticalChance(sums['critical-rating']);
        sums['evade-chance'] = calculateEvadeChance(sums['evade-rating']);

        sums['critical-rating'] = parseInt(sums['critical-rating'].toFixed(0), 10);
        sums['critical-chance'] = sums['critical-chance'].toFixed(1);
        sums['critical-power-percentage'] = sums['critical-power-percentage'].toFixed(2);
        sums['penetration-rating'] = parseInt(sums['penetration-rating'].toFixed(0), 10);
        sums['evade-chance'] = sums['evade-chance'].toFixed(1);
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
        return 55.14 - (100.3 / (Math.pow(Math.E, (critical_rating / 790.3)) + 1));
    };

    var calculateCriticalPowerPercentage = function(critical_power) {
        return Math.sqrt(5 * critical_power + 625);
    };

    var calculateEvadeChance = function(evade_rating) {
        return 26.3 - (42.64 / (Math.pow(Math.E, (evade_rating / 694.3)) + 1));
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
        return statName == 'critical-power-percentage' || statName == 'critical-chance' || statName == 'evade-chance';
    };

    var checkActivateRaid = function() {
        el.activateRaid.prop('checked', true);
        el.activateRaid.change();
    };
    
    var checkIncludeItemCosts = function() {
        el.includeItemCosts.prop('checked', true);
        el.includeItemCosts.change();
    };

    var oPublic = {
        init: init,
        calculateCriticalChance: calculateCriticalChance,
        calculateCriticalPowerPercentage: calculateCriticalPowerPercentage,
        calculateEvadeChance: calculateEvadeChance,
        calculateCombatPower: calculateCombatPower,
        collectPrimaryStats: collectPrimaryStats,
        collectOffensiveDefensiveStats: collectOffensiveDefensiveStats,
        collectAllStats: collectAllStats,
        updateAllStats: updateAllStats,
        checkActivateRaid: checkActivateRaid,
        checkIncludeItemCosts : checkIncludeItemCosts
    };

    return oPublic;
}();