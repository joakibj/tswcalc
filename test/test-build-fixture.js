function createTankBuild() {
    $('#weapon-wtype').val('blade');
    $('#weapon-ql').val('10.5');
    $('#weapon-glyph-ql').val('10.4');
    $('#weapon-primary-glyph').val('hit-rating');
    $('#weapon-secondary-glyph').val('none');
    $('#weapon-primary-glyph-dist-btn4').trigger('click');
    $('#weapon-secondary-glyph-dist-btn0').trigger('click');
    $('#weapon-signet-quality').val('elite');
    $('#weapon-pick-signet').val('5');

    $('#weapon2-wtype').val('hammer');
    $('#weapon2-ql').val('10.5');
    $('#weapon2-glyph-ql').val('10.4');
    $('#weapon2-primary-glyph').val('hit-rating');
    $('#weapon2-secondary-glyph').val('none');
    $('#weapon2-primary-glyph-dist-btn4').trigger('click');
    $('#weapon2-secondary-glyph-dist-btn0').trigger('click');
    $('#weapon2-signet-quality').val('elite');
    $('#weapon2-pick-signet').val('6');

    $('#head-ql').val('10.4');
    $('#head-role').val('tank');
    $('#head-glyph-ql').val('10.5');
    $('#head-primary-glyph').val('block-rating');
    $('#head-secondary-glyph').val('none');
    $('#head-primary-glyph-dist-btn4').trigger('click');
    $('#head-secondary-glyph-dist-btn0').trigger('click');
    $('#head-signet-quality').val('epic');
    $('#head-pick-signet').val('18');

    $('#ring-ql').val('10.4');
    $('#ring-role').val('dps');
    $('#ring-glyph-ql').val('10.4');
    $('#ring-primary-glyph').val('defense-rating');
    $('#ring-secondary-glyph').val('none');
    $('#ring-primary-glyph-dist-btn4').trigger('click');
    $('#ring-secondary-glyph-dist-btn0').trigger('click');
    $('#ring-signet-quality').val('elite');
    $('#ring-pick-signet').val('22');

    $('#neck-ql').val('10.4');
    $('#neck-role').val('tank');
    $('#neck-glyph-ql').val('10.5');
    $('#neck-primary-glyph').val('block-rating');
    $('#neck-secondary-glyph').val('none');
    $('#neck-primary-glyph-dist-btn4').trigger('click');
    $('#neck-secondary-glyph-dist-btn0').trigger('click');
    $('#neck-signet-quality').val('normal');
    $('#neck-pick-signet').val('21');

    $('#wrist-role').val('tank');
    $('#wrist-glyph-ql').val('10.4');
    $('#wrist-primary-glyph').val('defense-rating');
    $('#wrist-secondary-glyph').val('none');
    $('#wrist-primary-glyph-dist-btn4').trigger('click');
    $('#wrist-secondary-glyph-dist-btn0').trigger('click');
    $('#wrist-nyraid').prop('checked', true);
    $('#wrist-nyraid').change(); //Brooklyn Bracer

    $('#luck-ql').val('10.4');
    $('#luck-role').val('dps');
    $('#luck-glyph-ql').val('10.4');
    $('#luck-primary-glyph').val('physical-protection');
    $('#luck-secondary-glyph').val('none');
    $('#luck-primary-glyph-dist-btn4').trigger('click');
    $('#luck-secondary-glyph-dist-btn0').trigger('click');
    $('#luck-signet-quality').val('epic');
    $('#luck-pick-signet').val('39');

    $('#waist-role').val('tank');
    $('#waist-glyph-ql').val('10.4');
    $('#waist-primary-glyph').val('physical-protection');
    $('#waist-secondary-glyph').val('none');
    $('#waist-primary-glyph-dist-btn4').trigger('click');
    $('#waist-secondary-glyph-dist-btn0').trigger('click');
    $('#waist-nyraid').prop('checked', true);
    $('#waist-nyraid').change(); //NY Buckle

    $('#occult-ql').val('10.4');
    $('#occult-role').val('dps');
    $('#occult-glyph-ql').val('10.4');
    $('#occult-primary-glyph').val('hit-rating');
    $('#occult-secondary-glyph').val('none');
    $('#occult-primary-glyph-dist-btn4').trigger('click');
    $('#occult-secondary-glyph-dist-btn0').trigger('click');
    $('#occult-signet-quality').val('epic');
    $('#occult-pick-signet').val('41');
}

function createDPSNYRaidBuild() {
    $('#weapon-ql').val('10.5');
    $('#weapon-glyph-ql').val('10.4');
    $('#weapon-primary-glyph').val('hit-rating');
    $('#weapon-secondary-glyph').val('none');
    $('#weapon-primary-glyph-dist-btn4').trigger('click');
    $('#weapon-secondary-glyph-dist-btn0').trigger('click');
    $('#weapon-signet-quality').val('elite');
    $('#weapon-pick-signet').val('5');

    $('#head-role').val('dps');
    $('#head-glyph-ql').val('10.5');
    $('#head-primary-glyph').val('penetration-rating');
    $('#head-secondary-glyph').val('none');
    $('#head-primary-glyph-dist-btn4').trigger('click');
    $('#head-secondary-glyph-dist-btn0').trigger('click');
    $('#head-nyraid').prop('checked', true);
    $('#head-nyraid').change(); // Ashes of Elder Things

    $('#ring-role').val('healer');
    $('#ring-glyph-ql').val('10.4');
    $('#ring-primary-glyph').val('penetration-rating');
    $('#ring-secondary-glyph').val('none');
    $('#ring-primary-glyph-dist-btn4').trigger('click');
    $('#ring-secondary-glyph-dist-btn0').trigger('click');
    $('#ring-nyraid').prop('checked', true);
    $('#ring-nyraid').change(); // Coney Island Band

    $('#neck-role').val('dps');
    $('#neck-glyph-ql').val('10.5');
    $('#neck-primary-glyph').val('critical-rating');
    $('#neck-secondary-glyph').val('none');
    $('#neck-primary-glyph-dist-btn4').trigger('click');
    $('#neck-secondary-glyph-dist-btn0').trigger('click');
    $('#neck-nyraid').prop('checked', true);
    $('#neck-nyraid').change(); //Egon Pendant

    $('#wrist-role').val('tank');
    $('#wrist-glyph-ql').val('10.4');
    $('#wrist-primary-glyph').val('defense-rating');
    $('#wrist-secondary-glyph').val('none');
    $('#wrist-primary-glyph-dist-btn4').trigger('click');
    $('#wrist-secondary-glyph-dist-btn0').trigger('click');
    $('#wrist-nyraid').prop('checked', true);
    $('#wrist-nyraid').change(); //Brooklyn Bracer

    $('#luck-ql').val('10.4');
    $('#luck-role').val('dps');
    $('#luck-glyph-ql').val('10.4');
    $('#luck-primary-glyph').val('physical-protection');
    $('#luck-secondary-glyph').val('none');
    $('#luck-primary-glyph-dist-btn4').trigger('click');
    $('#luck-secondary-glyph-dist-btn0').trigger('click');
    $('#luck-signet-quality').val('epic');
    $('#luck-pick-signet').val('39');

    $('#waist-role').val('tank');
    $('#waist-glyph-ql').val('10.4');
    $('#waist-primary-glyph').val('physical-protection');
    $('#waist-secondary-glyph').val('none');
    $('#waist-primary-glyph-dist-btn4').trigger('click');
    $('#waist-secondary-glyph-dist-btn0').trigger('click');
    $('#waist-nyraid').prop('checked', true);
    $('#waist-nyraid').change(); //NY Buckle

    $('#occult-ql').val('10.4');
    $('#occult-role').val('dps');
    $('#occult-glyph-ql').val('10.4');
    $('#occult-primary-glyph').val('hit-rating');
    $('#occult-secondary-glyph').val('none');
    $('#occult-primary-glyph-dist-btn4').trigger('click');
    $('#occult-secondary-glyph-dist-btn0').trigger('click');
    $('#occult-signet-quality').val('epic');
    $('#occult-pick-signet').val('41');
}