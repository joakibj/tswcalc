var buttonHandler = {};
var selectHandler = {};
var raidCheckboxes = {};
var buttonBar = 0;
var summary = 0;
var exportModule = 0;
var importModule = 0;

$(document).ready(function() {
    initiateTswCalc();
});

function initiateTswCalc() {
    renderContainer(template_data);
    addHash();

    activateToolTips();

    startSubModules();
    if (!checkIfExported()) {
        triggerReset();
    }

    $('#summary').scrollToFixed();
}

function triggerReset() {
    $('#btn-reset').trigger('click');
}

function activateToolTips() {
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
    $('.cost-tooltip, .glyph-tooltip, .signet-tooltip').on('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
    });
}

function renderContainer(data) {
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
}

function checkIfExported() {
    var vars = $.getUrlVars();
    if (!$.isEmptyObject(vars) && Object.keys(vars).length == 8 || Object.keys(vars).length == 10) {
        importModule.start(vars);
        return true;
    }
    return false;
}

function startSubModules() {
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
}

function addHash() {
    if (location.hash == '') {
        location.hash = ' ';
    }
}

function startDistributionButtonHandler(slotId) {
    buttonHandler[slotId] = new DistributionButtonHandler(slotId);
    buttonHandler[slotId].initiate();
}

function startSelectHandler(slot) {
    selectHandler[slot.id_prefix] = new SelectHandler(slot);
    selectHandler[slot.id_prefix].initiate();
}

function startRaidCheckboxes(slotId) {
    raidCheckboxes[slotId] = new RaidCheckbox(slotId);
    raidCheckboxes[slotId].initiate();
}

function startButtonBar() {
    buttonBar = new ButtonBar();
    buttonBar.initiate();
}

function startSummary() {
    summary = new Summary();
}

function startExportModule() {
    exportModule = new Export();
    exportModule.initiate();
}

function startImportModule() {
    importModule = new Import();
}
