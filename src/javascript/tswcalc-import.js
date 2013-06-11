function Import() {
    var self = this;

    this.start = function(vars) {
        for (var slotId in vars) {
            if (vars.hasOwnProperty(slotId)) {
                splitVars = vars[slotId].split(',');
                this.setValues(slotId, splitVars);
            }
        }
        summary.updateAllStats();
    };

    this.setValues = function(slotId, values) {
        $('#' + slotId + '-ql').val('10.' + values[0]);
        $('#' + slotId + '-role').val(role_mapping.to_stat[values[1]]);
        $('#' + slotId + '-glyph-ql').val('10.' + values[2]);
        $('#' + slotId + '-primary-glyph').val(stat_mapping.to_stat[values[3]]);
        $('#' + slotId + '-secondary-glyph').val(stat_mapping.to_stat[values[4]]);
        $('#' + slotId + '-primary-glyph-dist-btn' + values[5]).trigger('click');
        $('#' + slotId + '-secondary-glyph-dist-btn' + values[6]).trigger('click');
        // support signets
        if(typeof values[7] != 'undefined' && typeof values[8] != 'undefined') {
            $('#' + slotId + '-signet-quality').val(signet_quality_mapping.to_name[values[7]]); 
            $('#' + slotId + '-pick-signet').val(values[8] != '0' ? values[8] : 'none');
            $('#' + slotId + '-pick-signet').trigger('change');
        }
    };
};