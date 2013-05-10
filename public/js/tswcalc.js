$(document).ready(function() {

    renderContainer(template_data);
    startHandlers();
    $('#summary').scrollToFixed();
});

function renderContainer(data) {
    dust.render("container", template_data,

    function(err, out) {
        if (err) {
            console.log(err);
        }
        $('.container').html(out);
    });
}

function startHandlers() {
    for (var i = 0; i < template_data.slots.length; i++) {
        var buttonHandler = new ButtonHandler(template_data.slots[i].id_prefix);
        buttonHandler.initiate();
        var selectHandler = new SelectHandler(template_data.slots[i].id_prefix);
        selectHandler.initiate();
    }
}

function updatePrimaryStats() {
    sumHitPoints = 0;
    sumAttackRating = 0;
    sumHealRating = 0;
    for (var i = 0; i < template_data.slots.length; i++) {
        var role = $('#' + template_data.slots[i].id_prefix + '-role option:selected').attr('value');
        var ql = $('#' + template_data.slots[i].id_prefix + '-ql option:selected').attr('value');
        if (role == 'dps') {
            sumAttackRating += custom_gear_data[template_data.slots[i].group].heal_dps['ql' + (ql)].rating;
        } else if (role == 'healer') {
            sumHealRating += custom_gear_data[template_data.slots[i].group].heal_dps['ql' + (ql)].rating;
        } else if (role == 'tank') {
            sumHitPoints += custom_gear_data[template_data.slots[i].group].tank['ql' + (ql)].hitpoints;
        }
    }
    $('#stat-hitpoints').text(sumHitPoints);
    $('#stat-attack-rating').text(sumAttackRating);
    $('#stat-heal-rating').text(sumHealRating);
}

function SelectHandler(slotId) {
    var slotId = slotId;
    var self = this;

    this.initiate = function() {
        this.addListenersToQlSelect(slotId, '');
        this.addListenersToQlSelect(slotId, '-glyph');
    };

    this.addListenersToQlSelect = function(id_prefix, id_suffix) {
        $('#' + id_prefix + id_suffix + '-ql').change(function() {
            updatePrimaryStats();
        });
    };
}

function ButtonHandler(slotId) {
    var slotId = slotId;
    var self = this;

    this.initiate = function() {
        this.addListenersToGlyphDistButtons(slotId, 'primary-glyph');
        this.addListenersToGlyphDistButtons(slotId, 'secondary-glyph');
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
        otherActiveButton = $('#' + slotId + '-' + self.getInverseGlyphStat(glyph) + '-dist > button.btn.active');
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