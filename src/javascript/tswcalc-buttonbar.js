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
                self.setRole(template_data.slots[i].id_prefix, role);
            }
            updatePrimaryStats();
            updateOffensiveDefensiveStats();
        });
    };

    this.setRole = function(slotId, role) {
        $('#' + slotId + '-role').val(role);
    };

    this.addAllQlListenerToButton = function(ql) {
        qlid = ql.replace('.', '-');
        $('#btn-all-' + qlid).on('click', function(event) {
            for (var i = 0; i < template_data.slots.length; i++) {
                self.setQl(template_data.slots[i].id_prefix, ql);
            }
            updatePrimaryStats();
            updateOffensiveDefensiveStats();
        });
    }

    this.setQl = function(slotId, ql) {
        $('#' + slotId + '-ql').val(ql);
        $('#' + slotId + '-glyph-ql').val(ql);
        $('#' + slotId + '-primary-glyph-dist-btn4').trigger('click');
    };

    this.resetButton = function() {
        $('#btn-reset').on('click', function(event) {
            for (var i = 0; i < template_data.slots.length; i++) {
                self.resetSlot(template_data.slots[i].id_prefix);
            }
            updatePrimaryStats();
            updateOffensiveDefensiveStats();
        });
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
};