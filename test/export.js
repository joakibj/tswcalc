var exportModule = {};
var summary = {};

module('export-unit-tests', {
    setup: function() {
        exportModule = new Export();
        exportModule.initiate();
    },
    teardown: function() {

    }
});

test('should return blank if arg is none', 1, function() {
    equal(exportModule.blankIfNone('None'), '');
});

module('export-integration-tests', {
    setup: function() {
        renderSlots();
        renderButtonbar();
        initiateSelectHandlers();
        initiateButtonHandlers();
        summary = new Summary();
        exportModule = new Export();
        exportModule.initiate();
    },
    teardown: function() {

    }
});

test('should collect slotstate', 7, function() {
    createTankBuild();

    var slotState = exportModule.collectSlotState('head');

    equal($('#head-ql').val(), '10.4');
    equal($('#head-role').val(), 'tank');
    equal($('#head-glyph-ql').val(), '10.5');
    equal($('#head-primary-glyph').val(), 'block-rating');
    equal($('#head-secondary-glyph').val(), 'none');
    ok($('#head-primary-glyph-dist-btn4').hasClass('active'));
    ok($('#head-secondary-glyph-dist-btn0').hasClass('active'));
});

test('should create slot url for head', 1, function() {
    createTankBuild();

    exportModule.slotState['head'] = exportModule.collectSlotState('head');
    var slotUrl = exportModule.createSlotUrl('head');

    equal(slotUrl, 'head=4,1,5,5,0,4,0,3,18');
});

test('should create export url', 1, function() {
    createTankBuild();

    exportModule.collectAllSlotStates();
    var url = exportModule.createExportUrl();

    deepEqual(url, 'weapon=5,0,4,4,0,4,0,2,5&head=4,1,5,5,0,4,0,3,18&ring=4,3,4,6,0,4,0,2,22&neck=4,1,5,5,0,4,0,1,21&wrist=4,1,4,6,0,4,0,1,0&luck=4,3,4,8,0,4,0,3,39&waist=4,1,4,8,0,4,0,1,0&occult=4,3,4,4,0,4,0,3,41');
});

test('should start export url and set in textfield', 1, function() {
    createTankBuild();

    exportModule.startExportUrl();

    equal($('#export-textarea').html(), location.origin + location.pathname + '#weapon=5,0,4,4,0,4,0,2,5&amp;head=4,1,5,5,0,4,0,3,18&amp;ring=4,3,4,6,0,4,0,2,22&amp;neck=4,1,5,5,0,4,0,1,21&amp;wrist=4,1,4,6,0,4,0,1,0&amp;luck=4,3,4,8,0,4,0,3,39&amp;waist=4,1,4,8,0,4,0,1,0&amp;occult=4,3,4,4,0,4,0,3,41');
});

test('should create BBCode export', 1, function() {
    createTankBuild();

    exportModule.startExportBBCode();

    equal($('#export-textarea').html(), bbcode);
});