function Export() {
    var self = this;
    var exportType = null;
    var slotStates = null;

    this.initiate = function() {
        $('a.export').on('click', function(event) {
            self.exportType = $(event.target).attr('data');
            self.startExport();
        });

        $('#open-export-modal').on('shown', function() {
            $('#export-textarea').focus();
        });

        $("#export-textarea").focus(function() {
            $(this).select();

            $(this).mouseup(function() {
                $(this).unbind("mouseup");
                return false;
            });
        });
    };

    this.startExport = function() {
        if (this.exportType == "url") {
            this.startExportUrl();
        } else if (this.exportType == "bbcode") {
            this.startExportBBCode();
        }
    };

    this.startExportUrl = function() {
        var slotStates = this.collectAllSlotStates();
        console.log(slotStates);
        $('#export-textarea').html(window.location.href + slotStates);
    };

    this.startExportBBCode = function() {
        console.log("export");
        dust.render('export\bbcode', slotStates,

        function(err, out) {
            if (err) {
                console.log(err);
            }
            $('#export-textarea').html(out);
        });
    };

    this.collectAllSlotStates = function() {
        var slotStates = '';
        for (var i = 0; i < template_data.slots.length; i++) {
            slotStates += this.collectSlotState(template_data.slots[i].id_prefix);
            if (i < (template_data.slots.length - 1)) {
                slotStates += '&';
            }
        }
        return slotStates;
    };

    this.collectSlotState = function(slotId) {
        var slotState = slotId + '=';
        var suffixes = ['-ql', '-role', '-glyph-ql', '-primary-glyph', '-secondary-glyph'];
        for (var i = 0; i < suffixes.length; i++) {
            var val = $('#' + slotId + suffixes[i]).val();
            if (val == null || val == 'none') {
                val = 0;
            }
            slotState += self.stripContent(val);
            slotState += ',';
        }
        slotState += buttonHandler[slotId].getActiveDist(slotId, 'primary-glyph').innerHTML + ',';
        slotState += buttonHandler[slotId].getActiveDist(slotId, 'secondary-glyph').innerHTML;
        return slotState;
    };

    this.stripContent = function(val) {
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