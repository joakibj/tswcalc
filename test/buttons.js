module('glyphbuttons-dom', {
    setup: function() {
        renderGlyphButtons('weapon', '-primary-glyph');
        renderGlyphButtons('weapon', '-secondary-glyph');
    }
});

test('should have required buttons in the DOM', 10, function() {
    for (var button = 0; button <= 4; button++) {
        ok($('#weapon-primary-glyph-dist-btn' + button).length !== 0, "Primary glyph button " + button + " exists");
        ok($('#weapon-secondary-glyph-dist-btn' + button).length !== 0, "Secondary glyph button " + button + " exists");
    }
});

module('glyphbuttons-events', {
    setup: function() {
        renderGlyphButtons('weapon', '-primary-glyph');
        renderGlyphButtons('weapon', '-secondary-glyph');
    }
});

test('should have initialised button handlers for slot', 10, function() {
    var buttonHandler = new DistributionButtonHandler('weapon');
    buttonHandler.initiate();
    for (var button = 0; button <= 4; button++) {
        ok($._data($('#weapon-primary-glyph-dist-btn' + button).get(0), 'events').click instanceof Array, "Primary glyph button " + button + " has a click event");
        ok($._data($('#weapon-secondary-glyph-dist-btn' + button).get(0), 'events').click instanceof Array, "Secondary glyph button " + button + " has a click event");
    }
});


module('glyphbuttons-unit-tests', {
    setup: function() {
        renderGlyphButtons('weapon', '-primary-glyph');
        renderGlyphButtons('weapon', '-secondary-glyph');
    }
});

test('should set button to active in row', 2, function() {
    var buttonHandler = new DistributionButtonHandler('weapon');
    buttonHandler.onlyActiveButton('#weapon-primary-glyph-dist-btn2');
    buttonHandler.onlyActiveButton('#weapon-secondary-glyph-dist-btn4');
    ok($('#weapon-primary-glyph-dist > button.btn.active').length == 1);
    ok($('#weapon-secondary-glyph-dist > button.btn.active').length == 1);
});


test('should get active distribution', 2, function() {
    var buttonHandler = new DistributionButtonHandler('weapon');
    buttonHandler.initiate();
    buttonHandler.onlyActiveButton('#weapon-primary-glyph-dist-btn2');
    buttonHandler.onlyActiveButton('#weapon-secondary-glyph-dist-btn2');
    equal(buttonHandler.getActiveDist('primary').innerHTML, '2', 'Primary glyph distribution');
    equal(buttonHandler.getActiveDist('secondary').innerHTML, '2', 'Secondary glyph distribution');
});

test('should get inverse glyph', 2, function() {
    var buttonHandler = new DistributionButtonHandler('weapon');
    equal(buttonHandler.getInverseGlyphStat('primary'), 'secondary', 'The inverse glyph of primary is secondary');
    equal(buttonHandler.getInverseGlyphStat('secondary'), 'primary', 'The inverse glyph of secondary is primary');
});

// only accounts from primary 4 to secondary 4,3,2,1
test('should balance glyphs distributions to a sum of 4', 8, function() {
    var buttonHandler = new DistributionButtonHandler('weapon');
    buttonHandler.initiate();

    buttonHandler.onlyActiveButton('#weapon-primary-glyph-dist-btn4');
    buttonHandler.onlyActiveButton('#weapon-secondary-glyph-dist-btn4');
    buttonHandler.balanceGlyphDist($('#weapon-secondary-glyph-dist-btn4').get(0), 'secondary');
    equal(buttonHandler.getActiveDist('primary').innerHTML, '0', 'Primary glyph distribution');
    equal(buttonHandler.getActiveDist('secondary').innerHTML, '4', 'Secondary glyph distribution');

    buttonHandler.onlyActiveButton('#weapon-primary-glyph-dist-btn4');
    buttonHandler.onlyActiveButton('#weapon-secondary-glyph-dist-btn3');
    buttonHandler.balanceGlyphDist($('#weapon-secondary-glyph-dist-btn3').get(0), 'secondary');
    equal(buttonHandler.getActiveDist('primary').innerHTML, '1', 'Primary glyph distribution');
    equal(buttonHandler.getActiveDist('secondary').innerHTML, '3', 'Secondary glyph distribution');

    buttonHandler.onlyActiveButton('#weapon-primary-glyph-dist-btn4');
    buttonHandler.onlyActiveButton('#weapon-secondary-glyph-dist-btn2');
    buttonHandler.balanceGlyphDist($('#weapon-secondary-glyph-dist-btn2').get(0), 'secondary');
    equal(buttonHandler.getActiveDist('primary').innerHTML, '2', 'Primary glyph distribution');
    equal(buttonHandler.getActiveDist('secondary').innerHTML, '2', 'Secondary glyph distribution');

    buttonHandler.onlyActiveButton('#weapon-primary-glyph-dist-btn4');
    buttonHandler.onlyActiveButton('#weapon-secondary-glyph-dist-btn1');
    buttonHandler.balanceGlyphDist($('#weapon-secondary-glyph-dist-btn1').get(0), 'secondary');
    equal(buttonHandler.getActiveDist('primary').innerHTML, '3', 'Primary glyph distribution');
    equal(buttonHandler.getActiveDist('secondary').innerHTML, '1', 'Secondary glyph distribution');
});