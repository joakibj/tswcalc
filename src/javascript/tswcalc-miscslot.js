var tswcalc = tswcalc || {};

tswcalc.miscslot = function() {
    var el = {};
    var elInit = function() {
        return {
            pure_anima: {
                select: $('#pure-anima'),
                description: $('#pure-anima-description')
            },
            anima: {
                select: $('#anima'),
                description: $('#anima-description')
            }
        };
    };

    var init = function() {
        el = elInit();
        bindEvents();
    };

    var bindEvents = function() {
        el.pure_anima.select.on('change', pureAnimaChange);
        el.anima.select.on('change', animaChange);
    };

    var pureAnimaChange = function(event) {
        changeDescription('pure_anima', el.pure_anima.select.val());
    };

    var animaChange = function(event) {
        changeDescription('anima', el.anima.select.val());
    };

    var changeDescription = function(anima, selected) {
        var consumable = tswcalc.data.consumables[anima][selected];
        if (consumable !== undefined) {
            el[anima].description.html(consumable.description);
            updatePrimaryStats();
            updateOffensiveDefensiveStats();
        }
    };

    var oPublic = {
        init: init,
    };

    return oPublic;
}();