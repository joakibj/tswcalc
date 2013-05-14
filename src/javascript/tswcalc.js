var buttonHandler = {};

$(document).ready(function() {
    renderContainer(template_data);
    startHandlers();
    $('#summary').scrollToFixed();
});

function renderContainer(data) {
    dust.render('container', template_data,

    function(err, out) {
        if (err) {
            console.log(err);
        }
        $('.container').html(out);
    });
}

function resetButton() {
    $('#btn-reset').on('click', function(event) {
        for (var i = 0; i < template_data.slots.length; i++) {
            resetSlot(template_data.slots[i].id_prefix);
        }
        updatePrimaryStats();
        updateOffensiveDefensiveStats();
    });
};

function resetSlot(slotId) {
    $('#' + slotId + '-ql').val('10.0');
    $('#' + slotId + '-role').val('none');
    $('#' + slotId + '-glyph-ql').val('10.0');
    $('#' + slotId + '-primary-glyph').val('none');
    $('#' + slotId + '-secondary-glyph').val('none');
    $('#' + slotId + '-primary-glyph-dist-btn0').trigger('click');
    $('#' + slotId + '-secondary-glyph-dist-btn0').trigger('click');
};

function addAllRoleListenerToButton(role) {
    $('#btn-all-' + role).on('click', function(event) {
        for (var i = 0; i < template_data.slots.length; i++) {
            setRole(template_data.slots[i].id_prefix, role);
        }
        updatePrimaryStats();
        updateOffensiveDefensiveStats();
    });
};

function addAllQlListenerToButton(ql) {
    qlid = ql.replace('.', '-');
    $('#btn-all-' + qlid).on('click', function(event) {
        for (var i = 0; i < template_data.slots.length; i++) {
            setQl(template_data.slots[i].id_prefix, ql);
        }
        updatePrimaryStats();
        updateOffensiveDefensiveStats();
    });
}

function setQl(slotId, ql) {
    $('#' + slotId + '-ql').val(ql);
    $('#' + slotId + '-glyph-ql').val(ql);
    $('#' + slotId + '-primary-glyph-dist-btn4').trigger('click');
};

function setRole(slotId, role) {
    $('#' + slotId + '-role').val(role);
};

function startHandlers() {
    for (var i = 0; i < template_data.slots.length; i++) {
        startDistributionButtonHandler(template_data.slots[i].id_prefix);
        startSelectHandler(template_data.slots[i].id_prefix);
    }
    resetButton();
    addAllRoleListenerToButton('dps');
    addAllRoleListenerToButton('healer');
    addAllRoleListenerToButton('tank');
    addAllQlListenerToButton('10.4');
    addAllQlListenerToButton('10.5');
}

function startDistributionButtonHandler(slotId) {
    buttonHandler[slotId] = new DistributionButtonHandler(slotId);
    buttonHandler[slotId].initiate();
};

function startSelectHandler(slotId) {
    var selectHandler = new SelectHandler(slotId);
    selectHandler.initiate();
};

