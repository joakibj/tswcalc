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
        for (var i = 0; i < template_data.slots.length; i++) {
            self.setRoleOnSlot(role, template_data.slots[i].id_prefix);
        }
        summary.updateAllStats();
    };

    this.setRoleOnSlot = function(role, slotId) {
        $('#' + slotId + '-role').val(role);
    };

    this.setQlOnAllSlots = function(event) {
        var ql = '10.' + event.target.id.split('-')[3];
        for (var i = 0; i < template_data.slots.length; i++) {
            this.setQlOnSlot(ql, template_data.slots[i].id_prefix);
            this.setGlyphQlOnSlot(ql, template_data.slots[i].id_prefix);
            $('#' + template_data.slots[i].id_prefix + '-primary-glyph-dist-btn4').trigger('click');
        }
        summary.updateAllStats();
    };

    this.setQlOnSlot = function(ql, slotId) {
        $('#' + slotId + '-ql').val(ql);
    };

    this.setGlyphQlOnSlot = function(ql, slotId) {
        $('#' + slotId + '-glyph-ql').val(ql);
    };

    this.resetAllSlots = function(event) {
        for (var i = 0; i < template_data.slots.length; i++) {
            self.resetSlot(template_data.slots[i].id_prefix);
        }
        summary.updateAllStats();
    };

    this.resetSlot = function(slotId) {
        $('#' + slotId + '-ql').val('10.0');
        $('#' + slotId + '-role').val('none');
        $('#' + slotId + '-glyph-ql').val('10.0');
        $('#' + slotId + '-primary-glyph').val('none');
        $('#' + slotId + '-secondary-glyph').val('none');
        $('#' + slotId + '-primary-glyph-dist-btn0').trigger('click');
        $('#' + slotId + '-secondary-glyph-dist-btn0').trigger('click');
    };
}