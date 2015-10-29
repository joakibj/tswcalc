module('tswcalc');

test('should initate tswcalc submodules', 9, function() {
    tswcalc.init();
    ok(tswcalc);
    ok(tswcalc.data);
    ok(tswcalc.button);
    ok(tswcalc.checkbox);
    ok(tswcalc.select);
    ok(tswcalc.buttonBar);
    ok(tswcalc.summary);
    ok(tswcalc.export);
    ok(tswcalc.import);
});

test('should import pre-1.3 build from hash', 125, function() {
    location.hash = 'weapon=5,5,4,4,0,4,0,2,5&head=4,1,5,5,0,4,0,3,18&ring=4,2,4,1,0,4,0,3,83&neck=4,1,5,5,0,4,0,1,21&wrist=4,1,4,6,0,4,0,3,85&luck=4,3,4,8,0,4,0,3,39&waist=4,1,4,8,0,4,0,3,87&occult=4,2,4,1,0,4,0,3,88';
    tswcalc.init();

    // Summary
    equal($('#stat-hitpoints').html(), '10458');
    equal($('#stat-combat-power').html(), '278');
    equal($('#stat-attack-rating').html(), '474');
    equal($('#stat-weapon-power').html(), '457');
    equal($('#stat-heal-rating').html(), '1091');
    equal($('#stat-critical-rating').html(), '+459');
    equal($('#stat-critical-chance').html(), '14.6 %');
    equal($('#stat-critical-power').html(), '0');
    equal($('#stat-critical-power-percentage').html(), '25.0 %');
    equal($('#stat-penetration-rating').html(), '0');
    equal($('#stat-hit-rating').html(), '+319');
    equal($('#stat-block-rating').html(), '+691');
    equal($('#stat-defense-rating').html(), '+288');
    equal($('#stat-evade-rating').html(), '0');
    equal($('#stat-physical-protection').html(), '+660');
    equal($('#stat-magical-protection').html(), '+300');

    ok($('#weapon-slot').is(':visible'));
    equal($('#weapon-name').html(), ': Chaos');
    equal($('#weapon-wtype').val(), 'chaos');
    equal($('#weapon-ql').val(), '10.5');
    equal($('#weapon-glyph-ql').val(), '10.4');
    equal($('#weapon-primary-glyph').val(), 'hit-rating');
    equal($('#weapon-secondary-glyph').val(), 'none');
    ok($('#weapon-primary-glyph-dist-btn4').hasClass('active'));
    ok($('#weapon-secondary-glyph-dist-btn0').hasClass('active'));
    equal($('#weapon-signet-quality').val(), 'elite');
    equal($('#weapon-pick-signet').val(), '5');

    ok(!$('#weapon2-slot').is(':visible'));
    equal($('#weapon2-name').html(), '');
    equal($('#weapon2-wtype').val(), 'none');
    equal($('#weapon2-ql').val(), '10.0');
    equal($('#weapon2-glyph-ql').val(), '10.0');
    equal($('#weapon2-primary-glyph').val(), 'none');
    equal($('#weapon2-secondary-glyph').val(), 'none');
    ok($('#weapon2-primary-glyph-dist-btn4').hasClass('active'));
    ok($('#weapon2-secondary-glyph-dist-btn0').hasClass('active'));
    equal($('#weapon2-signet-quality').val(), 'none');
    equal($('#weapon2-pick-signet').val(), 'none');

    equal($('#head-ql').val(), '10.4');
    equal($('#head-role').val(), 'tank');
    equal($('#head-glyph-ql').val(), '10.5');
    equal($('#head-primary-glyph').val(), 'block-rating');
    equal($('#head-secondary-glyph').val(), 'none');
    ok($('#head-primary-glyph-dist-btn4').hasClass('active'));
    ok($('#head-secondary-glyph-dist-btn0').hasClass('active'));
    equal($('#head-signet-quality').val(), 'epic');
    equal($('#head-pick-signet').val(), '18');

    equal($('#ring-name').html(), ': Coney Island Band');
    equal($('#ring-ql').val(), '10.4');
    equal($('#ring-role').val(), 'healer');
    equal($('#ring-glyph-ql').val(), '10.4');
    equal($('#ring-primary-glyph').val(), 'critical-rating');
    equal($('#ring-secondary-glyph').val(), 'none');
    ok($('#ring-primary-glyph-dist-btn4').hasClass('active'));
    ok($('#ring-secondary-glyph-dist-btn0').hasClass('active'));
    equal($('#ring-signet-quality').val(), 'epic');
    equal($('#ring-pick-signet').val(), '83');
    ok($('#ring-signet-quality').attr('disabled'));
    ok($('#ring-pick-signet').attr('disabled'));
    ok($('#ring-ql').attr('disabled'));
    ok($('#ring-nyraid').is(':checked'));
    ok(!$('#ring-nyraid').attr('disabled'));

    equal($('#neck-ql').val(), '10.4');
    equal($('#neck-role').val(), 'tank');
    equal($('#neck-glyph-ql').val(), '10.5');
    equal($('#neck-primary-glyph').val(), 'block-rating');
    equal($('#neck-secondary-glyph').val(), 'none');
    ok($('#neck-primary-glyph-dist-btn4').hasClass('active'));
    ok($('#neck-secondary-glyph-dist-btn0').hasClass('active'));
    equal($('#neck-signet-quality').val(), 'normal');
    equal($('#neck-pick-signet').val(), '21');

    //Brooklyn Bracer
    equal($('#wrist-name').html(), ': Brooklyn Bracer');
    equal($('#wrist-ql').val(), '10.4');
    equal($('#wrist-role').val(), 'tank');
    equal($('#wrist-glyph-ql').val(), '10.4');
    equal($('#wrist-primary-glyph').val(), 'defense-rating');
    equal($('#wrist-secondary-glyph').val(), 'none');
    ok($('#wrist-primary-glyph-dist-btn4').hasClass('active'));
    ok($('#wrist-secondary-glyph-dist-btn0').hasClass('active'));
    equal($('#wrist-signet-quality').val(), 'epic');
    equal($('#wrist-pick-signet').val(), '85');
    ok($('#wrist-signet-quality').attr('disabled'));
    ok($('#wrist-pick-signet').attr('disabled'));
    ok($('#wrist-ql').attr('disabled'));
    ok($('#wrist-nyraid').is(':checked'));
    ok(!$('#wrist-nyraid').attr('disabled'));

    equal($('#luck-ql').val(), '10.4');
    equal($('#luck-role').val(), 'dps');
    equal($('#luck-glyph-ql').val(), '10.4');
    equal($('#luck-primary-glyph').val(), 'physical-protection');
    equal($('#luck-secondary-glyph').val(), 'none');
    ok($('#luck-primary-glyph-dist-btn4').hasClass('active'));
    ok($('#luck-secondary-glyph-dist-btn0').hasClass('active'));
    equal($('#luck-signet-quality').val(), 'epic');
    equal($('#luck-pick-signet').val(), '39');

    //NY Buckle
    equal($('#waist-name').html(), ': NY Buckle');
    equal($('#waist-ql').val(), '10.4');
    equal($('#waist-role').val(), 'tank');
    equal($('#waist-glyph-ql').val(), '10.4');
    equal($('#waist-primary-glyph').val(), 'physical-protection');
    equal($('#waist-secondary-glyph').val(), 'none');
    ok($('#waist-primary-glyph-dist-btn4').hasClass('active'));
    ok($('#waist-secondary-glyph-dist-btn0').hasClass('active'));
    equal($('#waist-signet-quality').val(), 'epic');
    equal($('#waist-pick-signet').val(), '87');
    ok($('#waist-signet-quality').attr('disabled'));
    ok($('#waist-pick-signet').attr('disabled'));
    ok($('#waist-ql').attr('disabled'));
    ok($('#waist-nyraid').is(':checked'));
    ok(!$('#waist-nyraid').attr('disabled'));

    equal($('#occult-name').html(), ': Broadway Charm');
    equal($('#occult-ql').val(), '10.4');
    equal($('#occult-role').val(), 'healer');
    equal($('#occult-glyph-ql').val(), '10.4');
    equal($('#occult-primary-glyph').val(), 'critical-rating');
    equal($('#occult-secondary-glyph').val(), 'none');
    ok($('#occult-primary-glyph-dist-btn4').hasClass('active'));
    ok($('#occult-secondary-glyph-dist-btn0').hasClass('active'));
    equal($('#occult-signet-quality').val(), 'epic');
    equal($('#occult-pick-signet').val(), '88');
    ok($('#occult-signet-quality').attr('disabled'));
    ok($('#occult-pick-signet').attr('disabled'));
    ok($('#occult-ql').attr('disabled'));
    ok($('#occult-nyraid').is(':checked'));
    ok(!$('#occult-nyraid').attr('disabled'));

});

test('should import post-1.3 build from hash', 125, function() {
    location.hash = 'weapon=5,5,4,4,0,4,0,2,5&weapon2=5,3,4,1,2,2,2,3,15&head=4,1,5,5,0,4,0,3,18&ring=4,2,4,1,0,4,0,3,83&neck=4,1,5,5,0,4,0,1,21&wrist=4,1,4,6,0,4,0,3,85&luck=4,3,4,8,0,4,0,3,39&waist=4,1,4,8,0,4,0,3,87&occult=4,2,4,1,0,4,0,3,88';
    tswcalc.init();

    // Summary
    equal($('#stat-hitpoints').html(), '10458');
    equal($('#stat-combat-power').html(), '278');
    equal($('#stat-attack-rating').html(), '474');
    equal($('#stat-weapon-power').html(), '457');
    equal($('#stat-heal-rating').html(), '1091');
    equal($('#stat-critical-rating').html(), '+459');
    equal($('#stat-critical-chance').html(), '14.6 %');
    equal($('#stat-critical-power').html(), '0');
    equal($('#stat-critical-power-percentage').html(), '25.0 %');
    equal($('#stat-penetration-rating').html(), '0');
    equal($('#stat-hit-rating').html(), '+319');
    equal($('#stat-block-rating').html(), '+691');
    equal($('#stat-defense-rating').html(), '+288');
    equal($('#stat-evade-rating').html(), '0');
    equal($('#stat-physical-protection').html(), '+660');
    equal($('#stat-magical-protection').html(), '+300');

    ok($('#weapon-slot').is(':visible'));
    equal($('#weapon-name').html(), ': Chaos');
    equal($('#weapon-wtype').val(), 'chaos');
    equal($('#weapon-ql').val(), '10.5');
    equal($('#weapon-glyph-ql').val(), '10.4');
    equal($('#weapon-primary-glyph').val(), 'hit-rating');
    equal($('#weapon-secondary-glyph').val(), 'none');
    ok($('#weapon-primary-glyph-dist-btn4').hasClass('active'));
    ok($('#weapon-secondary-glyph-dist-btn0').hasClass('active'));
    equal($('#weapon-signet-quality').val(), 'elite');
    equal($('#weapon-pick-signet').val(), '5');

    ok(!$('#weapon2-slot').is(':visible'));
    equal($('#weapon2-name').html(), ': Fist');
    equal($('#weapon2-wtype').val(), 'fist');
    equal($('#weapon2-ql').val(), '10.5');
    equal($('#weapon2-glyph-ql').val(), '10.4');
    equal($('#weapon2-primary-glyph').val(), 'critical-rating');
    equal($('#weapon2-secondary-glyph').val(), 'critical-power');
    ok($('#weapon2-primary-glyph-dist-btn2').hasClass('active'));
    ok($('#weapon2-secondary-glyph-dist-btn2').hasClass('active'));
    equal($('#weapon2-signet-quality').val(), 'epic');
    equal($('#weapon2-pick-signet').val(), '15');

    equal($('#head-ql').val(), '10.4');
    equal($('#head-role').val(), 'tank');
    equal($('#head-glyph-ql').val(), '10.5');
    equal($('#head-primary-glyph').val(), 'block-rating');
    equal($('#head-secondary-glyph').val(), 'none');
    ok($('#head-primary-glyph-dist-btn4').hasClass('active'));
    ok($('#head-secondary-glyph-dist-btn0').hasClass('active'));
    equal($('#head-signet-quality').val(), 'epic');
    equal($('#head-pick-signet').val(), '18');

    equal($('#ring-name').html(), ': Coney Island Band');
    equal($('#ring-ql').val(), '10.4');
    equal($('#ring-role').val(), 'healer');
    equal($('#ring-glyph-ql').val(), '10.4');
    equal($('#ring-primary-glyph').val(), 'critical-rating');
    equal($('#ring-secondary-glyph').val(), 'none');
    ok($('#ring-primary-glyph-dist-btn4').hasClass('active'));
    ok($('#ring-secondary-glyph-dist-btn0').hasClass('active'));
    equal($('#ring-signet-quality').val(), 'epic');
    equal($('#ring-pick-signet').val(), '83');
    ok($('#ring-signet-quality').attr('disabled'));
    ok($('#ring-pick-signet').attr('disabled'));
    ok($('#ring-ql').attr('disabled'));
    ok($('#ring-nyraid').is(':checked'));
    ok(!$('#ring-nyraid').attr('disabled'));

    equal($('#neck-ql').val(), '10.4');
    equal($('#neck-role').val(), 'tank');
    equal($('#neck-glyph-ql').val(), '10.5');
    equal($('#neck-primary-glyph').val(), 'block-rating');
    equal($('#neck-secondary-glyph').val(), 'none');
    ok($('#neck-primary-glyph-dist-btn4').hasClass('active'));
    ok($('#neck-secondary-glyph-dist-btn0').hasClass('active'));
    equal($('#neck-signet-quality').val(), 'normal');
    equal($('#neck-pick-signet').val(), '21');

    //Brooklyn Bracer
    equal($('#wrist-name').html(), ': Brooklyn Bracer');
    equal($('#wrist-ql').val(), '10.4');
    equal($('#wrist-role').val(), 'tank');
    equal($('#wrist-glyph-ql').val(), '10.4');
    equal($('#wrist-primary-glyph').val(), 'defense-rating');
    equal($('#wrist-secondary-glyph').val(), 'none');
    ok($('#wrist-primary-glyph-dist-btn4').hasClass('active'));
    ok($('#wrist-secondary-glyph-dist-btn0').hasClass('active'));
    equal($('#wrist-signet-quality').val(), 'epic');
    equal($('#wrist-pick-signet').val(), '85');
    ok($('#wrist-signet-quality').attr('disabled'));
    ok($('#wrist-pick-signet').attr('disabled'));
    ok($('#wrist-ql').attr('disabled'));
    ok($('#wrist-nyraid').is(':checked'));
    ok(!$('#wrist-nyraid').attr('disabled'));

    equal($('#luck-ql').val(), '10.4');
    equal($('#luck-role').val(), 'dps');
    equal($('#luck-glyph-ql').val(), '10.4');
    equal($('#luck-primary-glyph').val(), 'physical-protection');
    equal($('#luck-secondary-glyph').val(), 'none');
    ok($('#luck-primary-glyph-dist-btn4').hasClass('active'));
    ok($('#luck-secondary-glyph-dist-btn0').hasClass('active'));
    equal($('#luck-signet-quality').val(), 'epic');
    equal($('#luck-pick-signet').val(), '39');

    //NY Buckle
    equal($('#waist-name').html(), ': NY Buckle');
    equal($('#waist-ql').val(), '10.4');
    equal($('#waist-role').val(), 'tank');
    equal($('#waist-glyph-ql').val(), '10.4');
    equal($('#waist-primary-glyph').val(), 'physical-protection');
    equal($('#waist-secondary-glyph').val(), 'none');
    ok($('#waist-primary-glyph-dist-btn4').hasClass('active'));
    ok($('#waist-secondary-glyph-dist-btn0').hasClass('active'));
    equal($('#waist-signet-quality').val(), 'epic');
    equal($('#waist-pick-signet').val(), '87');
    ok($('#waist-signet-quality').attr('disabled'));
    ok($('#waist-pick-signet').attr('disabled'));
    ok($('#waist-ql').attr('disabled'));
    ok($('#waist-nyraid').is(':checked'));
    ok(!$('#waist-nyraid').attr('disabled'));

    equal($('#occult-name').html(), ': Broadway Charm');
    equal($('#occult-ql').val(), '10.4');
    equal($('#occult-role').val(), 'healer');
    equal($('#occult-glyph-ql').val(), '10.4');
    equal($('#occult-primary-glyph').val(), 'critical-rating');
    equal($('#occult-secondary-glyph').val(), 'none');
    ok($('#occult-primary-glyph-dist-btn4').hasClass('active'));
    ok($('#occult-secondary-glyph-dist-btn0').hasClass('active'));
    equal($('#occult-signet-quality').val(), 'epic');
    equal($('#occult-pick-signet').val(), '88');
    ok($('#occult-signet-quality').attr('disabled'));
    ok($('#occult-pick-signet').attr('disabled'));
    ok($('#occult-ql').attr('disabled'));
    ok($('#occult-nyraid').is(':checked'));
    ok(!$('#occult-nyraid').attr('disabled'));
});