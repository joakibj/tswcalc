var tswcalc = tswcalc || {};
tswcalc.checkbox = tswcalc.checkbox || {};

tswcalc.checkbox.RaidCheckbox = function RaidCheckbox(slot) {
    var self = this;
    var slotObj = tswcalc.slots[slot];

    this.initiate = function() {
        if (!slotObj.isWeapon()) {
            this.bindEvents();
        }
    };

    this.bindEvents = function() {
        slotObj.el.btn.nyraid.on('change', this.nyRaidCheckboxClicked);
        slotObj.el.btn.woodcutters.on('change', this.woodcuttersCheckboxClicked);
    };

    this.nyRaidCheckboxClicked = function(event) {
        if ($(this).is(':checked')) {
            slotObj.el.btn.woodcutters.attr('checked', false);
            self.changeToRaidItem();
        } else {
            self.changeToCustomItem();
        }
    };

    this.woodcuttersCheckboxClicked = function(event) {
        if ($(this).is(':checked')) {
            slotObj.el.btn.nyraid.attr('checked', false);
            self.changeToWoodcutters();
        } else {
            self.changeToCustomItem();
        }
    };

    this.changeToRaidItem = function() {
        var item = tswcalc.data.ny_raid_items[slot][slotObj.role()];
        if (item !== undefined) {
            self.enableAllGlyphDistButtons(slotObj.el.btn.primary);
            self.enableAllGlyphDistButtons(slotObj.el.btn.secondary);
            slotObj.el.glyphQl.removeAttr('disabled');
            slotObj.el.primaryGlyph.removeAttr('disabled');
            slotObj.el.secondaryGlyph.removeAttr('disabled');

            slotObj.name(': ' + item.name);
            slotObj.ql('10.4');
            slotObj.signetQuality('epic');
            slotObj.el.signetId.append($('<option>', {
                value: item.signet.id,
                text: item.signet.name,
                selected: true
            }));
            slotObj.updateSignet();
            slotObj.el.ql.attr('disabled', 'disabled');
            slotObj.el.signetId.attr('disabled', 'disabled');
            slotObj.el.signetQuality.attr('disabled', 'disabled');
            tswcalc.summary.updateAllStats();
        }
    };

    this.changeToWoodcutters = function() {
        var item = tswcalc.data.woodcutters[slot][slotObj.role()];
        if (item !== undefined) {
            slotObj.name(': ' + item.name);
            slotObj.ql('10.9');
            slotObj.glyphQl(item.glyph.ql);
            slotObj.primaryGlyph(item.glyph.primary.stat);
            slotObj.secondaryGlyph(item.glyph.secondary.stat);
            slotObj.el.btn.primary[item.glyph.primary.dist].trigger('click');
            slotObj.el.btn.secondary[item.glyph.secondary.dist].trigger('click');
            slotObj.signetQuality('heroic');
            slotObj.el.signetId.append($('<option>', {
                value: item.signet.id,
                text: item.signet.name,
                selected: true
            }));
            slotObj.updateSignet();
            slotObj.el.ql.attr('disabled', 'disabled');
            slotObj.el.glyphQl.attr('disabled', 'disabled');
            slotObj.el.primaryGlyph.attr('disabled', 'disabled');
            slotObj.el.secondaryGlyph.attr('disabled', 'disabled');
            self.disableAllGlyphDistButtonsExcept(slotObj.el.btn.primary, item.glyph.primary.dist);
            self.disableAllGlyphDistButtonsExcept(slotObj.el.btn.secondary, item.glyph.secondary.dist);
            slotObj.el.signetId.attr('disabled', 'disabled');
            slotObj.el.signetQuality.attr('disabled', 'disabled');
            tswcalc.summary.updateAllStats();
        }
    };

    this.disableAllGlyphDistButtonsExcept = function(glyphtype, dist) {
        for (var i = 0; i <= 4; i++) {
            if(i !== dist) {
                glyphtype[i].attr('disabled', 'disabled');
            }
        }
    };

    this.enableAllGlyphDistButtons = function(glyphtype) {
        for (var i = 0; i <= 4; i++) {
            glyphtype[i].removeAttr('disabled');
        }
    };

    this.changeToCustomItem = function() {
        self.enableAllGlyphDistButtons(slotObj.el.btn.primary);
        self.enableAllGlyphDistButtons(slotObj.el.btn.secondary);
        slotObj.el.glyphQl.removeAttr('disabled');
        slotObj.el.primaryGlyph.removeAttr('disabled');
        slotObj.el.secondaryGlyph.removeAttr('disabled');
        slotObj.el.ql.removeAttr('disabled');
        slotObj.el.signetId.removeAttr('disabled');
        slotObj.el.signetQuality.removeAttr('disabled');
        slotObj.el.signetId.find('option').filter(function() {
            return $(this).attr('value') >= 80;
        }).remove();
        slotObj.name('');
        slotObj.el.nameWarning.hide();
        slotObj.signetQuality('none');
        slotObj.signetId('none');
        slotObj.updateSignet();
        tswcalc.summary.updateAllStats();
    };
};
