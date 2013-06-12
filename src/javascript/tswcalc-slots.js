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
        signetQuality: $('#' + this.id + '-signet-quality')
    };

    this.role = function() {
        return this.el.role.val();
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