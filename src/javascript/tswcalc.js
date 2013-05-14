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
    $('#' + slotId + '-glyph-ql').val('10.0');
    $('#' + slotId + '-primary-glyph').val('none');
    $('#' + slotId + '-secondary-glyph').val('none');
    $('#' + slotId + '-primary-glyph-dist-btn0').trigger('click');
    $('#' + slotId + '-secondary-glyph-dist-btn0').trigger('click');
};

function startHandlers() {
    for (var i = 0; i < template_data.slots.length; i++) {
        var buttonHandler = new ButtonHandler(template_data.slots[i].id_prefix);
        buttonHandler.initiate();
        var selectHandler = new SelectHandler(template_data.slots[i].id_prefix);
        selectHandler.initiate();
    }
    resetButton();
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

function updateOffensiveDefensiveStats() {
    sums = {
        'critical-rating': 0,
        'critical-power': 0,
        'penetration-rating': 0,
        'hit-rating': 0,
        'block-rating': 0,
        'defense-rating': 0,
        'evade-rating': 0,
        'physical-protection': 0,
        'magical-protection': 0
    };
    for (var i = 0; i < template_data.slots.length; i++) {
        var glyphQl = $('#' + template_data.slots[i].id_prefix + '-glyph-ql option:selected').attr('value');
        var primaryGlyph = $('#' + template_data.slots[i].id_prefix + '-primary-glyph option:selected').attr('value');
        var secondaryGlyph = $('#' + template_data.slots[i].id_prefix + '-secondary-glyph option:selected').attr('value');

        if (primaryGlyph != "none" || secondaryGlyph != "none") {
            var primaryDist = $('#' + template_data.slots[i].id_prefix + '-primary-glyph-dist > button.btn.active')[0].innerHTML;
            var secondaryDist = $('#' + template_data.slots[i].id_prefix + '-secondary-glyph-dist > button.btn.active')[0].innerHTML;

            if (primaryDist != null || secondaryDist != null) {
                var primaryValue = 0;
                var secondaryValue = 0;
                if (primaryGlyph != "none") {
                    primaryValue = glyph_data.stat[primaryGlyph].ql[glyphQl].slot[template_data.slots[i].group].dist[primaryDist];
                    sums[primaryGlyph] += primaryValue;
                    $('#' + template_data.slots[i].id_prefix + '-primary-glyph-value').html('+' + primaryValue);
                } else {
                    $('#' + template_data.slots[i].id_prefix + '-primary-glyph-value').html('0');
                }
                if (secondaryGlyph != "none") {
                    secondaryValue = glyph_data.stat[secondaryGlyph].ql[glyphQl].slot[template_data.slots[i].group].dist[secondaryDist];
                    sums[secondaryGlyph] += secondaryValue;
                    $('#' + template_data.slots[i].id_prefix + '-secondary-glyph-value').html('+' + secondaryValue);
                } else {
                    $('#' + template_data.slots[i].id_prefix + '-secondary-glyph-value').html('0');
                }

            }
        } else {
            $('#' + template_data.slots[i].id_prefix + '-primary-glyph-value').html('0');
            $('#' + template_data.slots[i].id_prefix + '-secondary-glyph-value').html('0');
        }
    }
    console.log(sums);
    for (var stat in sums) {
        if (sums.hasOwnProperty(stat)) {
            if (sums[stat] > 0) {
                $('#stat-' + stat).html('+' + sums[stat]);
            } else {
                $('#stat-' + stat).html("0");
            }
        }
    }
};

function SelectHandler(slotId) {
    var slotId = slotId;
    var self = this;

    this.initiate = function() {
        self.addListenersToRoleSelect(slotId);
        self.addListenersToQlSelect(slotId, '');
        self.addListenersToGlyphSelect(slotId, 'glyph-ql');
        self.addListenersToGlyphSelect(slotId, 'primary-glyph');
        self.addListenersToGlyphSelect(slotId, 'secondary-glyph');
    };

    this.addListenersToRoleSelect = function(id_prefix) {
        $('#' + id_prefix + '-role').change(function() {
            updatePrimaryStats();
        });
    };

    this.addListenersToQlSelect = function(id_prefix, id_suffix) {
        $('#' + id_prefix + id_suffix + '-ql').change(function() {
            updatePrimaryStats();
        });
    };

    this.addListenersToGlyphSelect = function(id_prefix, id_suffix) {
        $('#' + id_prefix + '-' + id_suffix).change(function() {
            updateOffensiveDefensiveStats();
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
            updateOffensiveDefensiveStats();
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