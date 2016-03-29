var tswcalc = tswcalc || {};
tswcalc.data = tswcalc.data || {};

tswcalc.data.findItems = function(slot) {
    var slotItems = tswcalc.data.items.filter(function (item) { 
        return item.slots.indexOf(slot) != -1;
    });
    return slotItems;
}

tswcalc.data.items = [
    {
        id: '3',
        name: 'DPS',
        role: 'dps',
        slots: ['head', 'major', 'minor']
    },
    {
        id: '1',
        name: 'Tank',
        role: 'tank',
        slots: ['head', 'major', 'minor']
    },
    {
        id: '2',
        name: 'Healer',
        role: 'healer',
        slots: ['head', 'major', 'minor']
    },
    
    //NY Items
    {
        id: '80',
        name: 'Blood of the Old Ones',
        ql: '10.4',
        role: 'healer',
        slots: ['head'],
        signet: {
            name: 'Blood of the Old Ones',
            description: 'Whenever you apply a heal effect to a friend, there is a 10% chance that you will heal the target for an additional 3% of their maximum health.',
            quality: 'epic',
            cooldown: 5,
            icon: 'blood_of_the_old_ones'
        }
    },
    {
        id: '81',
        name: 'Mark of the Starspawn',
        ql: '10.4',
        role: 'tank',
        slots: ['head'],
        signet: {
            name: 'Mark of the Starspawn',
            description: 'Whenever you are attacked, you have a 5% chance to gain a beneficial effect that reduces damage received from penetrating attacks for 15 seconds. The duration of this effect is not refreshed when reapplied.',
            quality: 'epic',
            icon: 'mark_of_the_starspawn'
        }
    },
    {
        id: '82',
        name: 'Ashes of Elder Things',
        ql: '10.4',
        role: 'dps',
        slots: ['head'],
        signet: {
            name: 'Ashes of Elder Things',
            description: 'Whenever you penetrate, you gain a beneficial effect that increases your Penetration Rating by 25% for 15 seconds. The duration of this effect is not refreshed when reapplied.',
            quality: 'epic',
            bonus: {
                stat: ['penetration-rating'],
                multiply: 1.25
            },
            icon: 'ashes_of_elder_things'
        }
    },
    {
        id: '83',
        name: 'Coney Island Band',
        ql: '10.4',
        slots: ['ring'],
        role: 'healer',
        signet: {
            name: 'Coney Island Band',
            description: 'Whenever you critically heal, you gain a beneficial effect that increases your Crit Power by 25% for 15 seconds. The duration of this effect is not refreshed when reapplied.',
            quality: 'epic',
            bonus: {
                stat: ['critical-power-percentage'],
                add: 25
            },
            icon: 'coney_island_band'
        }
    },    
    {
        id: '84',
        name: 'Egon Pendant',
        ql: '10.4',
        slots: ['neck'],
        role: 'dps',
        signet: {
            name: 'Egon Pendant',
            description: 'Whenever you critically hit, you gain a beneficial effect that increases the effectiveness of your Critical Rating for 12 seconds. The duration of this effect is not refreshed when reapplied.',
            quality: 'epic',
            bonus: {
                stat: ['critical-rating'],
                multiply: 1.25
            },
            icon: 'egon_pendant'
        }
    },
    {
        id: '85',
        name: 'Brooklyn Bracer',
        ql: '10.4',
        slots: ['wrist'],
        role: 'tank',
        signet: {
            name: 'Brooklyn Bracer',
            description: 'Whenever you are attacked, you gain a single stack of a beneficial effect that increases your Evade Chance by 5% per stack. This effect is removed after you successfully evade.',
            quality: 'epic',
            icon: 'brooklyn_bracer'
        }
    },
    {
        id: '86',
        name: 'Subway Tokens',
        ql: ['10.4', '10.9'],
        slots: ['luck'],
        role: 'dps',
        signet: {
            name: 'Subway Tokens',
            description: 'Every 6 seconds, you gain a single stack of a beneficial effect that increases all damage dealt by 1% per stack. This effect is removed whenever you glance or the number of stacks exceeds 10.',
            quality: 'epic',
            icon: 'subway_tokens'
        }
    },
    {
        id: '87',
        name: 'NY Buckle',
        ql: ['10.4', '10.9'],
        slots: ['waist'],
        role: 'tank',
        signet: {
            name: 'NY Buckle',
            description: 'Every 6 seconds, you gain a single stack of a beneficial effect that increases your Physical and Magical Protection by 3% per stack. This effect is removed whenever you are penetrated or the number of stacks exceeds 10.',
            quality: 'epic',
            bonus: {
                stat: ['physical-protection', 'magical-protection'],
                multiply: 1.30
            },
            icon: 'ny_buckle'
        }
    },
    {
        id: '88',
        name: 'Broadway Charm',
        ql: ['10.4', '10.9'],
        slots: ['occult'],
        role: 'healer',
        signet: {
            name: 'Broadway Charm',
            description: 'Whenever you heal a target that is below 66% of their health, there is a 33% chance that you will also give them a beneficial effect that increases their Physical and Magical Protection by 400 for 10 seconds. 6 seconds cooldown.',
            quality: 'epic',
            icon: 'broadway_charm'
        }
    },
    
    //Woodcutters
    {
        id: '90',
        name: 'The Woodcutter\'s Sorrow',
        ql: '10.9',
        role: 'healer',
        slots: ['neck'],
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
            name: 'The Woodcutter\'s Sorrow',
            description: 'Whenever you directly heal an ally, you trigger <strong>Maternal Band</strong>: If your ally has an existing barrier, they are healed for twice the strength of that barrier. Maternal Band can only occur once per ally every 4 seconds.',
            quality: 'heroic',
            icon: 'woodcutter_sorrow'
        }
    },
    {
        id: '91',
        name: 'The Woodcutter\'s Regret',
        ql: '10.9',
        role: 'tank',
        slots: ['neck'],
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
            name: 'The Woodcutter\'s Regret',
            description: 'Whenever you are hit, you have a 33% chance to trigger <strong>Guardian Spirit</strong>: Increases the lowest of your Evade, Defence and Block Rating by 300 for 5 seconds. This effect will not trigger if two or more of these stats are of equal value.',
            quality: 'heroic',
            icon: 'woodcutter_regret'
        }
    },
    {
        id: '92',
        name: 'The Woodcutter\'s Wrath',
        ql: '10.9',
        role: 'dps',
        slots: ['neck'],
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
            name: 'The Woodcutter\'s Wrath',
            description: 'Whenever an attack fails to penetrate, you gain a <strong>Mother\'s Wrath</strong> counter. When you reach 5 counters, they are removed and you gain a beneficial effect which increases your Penetration Chance by 40% for 3 seconds. Whenever you penetrate, all Mother\'s Wrath counters are removed. 6 seconds cooldown.',
            quality: 'heroic',
            icon: 'woodcutter_wrath'
        }
    }
];
