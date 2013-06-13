function Slot(id, name, group) {
    var self = this;
    this.id = id;
    this.name = name;
    this.group = group;

    this.el = {
        role: $('#' + this.id + '-role'),
        ql: $('#' + this.id + '-ql'),
        glyphQl: $('#' + this.id + '-glyph-ql'),
        primaryGlyph: $('#' + this.id + '-primary-glyph'),
        secondaryGlyph: $('#' + this.id + '-secondary-glyph'),
        primaryDist: '#' + this.id + '-primary-glyph-dist > button.btn.active',
        secondaryDist: '#' + this.id + '-secondary-glyph-dist > button.btn.active',
        signetId: $('#' + this.id + '-pick-signet'),
        signetQuality: $('#' + this.id + '-signet-quality'),
        signetIconImg: $('#' + this.id + '-signet-img-icon'),
        signetIconBorderImg: $('#' + this.id + '-signet-img-quality'),
        signetDescription: $('#' + this.id + '-signet-description')
    };

    this.role = function() {
        return this.group != 'weapon' ? this.el.role.val() : 'none';
    };

    this.ql = function() {
        return this.el.ql.val();
    };

    this.glyphQl = function() {
        return this.el.glyphQl.val();
    };

    this.primaryGlyph = function() {
        return this.el.primaryGlyph.val();
    };

    this.secondaryGlyph = function() {
        return this.el.secondaryGlyph.val();
    };

    this.primaryDist = function() {
        return $(this.el.primaryDist)[0].innerHTML;
    };

    this.secondaryDist = function() {
        return $(this.el.secondaryDist)[0].innerHTML;
    };

    this.signetId = function() {
        return this.el.signetId.val();
    };

    this.signetQuality = function() {
        return this.el.signetQuality.val();
    };

    this.signet = function() {
        return signet_data.find(this.group, this.signetId());
    };

    this.signetDescription = function() {
        var signet = this.signet();
        if (signet === null) {
            return '';
        }
        var description = '';
        description = signet.description.replace('%s', this.determineSignetQualityValue(signet));
        description = description.replace('%d', this.determineSignetQualityValue(signet));
        if (Object.prototype.toString.call(signet.quality) === '[object Array]') {
            description = description.replace('%0', this.determineSignetQualityValue(signet, 0));
            description = description.replace('%1', this.determineSignetQualityValue(signet, 1));
        }

        if (signet.cooldown != '0') {
            description += ' ' + signet.cooldown + ' seconds cooldown.';
        }

        return description;
    };

    this.determineSignetQualityValue = function(signet, quality_index) {
        quality_index = typeof quality_index !== 'undefined' ? quality_index : -1;
        var quality = this.signetQuality();
        switch (quality) {
            case 'none':
                return 0;
            case 'normal':
                return quality_index == -1 ? signet.quality.normal : signet.quality[quality_index].normal;
            case 'elite':
                return quality_index == -1 ? signet.quality.elite : signet.quality[quality_index].elite;
            case 'epic':
                return quality_index == -1 ? signet.quality.epic : signet.quality[quality_index].epic;
            default:
                return 0;
        }
    };

    this.updateSignet = function() {
        this.updateSignetIcon();
        this.updateSignetDescription();
    };

    this.updateSignetIcon = function() {
        var signet = this.signet();
        var signetQuality = this.signetQuality();
        if (signet !== null && signetQuality != 'none') {
            this.updateSignetIconBorder(signetQuality);
            this.updateSignetIconImage(signet);
        }
    };

    this.updateSignetIconBorder = function(signetQuality) {
        var signet_quality_url = 'assets/images/icons/' + signetQuality + '.png';
        this.el.signetIconBorderImg.attr('src', signet_quality_url);
    };

    this.updateSignetIconImage = function(signet) {
        var signet_icon_url = 'assets/images/icons/' + signet.icon + '.png';
        this.el.signetIconImg.attr('src', signet_icon_url);
    };

    this.updateSignetDescription = function() {
        this.el.signetDescription.html(this.signetDescription());
    };

    this.state = function() {
        return {
            role: this.role(),
            ql: this.ql(),
            glyph_ql: this.glyphQl(),
            primary_glyph: this.primaryGlyph(),
            secondary_glyph: this.secondaryGlyph(),
            primary_dist: this.primaryDist(),
            secondary_dist: this.secondaryDist(),
            signet_quality: this.signetQuality(),
            signet_id: this.signetId()
        };
    };

    this.mappedState = function() {
        return {
            role: this.stripContent(this.role()),
            ql: this.stripContent(this.ql()),
            glyph_ql: this.stripContent(this.glyphQl()),
            primary_glyph: this.stripContent(this.primaryGlyph()),
            secondary_glyph: this.stripContent(this.secondaryGlyph()),
            primary_dist: this.primaryDist(),
            secondary_dist: this.secondaryDist(),
            signet_quality: this.stripContent(this.signetQuality()),
            signet_id: this.stripContent(this.signetId())
        };
    };

    this.stripContent = function(val) {
        if (val == null || val == 'none') {
            val = 0;
        }

        var qlpattern = /\d+\.\d/;
        if (val != 0 && val.match(qlpattern)) {
            return val.split('.')[1];
        } else if ($.inArray(val, Object.keys(stat_mapping.to_num)) != -1) {
            return stat_mapping.to_num[val];
        } else if ($.inArray(val, Object.keys(role_mapping.to_num)) != -1) {
            return role_mapping.to_num[val];
        } else if ($.inArray(val, Object.keys(signet_quality_mapping.to_num)) != -1) {
            return signet_quality_mapping.to_num[val];
        } else {
            return val;
        }
    };
}

var slots = {
    //this method can only be called after the document is ready
    init: function() {
        for (var i = 0; i < template_data.slots.length; i++) {
            var slotData = template_data.slots[i];
            this[slotData.id_prefix] = new Slot(slotData.id_prefix, slotData.name, slotData.group);
        }
    },

    state: function() {
        var slotStates = {};
        for (var i = 0; i < template_data.slots.length; i++) {
            var slot = template_data.slots[i];
            slotStates[slot.id_prefix] = this[slot.id_prefix].state();
        }
        return slotStates;
    },

    mappedState: function() {
        var mappedSlotStates = {};
        for (var i = 0; i < template_data.slots.length; i++) {
            var slot = template_data.slots[i];
            mappedSlotStates[slot.id_prefix] = this[slot.id_prefix].mappedState();
        }
        return mappedSlotStates;
    }
};