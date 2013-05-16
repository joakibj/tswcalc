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
        $('#export-textarea').html(window.location.href + '?calc=');
    };
};