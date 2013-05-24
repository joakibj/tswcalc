function Export() {
    var self = this;
    var exportType = 0;
    var slotState = 0;

    this.initiate = function() {
        this.slotState = {};
        $('a.export').on('click', function(event) {
            self.exportType = $(event.target).attr('data');
            self.startExport();
        });

        $('#open-export-modal').on('shown', function() {
            $('#export-textarea').focus();
        });

        $('#export-textarea').focus(function() {
            $(this).select();

            $(this).mouseup(function() {
                $(this).unbind('mouseup');
                return false;
            });
        });
    };

    this.startExport = function() {
        if (this.exportType == 'url') {
            this.startExportUrl();
        } else if (this.exportType == 'bbcode') {
            this.startExportBBCode();
        }
    };

    this.startExportUrl = function() {
        this.collectAllSlotStates();
        url = this.createExportUrl();
        $('#export-textarea').html(location.origin + location.pathname + '#' + url);
    };

    this.createExportUrl = function() {
        var url = '';
        for (var i = 0; i < template_data.slots.length; i++) {
            url += this.createSlotUrl(template_data.slots[i].id_prefix);
            if (i < (template_data.slots.length - 1)) {
                url += '&';
            }
        }
        return url;
    };

    this.createSlotUrl = function(slotName) {
        var slot = this.slotState[slotName];
        return slotName + '=' + slot.ql + ',' + slot.role + ',' + slot.glyph_ql + ',' + slot.primary_glyph + ',' + slot.secondary_glyph +
            ',' + slot.primary_dist + ',' + slot.secondary_dist;
    };

    this.startExportBBCode = function() {
        dust.render('export\bbcode', this.slotStates,

        function(err, out) {
            if (err) {
                console.log(err);
            }
            $('#export-textarea').html(out);
        });
    };

    this.collectAllSlotStates = function() {
        for (var i = 0; i < template_data.slots.length; i++) {
            this.collectSlotState(template_data.slots[i].id_prefix);
        }
    };

    this.collectSlotState = function(slotId) {
        this.slotState[slotId] = {
            ql: self.stripContent($('#' + slotId + '-ql').val()),
            role: self.stripContent($('#' + slotId + '-role').val()),
            glyph_ql: self.stripContent($('#' + slotId + '-glyph-ql').val()),
            primary_glyph: self.stripContent($('#' + slotId + '-primary-glyph').val()),
            secondary_glyph: self.stripContent($('#' + slotId + '-secondary-glyph').val()),
            primary_dist: buttonHandler[slotId].getActiveDist(slotId, 'primary-glyph').innerHTML,
            secondary_dist: buttonHandler[slotId].getActiveDist(slotId, 'secondary-glyph').innerHTML
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
        } else {
            return val;
        }
    };
};