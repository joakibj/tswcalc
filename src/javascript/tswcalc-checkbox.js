function RaidCheckbox(slot) {
    var self = this;

    this.initiate = function() {
        if (slot != 'weapon') {
            this.bindEvents();
        }
    };

    this.bindEvents = function() {
        tswcalc.slots[slot].el.btn.nyraid.on('change', this.checkboxClicked);
    };

    this.checkboxClicked = function(event) {
        if ($(this).is(':checked')) {
            self.changeToRaidItem();
        } else {
            self.changeToCustomItem();
        }
    };

    this.changeToRaidItem = function() {
        var item = tswcalc.data.ny_raid_items[slot][tswcalc.slots[slot].role()];
        if (item !== undefined) {
            tswcalc.slots[slot].name(': ' + item.name);
            tswcalc.slots[slot].ql('10.4');
            tswcalc.slots[slot].signetQuality('epic');
            tswcalc.slots[slot].el.signetId.append($('<option>', {
                value: item.signet.id,
                text: item.signet.name,
                selected: true
            }));
            tswcalc.slots[slot].updateSignet();
            tswcalc.slots[slot].el.ql.attr('disabled', 'disabled');
            tswcalc.slots[slot].el.signetId.attr('disabled', 'disabled');
            tswcalc.slots[slot].el.signetQuality.attr('disabled', 'disabled');
            tswcalc.summary.updateAllStats();
        } else {
            //slot does not have any NY raid item
        }
    };

    this.changeToCustomItem = function() {
        tswcalc.slots[slot].el.ql.removeAttr('disabled');
        tswcalc.slots[slot].el.signetId.removeAttr('disabled');
        tswcalc.slots[slot].el.signetQuality.removeAttr('disabled');
        tswcalc.slots[slot].el.signetId.find('option').filter(function() {
            return $(this).attr('value') >= 80;
        }).remove();
        tswcalc.slots[slot].name('');
        tswcalc.slots[slot].ql('10.0');
        tswcalc.slots[slot].signetQuality('none');
        tswcalc.slots[slot].signetId('none');
        tswcalc.slots[slot].updateSignet();
        tswcalc.summary.updateAllStats();
    };
}