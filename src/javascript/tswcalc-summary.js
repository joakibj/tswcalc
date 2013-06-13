function Summary() {
    self = this;

    this.updateAllStats = function() {
        self.updateCosts();
        self.updatePrimaryStats();
        self.updateOffensiveDefensiveStats();
    };

    this.collectAllStats = function() {
        return {
            primary: self.collectPrimaryStats(),
            offensive_defensive: self.collectOffensiveDefensiveStats()
        };
    };

    this.updateCosts = function() {
        var blackBullions = 0;
        var criterionUpgrades = 0;
        var astralFuses = 0;
        for (var i = 0; i < template_data.slots.length; i++) {
            var ql = slots[template_data.slots[i].id_prefix].ql()
            var glyphQl = slots[template_data.slots[i].id_prefix].glyphQl()
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
        var sums = this.collectPrimaryStats();

        for (var stat in sums) {
            if (sums.hasOwnProperty(stat)) {
                this.updateOnePrimaryStat(stat, sums[stat]);
            }
        }
        this.updateCosts();
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
            var slot = template_data.slots[i];
            var role = slots[slot.id_prefix].role();
            var ql = slots[slot.id_prefix].ql();
            if (slot.group == 'major') {
                var signetId = slots[slot.id_prefix].signetId();
                if (signetId != 'none') {
                    var signet = signet_data.find(slot.group, signetId);
                    sums[signet.stat] += slots[slot.id_prefix].determineSignetQualityValue(signet);
                }
            }
            if (role == 'dps') {
                sums['attack-rating'] += custom_gear_data[slot.group].heal_dps['ql' + (ql)].rating;
            } else if (role == 'healer') {
                sums['heal-rating'] += custom_gear_data[slot.group].heal_dps['ql' + (ql)].rating;
            } else if (role == 'tank') {
                sums['hitpoints'] += custom_gear_data[slot.group].tank['ql' + (ql)].hitpoints;
            } else if (role == 'none' && slot.is_weapon) {
                sums['weapon-power'] = custom_gear_data[slot.group][ql].weapon_power;
            }
        }
        sums['combat-power'] = this.calculateCombatPower(sums['attack-rating'], sums['weapon-power']);
        return sums;
    };

    this.calculateCombatPower = function(attack_rating, weapon_power) {
        return Math.round((375 - (600 / (Math.pow(Math.E, (attack_rating / 1400)) + 1))) * (1 + (weapon_power / 375)));
    };

    this.updateOffensiveDefensiveStats = function() {
        var sums = this.collectOffensiveDefensiveStats();

        this.updateGlyphValues();
        this.updateStats(sums);
        this.updateCosts();
    };

    this.collectOffensiveDefensiveStats = function() {
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
        for (var i = 0; i < template_data.slots.length; i++) {
            var slot = template_data.slots[i];
            var glyphQl = slots[template_data.slots[i].id_prefix].glyphQl();
            var primaryGlyphStat = slots[template_data.slots[i].id_prefix].primaryGlyph();
            var secondaryGlyphStat = slots[template_data.slots[i].id_prefix].secondaryGlyph();

            var primaryGlyphDist = buttonHandler[slot.id_prefix].getActiveDist('primary').innerHTML;
            var secondaryGlyphDist = buttonHandler[slot.id_prefix].getActiveDist('secondary').innerHTML;

            sums[primaryGlyphStat] += this.getGlyphValue(primaryGlyphStat, glyphQl, slot.group, primaryGlyphDist);
            sums[secondaryGlyphStat] += this.getGlyphValue(secondaryGlyphStat, glyphQl, slot.group, secondaryGlyphDist);
        }

        sums['critical-chance'] = this.calculateCriticalChance(sums['critical-rating']);
        sums['critical-power-percentage'] = this.calculateCriticalPowerPercentage(sums['critical-power']);
        return sums;
    };

    this.getGlyphValue = function(stat, glyph_ql, group, glyph_dist) {
        if (stat == 'none' || glyph_dist === null) {
            return 0;
        }
        return glyph_data.stat[stat].ql[glyph_ql].slot[group].dist[glyph_dist];
    };

    this.updateGlyphValues = function() {
        for (var i = 0; i < template_data.slots.length; i++) {
            var slot = template_data.slots[i];
            var glyphQl = slots[slot.id_prefix].glyphQl();
            var primaryGlyphStat = slots[slot.id_prefix].primaryGlyph();
            var secondaryGlyphStat = slots[slot.id_prefix].secondaryGlyph();

            var primaryGlyphDist = buttonHandler[slot.id_prefix].getActiveDist('primary').innerHTML;
            var secondaryGlyphDist = buttonHandler[slot.id_prefix].getActiveDist('secondary').innerHTML;

            var primaryGlyphValue = this.getGlyphValue(primaryGlyphStat, glyphQl, slot.group, primaryGlyphDist);
            var secondaryGlyphValue = this.getGlyphValue(secondaryGlyphStat, glyphQl, slot.group, secondaryGlyphDist);

            this.updateGlyphValue(slot.id_prefix, primaryGlyphStat, 'primary', primaryGlyphValue);
            this.updateGlyphValue(slot.id_prefix, secondaryGlyphStat, 'secondary', secondaryGlyphValue);
        }
    };

    this.updateGlyphValue = function(slotId, stat, glyph, value) {
        if (stat != 'none' && glyph != 'none' && value !== 0) {
            $('#' + slotId + '-' + glyph + '-glyph-value').html('+' + value);
        } else {
            $('#' + slotId + '-' + glyph + '-glyph-value').html('0');
        }
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
                    $('#stat-' + stat).html(this.isStatPercentageBased(stat) ? sums[stat].toString().substring(0, 4) + " %" : '+' + sums[stat]);
                } else {
                    $('#stat-' + stat).html(this.isStatPercentageBased(stat) ? "0 %" : "0");
                }
            }
        }
    };

    this.isStatPercentageBased = function(statName) {
        return statName == 'critical-power-percentage' || statName == 'critical-chance';
    };
}