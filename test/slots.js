
module('slots-unit-tests', {
    setup: function() {
        initiateSummary();
        renderSlots();
        initiateSelectHandlers();
        initiateButtonHandlers();
        createTankBuild();
    }
});

test('should tell whether this slot is a weapon', 2, function() {
    equal(tswcalc.slots.weapon.isWeapon(), true);
    equal(tswcalc.slots.head.isWeapon(), false);
});

test('should set and get talisman name', 1, function() {
    tswcalc.slots.head.name('Mark of the starspawn');
    equal(tswcalc.slots.head.name(), 'Mark of the starspawn');
});

test('should set talisman role', 1, function() {
    tswcalc.slots.head.role('healer');
    equal(tswcalc.slots.head.role(), 'healer');
});

test('should get talisman role', 1, function() {
    equal(tswcalc.slots.head.role(), 'tank');
});

test('should not get weapon role', 1, function() {
    equal(tswcalc.slots.weapon.role(), 'none');
});

test('should get talisman ql', 1, function() {
    equal(tswcalc.slots.head.ql(), '10.4');
});

test('should set talisman ql', 1, function() {
    tswcalc.slots.head.ql('10.1');
    equal(tswcalc.slots.head.ql(), '10.1');
});

test('should get talisman glyph ql', 1, function() {
    equal(tswcalc.slots.head.glyphQl(), '10.5');
});

test('should set talisman glyph ql', 1, function() {
    tswcalc.slots.head.glyphQl('10.1');
    equal(tswcalc.slots.head.glyphQl(), '10.1');
});

test('should get talisman glyphs', 2, function() {
    equal(tswcalc.slots.head.primaryGlyph(), 'block-rating');
    equal(tswcalc.slots.head.secondaryGlyph(), 'none');
});

test('should set talisman glyphs', 2, function() {
    tswcalc.slots.head.primaryGlyph('hit-rating');
    tswcalc.slots.head.secondaryGlyph('defense-rating');

    equal(tswcalc.slots.head.primaryGlyph(), 'hit-rating');
    equal(tswcalc.slots.head.secondaryGlyph(), 'defense-rating');
});

test('should get talisman glyph distribution', 2, function() {
    equal(tswcalc.slots.head.primaryDist(), '4');
    equal(tswcalc.slots.head.secondaryDist(), '0');
});

test('should get talisman glyph values from lookup tables', 2, function() {
    tswcalc.slots.head.secondaryGlyph('hit-rating');
    tswcalc.slots.head.el.btn.primary[2].trigger('click');
    tswcalc.slots.head.el.btn.secondary[2].trigger('click');

    equal(tswcalc.slots.head.primaryGlyphValue(), 182);
    equal(tswcalc.slots.head.secondaryGlyphValue(), 182);
});

test('should update talisman glyph values', 2, function() {
    tswcalc.slots.head.secondaryGlyph('hit-rating');
    tswcalc.slots.head.el.btn.primary[2].trigger('click');
    tswcalc.slots.head.el.btn.secondary[2].trigger('click');

    tswcalc.slots.head.updatePrimaryGlyphValue();
    tswcalc.slots.head.updateSecondaryGlyphValue();

    deepEqual(tswcalc.slots.head.el.primaryGlyphValue.html(), '+182');
    deepEqual(tswcalc.slots.head.el.secondaryGlyphValue.html(), '+182');
});

test('should get talisman signet id and quality', 2, function() {
    equal(tswcalc.slots.head.signetId(), '18');
    equal(tswcalc.slots.head.signetQuality(), 'epic');
});

test('should set talisman signet id and quality', 2, function() {
    tswcalc.slots.head.signetId('16');
    tswcalc.slots.head.signetQuality('elite');

    equal(tswcalc.slots.head.signetId(), '16');
    equal(tswcalc.slots.head.signetQuality(), 'elite');
});

test('should get talisman signet object', 1, function() {
    deepEqual(tswcalc.slots.head.signet(), tswcalc.data.signet_data.find('head', '18'));
});

test('should get talisman signet None object if signet Id cannot be found', 1, function() {
    deepEqual(tswcalc.slots.wrist.signet(), tswcalc.data.signet_data.noneSignet());
});

test('should update signet icon and border', 2, function() {
    tswcalc.slots.head.updateSignetIcon();

    equal($('#head-signet-img-icon').attr('src'), 'assets/images/icons/head_tank.png');
    equal($('#head-signet-img-quality').attr('src'), 'assets/images/icons/epic.png');
});

test('should update signet icon from name', 1, function() {
    tswcalc.slots.head.updateSignetIconImageFromName('minor_dps');

    equal($('#head-signet-img-icon').attr('src'), 'assets/images/icons/minor_dps.png');
});

test('should get signet description for single value replace', 1, function() {
    equal(tswcalc.slots.head.signetDescription(), 'When you block you gain 45% block chance for 4 seconds. 10 seconds cooldown.');
});

test('should get signet description for multiple value replace', 1, function() {
    tswcalc.slots.occult.signetId('47');
    tswcalc.slots.occult.signetQuality('epic');

    equal(tswcalc.slots.occult.signetDescription(), 'When your health is below 50% you are healed for 150 and affected by a heal over time effect healing you for 57 every 2 seconds for 8 seconds. 12 seconds cooldown.');
});

test('should update signet description', 1, function() {
    tswcalc.slots.head.updateSignetDescription();

    equal($('#head-signet-description').html(), 'When you block you gain 45% block chance for 4 seconds. 10 seconds cooldown.');
});

test('should update signet description to blank if no signet is picked', 1, function() {
    tswcalc.slots.wrist.updateSignetDescription();

    equal($('#wrist-signet-description').html(), '');
});

test('should get single signet value based on quality', 1, function() {
    var signet = tswcalc.slots.head.signet();

    deepEqual(tswcalc.slots.head.determineSignetQualityValue(signet), 45);
});

test('should get black bullion cost for head slot (10.4/10.5)', 1, function() {
    deepEqual(tswcalc.slots.head.blackBullionCost(), 210);
});

test('should get astral fuse cost for slot', 2, function() {
   deepEqual(tswcalc.slots.head.astralFuseCost(), 1); 
   deepEqual(tswcalc.slots.weapon.astralFuseCost(), 0); 
});

test('should get criterion upgrade cost for slot', 2, function() {
   deepEqual(tswcalc.slots.weapon.criterionUpgradeCost(), 1);  
   deepEqual(tswcalc.slots.head.criterionUpgradeCost(), 0);  
});

test('should get indexed signet value based on quality', 2, function() {
    tswcalc.slots.occult.signetId('47');
    tswcalc.slots.occult.signetQuality('epic');
    var signet = tswcalc.slots.occult.signet();

    deepEqual(tswcalc.slots.occult.determineSignetQualityValue(signet, 0), 150);
    deepEqual(tswcalc.slots.occult.determineSignetQualityValue(signet, 1), 57);
});

test('slots should have length of 8', 1, function() {
    equal(tswcalc.slots.length(), 8);
});

test('should reset slot state', 7, function() {
    tswcalc.slots.head.reset();

    equal(tswcalc.slots.head.ql(), '10.0');
    equal(tswcalc.slots.head.role(), 'none');
    equal(tswcalc.slots.head.glyphQl(), '10.0');
    equal(tswcalc.slots.head.primaryGlyph(), 'none');
    equal(tswcalc.slots.head.secondaryGlyph(), 'none');
    ok(tswcalc.slots.head.el.btn.primary[4].hasClass('active'));
    ok(tswcalc.slots.head.el.btn.secondary[0].hasClass('active'));
});

test('should collect current slot state', 9, function() {
    var slotState = tswcalc.slots.head.state();

    deepEqual(slotState.ql, '10.4');
    deepEqual(slotState.role, 'tank');
    deepEqual(slotState.glyph_ql, '10.5');
    deepEqual(slotState.primary_glyph, 'block-rating');
    deepEqual(slotState.secondary_glyph, 'none');
    deepEqual(slotState.primary_dist, '4');
    deepEqual(slotState.secondary_dist, '0');
    deepEqual(slotState.signet_quality, 'epic');
    deepEqual(slotState.signet_id, '18');
});

test('should collect current mapped slot state', 9, function() {
    var slotState = tswcalc.slots.head.mappedState();

    deepEqual(slotState.ql, '4');
    deepEqual(slotState.role, 1);
    deepEqual(slotState.glyph_ql, '5');
    deepEqual(slotState.primary_glyph, 5);
    deepEqual(slotState.secondary_glyph, 0);
    deepEqual(slotState.primary_dist, '4');
    deepEqual(slotState.secondary_dist, '0');
    deepEqual(slotState.signet_quality, 3);
    deepEqual(slotState.signet_id, '18');
});

test('should collect all slot states', 17, function() {
    var slotStates = tswcalc.slots.state();

    deepEqual(slotStates.weapon.ql, '10.5');
    deepEqual(slotStates.weapon.glyph_ql, '10.4');
    deepEqual(slotStates.weapon.primary_glyph, 'hit-rating');
    deepEqual(slotStates.weapon.secondary_glyph, 'none');
    deepEqual(slotStates.weapon.primary_dist, '4');
    deepEqual(slotStates.weapon.secondary_dist, '0');
    deepEqual(slotStates.weapon.signet_quality, 'elite');
    deepEqual(slotStates.weapon.signet_id, '5');

    deepEqual(slotStates.head.ql, '10.4');
    deepEqual(slotStates.head.role, 'tank');
    deepEqual(slotStates.head.glyph_ql, '10.5');
    deepEqual(slotStates.head.primary_glyph, 'block-rating');
    deepEqual(slotStates.head.secondary_glyph, 'none');
    deepEqual(slotStates.head.primary_dist, '4');
    deepEqual(slotStates.head.secondary_dist, '0');
    deepEqual(slotStates.head.signet_quality, 'epic');
    deepEqual(slotStates.head.signet_id, '18');
});

test('should collect all mapped slot states', 17, function() {
    var slotStates = tswcalc.slots.mappedState();

    deepEqual(slotStates.weapon.ql, '5');
    deepEqual(slotStates.weapon.glyph_ql, '4');
    deepEqual(slotStates.weapon.primary_glyph, 4);
    deepEqual(slotStates.weapon.secondary_glyph, 0);
    deepEqual(slotStates.weapon.primary_dist, '4');
    deepEqual(slotStates.weapon.secondary_dist, '0');
    deepEqual(slotStates.weapon.signet_quality, 2);
    deepEqual(slotStates.weapon.signet_id, '5');

    deepEqual(slotStates.head.ql, '4');
    deepEqual(slotStates.head.role, 1);
    deepEqual(slotStates.head.glyph_ql, '5');
    deepEqual(slotStates.head.primary_glyph, 5);
    deepEqual(slotStates.head.secondary_glyph, 0);
    deepEqual(slotStates.head.primary_dist, '4');
    deepEqual(slotStates.head.secondary_dist, '0');
    deepEqual(slotStates.head.signet_quality, 3);
    deepEqual(slotStates.head.signet_id, '18');
});