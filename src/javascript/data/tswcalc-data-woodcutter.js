var tswcalc = tswcalc || {};
tswcalc.data = tswcalc.data || {};

tswcalc.data.woodcutters = {
    'neck': {
        healer: {
            name: 'The Woodcutter\'s Sorrow',
            glyph: {
                ql: '10.5',
                primary: {
                    stat: 'critical-power',
                    dist: 4
                },
                secondary: {
                    stat: 'none',
                    dist: 0
                }
            },
            signet: {
                id: 90,
                fixed: true,
                name: 'The Woodcutter\'s Sorrow',
                description: 'Whenever you directly heal an ally, you trigger <strong>Maternal Band</strong>: If your ally has an existing barrier, they are healed for twice the strength of that barrier. Maternal Band can only occur once per ally every 4 seconds.',
                cooldown: 0,
                quality: {
                    heroic: 0
                },
                icon: 'woodcutter_sorrow'
            }
        },
        tank: {
            name: 'The Woodcutter\'s Regret',
            glyph: {
                ql: '10.5',
                primary: {
                    stat: 'magical-protection',
                    dist: 2
                },
                secondary: {
                    stat: 'physical-protection',
                    dist: 2
                }
            },
            signet: {
                id: 91,
                fixed: true,
                name: 'The Woodcutter\'s Regret',
                description: 'Whenever you are hit, you have a 33% chance to trigger <strong>Guardian Spirit</strong>: Increases the lowest of your Evade, Defence and Block Rating by 300 for 5 seconds. This effect will not trigger if two or more of these stats are of equal value.',
                cooldown: 0,
                quality: {
                    heroic: 0
                },
                icon: 'woodcutter_regret'
            }
        },
        dps: {
            name: 'The Woodcutter\'s Wrath',
            glyph: {
                ql: '10.5',
                primary: {
                    stat: 'critical-power',
                    dist: 4
                },
                secondary: {
                    stat: 'none',
                    dist: 0
                }
            },
            signet: {
                id: 92,
                fixed: true,
                name: 'The Woodcutter\'s Wrath',
                description: 'Whenever an attack fails to penetrate, you gain a <strong>Mother\'s Wrath</strong> counter. When you reach 5 counters, they are removed and you gain a beneficial effect which increases your Penetration Chance by 50% for 3 seconds. Whenever you penetrate, all Mother\'s Wrath counters are removed.',
                cooldown: 0,
                quality: {
                    heroic: 0
                },
                icon: 'woodcutter_wrath'
            }
        }
    }
};