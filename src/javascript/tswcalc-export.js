function Export() {
    var self = this;
    var exportType = 0;
    var slotState = 0;

    this.initiate = function() {
        this.slotState = {};
        $('a.export').on('click', function(event) {
            self.exportType = $(event.target).attr('data');
            self.startExport();
        });

        $('#open-export-modal').on('shown', function() {
            $('#export-textarea').focus();
        });

        $('#export-textarea').focus(function() {
            $(this).select();

            $(this).mouseup(function() {
                $(this).unbind('mouseup');
                return false;
            });
        });
    };

    this.startExport = function() {
        if (this.exportType == 'url') {
            this.startExportUrl();
        } else if (this.exportType == 'bbcode') {
            this.startExportBBCode();
        }
    };

    this.startExportUrl = function() {
        this.collectAllSlotStates();
        url = this.createExportUrl();
        $('#export-textarea').attr('rows', '1');
        $('#export-textarea').html(location.origin + location.pathname + '#' + url);
    };

    this.createExportUrl = function() {
        var url = '';
        for (var i = 0; i < template_data.slots.length; i++) {
            url += this.createSlotUrl(template_data.slots[i].id_prefix);
            if (i < (template_data.slots.length - 1)) {
                url += '&';
            }
        }
        return url;
    };

    this.createSlotUrl = function(slotName) {
        var slot = this.slotState[slotName];
        return slotName + '=' + slot.ql + ',' + slot.role + ',' + slot.glyph_ql + ',' + slot.primary_glyph + ',' + slot.secondary_glyph +
            ',' + slot.primary_dist + ',' + slot.secondary_dist;
    };

    this.startExportBBCode = function() {
        this.collectAllSlotStates();
        dust.render('export\bbcode', {
            slotState: this.dustSlotState(),
            summary: summary.updateAllStats
        },

        function(err, out) {
            if (err) {
                console.log(err);
            }
            $('#export-textarea').attr('rows', '10');
            $('#export-textarea').html(out);
        });
    };

    this.dustSlotState = function() {
        var states = [];
        for (var i = 0; i < template_data.slots.length; i++) {
            var slot = template_data.slots[i].id_prefix;
            var group = template_data.slots[i].group;
            var curState = this.slotState[slot];
            var role = role_mapping.to_stat[curState.role];
            var primaryValue = 0;
            if (curState.primary_glyph != 0) {
                primaryValue = glyph_data.stat[stat_mapping.to_stat[curState.primary_glyph]].ql['10.' + curState.glyph_ql].slot[group].dist[curState.primary_dist];
            }
            var secondaryValue = 0;
            if (curState.secondary_glyph != 0) {
                secondaryValue = glyph_data.stat[stat_mapping.to_stat[curState.secondary_glyph]].ql['10.' + curState.glyph_ql].slot[group].dist[curState.secondary_dist];
            }
            var statType = 0;
            var statValue = 0;
            if (role == 'healer') {
                statType = 'Heal Rating';
                statValue = custom_gear_data[group].heal_dps['ql10.' + curState.ql].rating;
            } else if (role == 'dps') {
                statType = 'Attack Rating';
                statValue = custom_gear_data[group].heal_dps['ql10.' + curState.ql].rating;
            } else if (role == 'tank') {
                statType = 'Hitpoints';
                statValue = custom_gear_data[group].tank['ql10.' + curState.ql].hitpoints;
            } else if (template_data.slots[i].is_weapon) {
                statType = 'Weapon Power';
                statValue = custom_gear_data[group]['10.' + curState.ql].weapon_power;
            }

            var state = {
                name: capitalise(slot),
                role: this.blankIfNone(capitalise(role)),
                ql: curState.ql,
                stat_type: statType,
                stat_value: statValue,
                glyph_ql: curState.glyph_ql,
                primary_glyph: this.blankIfNone(capitalise(stat_mapping.to_stat[curState.primary_glyph])),
                primary_dist: curState.primary_dist,
                primary_value: primaryValue,
                secondary_glyph: this.blankIfNone(capitalise(stat_mapping.to_stat[curState.secondary_glyph])),
                secondary_dist: curState.secondary_dist,
                secondary_value: secondaryValue
            };
            states.push(state);
        }
        return states;
    };

    this.blankIfNone = function(str) {
        if (str == 'None') {
            return '';
        }
        return str;
    };

    this.blankIfZero = function(sums) {
        for (var primary in sums.primary) {
            if (sums.primary.hasOwnProperty(primary)) {
                if (sums.primary[primary]) {
                    sums.primary[primary] = '';
                }
            }
        }
    };

    this.collectAllSlotStates = function() {
        for (var i = 0; i < template_data.slots.length; i++) {
            this.collectSlotState(template_data.slots[i].id_prefix);
        }
    };

    this.collectSlotState = function(slotId) {
        this.slotState[slotId] = {
            ql: self.stripContent($('#' + slotId + '-ql').val()),
            role: self.stripContent($('#' + slotId + '-role').val()),
            glyph_ql: self.stripContent($('#' + slotId + '-glyph-ql').val()),
            primary_glyph: self.stripContent($('#' + slotId + '-primary-glyph').val()),
            secondary_glyph: self.stripContent($('#' + slotId + '-secondary-glyph').val()),
            primary_dist: buttonHandler[slotId].getActiveDist('primary').innerHTML,
            secondary_dist: buttonHandler[slotId].getActiveDist('secondary').innerHTML
        };
    };

    this.stripContent = function(val) {
        if (val == null || val == 'none') {
            val = 0;
        }

        var qlpattern = /\d+\.\d/;
        if (val != 0 && val.match(qlpattern)) {
            return val.split('.')[1];
        } else if ($.inArray(val, Object.keys(stat_mapping.to_num)) != -1) {
            return stat_mapping.to_num[val];
        } else if ($.inArray(val, Object.keys(role_mapping.to_num)) != -1) {
            return role_mapping.to_num[val];
        } else {
            return val;
        }
    };
};