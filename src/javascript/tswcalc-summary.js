function Summary() {
    self = this;

    this.updateAllStats = function() {
        self.updateCosts();
        primarySums = self.updatePrimaryStats();
        offensiveDefensiveSums = self.updateOffensiveDefensiveStats();
        return {
            primary: primarySums,
            offensive_defensive: offensiveDefensiveSums
        };
    };

    this.updateCosts = function() {
        var blackBullions = 0;
        var criterionUpgrades = 0;
        var astralFuses = 0;
        for (var i = 0; i < template_data.slots.length; i++) {
            var ql = selectHandler[template_data.slots[i].id_prefix].getQl();
            var glyphQl = selectHandler[template_data.slots[i].id_prefix].getGlyphQl();
            blackBullions += bb_costs['glyph'][glyphQl].cost;
            if (template_data.slots[i].group == 'weapon') {
                blackBullions += bb_costs['weapon'][ql].cost;
            } else {
                blackBullions += bb_costs['talisman'][ql].cost;
            }
            if (ql == '10.5') {
                criterionUpgrades++;
            }
            if (glyphQl == '10.5') {
                astralFuses++;
            }
        }
        $('#bb-cost').html(blackBullions);
        $('#cu-cost').html(criterionUpgrades);
        $('#af-cost').html(astralFuses);
    };

    this.updatePrimaryStats = function() {
        this.updateCosts();
        var sums = this.collectPrimaryStats();

        for (var stat in sums) {
            if (sums.hasOwnProperty(stat)) {
                this.updateOnePrimaryStat(stat, sums[stat]);
            }
        }

        return sums;
    };

    this.updateOnePrimaryStat = function(stat, value) {
        $('#stat-' + stat).text(value);
    };

    this.collectPrimaryStats = function() {
        var sums = {
            'combat-power': 0,
            'weapon-power': 75,
            'hitpoints': 1970,
            'attack-rating': 0,
            'heal-rating': 0
        };

        for (var i = 0; i < template_data.slots.length; i++) {
            var role = selectHandler[template_data.slots[i].id_prefix].getRole();
            var ql = selectHandler[template_data.slots[i].id_prefix].getQl();
            if (role == 'dps') {
                sums['attack-rating'] += custom_gear_data[template_data.slots[i].group].heal_dps['ql' + (ql)].rating;
            } else if (role == 'healer') {
                sums['heal-rating'] += custom_gear_data[template_data.slots[i].group].heal_dps['ql' + (ql)].rating;
            } else if (role == 'tank') {
                sums['hitpoints'] += custom_gear_data[template_data.slots[i].group].tank['ql' + (ql)].hitpoints;
            } else if (typeof role == 'undefined' && template_data.slots[i].is_weapon) {
                sums['weapon-power'] = custom_gear_data[template_data.slots[i].group][ql].weapon_power;
            }
        }
        sums['combat-power'] = this.calculateCombatPower(sums['attack-rating'], sums['weapon-power']);
        return sums;
    };

    this.calculateCombatPower = function(attack_rating, weapon_power) {
        return Math.round((375 - (600 / (Math.pow(Math.E, (attack_rating / 1400)) + 1))) * (1 + (weapon_power / 375)));
    };

    this.updateOffensiveDefensiveStats = function() {
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

        this.updateCosts();
        for (var i = 0; i < template_data.slots.length; i++) {
            var glyphQl = selectHandler[template_data.slots[i].id_prefix].getGlyphQl();
            var primaryGlyph = selectHandler[template_data.slots[i].id_prefix].getGlyph('primary');
            var secondaryGlyph = selectHandler[template_data.slots[i].id_prefix].getGlyph('secondary');

            if (primaryGlyph != "none" || secondaryGlyph != "none") {
                var primaryDist = buttonHandler[template_data.slots[i].id_prefix].getActiveDist('primary').innerHTML;
                var secondaryDist = buttonHandler[template_data.slots[i].id_prefix].getActiveDist('secondary').innerHTML;

                if (primaryDist != null || secondaryDist != null) {
                    var primaryValue = 0;
                    var secondaryValue = 0;
                    if (primaryGlyph != "none") {
                        primaryValue = glyph_data.stat[primaryGlyph].ql[glyphQl].slot[template_data.slots[i].group].dist[primaryDist];
                        sums[primaryGlyph] += primaryValue;
                        $('#' + template_data.slots[i].id_prefix + '-primary-glyph-value').html('+' + primaryValue);
                    } else {
                        $('#' + template_data.slots[i].id_prefix + '-primary-glyph-value').html('0');
                    }
                    if (secondaryGlyph != "none") {
                        secondaryValue = glyph_data.stat[secondaryGlyph].ql[glyphQl].slot[template_data.slots[i].group].dist[secondaryDist];
                        sums[secondaryGlyph] += secondaryValue;
                        $('#' + template_data.slots[i].id_prefix + '-secondary-glyph-value').html('+' + secondaryValue);
                    } else {
                        $('#' + template_data.slots[i].id_prefix + '-secondary-glyph-value').html('0');
                    }

                }
            } else {
                $('#' + template_data.slots[i].id_prefix + '-primary-glyph-value').html('0');
                $('#' + template_data.slots[i].id_prefix + '-secondary-glyph-value').html('0');
            }
        }
        sums['critical-chance'] = this.calculateCriticalChance(sums['critical-rating']);
        sums['critical-power-percentage'] = this.calculateCriticalPowerPercentage(sums['critical-power']);
        self.updateStats(sums);
        return sums;
    };

    this.calculateCriticalChance = function(critical_rating) {
        return 39 - (68 / (Math.pow(Math.E, (critical_rating / 787.6)) + 1)).toFixed(2);
    };

    this.calculateCriticalPowerPercentage = function(critical_power) {
        return Math.sqrt(5 * critical_power + 625).toFixed(2);
    };

    this.updateStats = function(sums) {
        for (var stat in sums) {
            if (sums.hasOwnProperty(stat)) {
                if (sums[stat] > 0) {
                    if (stat == 'critical-power-percentage' || stat == 'critical-chance') {
                        $('#stat-' + stat).html(sums[stat].toString().substring(0, 4) + " %");
                    } else {
                        $('#stat-' + stat).html('+' + sums[stat]);
                    }
                } else {
                    if (stat == 'critical-power-percentage' || stat == 'critical-chance') {
                        $('#stat-' + stat).html("0 %");
                    } else {
                        $('#stat-' + stat).html("0");
                    }
                }
            }
        }
    };
};