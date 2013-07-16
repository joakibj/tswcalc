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
        tswcalc.slots[slotId].ql('10.' + values[0]);
        tswcalc.slots[slotId].role(tswcalc.data.role_mapping.to_stat[values[1]]);
        tswcalc.slots[slotId].glyphQl('10.' + values[2]);
        tswcalc.slots[slotId].primaryGlyph(tswcalc.data.stat_mapping.to_stat[values[3]]);
        tswcalc.slots[slotId].secondaryGlyph(tswcalc.data.stat_mapping.to_stat[values[4]]);
        tswcalc.slots[slotId].el.btn.primary[values[5]].click();
        tswcalc.slots[slotId].el.btn.secondary[values[6]].click();
        // support signets
        if (typeof values[7] !== 'undefined' && typeof values[8] !== 'undefined') {
            if (values[8] >= 80) {
                tswcalc.slots[slotId].el.btn.nyraid.prop('disabled', false);
                tswcalc.slots[slotId].el.btn.nyraid.prop('checked', true);
                tswcalc.slots[slotId].el.btn.nyraid.change();
            } else {
                var signetQuality = tswcalc.data.signet_quality_mapping.to_name[values[7]];
                var signetId = values[8] != '0' ? values[8] : 'none';
                checkIfNyRaidItemAndEnableCheckButton(slotId);
                changeSignet(slotId, signetQuality, signetId);
            }
        } else {
            checkIfNyRaidItemAndEnableCheckButton(slotId);
            changeSignet(slotId, 'none', 'none');
        }
    };

    var checkIfNyRaidItemAndEnableCheckButton = function(slotId) {
        if (isAllowedNyRaidItem(slotId)) {
            tswcalc.slots[slotId].el.btn.nyraid.prop('disabled', false);
        }
    };

    var changeSignet = function(slotId, quality, id) {
        tswcalc.slots[slotId].signetQuality(quality);
        tswcalc.slots[slotId].signetId(id);
        tswcalc.slots[slotId].el.signetId.change();
    };

    var isAllowedNyRaidItem = function(slotId) {
        return !tswcalc.slots[slotId].isWeapon() && typeof tswcalc.data.ny_raid_items[slotId][tswcalc.slots[slotId].role()] !== 'undefined';
    };

    var oPublic = {
        start: start
    };

    return oPublic;
}();