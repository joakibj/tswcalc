var tswcalc = tswcalc || {};
tswcalc.checkbox = tswcalc.checkbox || {};

tswcalc.checkbox.RaidCheckbox = function RaidCheckbox(slot) {
    var self = this;
    var slotObj = tswcalc.slots[slot];

    this.initiate = function() {
        if (slot != 'weapon') {
            this.bindEvents();
        }
    };

    this.bindEvents = function() {
        slotObj.el.btn.nyraid.on('change', this.checkboxClicked);
    };

    this.checkboxClicked = function(event) {
        if ($(this).is(':checked')) {
            self.changeToRaidItem();
        } else {
            self.changeToCustomItem();
        }
    };

    this.changeToRaidItem = function() {
        var item = tswcalc.data.ny_raid_items[slot][slotObj.role()];
        if (item !== undefined) {
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
        } else {
            //slot does not have any NY raid item
        }
    };

    this.changeToCustomItem = function() {
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
