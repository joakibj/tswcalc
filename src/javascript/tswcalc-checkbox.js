function RaidCheckbox(slot) {
    var self = this;

    this.initiate = function() {
        this.bindEvents();
    };

    this.bindEvents = function() {
        slots[slot].el.btn.nyraid.on('click', this.checkboxClicked);
    };

    this.checkboxClicked = function(event) {
        if (slots[slot].el.btn.nyraid.is(':checked')) {
            self.changeToRaidItem();
        } else {
            self.changeToCustomItem();
        }
    };

    this.changeToRaidItem = function() {
        var item = ny_raid_items[slot][slots[slot].role()];
        if (item !== undefined) {
            slots[slot].name(item.name);
            slots[slot].signetQuality('epic');
            slots[slot].el.signetId.append($('<option>', {
                value: item.signet.id,
                text: item.signet.name,
                selected: true
            }));
            slots[slot].updateSignet();
            slots[slot].el.signetId.attr('disabled', 'disabled');
            slots[slot].el.signetQuality.attr('disabled', 'disabled');
        } else {
            //slot does not have any NY raid item
        }
    };

    this.changeToCustomItem = function() {
        slots[slot].el.signetId.removeAttr('disabled');
        slots[slot].el.signetQuality.removeAttr('disabled');
        slots[slot].el.signetId.find('option').filter(function() {
            return $(this).attr('value') >= 80;
        }).remove();
        slots[slot].name('');
        slots[slot].signetQuality('none');
        slots[slot].signetId('none');
        slots[slot].updateSignet();
    };
}