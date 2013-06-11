
signet_data = {
    find: function(group, id) {
        for (var i = this[group].length - 1; i >= 0; i--) {
            if (this[group][i].id == id) {
                return this[group][i];
            }
        }
        if (group == 'head') {
            return this.find('weapon', id);
        }
        return this.noneSignet();
    },
    noneSignet: function() {
        return {
            description: '',
            cooldown: '0',
            quality: {
                epic: 0,
                elite: 0,
                normal: 0
            },
            id: 0,
            name: '',
            icon: 'minor_dps'
        };
    },
    'weapon': [{
        description: 'When you hit a target you have a 10% chance to gain a damage increase of %d% for 5 seconds.',
        cooldown: '11',
        quality: {
            epic: 21,
            elite: 14,
            normal: 7
        },
        id: 52,
        name: 'Abuse',
        icon: 'weapon_dps'
    }, {
        description: 'When you hit a weakened target you have a 15% chance to gain %d% damage increase for 6 seconds.',
        cooldown: '10',
        quality: {
            epic: 15,
            elite: 10,
            normal: 5
        },
        id: 1,
        name: 'Aggression',
        icon: 'weapon_util'
    }, {
        description: 'When you penetrate a target you have a 33% chance to make your target take %d% more damage from further penetrating hits for 7 seconds.',
        cooldown: '0',
        quality: {
            epic: 30,
            elite: 20,
            normal: 10
        },
        id: 2,
        name: 'Breaching',
        icon: 'weapon_dps'
    }, {
        description: 'When you hit a target you have a 10% chance to make your next %d hits never miss.',
        cooldown: '10',
        quality: {
            epic: 12,
            elite: 8,
            normal: 4
        },
        id: 3,
        name: 'Castigation',
        icon: 'weapon_dps'
    }, {
        description: 'Your hinder effects last %d% longer.',
        cooldown: '0',
        quality: {
            epic: 30,
            elite: 20,
            normal: 10
        },
        id: 4,
        name: 'Detainment',
        icon: 'weapon_util'
    }, {
        description: 'When you achieve 10 hits you gain %d% damage increase for 6 seconds.',
        cooldown: '6',
        quality: {
            epic: 9,
            elite: 6,
            normal: 3
        },
        id: 5,
        name: 'Fury',
        icon: 'weapon_dps'
    }, {
        description: 'When you critically hit a target you gain a critical damage increase of %d% for 15 seconds.',
        cooldown: '15',
        quality: {
            epic: 18,
            elite: 12,
            normal: 6
        },
        id: 6,
        name: 'Laceration',
        icon: 'weapon_dps'
    }, {
        description: 'When you hit an impaired target you gain increased damage of %d% per stack for 5 seconds, up to 3 stacks.',
        cooldown: '0',
        quality: {
            epic: 3,
            elite: 2,
            normal: 1
        },
        id: 7,
        name: 'Obedience',
        icon: 'weapon_util'
    }, {
        description: 'When you hit an afflicted target, you have a 20% chance to hit them for an additional %d damage.',
        cooldown: '0',
        quality: {
            epic: 144,
            elite: 96,
            normal: 48
        },
        id: 8,
        name: 'Opportunism',
        icon: 'weapon_util'
    }, {
        description: 'When you hit a target you have a 10% chance to hit them for an additional %d damage.',
        cooldown: '0',
        quality: {
            epic: 236,
            elite: 158,
            normal: 80
        },
        id: 9,
        name: 'Sadism',
        icon: 'weapon_dps'
    }, {
        description: 'When you heal a target there is a 20% chance they will gain a barrier that absorbs %d and lasts 10 seconds.',
        cooldown: '0',
        quality: {
            epic: 120,
            elite: 80,
            normal: 40
        },
        id: 10,
        name: 'Benediction',
        icon: 'weapon_heal'
    }, {
        description: 'When you critically hit a target you gain a barrier that absorbs %d and last 10 seconds.',
        cooldown: '0',
        quality: {
            epic: 120,
            elite: 80,
            normal: 40
        },
        id: 11,
        name: 'Valour',
        icon: 'weapon_heal'
    }, {
        description: 'When you hit a weakened target you have a 5% chance to be healed for %d every 2 seconds for 8 seconds.',
        cooldown: '0',
        quality: {
            epic: 141,
            elite: 94,
            normal: 47
        },
        id: 12,
        name: 'Cruel Delight',
        icon: 'weapon_util'
    }, {
        description: 'When you hinder a target you are healed for %d.',
        cooldown: '0',
        quality: {
            epic: 120,
            elite: 80,
            normal: 40
        },
        id: 13,
        name: 'Extrication',
        icon: 'weapon_util'
    }, {
        description: 'When you impair a target you are healed for %d every 2 for 6 seconds.',
        cooldown: '0',
        quality: {
            epic: 79,
            elite: 53,
            normal: 26
        },
        id: 14,
        name: 'Interdiction',
        icon: 'weapon_util'
    }, {
        description: 'When you heal a target below 50% health they are healed for %d every 2 seconds for 8 seconds.',
        cooldown: '0',
        quality: {
            epic: 72,
            elite: 48,
            normal: 24
        },
        id: 15,
        name: 'Temperance',
        icon: 'weapon_heal'
    }],
    'head': [{
        description: 'Your Affliction effects deal %d% more damage.',
        cooldown: '0',
        quality: {
            epic: 15,
            elite: 10,
            normal: 5
        },
        id: 16,
        name: 'Corruption',
        icon: 'head_util'
    }, {
        description: 'When you are glanced you gain a %d Defense Rating for 8 seconds.',
        cooldown: '10',
        quality: {
            epic: 186,
            elite: 124,
            normal: 62
        },
        id: 17,
        name: 'Discipline',
        icon: 'head_tank'
    }, {
        description: 'When you block you gain a %d% block chance for 4 seconds.',
        cooldown: '10',
        quality: {
            epic: 30,
            elite: 20,
            normal: 10
        },
        id: 18,
        name: 'Order',
        icon: 'head_tank'
    }, {
        description: 'When you are glanced you gain magical and physical protection of %d per stack for 4 seconds, up to 3 stacks.',
        cooldown: '0',
        quality: {
            epic: 141,
            elite: 94,
            normal: 47
        },
        id: 19,
        name: 'Reinforcement',
        icon: 'head_tank'
    }, {
        description: 'When you block you gain %d block rating per stack for 4 seconds, up to 3 stacks.',
        cooldown: '0',
        quality: {
            epic: 93,
            elite: 62,
            normal: 31
        },
        id: 20,
        name: 'Resilience',
        icon: 'head_tank'
    }],
    'minor': [{
        description: 'Your Strike attacks do an additional %d% damage.',
        cooldown: '0',
        quality: {
            epic: 3,
            elite: 2,
            normal: 1
        },
        id: 24,
        name: 'Assassination',
        icon: 'minor_dps'
    }, {
        description: 'Your Blast attacks do an additional %d% damage.',
        cooldown: '0',
        quality: {
            epic: 3,
            elite: 2,
            normal: 1
        },
        id: 25,
        name: 'Barrage',
        icon: 'minor_dps'
    }, {
        description: 'Your Focus attacks do an additional %d% damage.',
        cooldown: '0',
        quality: {
            epic: 3,
            elite: 2,
            normal: 1
        },
        id: 26,
        name: 'Cleaving',
        icon: 'minor_dps'
    }, {
        description: 'Your Chaos attacks do an additional %d% damage.',
        cooldown: '0',
        quality: {
            epic: 3,
            elite: 2,
            normal: 1
        },
        id: 27,
        name: 'Distortion',
        icon: 'minor_dps'
    }, {
        description: 'Your Assault Rifle attacks do an additional %d% damage.',
        cooldown: '0',
        quality: {
            epic: 3,
            elite: 2,
            normal: 1
        },
        id: 28,
        name: 'Execution',
        icon: 'minor_dps'
    }, {
        description: 'Your Elemental attacks doing an additional %d% damage.',
        cooldown: '0',
        quality: {
            epic: 3,
            elite: 2,
            normal: 1
        },
        id: 29,
        name: 'Flux',
        icon: 'minor_dps'
    }, {
        description: 'Your Pistol attacks do an additional %d% damage.',
        cooldown: '0',
        quality: {
            epic: 3,
            elite: 2,
            normal: 1
        },
        id: 30,
        name: 'Liquidation',
        icon: 'minor_dps'
    }, {
        description: 'Your Frenzy attacks do an additional %d% damage.',
        cooldown: '0',
        quality: {
            epic: 3,
            elite: 2,
            normal: 1
        },
        id: 31,
        name: 'Rage',
        icon: 'minor_dps'
    }, {
        description: 'Your Chain attacks do an additional %d% damage.',
        cooldown: '0',
        quality: {
            epic: 3,
            elite: 2,
            normal: 1
        },
        id: 32,
        name: 'Recursion',
        icon: 'minor_dps'
    }, {
        description: 'Your Fist attacks do an additional %d% damage.',
        cooldown: '0',
        quality: {
            epic: 3,
            elite: 2,
            normal: 1
        },
        id: 33,
        name: 'Serration',
        icon: 'minor_dps'
    }, {
        description: 'Your Shotgun attacks do an additional %d% damage.',
        cooldown: '0',
        quality: {
            epic: 3,
            elite: 2,
            normal: 1
        },
        id: 34,
        name: 'Shards',
        icon: 'minor_dps'
    }, {
        description: 'Your Hammer attacks do an additional %d% damage.',
        cooldown: '0',
        quality: {
            epic: 3,
            elite: 2,
            normal: 1
        },
        id: 35,
        name: 'Shattering',
        icon: 'minor_dps'
    }, {
        description: 'Your Burst attacks do an additional %d% damage.',
        cooldown: '0',
        quality: {
            epic: 3,
            elite: 2,
            normal: 1
        },
        id: 36,
        name: 'Storms',
        icon: 'minor_dps'
    }, {
        description: 'Your Blade attacks do an additional %d% damage.',
        cooldown: '0',
        quality: {
            epic: 3,
            elite: 2,
            normal: 1
        },
        id: 37,
        name: 'Swords',
        icon: 'minor_dps'
    }, {
        description: 'Your Blood attacks do an additional %d% damage.',
        cooldown: '0',
        quality: {
            epic: 3,
            elite: 2,
            normal: 1
        },
        id: 38,
        name: 'Tomes',
        icon: 'minor_dps'
    }, {
        description: 'When your health is below 50% the next 5 hits against you do %d% less damage.',
        cooldown: '12',
        quality: {
            epic: 25,
            elite: 17,
            normal: 9
        },
        id: 39,
        name: 'Ablation',
        icon: 'minor_tank'
    }, {
        description: 'When your health is below 50% you gain a barrier that will absorb up to %d damage for 10 seconds.',
        cooldown: '12',
        quality: {
            epic: 378,
            elite: 252,
            normal: 162
        },
        id: 40,
        name: 'Fortification',
        icon: 'minor_tank'
    }, {
        description: 'When you Block, Evade, or are Glanced, you gain %d% damage reduction for 5 seconds.',
        cooldown: '6',
        quality: {
            epic: 6,
            elite: 4,
            normal: 2
        },
        id: 41,
        name: 'Salvation',
        icon: 'minor_tank'
    }, {
        description: 'Your Barrier effects are increased by %d%.',
        cooldown: '0',
        quality: {
            epic: 3,
            elite: 2,
            normal: 1
        },
        id: 42,
        name: 'Security',
        icon: 'minor_heal'
    }, {
        description: 'Whenever you critically heal a target they gain a heal over time effect, healing them for %d heal every 1 second for 5 seconds.',
        cooldown: '0',
        quality: {
            epic: 20,
            elite: 13,
            normal: 7
        },
        id: 43,
        name: 'Echoes',
        icon: 'minor_heal'
    }, {
        description: 'When you critically heal a target they gain a %d% damage increase for 5 seconds.',
        cooldown: '15',
        quality: {
            epic: 15,
            elite: 10,
            normal: 5
        },
        id: 44,
        name: 'Equilibrium',
        icon: 'minor_heal'
    }, {
        description: 'Your Healing effects are increased by %d%.',
        cooldown: '0',
        quality: {
            epic: 3,
            elite: 2,
            normal: 1
        },
        id: 45,
        name: 'Harmony',
        icon: 'minor_heal'
    }, {
        description: 'Your Leech effects are increased by %d%.',
        cooldown: '0',
        quality: {
            epic: 3,
            elite: 2,
            normal: 1
        },
        id: 46,
        name: 'Hunger',
        icon: 'minor_heal'
    }, {
        description: 'When your health is below 50% you are healed for %0 and affected by a heal over time effect healing you for %1 every 2 seconds for 8 seconds.',
        cooldown: '12',
        quality: [{
            epic: 150,
            elite: 100,
            normal: 50
        }, {
            epic: 57,
            elite: 38,
            normal: 19
        }],
        id: 47,
        name: 'Rejuvenation',
        icon: 'minor_heal'
    }, {
        description: 'When you critically heal a target they gain a %d% leech effect.',
        cooldown: '5',
        quality: {
            epic: 15,
            elite: 10,
            normal: 5
        },
        id: 48,
        name: 'Thirst',
        icon: 'minor_heal'
    }, {
        description: 'When you block, evade, or are glanced you generate a %s amount of hate on your offensive target.',
        cooldown: '6',
        quality: {
            epic: 'large',
            elite: 'medium',
            normal: 'small'
        },
        id: 49,
        name: 'Hatred',
        icon: 'minor_tank'
    }, {
        description: 'When you critically heal a target you reduce your offensive target\'s hate towards you by a %s amount.',
        cooldown: '15',
        quality: {
            epic: 'large',
            elite: 'medium',
            normal: 'small'
        },
        id: 50,
        name: 'Serenity',
        icon: 'minor_heal'
    }, {
        description: 'When you land a critical or penetrating hit you reduce your offensive targets hate towards you by a %s amount.',
        cooldown: '15',
        quality: {
            epic: 'large',
            elite: 'medium',
            normal: 'small'
        },
        id: 51,
        name: 'Subjugation',
        icon: 'minor_dps'
    }],
    'major': [{
        description: 'Your attack rating is increased by %d.',
        cooldown: '0',
        quality: {
            epic: 141,
            elite: 94,
            normal: 47
        },
        id: 21,
        name: 'Violence',
        stat: 'attack-rating',
        icon: 'major_dps'
    }, {
        description: 'Your health is increased by %d.',
        cooldown: '0',
        quality: {
            epic: 495,
            elite: 330,
            normal: 165
        },
        id: 22,
        name: 'Vigour',
        stat: 'hitpoints',
        icon: 'major_tank'
    }, {
        description: 'Your Heal rating is increased by %d.',
        cooldown: '0',
        quality: {
            epic: 141,
            elite: 94,
            normal: 47
        },
        id: 23,
        name: 'Amelioration',
        stat: 'heal-rating',
        icon: 'major_heal'
    }]
};
