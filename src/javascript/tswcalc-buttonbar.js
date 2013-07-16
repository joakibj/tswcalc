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
        el.btn_reset.on('click', resetAllSlots);
    };

    var setRoleOnAllSlots = function(event) {
        var role = event.target.id.split('-')[2];
        for (var slotId in tswcalc.slots) {
            if (tswcalc.slots.hasSlot(slotId)) {
                tswcalc.slots[slotId].role(role);
                if (!tswcalc.slots[slotId].isWeapon() && tswcalc.data.ny_raid_items[slotId][role] === undefined) {
                    tswcalc.slots[slotId].el.btn.nyraid.prop('checked', false);
                    tswcalc.slots[slotId].el.btn.nyraid.change();
                    tswcalc.slots[slotId].el.btn.nyraid.attr('disabled', 'disabled');
                } else {
                    tswcalc.slots[slotId].el.btn.nyraid.removeAttr('disabled');
                }
            }
        }
        tswcalc.summary.updateAllStats();
    };

    var setQlOnAllSlots = function(event) {
        var ql = '10.' + event.target.id.split('-')[3];
        for (var slotId in tswcalc.slots) {
            if (tswcalc.slots.hasSlot(slotId)) {
                if (!tswcalc.slots[slotId].el.btn.nyraid.is(':checked')) {
                    tswcalc.slots[slotId].ql(ql);
                }
                tswcalc.slots[slotId].glyphQl(ql);
                tswcalc.slots[slotId].el.btn.primary[4].trigger('click');
            }
        }
        tswcalc.summary.updateAllStats();
    };

    var resetAllSlots = function(event) {
        tswcalc.slots.reset();
        tswcalc.summary.updateAllStats();
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