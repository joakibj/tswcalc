function SelectHandler(slotId) {
    var slotId = slotId;
    var self = this;

    this.initiate = function() {
        self.addListenersToRoleSelect(slotId);
        self.addListenersToQlSelect(slotId, '');
        self.addListenersToGlyphSelect(slotId, 'glyph-ql');
        self.addListenersToGlyphSelect(slotId, 'primary-glyph');
        self.addListenersToGlyphSelect(slotId, 'secondary-glyph');
    };

    this.addListenersToRoleSelect = function(id_prefix) {
        $('#' + id_prefix + '-role').change(function() {
            updatePrimaryStats();
        });
    };

    this.addListenersToQlSelect = function(id_prefix, id_suffix) {
        $('#' + id_prefix + id_suffix + '-ql').change(function() {
            updatePrimaryStats();
        });
    };

    this.addListenersToGlyphSelect = function(id_prefix, id_suffix) {
        $('#' + id_prefix + '-' + id_suffix).change(function() {
            updateOffensiveDefensiveStats();
        });
    };
}
