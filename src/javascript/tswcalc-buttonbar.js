var tswcalc = tswcalc || {};

tswcalc.buttonBar = function() {

    var el = {};
    var elInit = function() {
        return {
            btn_all_dps: $('#btn-all-dps'),
            btn_all_healer: $('#btn-all-healer'),
            btn_all_tank: $('#btn-all-tank'),
            btn_all_10_4: $('#btn-all-10-4'),
            btn_all_10_5: $('#btn-all-10-5'),
            btn_all_10_9: $('#btn-all-10-9'),
            btn_all_11_0: $('#btn-all-11-0'),
            btn_reset: $('#btn-reset')
        };
    };

    var init = function() {
        el = elInit();
        bindEvents();
    };

    var bindEvents = function() {
        el.btn_all_dps.on('click', setRoleOnAllSlots);
        el.btn_all_healer.on('click', setRoleOnAllSlots);
        el.btn_all_tank.on('click', setRoleOnAllSlots);
        el.btn_all_10_4.on('click', setQlOnAllSlots);
        el.btn_all_10_5.on('click', setQlOnAllSlots);
        el.btn_all_10_9.on('click', setQlOnAllSlots);
        el.btn_all_11_0.on('click', setQlOnAllSlots);
        el.btn_reset.on('click', resetAllSlots);
    };

    var setRoleOnAllSlots = function(event) {
        var newRole = extractRole(event);
        for (var slotId in tswcalc.slots) {
            if (tswcalc.slots.hasSlot(slotId)) {
                var slot = tswcalc.slots[slotId];
                slot.role(newRole);
                if (!slot.isWeapon() && tswcalc.data.ny_raid_items[slotId][newRole] === undefined) {
                    slot.el.btn.nyraid.prop('checked', false);
                    slot.el.btn.nyraid.change();
                    slot.el.btn.nyraid.attr('disabled', 'disabled');
                } else {
                    slot.el.btn.nyraid.removeAttr('disabled');
                }
            }
        }
        tswcalc.summary.updateAllStats();
    };

    var setQlOnAllSlots = function (event) {
        var newItemQl = extractItemQl(event);
        var newGlyphQl = extractGlyphQl(event);
        
        for (var slotId in tswcalc.slots) {
            if (tswcalc.slots.hasSlot(slotId)) {
                var slot = tswcalc.slots[slotId];
                if (!slot.el.btn.nyraid.is(':checked')) {
                    slot.ql(newItemQl);
                }
                slot.glyphQl(newGlyphQl);
            }
        }
        tswcalc.summary.updateAllStats();
    };

    var resetAllSlots = function(event) {
        tswcalc.slots.reset();
        tswcalc.summary.updateAllStats();
    };

    var extractItemQl = function (event) {
        return event.target.id.split('-')[2] + '.' + event.target.id.split('-')[3];
    };

    var extractGlyphQl = function (event) {
        var majorLevel = parseInt(event.target.id.split('-')[2]);
        var minorLevel = parseInt(event.target.id.split('-')[3]);
        if (majorLevel > 10 || minorLevel > 5) {
            return '10.5';
        }
        return '10.' + minorLevel;
    };

    var extractRole = function(event) {
        return event.target.id.split('-')[2];
    };

    var oPublic = {
        el: el,
        init: init,
        setRoleOnAllSlots: setRoleOnAllSlots,
        setQlOnAllSlots: setQlOnAllSlots,
        resetAllSlots: resetAllSlots
    };

    return oPublic;
}();