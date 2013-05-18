function Export() {
    var self = this;
    var exportType = null;

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
        if (self.exportType == "url") {
            this.startExportUrl();
        }
    };

    this.startExportUrl = function() {
        var slotStates = this.collectAllSlotStates();
        console.log(slotStates);
        $('#export-textarea').html(window.location.href + '?calc=' + btoa(slotStates));
    };

    this.collectAllSlotStates = function() {
        var slotStates = '';
        for (var i = 0; i < template_data.slots.length; i++) {
            slotStates += this.collectSlotState(template_data.slots[i].id_prefix);
        }
        return slotStates;
    };

    this.collectSlotState = function(slotId) {
        var slotState = '';
        var suffixes = ['-ql', '-role', '-glyph-ql', '-primary-glyph', '-secondary-glyph'];
        for (var i = 0; i < suffixes.length; i++) {
            slotState += slotId + suffixes[i] + '=' + $('#' + slotId + suffixes[i]).val();
            if (i < (suffixes.length - 1)) {
                slotState += '&';
            }
        }
        return slotState;
    };
};
