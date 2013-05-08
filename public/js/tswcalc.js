$(document).ready(function() {

    render_container(template_data);
    start_buttonHandlers();
    $('#summary').scrollToFixed();
});

function render_container(data) {
    dust.render("container", template_data,

    function(err, out) {
        if (err) {
            console.log(err);
        }
        $('.container').html(out);
    });
}

function start_buttonHandlers() {
    for (var i = 0; i < template_data.slots.length; i++) {
        var handler = new ButtonHandler(template_data.slots[i].id_prefix);
        handler.initiate();
    }
}

function updatePrimaryStats() {
    sumHitPoints = 0;
    sumAttackRating = 0;
    sumHealRating = 0;
    for (var i = 0; i < template_data.slots.length; i++) {
        var role = $('#' + template_data.slots[i].id_prefix + '-role option:selected');
        var ql = $('#' + template_data.slots[i].id_prefix + '-ql > button.btn.active')[0].innerHTML;
        selectedValue = role.attr('value');
        console.log(ql);
        if (selectedValue == 'dps') {
            sumAttackRating += custom_gear_data[template_data.slots[i].group].heal_dps['ql' + (ql)].rating;
        } else if (selectedValue == 'healer') {
            sumHealRating += custom_gear_data[template_data.slots[i].group].heal_dps['ql' + (ql)].rating;
        } else if (selectedValue == 'tank') {
            sumHitPoints += custom_gear_data[template_data.slots[i].group].tank['ql' + (ql)].hitpoints;
        }
    }
    $('#stat-hitpoints').text(sumHitPoints);
    $('#stat-attack-rating').text(sumAttackRating);
    $('#stat-heal-rating').text(sumHealRating);
}

function ButtonHandler(slotId) {
    var slotId = slotId;
    var self = this;

    this.initiate = function() {
        this.addListenersToSlotQlButtons(slotId);
        this.addListenersToGlyphQlButtons(slotId, 'primary-glyph');
        this.addListenersToGlyphQlButtons(slotId, 'secondary-glyph');
    };

    this.addListenersToSlotQlButtons = function(id_prefix) {
        self.onlyActiveButton('#' + slotId + '-ql-btn0');
        buttons = $('#' + id_prefix + '-ql > button.btn').on('click', function(event) {
            self.onlyActiveButton('#' + this.id);
            updatePrimaryStats();
        });
    };

    this.addListenersToGlyphQlButtons = function(id_prefix, glyph) {
        self.onlyActiveButton('#' + slotId + '-primary-glyph-ql-btn0');
        self.onlyActiveButton('#' + slotId + '-secondary-glyph-ql-btn0');
        buttons = $('#' + id_prefix + '-' + glyph + '-ql > button.btn').on('click', function(event) {
            self.onlyActiveButton('#' + this.id);
            self.balanceGlyphQl(this, glyph);
        });
    };

    //TODO: Refactor this! Also: Bugs.
    this.balanceGlyphQl = function(button, glyph) {
        if (glyph == 'primary-glyph') {
            primaryGlyphQl = parseInt(button.innerHTML);
            activeSecondaryGlyph = $('#' + slotId + '-secondary-glyph-ql > button.btn.active');
            if ($(activeSecondaryGlyph).length > 0) {
                secondaryGlyphQl = parseInt(activeSecondaryGlyph[0].innerHTML);
                if (primaryGlyphQl + secondaryGlyphQl > 5) {
                    oneLowerQlId = activeSecondaryGlyph[0].id.substring(0, activeSecondaryGlyph[0].id.length - 1) + (secondaryGlyphQl - (primaryGlyphQl + secondaryGlyphQl - 5));
                    self.onlyActiveButton('#' + oneLowerQlId);
                }
            }
        } else {
            secondaryGlyphQl = parseInt(button.innerHTML);
            activePrimaryGlyph = $('#' + slotId + '-primary-glyph-ql > button.btn.active');
            if ($(activePrimaryGlyph).length > 0) {
                primaryGlyphQl = parseInt(activePrimaryGlyph[0].innerHTML);
                if (primaryGlyphQl + secondaryGlyphQl > 5) {
                    oneLowerQlId = activePrimaryGlyph[0].id.substring(0, activePrimaryGlyph[0].id.length - 1) + +(secondaryGlyphQl - (primaryGlyphQl + secondaryGlyphQl - 5));
                    self.onlyActiveButton('#' + oneLowerQlId);
                }
            }
        }
    }

    this.onlyActiveButton = function(id) {
        $(id).siblings().removeClass('active');
        $(id).siblings().removeClass('btn-success');
        $(id).addClass('active');
        $(id).addClass('btn-success');
    };
}