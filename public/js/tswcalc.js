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
        this.addListenersToGlyphDistButtons(slotId, 'primary-glyph');
        this.addListenersToGlyphDistButtons(slotId, 'secondary-glyph');
    };

    this.addListenersToSlotQlButtons = function(id_prefix) {
        self.onlyActiveButton('#' + slotId + '-ql-btn0');
        buttons = $('#' + id_prefix + '-ql > button.btn').on('click', function(event) {
            self.onlyActiveButton('#' + this.id);
            updatePrimaryStats();
        });
    };

    this.addListenersToGlyphDistButtons = function(id_prefix, glyph) {
        self.onlyActiveButton('#' + slotId + '-primary-glyph-dist-btn0');
        self.onlyActiveButton('#' + slotId + '-secondary-glyph-dist-btn0');
        buttons = $('#' + id_prefix + '-' + glyph + '-dist > button.btn').on('click', function(event) {
            self.onlyActiveButton('#' + this.id);
            self.balanceGlyphDist(this, glyph);
        });
    };

    this.balanceGlyphDist = function(button, glyph) {
        otherActiveButton = $('#' + slotId + '-'+self.getInverseGlyphStat(glyph)+'-dist > button.btn.active');
        self.balanceGlyphDistOverflow(button, otherActiveButton[0]);
    }

    this.balanceGlyphDistOverflow = function(clickedButton, otherButton) {
        if (otherButton != null) {
            clickedDist = parseInt(clickedButton.innerHTML);
            otherDist = parseInt(otherButton.innerHTML);
            sumBothDist = clickedDist + otherDist;
            if ((sumBothDist) > 4) {
                otherDistLoweredByOne = otherButton.id.substring(0, otherButton.id.length - 1) + (otherDist - (sumBothDist - 4));
                self.onlyActiveButton('#' + otherDistLoweredByOne);
            }
        }
    }

    this.onlyActiveButton = function(id) {
        $(id).siblings().removeClass('active');
        $(id).siblings().removeClass('btn-success');
        $(id).addClass('active');
        $(id).addClass('btn-success');
    };

    this.getInverseGlyphStat = function(glyph) {
        return glyph == 'primary-glyph' ? 'secondary-glyph' : 'primary-glyph';
    }
}