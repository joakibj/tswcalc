var importModule = {};

module('import-integration-tests', {
    setup: function() {
        renderSlots();
        renderSummary();
        initiateSummary();
        initiateSelectHandlers();
        initiateButtonHandlers();
        initiateRaidCheckboxes();
    }
});

test('should import URL and set summary and slots', 95, function() {
    var vars = {
        head: '4,1,5,5,0,4,0,3,18',
        luck: '4,3,4,8,0,4,0,3,39',
        neck: '4,1,5,5,0,4,0,1,21',
        occult: '4,3,4,4,0,4,0,3,41',
        ring: '4,3,4,6,0,4,0,2,22',
        waist: '4,1,4,8,0,4,0,3,87',
        weapon: '5,0,4,4,0,4,0,2,5',
        wrist: '4,1,4,6,0,4,0,3,85'
    };

    tswcalc.import.start(vars);

    // Summary
    equal($('#stat-hitpoints').html(), '10688');
    equal($('#stat-combat-power').html(), '504');
    equal($('#stat-attack-rating').html(), '1565');
    equal($('#stat-weapon-power').html(), '457');
    equal($('#stat-heal-rating').html(), '0');
    equal($('#stat-critical-rating').html(), '0');
    equal($('#stat-critical-chance').html(), '5.00 %');
    equal($('#stat-critical-power').html(), '0');
    equal($('#stat-critical-power-percentage').html(), '25.0 %');
    equal($('#stat-penetration-rating').html(), '0');
    equal($('#stat-hit-rating').html(), '+504');
    equal($('#stat-block-rating').html(), '+691');
    equal($('#stat-defense-rating').html(), '+576');
    equal($('#stat-evade-rating').html(), '0');
    equal($('#stat-physical-protection').html(), '+609');
    equal($('#stat-magical-protection').html(), '+249');

    equal($('#weapon-ql').val(), '10.5');
    equal($('#weapon-glyph-ql').val(), '10.4');
    equal($('#weapon-primary-glyph').val(), 'hit-rating');
    equal($('#weapon-secondary-glyph').val(), 'none');
    ok($('#weapon-primary-glyph-dist-btn4').hasClass('active'));
    ok($('#weapon-secondary-glyph-dist-btn0').hasClass('active'));
    equal($('#weapon-signet-quality').val(), 'elite');
    equal($('#weapon-pick-signet').val(), '5');

    equal($('#head-ql').val(), '10.4');
    equal($('#head-role').val(), 'tank');
    equal($('#head-glyph-ql').val(), '10.5');
    equal($('#head-primary-glyph').val(), 'block-rating');
    equal($('#head-secondary-glyph').val(), 'none');
    ok($('#head-primary-glyph-dist-btn4').hasClass('active'));
    ok($('#head-secondary-glyph-dist-btn0').hasClass('active'));
    equal($('#head-signet-quality').val(), 'epic');
    equal($('#head-pick-signet').val(), '18');

    equal($('#ring-ql').val(), '10.4');
    equal($('#ring-role').val(), 'dps');
    equal($('#ring-glyph-ql').val(), '10.4');
    equal($('#ring-primary-glyph').val(), 'defense-rating');
    equal($('#ring-secondary-glyph').val(), 'none');
    ok($('#ring-primary-glyph-dist-btn4').hasClass('active'));
    ok($('#ring-secondary-glyph-dist-btn0').hasClass('active'));
    equal($('#ring-signet-quality').val(), 'elite');
    equal($('#ring-pick-signet').val(), '22');

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
    ok(!$('#waist-nyraid').attr('disabled'));

    equal($('#occult-ql').val(), '10.4');
    equal($('#occult-role').val(), 'dps');
    equal($('#occult-glyph-ql').val(), '10.4');
    equal($('#occult-primary-glyph').val(), 'hit-rating');
    equal($('#occult-secondary-glyph').val(), 'none');
    ok($('#occult-primary-glyph-dist-btn4').hasClass('active'));
    ok($('#occult-secondary-glyph-dist-btn0').hasClass('active'));
    equal($('#occult-signet-quality').val(), 'epic');
    equal($('#occult-pick-signet').val(), '41');
});