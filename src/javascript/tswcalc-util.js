var tswcalc = tswcalc || {};

tswcalc.util = function() {
    var capitalise = function(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    var blankIfNone = function(arg) {
        if (arg == 'None' || arg == 'none') {
            return '';
        }
        return arg;
    };

    var oPublic = {
        capitalise: capitalise,
        blankIfNone: blankIfNone
    }
    return oPublic;
}();