var tswcalc = tswcalc || {};

tswcalc.slots = function() {
    //this method can only be called after the document is ready
    var init = function() {
        for (var i = 0; i < tswcalc.data.template_data.slots.length; i++) {
            var slotData = tswcalc.data.template_data.slots[i];
            this[slotData.id_prefix] = new tswcalc.slots.Slot(slotData.id_prefix, slotData.name, slotData.group);
            this[slotData.id_prefix].el.nameWarning.hide();
        }
        drawPrimaryWeapon();
    };

    var drawPrimaryWeapon = function() {
        tswcalc.slots.weapon2.sheathWeapon();
        tswcalc.slots.weapon.weaponDrawn = true;
    };

    var length = function() {
        return tswcalc.data.template_data.slots.length;
    };

    var indices = function() {
        return ['head', 'weapon', 'weapon2', 'ring', 'neck', 'wrist', 'luck', 'waist', 'occult'];
    };

    var hasSlot = function(slot) {
        return this.hasOwnProperty(slot) && $.inArray(slot, indices()) != -1;
    };

    var reset = function() {
        for (var slotId in this) {
            if (this.hasSlot(slotId)) {
                this[slotId].reset();
            }
        }
    };

    var state = function() {
        var slotStates = {};
        for (var slotId in this) {
            if (this.hasSlot(slotId)) {
                slotStates[slotId] = this[slotId].state();
            }
        }
        return slotStates;
    };

    var mappedState = function() {
        var mappedSlotStates = {};
        for (var slotId in this) {
            if (this.hasSlot(slotId)) {
                mappedSlotStates[slotId] = this[slotId].mappedState();
            }
        }
        return mappedSlotStates;
    };

    var oPublic = {
        init: init,
        length: length,
        indices: indices,
        hasSlot: hasSlot,
        reset: reset,
        state: state,
        mappedState: mappedState
    };

    return oPublic;
}();

tswcalc.slots.Slot = function Slot(id, name, group) {
    var self = this;
    this.id = id;
    this.name = name;
    this.group = group;
    this.weaponDrawn = false;

    this.el = {
        div: $('#' + this.id + '-slot'),
        name: $('#' + this.id + '-name'),
        role: $('#' + this.id + '-role'),
        wtype: $('#' + this.id + '-wtype'),
        ql: $('#' + this.id + '-ql'),
        glyphQl: $('#' + this.id + '-glyph-ql'),
        primaryGlyph: $('#' + this.id + '-primary-glyph'),
        secondaryGlyph: $('#' + this.id + '-secondary-glyph'),
        primaryDist: '#' + this.id + '-primary-glyph-dist > button.btn.active',
        secondaryDist: '#' + this.id + '-secondary-glyph-dist > button.btn.active',
        primaryGlyphValue: $('#' + this.id + '-primary-glyph-value'),
        secondaryGlyphValue: $('#' + this.id + '-secondary-glyph-value'),
        signetId: $('#' + this.id + '-pick-signet'),
        signetQuality: $('#' + this.id + '-signet-quality'),
        signetIconImg: $('#' + this.id + '-signet-img-icon'),
        signetIconBorderImg: $('#' + this.id + '-signet-img-quality'),
        signetDescription: $('#' + this.id + '-signet-description'),
        nameWarning: $('#' + this.id + '-name-warning'),
        btn: {
            primary: {
                0: $('#' + this.id + '-primary-glyph-dist-btn0'),
                1: $('#' + this.id + '-primary-glyph-dist-btn1'),
                2: $('#' + this.id + '-primary-glyph-dist-btn2'),
                3: $('#' + this.id + '-primary-glyph-dist-btn3'),
                4: $('#' + this.id + '-primary-glyph-dist-btn4')
            },
            secondary: {
                0: $('#' + this.id + '-secondary-glyph-dist-btn0'),
                1: $('#' + this.id + '-secondary-glyph-dist-btn1'),
                2: $('#' + this.id + '-secondary-glyph-dist-btn2'),
                3: $('#' + this.id + '-secondary-glyph-dist-btn3'),
                4: $('#' + this.id + '-secondary-glyph-dist-btn4')
            },
            nyraid: $('#' + this.id + '-nyraid'),
            woodcutters: $('#' + this.id + '-woodcutters')
        }
    };

    this.name = function() {
        if (arguments.length == 1) {
            this.el.name.html(arguments[0]);
        } else {
            return this.el.name.html();
        }
    };

    this.isWeapon = function() {
        return this.group == 'weapon';
    };

    this.role = function() {
        if (arguments.length == 1) {
            this.el.role.val(arguments[0]);
        } else {
            return this.group != 'weapon' ? this.el.role.val() : 'none';
        }
    };

    this.wtype = function() {
        if (arguments.length == 1) {
            this.el.wtype.val(arguments[0]);
        } else {
            return this.group == 'weapon' ? this.el.wtype.val() : 'none';
        }
    };

    this.ql = function() {
        if (arguments.length == 1) {
            this.el.ql.val(arguments[0]);
        } else {
            return this.el.ql.val();
        }
    };

    this.glyphQl = function() {
        if (arguments.length == 1) {
            this.el.glyphQl.val(arguments[0]);
        } else {
            return this.el.glyphQl.val();
        }
    };

    this.primaryGlyph = function() {
        if (arguments.length == 1) {
            this.el.primaryGlyph.val(arguments[0]);
        } else {
            return this.el.primaryGlyph.val();
        }
    };

    this.secondaryGlyph = function() {
        if (arguments.length == 1) {
            this.el.secondaryGlyph.val(arguments[0]);
        } else {
            return this.el.secondaryGlyph.val();
        }
    };

    this.primaryGlyphValue = function() {
        if (this.primaryGlyph() == 'none') {
            return 0;
        }
        return tswcalc.data.glyph_data.stat[this.primaryGlyph()].ql[this.glyphQl()].slot[this.group].dist[this.primaryDist()];
    };

    this.secondaryGlyphValue = function() {
        if (this.secondaryGlyph() == 'none') {
            return 0;
        }
        return tswcalc.data.glyph_data.stat[this.secondaryGlyph()].ql[this.glyphQl()].slot[this.group].dist[this.secondaryDist()];
    };

    this.primaryDist = function() {
        return $(this.el.primaryDist)[0].innerHTML;
    };

    this.secondaryDist = function() {
        return $(this.el.secondaryDist)[0].innerHTML;
    };

    this.sheathWeapon = function() {
        if(this.isWeapon()) {
            this.weaponDrawn = false;
            this.el.div.hide();
        }
    };

    this.drawWeapon = function() {
        if(this.isWeapon()) {
            this.weaponDrawn = true;
            this.el.div.show();
        }
    };

    this.itemCost = function () {
        // woodcutters items do not cost bullion/pantheon
        if(this.signetId() >= 90 && this.signetId() <= 93) {
            return {
                bullion: 0,
                pantheon: 0
            };
        }
        return tswcalc.data.costs[this.isWeapon() ? 'weapon' : 'talisman'][this.ql()];
    };

    this.glyphCost = function () {
        // woodcutters items do not cost bullion/pantheon
        if(this.signetId() >= 90 && this.signetId() <= 93) {
            return {
                bullion: 0,
                pantheon: 0
            };
        }
        return tswcalc.data.costs['glyph'][this.glyphQl()];
    }

    this.blackBullionCost = function() {
        var blackBullions = 0;
        blackBullions += this.glyphCost().bullion;
        blackBullions += this.itemCost().bullion;
        return blackBullions;
    };

    this.markOfThePantheonCost = function () {
        return this.itemCost().pantheon || 0;
    };

    this.astralFuseCost = function() {
        return this.glyphCost().astral_fuse ? 1 : 0;
    };

    this.criterionUpgradeCost = function () {
        return this.itemCost().criterion_upgrade ? 1 : 0;
    };

    this.signetId = function() {
        if (arguments.length == 1) {
            this.el.signetId.val(arguments[0]);
        } else {
            return this.el.signetId.val();
        }
    };

    this.signetQuality = function() {
        if (arguments.length == 1) {
            this.el.signetQuality.val(arguments[0]);
        } else {
             if(this.el.signetQuality.val() === null) {
                return "heroic";
            }
            return this.el.signetQuality.val();
        }
    };

    this.signet = function() {
        var foundSignet = 0;
        // check if this signet is a raid item, if so, look it up.
        // NY raid items are assigned signetId 80 - 88
        // Woodcutters are 90,91,92
        if (this.signetId() >= 80 && this.signetId() < 90) {
            foundSignet = tswcalc.data.ny_raid_items[this.id][this.role()].signet;
        } else if(this.signetId() >= 90) {
            foundSignet = tswcalc.data.woodcutters[this.id][this.role()].signet;
        } else {
            foundSignet = tswcalc.data.signet_data.find(this.group, this.signetId());
            if (foundSignet.id == 0 && tswcalc.data.signet_data[this.id] !== undefined) {
                foundSignet = tswcalc.data.signet_data.find(this.id, this.signetId());
            }
        }
        return foundSignet !== 0 || foundSignet !== undefined ? foundSignet : null;
    };

    this.signetDescription = function() {
        var signet = this.signet();
        if (signet === null) {
            return '';
        }
        var description = '';
        description = signet.description.replace('%s', this.determineSignetQualityValue(signet));
        description = description.replace('%d', this.determineSignetQualityValue(signet));
        if (Object.prototype.toString.call(signet.quality) === '[object Array]') {
            description = description.replace('%0', this.determineSignetQualityValue(signet, 0));
            description = description.replace('%1', this.determineSignetQualityValue(signet, 1));
        }

        if (signet.cooldown != '0') {
            description += ' ' + signet.cooldown + ' seconds cooldown.';
        }

        return description;
    };

    this.determineSignetQualityValue = function(signet, quality_index) {
        quality_index = typeof quality_index !== 'undefined' ? quality_index : -1;
        var quality = this.signetQuality();
        switch (quality) {
            case 'none':
                return 0;
            case 'normal':
                return quality_index == -1 ? signet.quality.normal : signet.quality[quality_index].normal;
            case 'elite':
                return quality_index == -1 ? signet.quality.elite : signet.quality[quality_index].elite;
            case 'epic':
                return quality_index == -1 ? signet.quality.epic : signet.quality[quality_index].epic;
            case 'heroic':
                return quality_index == -1 ? signet.quality.heroic : signet.quality[quality_index].heroic;
            default:
                return 0;
        }
    };

    this.updateGlyphValues = function() {
        this.updatePrimaryGlyphValue();
        this.updateSecondaryGlyphValue();
    };

    this.updatePrimaryGlyphValue = function() {
        this.el.primaryGlyphValue.html(this.primaryGlyphValue() !== 0 ? '+' + this.primaryGlyphValue() : 0);
    };

    this.updateSecondaryGlyphValue = function() {
        this.el.secondaryGlyphValue.html(this.secondaryGlyphValue() !== 0 ? '+' + this.secondaryGlyphValue() : 0);
    };

    this.updateSignet = function() {
        this.updateSignetIcon();
        this.updateSignetDescription();
    };

    this.updateSignetIcon = function() {
        var signet = this.signet();
        var signetQuality = this.signetQuality();
        if (signet.id !== 0 && signetQuality != 'none') {
            this.updateSignetIconBorder(signetQuality);
            this.updateSignetIconImage(signet);
        } else if (signet.id !== 0 && signetQuality == 'none') {
            this.signetQuality('normal');
        } else if (signetQuality != 'none' && signet.id === 0) {
            this.updateSignetIconBorder(signetQuality);
            this.updateSignetIconImageFromName(this.group + '_dps');
        } else {
            this.updateSignetIconBorder('normal');
            this.updateSignetIconImageFromName(this.group + '_dps');
        }
    };

    this.updateSignetIconBorder = function(signetQuality) {
        var signet_quality_url = 'assets/images/icons/' + signetQuality + '.png';
        this.el.signetIconBorderImg.attr('src', signet_quality_url);
    };

    this.updateSignetIconImage = function(signet) {
        this.updateSignetIconImageFromName(signet.icon);
    };

    this.updateSignetIconImageFromName = function(name) {
        var signet_icon_url = 'assets/images/icons/' + name + '.png';
        this.el.signetIconImg.attr('src', signet_icon_url);
    };

    this.updateSignetDescription = function() {
        this.el.signetDescription.html(this.signetDescription());
    };

    this.reset = function() {
        this.name('');
        this.wtype('none');
        this.ql('10.0');
        this.role('none');
        this.glyphQl('10.0');
        this.primaryGlyph('none');
        this.secondaryGlyph('none');
        this.signetId('none');
        this.signetQuality('none');
        this.updateSignet();
        if (this.el.btn.nyraid.is(':checked')) {
            this.el.btn.nyraid.prop('checked', false);
            this.el.btn.nyraid.change();
        }
        if (this.el.btn.woodcutters.is(':checked')) {
            this.el.btn.woodcutters.prop('checked', false);
            this.el.btn.woodcutters.change();
        }
        this.el.btn.primary[4].trigger('click');
        this.el.btn.secondary[0].trigger('click');
    };

    this.state = function() {
        return {
            role: this.role(),
            ql: this.ql(),
            glyph_ql: this.glyphQl(),
            primary_glyph: this.primaryGlyph(),
            secondary_glyph: this.secondaryGlyph(),
            primary_dist: this.primaryDist(),
            secondary_dist: this.secondaryDist(),
            signet_quality: this.signetQuality(),
            signet_id: this.signetId()
        };
    };

    this.mappedState = function() {
        return {
            wtype: this.stripContent(this.wtype()),
            role: this.stripContent(this.role()),
            ql: this.stripContent(this.ql()),
            glyph_ql: this.stripContent(this.glyphQl()),
            primary_glyph: this.stripContent(this.primaryGlyph()),
            secondary_glyph: this.stripContent(this.secondaryGlyph()),
            primary_dist: this.primaryDist(),
            secondary_dist: this.secondaryDist(),
            signet_quality: this.stripContent(this.signetQuality()),
            signet_id: this.stripContent(this.signetId())
        };
    };

    this.stripContent = function(val) {
        if (val == null || val == 'none') {
            val = 0;
        }

        var qlpattern = /\d+\.\d/;
        if (val != 0 && val.match(qlpattern)) {
            return val.split('.')[1];
        } else if ($.inArray(val, Object.keys(tswcalc.data.wtype_mapping.to_num)) != -1) {
            return tswcalc.data.wtype_mapping.to_num[val];
        } else if ($.inArray(val, Object.keys(tswcalc.data.stat_mapping.to_num)) != -1) {
            return tswcalc.data.stat_mapping.to_num[val];
        } else if ($.inArray(val, Object.keys(tswcalc.data.role_mapping.to_num)) != -1) {
            return tswcalc.data.role_mapping.to_num[val];
        } else if ($.inArray(val, Object.keys(tswcalc.data.signet_quality_mapping.to_num)) != -1) {
            return tswcalc.data.signet_quality_mapping.to_num[val];
        } else {
            return val;
        }
    };
};