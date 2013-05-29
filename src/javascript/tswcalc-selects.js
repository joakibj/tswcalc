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
        $('#' + slot.id_prefix + '-pick-signet').append($('<option>', {
            value: "none",
            text: "None",
            selected: "true"
        }));
        if (slot.group == 'head') {
            slotgroup = 'weapon';
            $.each(signet_data[slotgroup], function(index, value) {
                $('#' + slot.id_prefix + '-pick-signet').append($('<option>', {
                    value: value.id,
                    text: value.name
                }));
            });
        }
        var url = 'assets/images/dps_' + slotgroup + '_normal_signet.png';
        $('#' + slot.id_prefix + '-signets img').attr('src', url);
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
            var description = '';
            description = signet.description.replace('%s', self.determineSignetQualityValue(signet));
            description = description.replace('%d', self.determineSignetQualityValue(signet));
            if (Object.prototype.toString.call(signet.quality) === '[object Array]') {
                description = description.replace('%0', self.determineSignetQualityValue(signet, 0));
                description = description.replace('%1', self.determineSignetQualityValue(signet, 1));
            }

            $('#' + slot.id_prefix + '-signet-description').html(description);
        } else {
            $('#' + slot.id_prefix + '-signet-description').html('');
        }
    };

    this.determineSignetQualityValue = function(signet, quality_index) {
        quality_index = typeof quality_index !== 'undefined' ? quality_index : -1;
        var quality = this.getSignetQuality();
        if (quality == 'normal') {
            if (quality_index != -1) {
                return signet.quality[quality_index].normal;
            }
            return signet.quality.normal;
        } else if (quality == 'elite') {
            if (quality_index != -1) {
                return signet.quality[quality_index].elite;
            }
            return signet.quality.elite;
        } else if (quality == 'epic') {
            if (quality_index != -1) {
                return signet.quality[quality_index].epic;
            }
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