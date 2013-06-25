$(document).ready(function() {
    tswcalc.init();
});

var tswcalc = tswcalc || {};

var buttonHandler = {};
var selectHandler = {};
var raidCheckboxes = {};
var summary = {};
var exportModule = {};
var importModule = {};

tswcalc = function() {
    var init = function() {
        renderContainer(template_data);
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
            slots: template_data.slots,
            signets: signet_data
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
            importModule.start(vars);
            return true;
        }
        return false;
    };

    var startSubModules = function() {
        slots.init();
        for (var i = 0; i < template_data.slots.length; i++) {
            startDistributionButtonHandler(template_data.slots[i].id_prefix);
            startSelectHandler(template_data.slots[i]);
            startRaidCheckboxes(template_data.slots[i].id_prefix);
        }
        startButtonBar();
        startSummary();
        startExportModule();
        startImportModule();
    };

    var addHash = function() {
        if (location.hash == '') {
            location.hash = ' ';
        }
    };

    var startDistributionButtonHandler = function(slotId) {
        buttonHandler[slotId] = new DistributionButtonHandler(slotId);
        buttonHandler[slotId].initiate();
    };

    var startSelectHandler = function(slot) {
        selectHandler[slot.id_prefix] = new SelectHandler(slot);
        selectHandler[slot.id_prefix].initiate();
    };

    var startRaidCheckboxes = function(slotId) {
        raidCheckboxes[slotId] = new RaidCheckbox(slotId);
        raidCheckboxes[slotId].initiate();
    };

    var startButtonBar = function() {
        tswcalc.buttonBar.init();
    };

    var startSummary = function() {
        summary = new Summary();
        summary.initiate();
    };

    var startExportModule = function() {
        exportModule = new Export();
        exportModule.initiate();
    };

    var startImportModule = function() {
        importModule = new Import();
    };

    var oPublic = {
        init: init
    };

    return oPublic;
}();