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
        this.bindButtonEvents('primary');
        this.bindButtonEvents('secondary');
    };

    this.bindButtonEvents = function(glyph) {
        $.each(tswcalc.slots[slotId].el.btn[glyph], function(btnIndex, btn) {
            btn.on('click', function(event) {
                var btnId = event.target.id;
                self.activate(btnId.split('-')[1], btnId.substring(btnId.length -1, btnId.length));
                self.balance(btnId.split('-')[1]);
                tswcalc.summary.updateOffensiveDefensiveStats();
            });
        });
    };

    this.setInitialState = function() {
        this.activate('primary', 4);
        this.activate('secondary', 0);
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

    this.inverse = function(glyph) {
        return glyph == 'primary' ? 'secondary' : 'primary';
    };
};