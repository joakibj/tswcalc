function renderSlots() {
    renderTemplate('slots', {
        slots: tswcalc.data.template_data.slots,
        signets: tswcalc.data.signet_data
    });
    tswcalc.slots.init();
    renderMiscSlot();
}

function renderMiscSlot() {
    renderTemplate('miscslot', {});
    tswcalc.miscslot.init();
}

function renderSummary() {
    renderTemplate('summary', {});
}

function renderButtonbar() {
    renderTemplate("buttonbar", {});
}

function renderGlyphButtons(id_prefix, id_suffix) {
    renderTemplate('glyphbuttons', {
        id_prefix: id_prefix,
        id_suffix: id_suffix
    });
}

function renderTemplate(template_name, data) {
    dust.render(template_name, data,

    function(err, out) {
        if (err) {
            console.log(err);
        }
        $('#qunit-fixture').append(out);
    });
}

function clearFixture() {
    $('#qunit-fixture').html('');
}

function initiateSummary() {
    tswcalc.summary.init();
}

function initiateButtonHandlers() {
    tswcalc.button.init();
}

function initiateSelectHandlers() {
    for (var i = 0; i < tswcalc.data.template_data.slots.length; i++) {
        var slot = tswcalc.data.template_data.slots[i];
        tswcalc.select[slot.id_prefix] = new tswcalc.select.SelectHandler(slot);
        tswcalc.select[slot.id_prefix].initiate();
    }
}

function initiateRaidCheckboxes() {
    for (var i = 0; i < tswcalc.data.template_data.slots.length; i++) {
        var slot = tswcalc.data.template_data.slots[i];
        tswcalc.checkbox[slot.id_prefix] = new tswcalc.checkbox.RaidCheckbox(slot.id_prefix);
        tswcalc.checkbox[slot.id_prefix].initiate();
    }
}