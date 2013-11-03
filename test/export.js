
module('export-integration-tests', {
    setup: function() {
        renderSlots();
        renderButtonbar();
        initiateSelectHandlers();
        initiateButtonHandlers();
        initiateRaidCheckboxes();
        initiateSummary();
        tswcalc.export.init();
    }
});

test('should create slot url for head', 1, function() {
    createTankBuild();

    var slotUrl = tswcalc.export.createSlotUrl(tswcalc.slots.head, tswcalc.slots.head.mappedState());

    equal(slotUrl, 'head=4,1,5,5,0,4,0,3,18');
});

test('should create slot url for NY raid wrist', 1, function() {
    createTankBuild();

    var slotUrl = tswcalc.export.createSlotUrl(tswcalc.slots.wrist, tswcalc.slots.wrist.mappedState());

    equal(slotUrl, 'wrist=4,1,4,6,0,4,0,3,85');
});

test('should create slot url for weapon with type', 1, function() {
    createTankBuild();

    var slotUrl = tswcalc.export.createSlotUrl(tswcalc.slots.weapon, tswcalc.slots.weapon.mappedState());

    equal(slotUrl, 'weapon=5,1,4,4,0,4,0,2,5');
});

test('should create export url', 1, function() {
    createTankBuild();

    tswcalc.export.collectAllSlotStates();
    var url = tswcalc.export.createExportUrl();

    deepEqual(url, 'weapon=5,1,4,4,0,4,0,2,5&weapon2=5,2,4,4,0,4,0,2,6&head=4,1,5,5,0,4,0,3,18&ring=4,3,4,6,0,4,0,2,22&neck=4,1,5,5,0,4,0,1,21&wrist=4,1,4,6,0,4,0,3,85&luck=4,3,4,8,0,4,0,3,39&waist=4,1,4,8,0,4,0,3,87&occult=4,3,4,4,0,4,0,3,41');
});

test('should start export url and set in textfield', 1, function() {
    createTankBuild();

    tswcalc.export.startExportUrl();
    equal($('#export-textarea').html(), location.origin + location.pathname + '#weapon=5,1,4,4,0,4,0,2,5&amp;weapon2=5,2,4,4,0,4,0,2,6&amp;head=4,1,5,5,0,4,0,3,18&amp;ring=4,3,4,6,0,4,0,2,22&amp;neck=4,1,5,5,0,4,0,1,21&amp;wrist=4,1,4,6,0,4,0,3,85&amp;luck=4,3,4,8,0,4,0,3,39&amp;waist=4,1,4,8,0,4,0,3,87&amp;occult=4,3,4,4,0,4,0,3,41');
});
