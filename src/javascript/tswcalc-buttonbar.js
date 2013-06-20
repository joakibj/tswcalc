function ButtonBar() {
    var self = this;

    this.el = {
        btn_all_dps: $('#btn-all-dps'),
        btn_all_healer: $('#btn-all-healer'),
        btn_all_tank: $('#btn-all-tank'),
        btn_all_10_4: $('#btn-all-10-4'),
        btn_all_10_5: $('#btn-all-10-5'),
        btn_reset: $('#btn-reset')
    };

    this.initiate = function() {
        this.bindEvents();
    };

    this.bindEvents = function() {
        this.el.btn_all_dps.on('click', this.setRoleOnAllSlots);
        this.el.btn_all_healer.on('click', this.setRoleOnAllSlots);
        this.el.btn_all_tank.on('click', this.setRoleOnAllSlots);
        this.el.btn_all_10_4.on('click', this.setQlOnAllSlots);
        this.el.btn_all_10_5.on('click', this.setQlOnAllSlots);
        this.el.btn_reset.on('click', this.resetAllSlots);
    };

    this.setRoleOnAllSlots = function(event) {
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
        summary.updateAllStats();
    };

    this.setQlOnAllSlots = function(event) {
        var ql = '10.' + event.target.id.split('-')[3];
        for (var slotId in slots) {
            if (slots.hasSlot(slotId)) {
                if (!slots[slotId].el.btn.nyraid.is(':checked')) {
                    slots[slotId].ql(ql);
                }
                slots[slotId].glyphQl(ql);
                $('#' + slotId + '-primary-glyph-dist-btn4').trigger('click');
            }
        }
        summary.updateAllStats();
    };

    this.resetAllSlots = function(event) {
        slots.reset();
        summary.updateAllStats();
    };
}