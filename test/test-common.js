function renderSlots() {
    renderTemplate('slots', {
        slots: template_data.slots,
        signets: signet_data
    });
};

function renderSummary() {
    renderTemplate('summary', {});
};

function renderButtonbar() {
    renderTemplate("buttonbar", {});
};

function renderGlyphButtons(id_prefix, id_suffix) {
    renderTemplate('glyphbuttons', {
        id_prefix: id_prefix,
        id_suffix: id_suffix
    });
};

function renderTemplate(template_name, data) {
    dust.render(template_name, data,

    function(err, out) {
        if (err) {
            console.log(err);
        }
        $('#qunit-fixture').append(out);
    });
};

function clearFixture() {
    $('#qunit-fixture').html('');
};

var buttonHandler = {};

function initiateButtonHandlers() {
    for (var i = 0; i < template_data.slots.length; i++) {
        var slot = template_data.slots[i];
        buttonHandler[slot.id_prefix] = new DistributionButtonHandler(slot.id_prefix);
        buttonHandler[slot.id_prefix].initiate();
    }
};

var selectHandler = {};

function initiateSelectHandlers() {
    for (var i = 0; i < template_data.slots.length; i++) {
        var slot = template_data.slots[i];
        selectHandler[slot.id_prefix] = new SelectHandler(slot);
        selectHandler[slot.id_prefix].initiate();
    }
};