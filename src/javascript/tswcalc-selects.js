function SelectHandler(slot) {
    var self = this;

    this.initiate = function() {
        this.bindEvents();
        this.addSignetsToSelect();
    };

    this.bindEvents = function() {
        slots[slot.id_prefix].el.role.change(this.roleChange);
        slots[slot.id_prefix].el.ql.change(this.qlChange);
        slots[slot.id_prefix].el.glyphQl.change(this.glyphChange);
        slots[slot.id_prefix].el.primaryGlyph.change(this.glyphChange);
        slots[slot.id_prefix].el.secondaryGlyph.change(this.glyphChange);
        slots[slot.id_prefix].el.signetId.change(this.signetChange);
        slots[slot.id_prefix].el.signetQuality.change(this.signetChange);
    };

    this.addSignetsToSelect = function() {
        $('#' + slot.id_prefix + '-pick-signet').append($('<option>', {
            value: "none",
            text: "None",
            selected: "true"
        }));
        var signet_icon_url = 'assets/images/icons/' + slot.group + '_dps.png';
        var signet_quality_url = 'assets/images/icons/normal.png';
        $('#' + slot.id_prefix + '-signet-img-icon').attr('src', signet_icon_url);
        $('#' + slot.id_prefix + '-signet-img-quality').attr('src', signet_quality_url);

        var signetsInSlotGroup = $.merge([], signet_data[slot.group]);
        // weapon signets can also be slotted in head
        $.merge(signetsInSlotGroup, this.getSignetsForHead(slot.group));
        signetsInSlotGroup.sort(function(a, b) {
            if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return 1;
            } else {
                return -1;
            }
        });
        $.each(signetsInSlotGroup, function(index, value) {
            $('#' + slot.id_prefix + '-pick-signet').append($('<option>', {
                value: value.id,
                text: value.name
            }));
        });
    };

    this.getSignetsForHead = function(group) {
        if (group == 'head') {
            return signet_data['weapon'];
        }
        return [];
    };

    this.signetChange = function(event) {
        slots[slot.id_prefix].updateSignet();
        summary.updatePrimaryStats();
    };

    this.roleChange = function(event) {
        summary.updatePrimaryStats();
    };

    this.qlChange = function(event) {
        summary.updatePrimaryStats();
    };

    this.glyphChange = function(id_suffix) {
        summary.updateOffensiveDefensiveStats();
    };
}