function Export() {
    var self = this;
    this.exportType = 0;
    this.slotState = {};

    this.el = {
        export_btn: $('a.export'),
        export_textarea: $('#export-textarea'),
        open_export_modal: $('#open-export-modal')
    };

    this.initiate = function() {
        this.bindEvents();
    };

    this.bindEvents = function() {
        this.el.export_btn.on('click', function(event) {
            self.exportType = $(event.target).attr('data');
            self.startExport();
        });

        this.el.open_export_modal.on('shown', function() {
            self.el.export_textarea.focus();
        });

        this.el.export_textarea.focus(function() {
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
        this.el.export_textarea.attr('rows', '1');
        this.el.export_textarea.html(location.origin + location.pathname + '#' + url);
    };

    this.createExportUrl = function() {
        var url = '';
        var i = 0;
        for (var slotId in slots) {
            if (slots.hasSlot(slotId)) {
                var slot = slots[slotId];
                url += this.createSlotUrl(slot.id, this.slotState[slot.id]);
                if (i < slots.length() - 1) {
                    url += '&';
                }
                i++;
            }
        }
        return url;
    };

    this.createSlotUrl = function(slotId, state) {
        return slotId + '=' + state.ql + ',' + state.role + ',' + state.glyph_ql + ',' + state.primary_glyph + ',' + state.secondary_glyph +
            ',' + state.primary_dist + ',' + state.secondary_dist + ',' + state.signet_quality + ',' + state.signet_id;
    };

    this.startExportBBCode = function() {
        this.collectAllSlotStates();
        dust.render('export\bbcode', {
            slotState: this.dustSlotState(),
            summary: summary.collectAllStats()
        },

        function(err, out) {
            if (err) {
                console.log(err);
            }
            self.el.export_textarea.attr('rows', '10');
            self.el.export_textarea.html(out);
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
            if (curState.primary_glyph !== 0) {
                primaryValue = glyph_data.stat[stat_mapping.to_stat[curState.primary_glyph]].ql['10.' + curState.glyph_ql].slot[group].dist[curState.primary_dist];
            }
            var secondaryValue = 0;
            if (curState.secondary_glyph !== 0) {
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

            var signet = slots[slot].signet();

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
                secondary_value: secondaryValue,
                signet_name: signet.name,
                signet_quality: this.blankIfNone(capitalise(signet_quality_mapping.to_name[curState.signet_quality])),
                signet_description: slots[slot].signetDescription(),
                signet_colour: signet_quality_mapping.to_colour[signet_quality_mapping.to_name[curState.signet_quality]],
                is_item: signet.id >= 80 ? true : false
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

    this.blankIfZero = function(str) {
        if (str == '0') {
            return '';
        }
        return str;
    };

    this.collectAllSlotStates = function() {
        this.slotState = slots.mappedState();
    };
}