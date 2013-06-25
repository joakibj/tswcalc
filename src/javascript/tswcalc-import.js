var tswcalc = tswcalc || {};

tswcalc.import = function() {

    var start = function(vars) {
        for (var slotId in vars) {
            if (vars.hasOwnProperty(slotId)) {
                splitVars = vars[slotId].split(',');
                updateSlot(slotId, splitVars);
            }
        }
        tswcalc.summary.updateAllStats();
    };

    var updateSlot = function(slotId, values) {
        slots[slotId].ql('10.' + values[0]);
        slots[slotId].role(role_mapping.to_stat[values[1]]);
        slots[slotId].glyphQl('10.' + values[2]);
        slots[slotId].primaryGlyph(stat_mapping.to_stat[values[3]]);
        slots[slotId].secondaryGlyph(stat_mapping.to_stat[values[4]]);
        slots[slotId].el.btn.primary[values[5]].click();
        slots[slotId].el.btn.secondary[values[6]].click();
        // support signets
        if (typeof values[7] !== undefined && typeof values[8] !== undefined) {
            if (values[8] >= 80) {
                slots[slotId].el.btn.nyraid.prop('disabled', false);
                slots[slotId].el.btn.nyraid.prop('checked', true);
                slots[slotId].el.btn.nyraid.change();
            } else {
                if (!slots[slotId].isWeapon() && ny_raid_items[slotId][slots[slotId].role()] !== undefined) {
                    slots[slotId].el.btn.nyraid.prop('disabled', false);
                }
                slots[slotId].signetQuality(signet_quality_mapping.to_name[values[7]]);
                slots[slotId].signetId(values[8] != '0' ? values[8] : 'none');
                slots[slotId].el.signetId.change();
            }
        }
    };

    var oPublic = {
        start: start
    };

    return oPublic;
}();