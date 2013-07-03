$(document).ready(function() {
    tswcalc.init();
});

var tswcalc = tswcalc || {};

tswcalc = function() {
    var init = function() {
        renderContainer(tswcalc.data.template_data);
        addHash();

        activateToolTips();

        startSubModules();
        if (!checkIfExported()) {
            triggerReset();
        }

        $('#summary').scrollToFixed();
    };

    var triggerReset = function() {
        $('#btn-reset').trigger('click');
    };

    var activateToolTips = function() {
        $('.glyph-tooltip, .signet-tooltip').tooltip({
            placement: 'left'
        });
        $('.cost-tooltip').tooltip({
            placement: function(context, source) {
                var position = $(source).position();
                if (position.top < 50) {
                    return 'bottom';
                } else {
                    return 'top';
                }
            }
        });
        $('#raid-stats > label').tooltip({
            placement: 'bottom'
        });
        $('.cost-tooltip, .glyph-tooltip, .signet-tooltip').on('click', function(event) {
            event.preventDefault();
            event.stopPropagation();
        });
    };

    var renderContainer = function(data) {
        dust.render('container', {
            slots: tswcalc.data.template_data.slots,
            signets: tswcalc.data.signet_data
        },

        function(err, out) {
            if (err) {
                console.log(err);
            }
            $('.container').html(out);
        });
    };

    var checkIfExported = function() {
        var vars = $.getUrlVars();
        if (!$.isEmptyObject(vars) && Object.keys(vars).length == 8 || Object.keys(vars).length == 10) {
            tswcalc.import.start(vars);
            return true;
        }
        return false;
    };

    var startSubModules = function() {
        tswcalc.slots.init();
        for (var i = 0; i < tswcalc.data.template_data.slots.length; i++) {
            startSelectHandler(tswcalc.data.template_data.slots[i]);
            startRaidCheckboxes(tswcalc.data.template_data.slots[i].id_prefix);
        }
        tswcalc.button.init();
        tswcalc.buttonBar.init();
        tswcalc.summary.init();
        tswcalc.export.init();
    };

    var addHash = function() {
        if (location.hash == '') {
            location.hash = ' ';
        }
    };

    var startSelectHandler = function(slot) {
        tswcalc.select[slot.id_prefix] = new tswcalc.select.SelectHandler(slot);
        tswcalc.select[slot.id_prefix].initiate();
    };

    var startRaidCheckboxes = function(slotId) {
        tswcalc.checkbox[slotId] = new tswcalc.checkbox.RaidCheckbox(slotId);
        tswcalc.checkbox[slotId].initiate();
    };

    var oPublic = {
        init: init
    };

    return oPublic;
}();