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
        for (var slotId in slots) {
            if (slots.hasSlot(slotId)) {
                slots[slotId].role(role);
                if (slotId != 'weapon' && ny_raid_items[slotId][role] === undefined) {
                    slots[slotId].el.btn.nyraid.prop('checked', false);
                    slots[slotId].el.btn.nyraid.change();
                    slots[slotId].el.btn.nyraid.attr('disabled', 'disabled');
                } else {
                    slots[slotId].el.btn.nyraid.removeAttr('disabled');
                }
            }
        }
        tswcalc.summary.updateAllStats();
    };

    var setQlOnAllSlots = function(event) {
        var ql = '10.' + event.target.id.split('-')[3];
        for (var slotId in slots) {
            if (slots.hasSlot(slotId)) {
                if (!slots[slotId].el.btn.nyraid.is(':checked')) {
                    slots[slotId].ql(ql);
                }
                slots[slotId].glyphQl(ql);
                slots[slotId].el.btn.primary[4].trigger('click');
            }
        }
        tswcalc.summary.updateAllStats();
    };

    var resetAllSlots = function(event) {
        slots.reset();
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