var tswcalc = tswcalc || {};

tswcalc.export = function() {
    var exportType = 0;
    var slotState = {};

    var el = {};
    var elInit = function() {
        return {
            export_btn: $('a.export'),
            export_textarea: $('#export-textarea'),
            open_export_modal: $('#open-export-modal')
        };
    };

    var init = function() {
        el = elInit();
        bindEvents();
    };

    var bindEvents = function() {
        el.export_btn.on('click', function(event) {
            exportType = $(event.target).attr('data');
            startExport();
        });

        el.open_export_modal.on('shown', function() {
            el.export_textarea.focus();
        });

        el.export_textarea.focus(function() {
            $(this).select();

            $(this).mouseup(function() {
                $(this).unbind('mouseup');
                return false;
            });
        });
    };

    var startExport = function() {
        if (exportType == 'url') {
            startExportUrl();
        } else if (exportType == 'bbcode') {
            startExportBBCode();
        }
    };

    var startExportUrl = function() {
        collectAllSlotStates();
        var url = createExportUrl();
        el.export_textarea.attr('rows', '1');
        el.export_textarea.html(location.origin + location.pathname + '#' + url);
    };

    var createExportUrl = function() {
        var url = '';
        var i = 0;
        for (var slotId in slots) {
            if (slots.hasSlot(slotId)) {
                var slot = slots[slotId];
                url += createSlotUrl(slot.id, slotState[slot.id]);
                if (i < slots.length() - 1) {
                    url += '&';
                }
                i++;
            }
        }
        return url;
    };

    var createSlotUrl = function(slotId, state) {
        return slotId + '=' + state.ql + ',' + state.role + ',' + state.glyph_ql + ',' + state.primary_glyph + ',' + state.secondary_glyph +
            ',' + state.primary_dist + ',' + state.secondary_dist + ',' + state.signet_quality + ',' + state.signet_id;
    };

    var startExportBBCode = function() {
        collectAllSlotStates();
        dust.render('export\bbcode', {
            slotState: dustSlotState(),
            summary: tswcalc.summary.collectAllStats()
        },

        function(err, out) {
            if (err) {
                console.log(err);
            }
            el.export_textarea.attr('rows', '10');
            el.export_textarea.html(out);
        });
    };

    var dustSlotState = function() {
        var states = [];
        for (var i = 0; i < template_data.slots.length; i++) {
            var slot = template_data.slots[i].id_prefix;
            var group = template_data.slots[i].group;
            var curState = slotState[slot];
            var role = role_mapping.to_stat[curState.role];
            var primaryValue = slots[slot].primaryGlyphValue();
            var secondaryValue = slots[slot].secondaryGlyphValue();
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
                name: tswcalc.util.capitalise(slot),
                role: tswcalc.util.blankIfNone(tswcalc.util.capitalise(role)),
                ql: curState.ql,
                stat_type: statType,
                stat_value: statValue,
                glyph_ql: curState.glyph_ql,
                primary_glyph: tswcalc.util.blankIfNone(tswcalc.util.capitalise(stat_mapping.to_stat[curState.primary_glyph])),
                primary_dist: curState.primary_dist,
                primary_value: primaryValue,
                secondary_glyph: tswcalc.util.blankIfNone(tswcalc.util.capitalise(stat_mapping.to_stat[curState.secondary_glyph])),
                secondary_dist: curState.secondary_dist,
                secondary_value: secondaryValue,
                signet_name: signet.name,
                signet_quality: tswcalc.util.blankIfNone(tswcalc.util.capitalise(signet_quality_mapping.to_name[curState.signet_quality])),
                signet_description: slots[slot].signetDescription(),
                signet_colour: signet_quality_mapping.to_colour[signet_quality_mapping.to_name[curState.signet_quality]],
                is_item: signet.id >= 80 ? true : false
            };
            states.push(state);
        }
        return states;
    };

    var collectAllSlotStates = function() {
        slotState = slots.mappedState();
    };

    var oPublic = {
        init: init,
        createSlotUrl: createSlotUrl,
        createExportUrl: createExportUrl,
        collectAllSlotStates: collectAllSlotStates,
        startExportUrl: startExportUrl,
        startExportBBCode: startExportBBCode
    };

    return oPublic;
}();