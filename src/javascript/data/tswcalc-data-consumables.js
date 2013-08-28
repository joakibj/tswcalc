var tswcalc = tswcalc || {};
tswcalc.data = tswcalc.data || {};

tswcalc.data.consumables = {
    pure_anima: {
        'none': {
            name: 'None',
            description: '',
            bonus: {
                stat: 'none',
                add: 0
            }
        },
        'health': {
            name: 'Max Health',
            description: 'Grants 940 Max Health for 60 minutes. Persists through death.',
            bonus: {
                stat: 'hitpoints',
                add: 940
            }

        },
        'attack-rating': {
            name: 'Attack Rating',
            description: 'Grants 240 Attack Rating for 60 minutes. Persists through death.',
            bonus: {
                stat: 'attack-rating',
                add: 240
            }
        },
        'heal-rating': {
            name: 'Heal Rating',
            description: 'Grants 240 Heal Rating for 60 minutes. Persists through death.',
            bonus: {
                stat: 'heal-rating',
                add: 240
            }
        }
    },
    anima: {
        'none': {
            name: 'None',
            description: '',
            bonus: {
                stat: 'none',
                add: 0
            }
        },
        'critical-rating': {
            name: 'Crit Rating',
            description: 'Grants 119 Crit Rating for 60 minutes. Removed on death.',
            bonus: {
                stat: 'critical-rating',
                add: 119
            }
        },
        'critical-power': {
            name: 'Crit Damage Rating',
            description: 'Grants 100 Crit Damage Rating for 60 minutes. Removed on death.',
            bonus: {
                stat: 'critical-power',
                add: 100
            }
        },
        'penetration-rating': {
            name: 'Penetration Rating',
            description: 'Grants 100 Penetration Rating for 60 minutes. Removed on death.',
            bonus: {
                stat: 'penetration-rating',
                add: 100
            }
        },
        'hit-rating': {
            name: 'Hit Rating',
            description: 'Grants 100 Hit Rating for 60 minutes. Removed on death.',
            bonus: {
                stat: 'hit-rating',
                add: 100
            }
        },
        'block-rating': {
            name: 'Block Rating',
            description: 'Grants 100 Block Rating for 60 minutes. Removed on death.',
            bonus: {
                stat: 'block-rating',
                add: 100
            }
        },
        'defense-rating': {
            name: 'Defense Rating',
            description: 'Grants 100 Defense Rating for 60 minutes. Removed on death.',
            bonus: {
                stat: 'defense-rating',
                add: 100
            }
        },
        'evade-rating': {
            name: 'Evade Rating',
            description: 'Grants 110 Evade Rating for 60 minutes. Removed on death.',
            bonus: {
                stat: 'evade-rating',
                add: 110
            }
        },
        'physical-protection': {
            name: 'Physical Protection Rating',
            description: 'Grants 66 Physical Protection Rating for 60 minutes. Removed on death.',
            bonus: {
                stat: 'physical-protection',
                add: 66
            }
        },
        'magical-protection': {
            name: 'Magical Protection Rating',
            description: 'Grants 100 Magical Protection Rating for 60 minutes. Removed on death.',
            bonus: {
                stat: 'magical-protection',
                add: 100
            }
        }
    }
};