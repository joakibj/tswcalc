var tswcalc = tswcalc || {};

tswcalc.button = function() {
    var init = function() {
        for (var i = 0; i < tswcalc.data.template_data.slots.length; i++) {
            var slotId = tswcalc.data.template_data.slots[i].id_prefix;
            this[slotId] = new tswcalc.button.DistributionButtonHandler(slotId);
            this[slotId].init();
        }
    };

    var oPublic = {
        init: init
    };

    return oPublic;
}();

tswcalc.button.DistributionButtonHandler = function DistributionButtonHandler(slotId) {
    var self = this;

    this.init = function() {
        this.bindEvents();
        this.setInitialState();
    };

    this.bindEvents = function() {
        $.each(tswcalc.slots[slotId].el.btn.primary, function(btnIndex, btn) {
            btn.on('click', function(event) {
                self.activate(event.target.id.split('-')[1], event.target.id.substring(event.target.id.length -1, event.target.id.length));
                self.balance(event.target.id.split('-')[1]);
                tswcalc.summary.updateOffensiveDefensiveStats();
            });
        });
        $.each(tswcalc.slots[slotId].el.btn.secondary, function(btnIndex, btn) {
            btn.on('click', function(event) {
                self.activate(event.target.id.split('-')[1], event.target.id.substring(event.target.id.length -1, event.target.id.length));
                self.balance(event.target.id.split('-')[1]);
                tswcalc.summary.updateOffensiveDefensiveStats();
            });
        });
    };

    this.setInitialState = function() {
        this.activate('primary', 4);
        this.activate('secondary', 0);
    };

    this.addListenersToGlyphDistButtons = function(glyph) {
        this.onlyActiveButton('#' + slotId + '-' + glyph + '-glyph-dist-btn0');
        $('#' + slotId + '-' + glyph + '-glyph-dist > button.btn').on('click', function(event) {
            self.setActiveButtonAndBalanceGlyphDist(this, glyph);
            tswcalc.summary.updateOffensiveDefensiveStats();
        });
    };

    this.setActiveButtonAndBalanceGlyphDist = function(element, glyph) {
        this.onlyActiveButton('#' + element.id);
        this.balanceGlyphDist(element, glyph);
    };

    this.balanceGlyphDist = function(button, glyph) {
        otherActiveButton = self.getActiveDist(self.getInverseGlyphStat(glyph));
        this.balanceGlyphDistOverflow(button, otherActiveButton);
    };

    this.getActiveDist = function(glyph) {
        return $('#' + slotId + '-' + glyph + '-glyph-dist > button.btn.active')[0];
    };

    this.balanceGlyphDistOverflow = function(clickedButton, otherButton) {
        if (otherButton !== null) {
            var clickedDist = parseInt(clickedButton.innerHTML, 10);
            var otherDist = parseInt(otherButton.innerHTML, 10);
            var sumBothDist = clickedDist + otherDist;
            if ((sumBothDist) > 4) {
                var otherDistLoweredByOne = otherButton.id.substring(0, otherButton.id.length - 1) + (otherDist - (sumBothDist - 4));
                self.onlyActiveButton('#' + otherDistLoweredByOne);
            }
        }
    };

    this.balance = function(clicked) {
        var inverseOfClicked = self.inverse(clicked);

        var clickedDist = self.getDist(clicked);
        var inverseDist = self.getDist(inverseOfClicked);
        var sumDist = clickedDist + inverseDist;
        if ((sumDist) > 4) {
            self.activate(inverseOfClicked, (inverseDist - (sumDist - 4)));
        } else if (sumDist == 4) {
            // do nothing
        } else {
            self.activate(inverseOfClicked, 4 - clickedDist);
        }
    };

    this.getDist = function(glyph) {
        if (glyph == 'primary') {
            return parseInt(tswcalc.slots[slotId].primaryDist(), 10);
        } else {
            return parseInt(tswcalc.slots[slotId].secondaryDist(), 10);
        }
    };

    this.activate = function(glyph, index) {
        var elem = tswcalc.slots[slotId].el.btn[glyph][index];
        elem.siblings().removeClass('active');
        elem.siblings().removeClass('btn-success');
        elem.addClass('active');
        elem.addClass('btn-success');
    };

    this.onlyActiveButton = function(id) {
        $(id).siblings().removeClass('active');
        $(id).siblings().removeClass('btn-success');
        $(id).addClass('active');
        $(id).addClass('btn-success');
    };

    this.inverse = function(glyph) {
        return glyph == 'primary' ? 'secondary' : 'primary';
    };
};