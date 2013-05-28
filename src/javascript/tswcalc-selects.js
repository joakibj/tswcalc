function SelectHandler(slotId) {
    var slotId = slotId;
    var self = this;

    this.initiate = function() {
        self.addListenersToRoleSelect();
        self.addListenersToQlSelect();
        self.addListenersToGlyphSelect('glyph-ql');
        self.addListenersToGlyphSelect('primary-glyph');
        self.addListenersToGlyphSelect('secondary-glyph');
    };

    this.getRole = function() {
        return $('#' + slotId + '-role option:selected').attr('value');
    };

    this.getQl = function() {
        return $('#' + slotId + '-ql option:selected').attr('value');
    };

    this.getGlyphQl = function() {
        return $('#' + slotId + '-glyph-ql option:selected').attr('value');
    };

    this.getGlyph = function(primary_or_secondary) {
        return $('#' + slotId + '-' + primary_or_secondary + '-glyph option:selected').attr('value');
    };

    this.addListenersToRoleSelect = function() {
        $('#' + slotId + '-role').change(function() {
            summary.updatePrimaryStats();
        });
    };

    this.addListenersToQlSelect = function(id_suffix) {
        $('#' + slotId + id_suffix + '-ql').change(function() {
            summary.updatePrimaryStats();
        });
    };

    this.addListenersToGlyphSelect = function(id_suffix) {
        $('#' + slotId + '-' + id_suffix).change(function() {
            summary.updateOffensiveDefensiveStats();
        });
    };
}