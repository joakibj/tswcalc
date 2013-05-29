function SelectHandler(slot) {
    var slot = slot;
    var self = this;

    this.initiate = function() {
        self.addSignetsToSelect();
        self.addListenersToSignetPickSelect();
        self.addListenersToSignetQualitySelect();
        self.addListenersToRoleSelect();
        self.addListenersToQlSelect();
        self.addListenersToGlyphSelect('glyph-ql');
        self.addListenersToGlyphSelect('primary-glyph');
        self.addListenersToGlyphSelect('secondary-glyph');
    };

    this.getRole = function() {
        return $('#' + slot.id_prefix + '-role option:selected').attr('value');
    };

    this.getQl = function() {
        return $('#' + slot.id_prefix + '-ql option:selected').attr('value');
    };

    this.getGlyphQl = function() {
        return $('#' + slot.id_prefix + '-glyph-ql option:selected').attr('value');
    };

    this.getGlyph = function(primary_or_secondary) {
        return $('#' + slot.id_prefix + '-' + primary_or_secondary + '-glyph option:selected').attr('value');
    };

    this.getSignetQuality = function() {
        return $('#' + slot.id_prefix + '-signet-quality option:selected').attr('value');
    };

    this.getSignet = function() {
        return $('#' + slot.id_prefix + '-pick-signet option:selected').attr('value');
    };

    this.addSignetsToSelect = function() {
        var slotgroup = slot.group;
        if (slot.group == 'head') {
            slotgroup = 'weapon';
        }
        var url = 'assets/images/dps_' + slotgroup + '_normal_signet.png';
        $('#' + slot.id_prefix + '-signets img').attr('src', url);
        $('#' + slot.id_prefix + '-pick-signet').append($('<option>', {
            value: "none",
            text: "None"
        }));
        $.each(signet_data[slot.group], function(index, value) {
            $('#' + slot.id_prefix + '-pick-signet').append($('<option>', {
                value: value.id,
                text: value.name
            }));
        });
    };

    this.addListenersToSignetQualitySelect = function() {
        $('#' + slot.id_prefix + '-signet-quality').change(function() {
            self.updateSignetDescription();
            summary.updatePrimaryStats();
        });
    };

    this.addListenersToSignetPickSelect = function() {
        $('#' + slot.id_prefix + '-pick-signet').change(function(event) {
            self.updateSignetDescription();
            summary.updatePrimaryStats();
        });
    };

    this.updateSignetDescription = function() {
        var signet = signet_data.find(slot.group, self.getSignet());
        if (signet != null) {
            if (this.getSignetQuality() == 'none') {
                $('#' + slot.id_prefix + '-signet-quality').val('normal');
            }
            var description = signet.description.replace('%d', self.determineSignetQualityValue(signet));
            $('#' + slot.id_prefix + '-signet-description').html(description);
        } else {
            $('#' + slot.id_prefix + '-signet-description').html('');
        }
    };

    this.determineSignetQualityValue = function(signet) {
        var quality = this.getSignetQuality();
        if (quality == 'normal') {
            return signet.quality.normal;
        } else if (quality == 'elite') {
            return signet.quality.elite;
        } else if (quality == 'epic') {
            return signet.quality.epic;
        } else {
            return 0;
        }
    };

    this.addListenersToRoleSelect = function() {
        $('#' + slot.id_prefix + '-role').change(function() {
            summary.updatePrimaryStats();
        });
    };

    this.addListenersToQlSelect = function() {
        $('#' + slot.id_prefix + '-ql').change(function() {
            summary.updatePrimaryStats();
        });
    };

    this.addListenersToGlyphSelect = function(id_suffix) {
        $('#' + slot.id_prefix + '-' + id_suffix).change(function() {
            summary.updateOffensiveDefensiveStats();
        });
    };
}