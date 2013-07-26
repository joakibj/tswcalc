var tswcalc = tswcalc || {};
tswcalc.select = tswcalc.select || {};

tswcalc.select.SelectHandler = function SelectHandler(slot) {
    var self = this;

    this.initiate = function() {
        this.bindEvents();
        this.addSignetsToSelect();
    };

    this.bindEvents = function() {
        if (tswcalc.slots[slot.id_prefix].isWeapon()) {
            tswcalc.slots[slot.id_prefix].el.wtype.change(this.wtypeChange);
        } else {
            tswcalc.slots[slot.id_prefix].el.role.change(this.roleChange);
        }
        tswcalc.slots[slot.id_prefix].el.ql.change(this.qlChange);
        tswcalc.slots[slot.id_prefix].el.glyphQl.change(this.glyphChange);
        tswcalc.slots[slot.id_prefix].el.primaryGlyph.change(this.glyphChange);
        tswcalc.slots[slot.id_prefix].el.secondaryGlyph.change(this.glyphChange);
        tswcalc.slots[slot.id_prefix].el.signetId.change(this.signetChange);
        tswcalc.slots[slot.id_prefix].el.signetQuality.change(this.signetChange);
    };

    this.addSignetsToSelect = function() {
        tswcalc.slots[slot.id_prefix].el.signetId.append($('<option>', {
            value: "none",
            text: "None",
            selected: "true"
        }));

        this.updateToDefaultSignet();

        var signetsInSlotGroup = $.merge([], tswcalc.data.signet_data[slot.group]);
        // weapon signets can also be slotted in head
        $.merge(signetsInSlotGroup, this.getSignetsForHead(slot.group));
        // merge in non-head and non-weapon signets in this slot
        $.merge(signetsInSlotGroup, this.getSignetsForSlot());

        signetsInSlotGroup.sort(function(a, b) {
            if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return 1;
            } else {
                return -1;
            }
        });
        $.each(signetsInSlotGroup, function(index, value) {
            tswcalc.slots[slot.id_prefix].el.signetId.append($('<option>', {
                value: value.id,
                text: value.name
            }));
        });
    };

    this.updateToDefaultSignet = function() {
        var signet_icon_url = 'assets/images/icons/' + slot.group + '_dps.png';
        var signet_quality_url = 'assets/images/icons/normal.png';
        $('#' + slot.id_prefix + '-signet-img-icon').attr('src', signet_icon_url);
        $('#' + slot.id_prefix + '-signet-img-quality').attr('src', signet_quality_url);
    };

    this.getSignetsForHead = function(group) {
        if (group == 'head') {
            return tswcalc.data.signet_data['weapon'];
        }
        return [];
    };

    this.getSignetsForSlot = function() {
        if (slot.id_prefix !== 'head' && slot.id_prefix !== 'weapon' && typeof tswcalc.data.signet_data[slot.id_prefix] !== 'undefined') {
            return tswcalc.data.signet_data[slot.id_prefix];
        }
        return [];
    };

    this.signetChange = function(event) {
        var signet = tswcalc.slots[slot.id_prefix].signet();

        if (typeof signet.requires !== 'undefined') {
            var cadoro = tswcalc.data.cadoro_items[signet.requires];
            var cadoroItem = cadoro[slot.id_prefix][tswcalc.slots[slot.id_prefix].role()];
            if (cadoroItem !== undefined && cadoroItem.name !== '') {
                tswcalc.slots[slot.id_prefix].name(': ' + cadoroItem.name);
            }
            tswcalc.slots[slot.id_prefix].signetQuality('epic');
            tswcalc.slots[slot.id_prefix].el.signetQuality.attr('disabled', 'disabled');
            tswcalc.slots[slot.id_prefix].el.nameWarning.tooltip({
                title: cadoro.warning_text,
                placement: 'top'
            });
            tswcalc.slots[slot.id_prefix].el.nameWarning.show();
        } else {
            if(!tswcalc.slots[slot.id_prefix].isWeapon()) {
                tswcalc.slots[slot.id_prefix].name('');
            }
            tswcalc.slots[slot.id_prefix].el.signetQuality.removeAttr('disabled');
            tswcalc.slots[slot.id_prefix].el.nameWarning.hide();
        }
        tswcalc.slots[slot.id_prefix].updateSignet();
        tswcalc.summary.updatePrimaryStats();
        tswcalc.summary.updateCosts();
    };

    this.roleChange = function(event) {
        var role = $(this).val();
        if (tswcalc.data.ny_raid_items[slot.id_prefix][role] === undefined) {
            tswcalc.slots[slot.id_prefix].el.btn.nyraid.attr('checked', false);
            tswcalc.slots[slot.id_prefix].el.btn.nyraid.attr('disabled', 'disabled');
        } else {
            tswcalc.slots[slot.id_prefix].el.btn.nyraid.removeAttr('disabled');
        }
        if (tswcalc.slots[slot.id_prefix].el.btn.nyraid.is(':checked')) {
            tswcalc.checkbox[slot.id_prefix].changeToRaidItem();
        } else {
            tswcalc.checkbox[slot.id_prefix].changeToCustomItem();
        }
        tswcalc.summary.updatePrimaryStats();
        tswcalc.summary.updateCosts();
    };

    this.wtypeChange = function(event) {
        var wtype = $(this).val();

        tswcalc.slots[slot.id_prefix].name(': ' + tswcalc.util.capitalise(wtype));
    };

    this.qlChange = function(event) {
        tswcalc.summary.updatePrimaryStats();
        tswcalc.summary.updateCosts();
    };

    this.glyphChange = function(id_suffix) {
        tswcalc.summary.updateOffensiveDefensiveStats();
    };
};