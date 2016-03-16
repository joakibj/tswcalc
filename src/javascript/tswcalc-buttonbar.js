var tswcalc = tswcalc || {};

tswcalc.buttonBar = function() {

    var el = {};
    var elInit = function() {
        return {
            btn_all_dps: $('#btn-all-3'),
            btn_all_healer: $('#btn-all-2'),
            btn_all_tank: $('#btn-all-1'),
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
        var newItem = extractRole(event);
        for (var slotId in tswcalc.slots) {
            if (tswcalc.slots.hasSlot(slotId)) {
                var slot = tswcalc.slots[slotId];
                slot.itemId(newItem);
                slot.el.itemId.change();
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
                if(!slot.item().ql) {
                    slot.ql(newItemQl);
                }
                if(!slot.item().glyph) {
                    slot.glyphQl(newGlyphQl);
                    slot.el.glyphQl.change();
                }
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
        if (majorLevel === 10 && minorLevel > 5) {
            return '10.5';
        }
        return majorLevel + '.' + minorLevel;
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