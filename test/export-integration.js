module('export-integration-tests', {
    setup: function() {
        renderSlots();
        renderButtonbar();
        initiateSelectHandlers();
        initiateButtonHandlers();
        initiateSummary();
        tswcalc.export.init();
    }
});

test('should create BBCode export', 1, function() {
    createTankBuild();

    tswcalc.export.startExportBBCode();

    equal($('#export-textarea').html(), bbcode);
});
