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
        var slotObj = tswcalc.slots[slotId];
        if(values[0] > 10){
            slotObj.ql('11.0');
        }
        else {
            slotObj.ql('10.' + values[0]);
        }
        if(slotObj.isWeapon()) {
            slotObj.wtype(tswcalc.data.wtype_mapping.to_name[values[1]]);
            slotObj.el.wtype.change();
        } else {
            slotObj.itemId(values[1]);
            slotObj.el.itemId.change();
        }
        if(values[2] > 10) {
            slotObj.glyphQl('11.0');
            slotObj.el.glyphQl.change();
        }
        else {
            slotObj.glyphQl('10.' + values[2]);
        }
        slotObj.primaryGlyph(tswcalc.data.stat_mapping.to_stat[values[3]]);
        slotObj.secondaryGlyph(tswcalc.data.stat_mapping.to_stat[values[4]]);
        slotObj.el.btn.primary[values[5]].click();
        slotObj.el.btn.secondary[values[6]].click();
        // support signets
        if (typeof values[7] !== 'undefined' && typeof values[8] !== 'undefined' && values[8] !== "999") {
            if(values[8] >= 80 && values[8] <= 92) {
                //Legacy import support for NY/WC items, the old signet IDs 80-92 became the new Item IDs for those items
                slotObj.itemId(values[8]);
                slotObj.el.itemId.change();
            }
            else {
                var signetQuality = tswcalc.data.signet_quality_mapping.to_name[values[7]];
                var signetId = values[8] != '0' ? values[8] : 'none';
                changeSignet(slotId, signetQuality, signetId);
            }
        }
    };

    var changeSignet = function(slotId, quality, id) {
        var slotObj = tswcalc.slots[slotId];
        slotObj.signetQuality(quality);
        slotObj.signetId(id);
        slotObj.el.signetId.change();
    };

    var oPublic = {
        start: start
    };

    return oPublic;
}();