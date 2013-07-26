var tswcalc = tswcalc || {};
tswcalc.data = tswcalc.data || {};

tswcalc.data.stat_mapping = {
    to_num: {
        'none': 0,
        'critical-rating': 1,
        'critical-power': 2,
        'penetration-rating': 3,
        'hit-rating': 4,
        'block-rating': 5,
        'defense-rating': 6,
        'evade-rating': 7,
        'physical-protection': 8,
        'magical-protection': 9
    },

    to_stat: {
        0: 'none',
        1: 'critical-rating',
        2: 'critical-power',
        3: 'penetration-rating',
        4: 'hit-rating',
        5: 'block-rating',
        6: 'defense-rating',
        7: 'evade-rating',
        8: 'physical-protection',
        9: 'magical-protection'
    }
};

tswcalc.data.role_mapping = {
    to_num: {
        'tank': 1,
        'healer': 2,
        'dps': 3
    },

    to_stat: {
        0: 'none',
        1: 'tank',
        2: 'healer',
        3: 'dps'
    }
};

tswcalc.data.signet_quality_mapping = {
    to_num: {
        'none': 0,
        'normal': 1,
        'elite': 2,
        'epic': 3
    },
    to_name: {
        0: 'none',
        1: 'normal',
        2: 'elite',
        3: 'epic'
    },
    to_colour: {
        'none': 'white',
        'normal': 'green',
        'elite': 'blue',
        'epic': 'purple'
    }
};

tswcalc.data.wtype_mapping = {
    to_num: {
        'none': 0,
        'blade': 1,
        'hammer': 2,
        'fist': 3,
        'blood': 4,
        'chaos': 5,
        'elementalism': 6,
        'shotgun': 7,
        'pistol': 8,
        'assault-rifle': 9
    },
    to_name: {
        0: 'none',
        1: 'blade',
        2: 'hammer',
        3: 'fist',
        4: 'blood',
        5: 'chaos',
        6: 'elementalism',
        7: 'shotgun',
        8: 'pistol',
        9: 'assault-rifle'
    }
};