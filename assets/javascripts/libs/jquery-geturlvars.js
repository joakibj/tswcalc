/**
 * jQuery.getUrlVars
 *
 * Copyright 2013, Matthew Cobbs
 * MIT Licensed
 */
/*global jQuery */
(function (window, $) {
 
    "use strict";
 
    var prevHref; // prev parsed href
    var prevVars; // prev parsed vars
 
    /**
     * parse the location object for search and hash parameters.
     * hash parameters take precedence over search
     *
     * @return {Object} values mapped to parameter keys
     */
    var parseLocation = function () {
        var location = window.location;
        var search = decodeURIComponent(location.search);
        var hash = decodeURIComponent(location.hash);
        var i, l, v; // loop vars
        var vars = {};
 
        search = search.replace("?", "").split("&");
        hash = hash.replace("#", "").split("&");
 
        for (i = 0, l = search.length; i < l; i++) {
            v = search[i].split("=");
            if (v[0]) {
                vars[v[0]] = v[1];
            }
        }
 
        for (i = 0, l = hash.length; i < l; i++) {
            v = hash[i].split("=");
            if (v[0]) {
                vars[v[0]] = v[1];
            }
        }
 
        prevHref = location.href;
        prevVars = vars;
 
        return vars;
    };
 
    // parse the initial location
    prevVars = parseLocation();
 
    /**
     * Get the URL parameters from the current href
     *
     * @return {Object} Values mapped to parameter keys
     */
    $.getUrlVars = function () {
        var href = window.location.href;
        var vars;
 
        if (href === prevHref) {
            vars = prevVars;
        } else {
            vars = parseLocation();
        }
 
        return vars;
    };
 
    /**
     * Get a single value from the getUrlVars object
     *
     * @param {String} key The object key
     * @return {String}
     */
    $.getUrlVar = function (key) {
        return $.getUrlVars()[key];
    };
 
}(this, jQuery));