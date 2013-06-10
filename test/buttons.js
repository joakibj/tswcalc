
function renderGlyphButtons(id_prefix, id_suffix) {
    dust.render('glyphbuttons', {
        id_prefix: id_prefix,
        id_suffix: id_suffix
    },

    function(err, out) {
        if (err) {
            console.log(err);
        }
        $('#qunit-fixture').append(out);
    });
};

module('glyphbuttons', {
    setup: function() {
        renderGlyphButtons('weapon', '-primary-glyph');
        renderGlyphButtons('weapon', '-secondary-glyph');
    },
    teardown: function() {

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
