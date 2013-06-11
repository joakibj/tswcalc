function ButtonBar() {
    var self = this;

    this.initiate = function() {
        self.resetButton();
        self.addAllRoleListenerToButton('dps');
        self.addAllRoleListenerToButton('healer');
        self.addAllRoleListenerToButton('tank');
        self.addAllQlListenerToButton('10.4');
        self.addAllQlListenerToButton('10.5');
    };

    this.addAllRoleListenerToButton = function(role) {
        $('#btn-all-' + role).on('click', function(event) {
            for (var i = 0; i < template_data.slots.length; i++) {
                self.setRoleOnSlot(role, template_data.slots[i].id_prefix);
            }
            summary.updateAllStats();
        });
    };

    this.setRoleOnSlot = function(role, slotId) {
        $('#' + slotId + '-role').val(role);
    };

    this.addAllQlListenerToButton = function(ql) {
        qlid = ql.replace('.', '-');
        $('#btn-all-' + qlid).on('click', function(event) {
            for (var i = 0; i < template_data.slots.length; i++) {
                self.setQlOnSlot(ql, template_data.slots[i].id_prefix);
                self.setGlyphQlOnSlot(ql, template_data.slots[i].id_prefix);
                $('#' + template_data.slots[i].id_prefix + '-primary-glyph-dist-btn4').trigger('click');
            }
            summary.updateAllStats();
        });
    };

    this.setQlOnSlot = function(ql, slotId) {
        $('#' + slotId + '-ql').val(ql);
    };

    this.setGlyphQlOnSlot = function(ql, slotId) {
        $('#' + slotId + '-glyph-ql').val(ql);
    };

    this.resetButton = function() {
        $('#btn-reset').on('click', function(event) {
            for (var i = 0; i < template_data.slots.length; i++) {
                self.resetAllInput(template_data.slots[i].id_prefix);
            }
            summary.updateAllStats();
        });
    };

    this.resetAllInput = function(slotId) {
        $('#' + slotId + '-ql').val('10.0');
        $('#' + slotId + '-role').val('none');
        $('#' + slotId + '-glyph-ql').val('10.0');
        $('#' + slotId + '-primary-glyph').val('none');
        $('#' + slotId + '-secondary-glyph').val('none');
        $('#' + slotId + '-primary-glyph-dist-btn0').trigger('click');
        $('#' + slotId + '-secondary-glyph-dist-btn0').trigger('click');
    };
}