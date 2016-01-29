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
        tswcalc.summary.updateAllStats();
    };

    var animaChange = function(event) {
        changeDescription('anima', el.anima.select.val());
        tswcalc.summary.updateAllStats();
    };

    var changeDescription = function(anima, selected) {
        var consumable = tswcalc.data.consumables[anima][selected];
        if (consumable !== undefined) {
            el[anima].description.html(consumable.description);
        }
    };

    var pureAnima = function() {
        if (arguments.length == 1) {
            el.pure_anima.select.val(arguments[0]);
        } else {
            return tswcalc.data.consumables.pure_anima[el.pure_anima.select.val()];
        }
    };

    var anima = function() {
        if (arguments.length == 1) {
            el.anima.select.val(arguments[0]);
        } else {
            return tswcalc.data.consumables.anima[el.anima.select.val()];
        }
    };

    var oPublic = {
        init: init,
        pureAnima: pureAnima,
        anima: anima
    };

    return oPublic;
}();