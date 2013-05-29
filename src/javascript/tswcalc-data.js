stat_mapping = {
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
}

role_mapping = {
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
}

signet_quality_mapping = {
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
    }
}

template_data = {
    slots: [{
        id_prefix: 'weapon',
        name: 'Weapon',
        is_weapon: true,
        group: 'weapon'
    }, {
        id_prefix: 'head',
        name: 'Head Talisman',
        group: 'head'
    }, {
        id_prefix: 'ring',
        name: 'Ring Talisman',
        group: 'major'
    }, {
        id_prefix: 'neck',
        name: 'Neck Talisman',
        group: 'major'
    }, {
        id_prefix: 'wrist',
        name: 'Wrist Talisman',
        group: 'major'
    }, {
        id_prefix: 'luck',
        name: 'Luck Talisman',
        group: 'minor'
    }, {
        id_prefix: 'waist',
        name: 'Waist Talisman',
        group: 'minor'
    }, {
        id_prefix: 'occult',
        name: 'Occult Talisman',
        group: 'minor'
    }]
}

signet_data = {
    find: function(group, id) {
        for (var i = this[group].length - 1; i >= 0; i--) {
            if (this[group][i].id == id) {
                return this[group][i];
            }
        };
        if(group == 'head') {
            return this.find('weapon', id);
        }
        return null;
    },
    'weapon': [{
        description: 'When you hit a target you have a 10% chance to gain a damage increase of %d% for 5 seconds.',
        cooldown: '11',
        quality: {
            epic: 21,
            elite: 14,
            normal: 7
        },
        id: 0,
        name: 'Abuse'
    }, {
        description: 'When you hit a weakened target you have a 15% chance to gain %d% damage increase for 6 seconds.',
        cooldown: '10',
        quality: {
            epic: 15,
            elite: 10,
            normal: 5
        },
        id: 1,
        name: 'Aggression'
    }, {
        description: 'When you penetrate a target you have a 33% chance to make your target take %d% more damage from further penetrating hits for 7 seconds.',
        cooldown: '0',
        quality: {
            epic: 30,
            elite: 20,
            normal: 10
        },
        id: 2,
        name: 'Breaching'
    }, {
        description: 'When you hit a target you have a 10% chance to make your next %d hits never miss.',
        cooldown: '10',
        quality: {
            epic: 12,
            elite: 8,
            normal: 4
        },
        id: 3,
        name: 'Castigation'
    }, {
        description: 'Your hinder effects last %d% longer.',
        cooldown: '0',
        quality: {
            epic: 30,
            elite: 20,
            normal: 10
        },
        id: 4,
        name: 'Detainment'
    }, {
        description: 'When you achieve 10 hits you gain %d% damage increase for 6 seconds.',
        cooldown: '6',
        quality: {
            epic: 9,
            elite: 6,
            normal: 3
        },
        id: 5,
        name: 'Fury'
    }, {
        description: 'When you critically hit a target you gain a critical damage increase of %d% for 15 seconds.',
        cooldown: '15',
        quality: {
            epic: 18,
            elite: 12,
            normal: 6
        },
        id: 6,
        name: 'Laceration'
    }, {
        description: 'When you hit an impaired target you gain increased damage of %d% per stack for 5 seconds, up to 3 stacks.',
        cooldown: '0',
        quality: {
            epic: 3,
            elite: 2,
            normal: 1
        },
        id: 7,
        name: 'Obedience'
    }, {
        description: 'When you hit an afflicted target, you have a 20% chance to hit them for an additional %d damage.',
        cooldown: '0',
        quality: {
            epic: 144,
            elite: 96,
            normal: 48
        },
        id: 8,
        name: 'Opportunism'
    }, {
        description: 'When you hit a target you have a 10% chance to hit them for an additional %d damage.',
        cooldown: '0',
        quality: {
            epic: 236,
            elite: 158,
            normal: 80
        },
        id: 9,
        name: 'Sadism'
    }, {
        description: 'When you heal a target there is a 20% chance they will gain a barrier that absorbs %d and lasts 10 seconds.',
        cooldown: '0',
        quality: {
            epic: 120,
            elite: 80,
            normal: 40
        },
        id: 10,
        name: 'Benediction'
    }, {
        description: 'When you critically hit a target you gain a barrier that absorbs %d and last 10 seconds.',
        cooldown: '0',
        quality: {
            epic: 120,
            elite: 80,
            normal: 40
        },
        id: 11,
        name: 'Valour'
    }, {
        description: 'When you hit a weakened target you have a 5% chance to be healed for %d every 2 seconds for 8 seconds.',
        cooldown: '0',
        quality: {
            epic: 141,
            elite: 94,
            normal: 47
        },
        id: 12,
        name: 'Cruel Delight'
    }, {
        description: 'When you hinder a target you are healed for %d',
        cooldown: '0',
        quality: {
            epic: 120,
            elite: 80,
            normal: 40
        },
        id: 13,
        name: 'Extrication'
    }, {
        description: 'When you impair a target you are healed for %d every 2 for 6 seconds.',
        cooldown: '0',
        quality: {
            epic: 79,
            elite: 53,
            normal: 26
        },
        id: 14,
        name: 'Interdiction'
    }, {
        description: 'When you heal a target below 50% health they are healed for %d every 2 seconds for 8 seconds.',
        cooldown: '0',
        quality: {
            epic: 72,
            elite: 48,
            normal: 24
        },
        id: 15,
        name: 'Temperance'
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
        name: 'Corruption'
    }, {
        description: 'When you are glanced you gain a %d Defense Rating for 8 seconds.',
        cooldown: '10',
        quality: {
            epic: 186,
            elite: 124,
            normal: 62
        },
        id: 17,
        name: 'Discipline'
    }, {
        description: 'When you block you gain a %d% block chance for 4 seconds.',
        cooldown: '10',
        quality: {
            epic: 30,
            elite: 20,
            normal: 10
        },
        id: 18,
        name: 'Order'
    }, {
        description: 'When you are glanced you gain magical and physical protection of %d per stack for 4 seconds, up to 3 stacks.',
        cooldown: '0',
        quality: {
            epic: 141,
            elite: 94,
            normal: 47
        },
        id: 19,
        name: 'Reinforcement'
    }, {
        description: 'When you block you gain %d block rating per stack for 4 seconds, up to 3 stacks.',
        cooldown: '0',
        quality: {
            epic: 93,
            elite: 62,
            normal: 31
        },
        id: 20,
        name: 'Resilience'
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
        name: 'Assassination'
    }, {
        description: 'Your Blast attacks do an additional %d% damage.',
        cooldown: '0',
        quality: {
            epic: 3,
            elite: 2,
            normal: 1
        },
        id: 25,
        name: 'Barrage'
    }, {
        description: 'Your Focus attacks do an additional %d% damage.',
        cooldown: '0',
        quality: {
            epic: 3,
            elite: 2,
            normal: 1
        },
        id: 26,
        name: 'Cleaving'
    }, {
        description: 'Your Chaos attacks do an additional %d% damage.',
        cooldown: '0',
        quality: {
            epic: 3,
            elite: 2,
            normal: 1
        },
        id: 27,
        name: 'Distortion'
    }, {
        description: 'Your Assault Rifle attacks do an additional %d% damage.',
        cooldown: '0',
        quality: {
            epic: 3,
            elite: 2,
            normal: 1
        },
        id: 28,
        name: 'Execution'
    }, {
        description: 'Your Elemental attacks doing an additional %d% damage.',
        cooldown: '0',
        quality: {
            epic: 3,
            elite: 2,
            normal: 1
        },
        id: 29,
        name: 'Flux'
    }, {
        description: 'Your Pistol attacks do an additional %d% damage.',
        cooldown: '0',
        quality: {
            epic: 3,
            elite: 2,
            normal: 1
        },
        id: 30,
        name: 'Liquidation'
    }, {
        description: 'Your Frenzy attacks do an additional %d% damage',
        cooldown: '0',
        quality: {
            epic: 3,
            elite: 2,
            normal: 1
        },
        id: 31,
        name: 'Rage'
    }, {
        description: 'Your Chain attacks do an additional %d% damage.',
        cooldown: '0',
        quality: {
            epic: 3,
            elite: 2,
            normal: 1
        },
        id: 32,
        name: 'Recursion'
    }, {
        description: 'Your Fist attacks do an additional %d% damage.',
        cooldown: '0',
        quality: {
            epic: 3,
            elite: 2,
            normal: 1
        },
        id: 33,
        name: 'Serration'
    }, {
        description: 'Your Shotgun attacks do an additional %d% damage.',
        cooldown: '0',
        quality: {
            epic: 3,
            elite: 2,
            normal: 1
        },
        id: 34,
        name: 'Shards'
    }, {
        description: 'Your Hammer attacks do an additional %d% damage.',
        cooldown: '0',
        quality: {
            epic: 3,
            elite: 2,
            normal: 1
        },
        id: 35,
        name: 'Shattering'
    }, {
        description: 'Your Burst attacks do an additional %d% damage.',
        cooldown: '0',
        quality: {
            epic: 3,
            elite: 2,
            normal: 1
        },
        id: 36,
        name: 'Storms'
    }, {
        description: 'Your Blade attacks do an additional %d% damage.',
        cooldown: '0',
        quality: {
            epic: 3,
            elite: 2,
            normal: 1
        },
        id: 37,
        name: 'Swords'
    }, {
        description: 'Your Blood attacks do an additional %d% damage.',
        cooldown: '0',
        quality: {
            epic: 3,
            elite: 2,
            normal: 1
        },
        id: 38,
        name: 'Tomes'
    }, {
        description: 'When your health is below 50% the next 5 hits against you do %d% less damage.',
        cooldown: '12',
        quality: {
            epic: 25,
            elite: 17,
            normal: 9
        },
        id: 39,
        name: 'Ablation'
    }, {
        description: 'When your health is below 50% you gain a barrier that will absorb up to %d damage for 10 seconds.',
        cooldown: '12',
        quality: {
            epic: 378,
            elite: 252,
            normal: 162
        },
        id: 40,
        name: 'Fortification'
    }, {
        description: 'When you Block, Evade, or are Glanced, you gain %d% damage reduction for 5 seconds.',
        cooldown: '6',
        quality: {
            epic: 6,
            elite: 4,
            normal: 2
        },
        id: 41,
        name: 'Salvation'
    }, {
        description: 'Your Barrier effects are increased by %d%.',
        cooldown: '0',
        quality: {
            epic: 3,
            elite: 2,
            normal: 1
        },
        id: 42,
        name: 'Security'
    }, {
        description: 'Whenever you critically heal a target they gain a heal over time effect, healing them for %d heal every 1 second for 5 seconds.',
        cooldown: '0',
        quality: {
            epic: 20,
            elite: 13,
            normal: 7
        },
        id: 43,
        name: 'Echoes'
    }, {
        description: 'When you critically heal a target they gain a %d% damage increase for 5 seconds.',
        cooldown: '15',
        quality: {
            epic: 15,
            elite: 10,
            normal: 5
        },
        id: 44,
        name: 'Equilibrium'
    }, {
        description: 'Your Healing effects are increased by %d%.',
        cooldown: '0',
        quality: {
            epic: 3,
            elite: 2,
            normal: 1
        },
        id: 45,
        name: 'Harmony'
    }, {
        description: 'Your Leech effects are increased by %d%.',
        cooldown: '0',
        quality: {
            epic: 3,
            elite: 2,
            normal: 1
        },
        id: 46,
        name: 'Hunger'
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
        name: 'Rejuvenation'
    }, {
        description: 'When you critically heal a target they gain a %d% leech effect.',
        cooldown: '5',
        quality: {
            epic: 15,
            elite: 10,
            normal: 5
        },
        id: 48,
        name: 'Thirst'
    }, {
        description: 'When you block, evade, or are glanced you generate a %s amount of hate on your offensive target.',
        cooldown: '6',
        quality: {
            epic: 'large',
            elite: 'medium',
            normal: 'small'
        },
        id: 49,
        name: 'Hatred'
    }, {
        description: 'When you critically heal a target you reduce your offensive target\'s hate towards you by a %s amount.',
        cooldown: '15',
        quality: {
            epic: 'large',
            elite: 'medium',
            normal: 'small'
        },
        id: 50,
        name: 'Serenity'
    }, {
        description: 'When you land a critical or penetrating hit you reduce your offensive targets hate towards you by a %s amount.',
        cooldown: '15',
        quality: {
            epic: 'large',
            elite: 'medium',
            normal: 'small'
        },
        id: 51,
        name: 'Subjugation'
    }],
    'major': [{
        description: 'Your attack rating is increased by %d',
        cooldown: '0',
        quality: {
            epic: 141,
            elite: 94,
            normal: 47
        },
        id: 21,
        name: 'Violence',
        stat: 'attack-rating'
    }, {
        description: 'Your health is increased by %d',
        cooldown: '0',
        quality: {
            epic: 495,
            elite: 330,
            normal: 165
        },
        id: 22,
        name: 'Vigour',
        stat: 'hitpoints'
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
        stat: 'heal-rating'
    }]
}

bb_costs = {
    'weapon': {
        '10.0': {
            cost: 30
        },
        '10.1': {
            cost: 70
        },
        '10.2': {
            cost: 110
        },
        '10.3': {
            cost: 150
        },
        '10.4': {
            cost: 190
        },
        '10.5': {
            cost: 230,
            criterion_upgrade: true
        }
    },
    'talisman': {
        '10.0': {
            cost: 30
        },
        '10.1': {
            cost: 50
        },
        '10.2': {
            cost: 70
        },
        '10.3': {
            cost: 90
        },
        '10.4': {
            cost: 110
        },
        '10.5': {
            cost: 130,
            criterion_upgrade: true
        }
    },
    'glyph': {
        '10.0': {
            cost: 30
        },
        '10.1': {
            cost: 50
        },
        '10.2': {
            cost: 70
        },
        '10.3': {
            cost: 90
        },
        '10.4': {
            cost: 110
        },
        '10.5': {
            cost: 130,
            astral_fuse: true
        }
    }
}

custom_gear_data = {
    'weapon': {
        '10.0': {
            weapon_power: 398
        },
        '10.1': {
            weapon_power: 411
        },
        '10.2': {
            weapon_power: 423
        },
        '10.3': {
            weapon_power: 434
        },
        '10.4': {
            weapon_power: 446
        },
        '10.5': {
            weapon_power: 457
        }
    },
    'head': {
        heal_dps: {
            'ql10.0': {
                rating: 559
            },
            'ql10.1': {
                rating: 596
            },
            'ql10.2': {
                rating: 636
            },
            'ql10.3': {
                rating: 682
            },
            'ql10.4': {
                rating: 735
            },
            'ql10.5': {
                rating: 788
            }
        },
        tank: {
            'ql10.0': {
                hitpoints: 2100
            },
            'ql10.1': {
                hitpoints: 2194
            },
            'ql10.2': {
                hitpoints: 2288
            },
            'ql10.3': {
                hitpoints: 2382
            },
            'ql10.4': {
                hitpoints: 2476
            },
            'ql10.5': {
                hitpoints: 2570
            }
        }
    },
    'major': {
        heal_dps: {
            'ql10.0': {
                rating: 505
            },
            'ql10.1': {
                rating: 538
            },
            'ql10.2': {
                rating: 575
            },
            'ql10.3': {
                rating: 616
            },
            'ql10.4': {
                rating: 664
            },
            'ql10.5': {
                rating: 712
            }
        },
        tank: {
            'ql10.0': {
                hitpoints: 1897
            },
            'ql10.1': {
                hitpoints: 1982
            },
            'ql10.2': {
                hitpoints: 2067
            },
            'ql10.3': {
                hitpoints: 2152
            },
            'ql10.4': {
                hitpoints: 2237
            },
            'ql10.5': {
                hitpoints: 2322
            }
        }
    },
    'minor': {
        heal_dps: {
            'ql10.0': {
                rating: 325
            },
            'ql10.1': {
                rating: 346
            },
            'ql10.2': {
                rating: 369
            },
            'ql10.3': {
                rating: 396
            },
            'ql10.4': {
                rating: 427
            },
            'ql10.5': {
                rating: 458
            }
        },
        tank: {
            'ql10.0': {
                hitpoints: 1220
            },
            'ql10.1': {
                hitpoints: 1274
            },
            'ql10.2': {
                hitpoints: 1329
            },
            'ql10.3': {
                hitpoints: 1383
            },
            'ql10.4': {
                hitpoints: 1438
            },
            'ql10.5': {
                hitpoints: 1492
            }
        }
    }
}

glyph_data = {
    stat: {
        'hit-rating': {
            ql: {
                '10.0': {
                    slot: {
                        'head': {
                            dist: {
                                0: 0,
                                1: 50,
                                2: 101,
                                3: 151,
                                4: 202
                            }
                        },
                        'weapon': {
                            dist: {
                                0: 0,
                                1: 50,
                                2: 101,
                                3: 151,
                                4: 202
                            }
                        },
                        'major': {
                            dist: {
                                0: 0,
                                1: 46,
                                2: 91,
                                3: 137,
                                4: 182
                            }
                        },
                        'minor': {
                            dist: {
                                0: 0,
                                1: 29,
                                2: 59,
                                3: 88,
                                4: 117
                            }
                        }
                    }
                },
                '10.1': {
                    slot: {
                        'head': {
                            dist: {
                                0: 0,
                                1: 56,
                                2: 111,
                                3: 166,
                                4: 221
                            }
                        },
                        'weapon': {
                            dist: {
                                0: 0,
                                1: 56,
                                2: 111,
                                3: 166,
                                4: 221
                            }
                        },
                        'major': {
                            dist: {
                                0: 0,
                                1: 50,
                                2: 100,
                                3: 150,
                                4: 200
                            }
                        },
                        'minor': {
                            dist: {
                                0: 0,
                                1: 32,
                                2: 64,
                                3: 96,
                                4: 142
                            }
                        }
                    }
                },
                '10.2': {
                    slot: {
                        'head': {
                            dist: {
                                0: 0,
                                1: 61,
                                2: 123,
                                3: 184,
                                4: 245
                            }
                        },
                        'weapon': {
                            dist: {
                                0: 0,
                                1: 61,
                                2: 123,
                                3: 184,
                                4: 245
                            }
                        },
                        'major': {
                            dist: {
                                0: 0,
                                1: 55,
                                2: 111,
                                3: 166,
                                4: 221
                            }
                        },
                        'minor': {
                            dist: {
                                0: 0,
                                1: 36,
                                2: 71,
                                3: 107,
                                4: 129
                            }
                        }
                    }
                },
                '10.3': {
                    slot: {
                        'head': {
                            dist: {
                                0: 0,
                                1: 69,
                                2: 138,
                                3: 207,
                                4: 276
                            }
                        },
                        'weapon': {
                            dist: {
                                0: 0,
                                1: 69,
                                2: 138,
                                3: 207,
                                4: 276
                            }
                        },
                        'major': {
                            dist: {
                                0: 0,
                                1: 62,
                                2: 125,
                                3: 187,
                                4: 249
                            }
                        },
                        'minor': {
                            dist: {
                                0: 0,
                                1: 40,
                                2: 80,
                                3: 120,
                                4: 160
                            }
                        }
                    }
                },
                '10.4': {
                    slot: {
                        'head': {
                            dist: {
                                0: 0,
                                1: 80,
                                2: 160,
                                3: 240,
                                4: 319
                            }
                        },
                        'weapon': {
                            dist: {
                                0: 0,
                                1: 80,
                                2: 160,
                                3: 240,
                                4: 319
                            }
                        },
                        'major': {
                            dist: {
                                0: 0,
                                1: 72,
                                2: 144,
                                3: 216,
                                4: 288
                            }
                        },
                        'minor': {
                            dist: {
                                0: 0,
                                1: 46,
                                2: 93,
                                3: 139,
                                4: 185
                            }
                        }
                    }
                },
                '10.5': {
                    slot: {
                        'head': {
                            dist: {
                                0: 0,
                                1: 91,
                                2: 182,
                                3: 272,
                                4: 363
                            }
                        },
                        'weapon': {
                            dist: {
                                0: 0,
                                1: 91,
                                2: 182,
                                3: 272,
                                4: 363
                            }
                        },
                        'major': {
                            dist: {
                                0: 0,
                                1: 82,
                                2: 164,
                                3: 246,
                                4: 328
                            }
                        },
                        'minor': {
                            dist: {
                                0: 0,
                                1: 53,
                                2: 105,
                                3: 158,
                                4: 211
                            }
                        }
                    }
                }
            }
        },
        'penetration-rating': {
            ql: {
                '10.0': {
                    slot: {
                        'head': {
                            dist: {
                                0: 0,
                                1: 50,
                                2: 101,
                                3: 151,
                                4: 202
                            }
                        },
                        'weapon': {
                            dist: {
                                0: 0,
                                1: 50,
                                2: 101,
                                3: 151,
                                4: 202
                            }
                        },
                        'major': {
                            dist: {
                                0: 0,
                                1: 46,
                                2: 91,
                                3: 137,
                                4: 182
                            }
                        },
                        'minor': {
                            dist: {
                                0: 0,
                                1: 29,
                                2: 59,
                                3: 88,
                                4: 117
                            }
                        }
                    }
                },
                '10.1': {
                    slot: {
                        'head': {
                            dist: {
                                0: 0,
                                1: 56,
                                2: 111,
                                3: 166,
                                4: 221
                            }
                        },
                        'weapon': {
                            dist: {
                                0: 0,
                                1: 56,
                                2: 111,
                                3: 166,
                                4: 221
                            }
                        },
                        'major': {
                            dist: {
                                0: 0,
                                1: 50,
                                2: 100,
                                3: 150,
                                4: 200
                            }
                        },
                        'minor': {
                            dist: {
                                0: 0,
                                1: 32,
                                2: 64,
                                3: 96,
                                4: 142
                            }
                        }
                    }
                },
                '10.2': {
                    slot: {
                        'head': {
                            dist: {
                                0: 0,
                                1: 61,
                                2: 123,
                                3: 184,
                                4: 245
                            }
                        },
                        'weapon': {
                            dist: {
                                0: 0,
                                1: 61,
                                2: 123,
                                3: 184,
                                4: 245
                            }
                        },
                        'major': {
                            dist: {
                                0: 0,
                                1: 55,
                                2: 111,
                                3: 166,
                                4: 221
                            }
                        },
                        'minor': {
                            dist: {
                                0: 0,
                                1: 36,
                                2: 71,
                                3: 107,
                                4: 129
                            }
                        }
                    }
                },
                '10.3': {
                    slot: {
                        'head': {
                            dist: {
                                0: 0,
                                1: 69,
                                2: 138,
                                3: 207,
                                4: 276
                            }
                        },
                        'weapon': {
                            dist: {
                                0: 0,
                                1: 69,
                                2: 138,
                                3: 207,
                                4: 276
                            }
                        },
                        'major': {
                            dist: {
                                0: 0,
                                1: 62,
                                2: 125,
                                3: 187,
                                4: 249
                            }
                        },
                        'minor': {
                            dist: {
                                0: 0,
                                1: 40,
                                2: 80,
                                3: 120,
                                4: 160
                            }
                        }
                    }
                },
                '10.4': {
                    slot: {
                        'head': {
                            dist: {
                                0: 0,
                                1: 80,
                                2: 160,
                                3: 240,
                                4: 319
                            }
                        },
                        'weapon': {
                            dist: {
                                0: 0,
                                1: 80,
                                2: 160,
                                3: 240,
                                4: 319
                            }
                        },
                        'major': {
                            dist: {
                                0: 0,
                                1: 72,
                                2: 144,
                                3: 216,
                                4: 288
                            }
                        },
                        'minor': {
                            dist: {
                                0: 0,
                                1: 46,
                                2: 93,
                                3: 139,
                                4: 185
                            }
                        }
                    }
                },
                '10.5': {
                    slot: {
                        'head': {
                            dist: {
                                0: 0,
                                1: 91,
                                2: 182,
                                3: 272,
                                4: 363
                            }
                        },
                        'weapon': {
                            dist: {
                                0: 0,
                                1: 91,
                                2: 182,
                                3: 272,
                                4: 363
                            }
                        },
                        'major': {
                            dist: {
                                0: 0,
                                1: 82,
                                2: 164,
                                3: 246,
                                4: 328
                            }
                        },
                        'minor': {
                            dist: {
                                0: 0,
                                1: 53,
                                2: 105,
                                3: 158,
                                4: 211
                            }
                        }
                    }
                }
            }
        },
        'critical-rating': {
            ql: {
                '10.0': {
                    slot: {
                        'head': {
                            dist: {
                                0: 0,
                                1: 56,
                                2: 112,
                                3: 167,
                                4: 223
                            }
                        },
                        'weapon': {
                            dist: {
                                0: 0,
                                1: 56,
                                2: 112,
                                3: 167,
                                4: 223
                            }
                        },
                        'major': {
                            dist: {
                                0: 0,
                                1: 50,
                                2: 101,
                                3: 151,
                                4: 202
                            }
                        },
                        'minor': {
                            dist: {
                                0: 0,
                                1: 32,
                                2: 65,
                                3: 97,
                                4: 130
                            }
                        }
                    }
                },
                '10.1': {
                    slot: {
                        'head': {
                            dist: {
                                0: 0,
                                1: 60,
                                2: 120,
                                3: 181,
                                4: 241
                            }
                        },
                        'weapon': {
                            dist: {
                                0: 0,
                                1: 60,
                                2: 120,
                                3: 181,
                                4: 241
                            }
                        },
                        'major': {
                            dist: {
                                0: 0,
                                1: 54,
                                2: 109,
                                3: 163,
                                4: 217
                            }
                        },
                        'minor': {
                            dist: {
                                0: 0,
                                1: 35,
                                2: 70,
                                3: 105,
                                4: 140
                            }
                        }
                    }
                },
                '10.2': {
                    slot: {
                        'head': {
                            dist: {
                                0: 0,
                                1: 65,
                                2: 130,
                                3: 195,
                                4: 260
                            }
                        },
                        'weapon': {
                            dist: {
                                0: 0,
                                1: 65,
                                2: 130,
                                3: 195,
                                4: 260
                            }
                        },
                        'major': {
                            dist: {
                                0: 0,
                                1: 59,
                                2: 118,
                                3: 176,
                                4: 235
                            }
                        },
                        'minor': {
                            dist: {
                                0: 0,
                                1: 38,
                                2: 76,
                                3: 113,
                                4: 151
                            }
                        }
                    }
                },
                '10.3': {
                    slot: {
                        'head': {
                            dist: {
                                0: 0,
                                1: 71,
                                2: 141,
                                3: 212,
                                4: 283
                            }
                        },
                        'weapon': {
                            dist: {
                                0: 0,
                                1: 71,
                                2: 141,
                                3: 212,
                                4: 283
                            }
                        },
                        'major': {
                            dist: {
                                0: 0,
                                1: 64,
                                2: 131,
                                3: 192,
                                4: 255
                            }
                        },
                        'minor': {
                            dist: {
                                0: 0,
                                1: 41,
                                2: 82,
                                3: 123,
                                4: 164
                            }
                        }
                    }
                },
                '10.4': {
                    slot: {
                        'head': {
                            dist: {
                                0: 0,
                                1: 77,
                                2: 155,
                                3: 232,
                                4: 309
                            }
                        },
                        'weapon': {
                            dist: {
                                0: 0,
                                1: 77,
                                2: 155,
                                3: 232,
                                4: 309
                            }
                        },
                        'major': {
                            dist: {
                                0: 0,
                                1: 70,
                                2: 140,
                                3: 210,
                                4: 279
                            }
                        },
                        'minor': {
                            dist: {
                                0: 0,
                                1: 45,
                                2: 90,
                                3: 135,
                                4: 180
                            }
                        }
                    }
                },
                '10.5': {
                    slot: {
                        'head': {
                            dist: {
                                0: 0,
                                1: 84,
                                2: 168,
                                3: 252,
                                4: 336
                            }
                        },
                        'weapon': {
                            dist: {
                                0: 0,
                                1: 84,
                                2: 168,
                                3: 252,
                                4: 336
                            }
                        },
                        'major': {
                            dist: {
                                0: 0,
                                1: 76,
                                2: 152,
                                3: 227,
                                4: 303
                            }
                        },
                        'minor': {
                            dist: {
                                0: 0,
                                1: 48,
                                2: 97,
                                3: 146,
                                4: 195
                            }
                        }
                    }
                }
            }
        },
        'critical-power': {
            ql: {
                '10.0': {
                    slot: {
                        'head': {
                            dist: {
                                0: 0,
                                1: 60,
                                2: 119,
                                3: 179,
                                4: 238
                            }
                        },
                        'weapon': {
                            dist: {
                                0: 0,
                                1: 60,
                                2: 119,
                                3: 179,
                                4: 238
                            }
                        },
                        'major': {
                            dist: {
                                0: 0,
                                1: 54,
                                2: 108,
                                3: 161,
                                4: 215
                            }
                        },
                        'minor': {
                            dist: {
                                0: 0,
                                1: 35,
                                2: 69,
                                3: 104,
                                4: 138
                            }
                        }
                    }
                },
                '10.1': {
                    slot: {
                        'head': {
                            dist: {
                                0: 0,
                                1: 64,
                                2: 128,
                                3: 191,
                                4: 255
                            }
                        },
                        'weapon': {
                            dist: {
                                0: 0,
                                1: 64,
                                2: 128,
                                3: 191,
                                4: 255
                            }
                        },
                        'major': {
                            dist: {
                                0: 0,
                                1: 58,
                                2: 115,
                                3: 173,
                                4: 231
                            }
                        },
                        'minor': {
                            dist: {
                                0: 0,
                                1: 37,
                                2: 74,
                                3: 111,
                                4: 148
                            }
                        }
                    }
                },
                '10.2': {
                    slot: {
                        'head': {
                            dist: {
                                0: 0,
                                1: 136 / 68,
                                2: 273 / 205
                            }
                        },
                        'weapon': {
                            dist: {
                                0: 0,
                                1: 136 / 68,
                                2: 273 / 205
                            }
                        },
                        'major': {
                            dist: {
                                0: 0,
                                1: 62,
                                2: 123,
                                3: 185,
                                4: 246
                            }
                        },
                        'minor': {
                            dist: {
                                0: 0,
                                1: 40,
                                2: 79,
                                3: 119,
                                4: 158
                            }
                        }
                    }
                },
                '10.3': {
                    slot: {
                        'head': {
                            dist: {
                                0: 0,
                                1: 73,
                                2: 145,
                                3: 218,
                                4: 291
                            }
                        },
                        'weapon': {
                            dist: {
                                0: 0,
                                1: 73,
                                2: 145,
                                3: 218,
                                4: 291
                            }
                        },
                        'major': {
                            dist: {
                                0: 0,
                                1: 66,
                                2: 128,
                                3: 197,
                                4: 263
                            }
                        },
                        'minor': {
                            dist: {
                                0: 0,
                                1: 42,
                                2: 84,
                                3: 127,
                                4: 169
                            }
                        }
                    }
                },
                '10.4': {
                    slot: {
                        'head': {
                            dist: {
                                0: 0,
                                1: 77,
                                2: 155,
                                3: 232,
                                4: 310
                            }
                        },
                        'weapon': {
                            dist: {
                                0: 0,
                                1: 77,
                                2: 155,
                                3: 232,
                                4: 310
                            }
                        },
                        'major': {
                            dist: {
                                0: 0,
                                1: 70,
                                2: 140,
                                3: 210,
                                4: 280
                            }
                        },
                        'minor': {
                            dist: {
                                0: 0,
                                1: 45,
                                2: 90,
                                3: 135,
                                4: 180
                            }
                        }
                    }
                },
                '10.5': {
                    slot: {
                        'head': {
                            dist: {
                                0: 0,
                                1: 82,
                                2: 164,
                                3: 246,
                                4: 328
                            }
                        },
                        'weapon': {
                            dist: {
                                0: 0,
                                1: 82,
                                2: 164,
                                3: 246,
                                4: 328
                            }
                        },
                        'major': {
                            dist: {
                                0: 0,
                                1: 74,
                                2: 148,
                                3: 222,
                                4: 296
                            }
                        },
                        'minor': {
                            dist: {
                                0: 0,
                                1: 48,
                                2: 95,
                                3: 143,
                                4: 191
                            }
                        }
                    }
                }
            }
        },
        'defense-rating': {
            ql: {
                '10.0': {
                    slot: {
                        'head': {
                            dist: {
                                0: 0,
                                1: 50,
                                2: 101,
                                3: 151,
                                4: 202
                            }
                        },
                        'weapon': {
                            dist: {
                                0: 0,
                                1: 50,
                                2: 101,
                                3: 151,
                                4: 202
                            }
                        },
                        'major': {
                            dist: {
                                0: 0,
                                1: 46,
                                2: 91,
                                3: 137,
                                4: 182
                            }
                        },
                        'minor': {
                            dist: {
                                0: 0,
                                1: 29,
                                2: 59,
                                3: 88,
                                4: 117
                            }
                        }
                    }
                },
                '10.1': {
                    slot: {
                        'head': {
                            dist: {
                                0: 0,
                                1: 56,
                                2: 111,
                                3: 166,
                                4: 221
                            }
                        },
                        'weapon': {
                            dist: {
                                0: 0,
                                1: 56,
                                2: 111,
                                3: 166,
                                4: 221
                            }
                        },
                        'major': {
                            dist: {
                                0: 0,
                                1: 50,
                                2: 100,
                                3: 150,
                                4: 200
                            }
                        },
                        'minor': {
                            dist: {
                                0: 0,
                                1: 32,
                                2: 64,
                                3: 96,
                                4: 142
                            }
                        }
                    }
                },
                '10.2': {
                    slot: {
                        'head': {
                            dist: {
                                0: 0,
                                1: 61,
                                2: 123,
                                3: 184,
                                4: 245
                            }
                        },
                        'weapon': {
                            dist: {
                                0: 0,
                                1: 61,
                                2: 123,
                                3: 184,
                                4: 245
                            }
                        },
                        'major': {
                            dist: {
                                0: 0,
                                1: 55,
                                2: 111,
                                3: 166,
                                4: 221
                            }
                        },
                        'minor': {
                            dist: {
                                0: 0,
                                1: 36,
                                2: 71,
                                3: 107,
                                4: 129
                            }
                        }
                    }
                },
                '10.3': {
                    slot: {
                        'head': {
                            dist: {
                                0: 0,
                                1: 69,
                                2: 138,
                                3: 207,
                                4: 276
                            }
                        },
                        'weapon': {
                            dist: {
                                0: 0,
                                1: 69,
                                2: 138,
                                3: 207,
                                4: 276
                            }
                        },
                        'major': {
                            dist: {
                                0: 0,
                                1: 62,
                                2: 125,
                                3: 187,
                                4: 249
                            }
                        },
                        'minor': {
                            dist: {
                                0: 0,
                                1: 40,
                                2: 80,
                                3: 120,
                                4: 160
                            }
                        }
                    }
                },
                '10.4': {
                    slot: {
                        'head': {
                            dist: {
                                0: 0,
                                1: 80,
                                2: 160,
                                3: 240,
                                4: 319
                            }
                        },
                        'weapon': {
                            dist: {
                                0: 0,
                                1: 80,
                                2: 160,
                                3: 240,
                                4: 319
                            }
                        },
                        'major': {
                            dist: {
                                0: 0,
                                1: 72,
                                2: 144,
                                3: 216,
                                4: 288
                            }
                        },
                        'minor': {
                            dist: {
                                0: 0,
                                1: 46,
                                2: 93,
                                3: 139,
                                4: 185
                            }
                        }
                    }
                },
                '10.5': {
                    slot: {
                        'head': {
                            dist: {
                                0: 0,
                                1: 91,
                                2: 182,
                                3: 272,
                                4: 363
                            }
                        },
                        'weapon': {
                            dist: {
                                0: 0,
                                1: 91,
                                2: 182,
                                3: 272,
                                4: 363
                            }
                        },
                        'major': {
                            dist: {
                                0: 0,
                                1: 82,
                                2: 164,
                                3: 246,
                                4: 328
                            }
                        },
                        'minor': {
                            dist: {
                                0: 0,
                                1: 53,
                                2: 105,
                                3: 158,
                                4: 211
                            }
                        }
                    }
                }
            }
        },
        'block-rating': {
            ql: {
                '10.0': {
                    slot: {
                        'head': {
                            dist: {
                                0: 0,
                                1: 50,
                                2: 101,
                                3: 151,
                                4: 202
                            }
                        },
                        'weapon': {
                            dist: {
                                0: 0,
                                1: 50,
                                2: 101,
                                3: 151,
                                4: 202
                            }
                        },
                        'major': {
                            dist: {
                                0: 0,
                                1: 46,
                                2: 91,
                                3: 137,
                                4: 182
                            }
                        },
                        'minor': {
                            dist: {
                                0: 0,
                                1: 29,
                                2: 59,
                                3: 88,
                                4: 117
                            }
                        }
                    }
                },
                '10.1': {
                    slot: {
                        'head': {
                            dist: {
                                0: 0,
                                1: 56,
                                2: 111,
                                3: 166,
                                4: 221
                            }
                        },
                        'weapon': {
                            dist: {
                                0: 0,
                                1: 56,
                                2: 111,
                                3: 166,
                                4: 221
                            }
                        },
                        'major': {
                            dist: {
                                0: 0,
                                1: 50,
                                2: 100,
                                3: 150,
                                4: 200
                            }
                        },
                        'minor': {
                            dist: {
                                0: 0,
                                1: 32,
                                2: 64,
                                3: 96,
                                4: 142
                            }
                        }
                    }
                },
                '10.2': {
                    slot: {
                        'head': {
                            dist: {
                                0: 0,
                                1: 61,
                                2: 123,
                                3: 184,
                                4: 245
                            }
                        },
                        'weapon': {
                            dist: {
                                0: 0,
                                1: 61,
                                2: 123,
                                3: 184,
                                4: 245
                            }
                        },
                        'major': {
                            dist: {
                                0: 0,
                                1: 55,
                                2: 111,
                                3: 166,
                                4: 221
                            }
                        },
                        'minor': {
                            dist: {
                                0: 0,
                                1: 36,
                                2: 71,
                                3: 107,
                                4: 129
                            }
                        }
                    }
                },
                '10.3': {
                    slot: {
                        'head': {
                            dist: {
                                0: 0,
                                1: 69,
                                2: 138,
                                3: 207,
                                4: 276
                            }
                        },
                        'weapon': {
                            dist: {
                                0: 0,
                                1: 69,
                                2: 138,
                                3: 207,
                                4: 276
                            }
                        },
                        'major': {
                            dist: {
                                0: 0,
                                1: 62,
                                2: 125,
                                3: 187,
                                4: 249
                            }
                        },
                        'minor': {
                            dist: {
                                0: 0,
                                1: 40,
                                2: 80,
                                3: 120,
                                4: 160
                            }
                        }
                    }
                },
                '10.4': {
                    slot: {
                        'head': {
                            dist: {
                                0: 0,
                                1: 80,
                                2: 160,
                                3: 240,
                                4: 319
                            }
                        },
                        'weapon': {
                            dist: {
                                0: 0,
                                1: 80,
                                2: 160,
                                3: 240,
                                4: 319
                            }
                        },
                        'major': {
                            dist: {
                                0: 0,
                                1: 72,
                                2: 144,
                                3: 216,
                                4: 288
                            }
                        },
                        'minor': {
                            dist: {
                                0: 0,
                                1: 46,
                                2: 93,
                                3: 139,
                                4: 185
                            }
                        }
                    }
                },
                '10.5': {
                    slot: {
                        'head': {
                            dist: {
                                0: 0,
                                1: 91,
                                2: 182,
                                3: 272,
                                4: 363
                            }
                        },
                        'weapon': {
                            dist: {
                                0: 0,
                                1: 91,
                                2: 182,
                                3: 272,
                                4: 363
                            }
                        },
                        'major': {
                            dist: {
                                0: 0,
                                1: 82,
                                2: 164,
                                3: 246,
                                4: 328
                            }
                        },
                        'minor': {
                            dist: {
                                0: 0,
                                1: 53,
                                2: 105,
                                3: 158,
                                4: 211
                            }
                        }
                    }
                }
            }
        },
        'evade-rating': {
            ql: {
                '10.0': {
                    slot: {
                        'head': {
                            dist: {
                                0: 0,
                                1: 53,
                                2: 106,
                                3: 159,
                                4: 212
                            }
                        },
                        'weapon': {
                            dist: {
                                0: 0,
                                1: 53,
                                2: 106,
                                3: 159,
                                4: 212
                            }
                        },
                        'major': {
                            dist: {
                                0: 0,
                                1: 48,
                                2: 96,
                                3: 144,
                                4: 192
                            }
                        },
                        'minor': {
                            dist: {
                                0: 0,
                                1: 31,
                                2: 62,
                                3: 93,
                                4: 123
                            }
                        }
                    }
                },
                '10.1': {
                    slot: {
                        'head': {
                            dist: {
                                0: 0,
                                1: 58,
                                2: 115,
                                3: 173,
                                4: 231
                            }
                        },
                        'weapon': {
                            dist: {
                                0: 0,
                                1: 58,
                                2: 115,
                                3: 173,
                                4: 231
                            }
                        },
                        'major': {
                            dist: {
                                0: 0,
                                1: 52,
                                2: 104,
                                3: 156,
                                4: 208
                            }
                        },
                        'minor': {
                            dist: {
                                0: 0,
                                1: 33,
                                2: 67,
                                3: 100,
                                4: 134
                            }
                        }
                    }
                },
                '10.2': {
                    slot: {
                        'head': {
                            dist: {
                                0: 0,
                                1: 63,
                                2: 126,
                                3: 188,
                                4: 251
                            }
                        },
                        'weapon': {
                            dist: {
                                0: 0,
                                1: 63,
                                2: 126,
                                3: 188,
                                4: 251
                            }
                        },
                        'major': {
                            dist: {
                                0: 0,
                                1: 57,
                                2: 113,
                                3: 170,
                                4: 227
                            }
                        },
                        'minor': {
                            dist: {
                                0: 0,
                                1: 36,
                                2: 73,
                                3: 109,
                                4: 146
                            }
                        }
                    }
                },
                '10.3': {
                    slot: {
                        'head': {
                            dist: {
                                0: 0,
                                1: 69,
                                2: 138,
                                3: 207,
                                4: 276
                            }
                        },
                        'weapon': {
                            dist: {
                                0: 0,
                                1: 69,
                                2: 138,
                                3: 207,
                                4: 276
                            }
                        },
                        'major': {
                            dist: {
                                0: 0,
                                1: 62,
                                2: 125,
                                3: 187,
                                4: 249
                            }
                        },
                        'minor': {
                            dist: {
                                0: 0,
                                1: 40,
                                2: 80,
                                3: 120,
                                4: 160
                            }
                        }
                    }
                },
                '10.4': {
                    slot: {
                        'head': {
                            dist: {
                                0: 0,
                                1: 77,
                                2: 153,
                                3: 230,
                                4: 306
                            }
                        },
                        'weapon': {
                            dist: {
                                0: 0,
                                1: 77,
                                2: 153,
                                3: 230,
                                4: 306
                            }
                        },
                        'major': {
                            dist: {
                                0: 0,
                                1: 69,
                                2: 138,
                                3: 208,
                                4: 277
                            }
                        },
                        'minor': {
                            dist: {
                                0: 0,
                                1: 44,
                                2: 89,
                                3: 133,
                                4: 178
                            }
                        }
                    }
                },
                '10.5': {
                    slot: {
                        'head': {
                            dist: {
                                0: 0,
                                1: 84,
                                2: 168,
                                3: 253,
                                4: 337
                            }
                        },
                        'weapon': {
                            dist: {
                                0: 0,
                                1: 84,
                                2: 168,
                                3: 253,
                                4: 337
                            }
                        },
                        'major': {
                            dist: {
                                0: 0,
                                1: 76,
                                2: 152,
                                3: 228,
                                4: 304
                            }
                        },
                        'minor': {
                            dist: {
                                0: 0,
                                1: 49,
                                2: 98,
                                3: 147,
                                4: 196
                            }
                        }
                    }
                }
            }
        },
        'physical-protection': {
            ql: {
                '10.0': {
                    slot: {
                        'head': {
                            dist: {
                                0: 0,
                                1: 55,
                                2: 109,
                                3: 164,
                                4: 219
                            }
                        },
                        'weapon': {
                            dist: {
                                0: 0,
                                1: 55,
                                2: 109,
                                3: 164,
                                4: 219
                            }
                        },
                        'major': {
                            dist: {
                                0: 0,
                                1: 49,
                                2: 99,
                                3: 148,
                                4: 197
                            }
                        },
                        'minor': {
                            dist: {
                                0: 0,
                                1: 32,
                                2: 63,
                                3: 95,
                                4: 127
                            }
                        }
                    }
                },
                '10.1': {
                    slot: {
                        'head': {
                            dist: {
                                0: 0,
                                1: 60,
                                2: 119,
                                3: 179,
                                4: 238
                            }
                        },
                        'weapon': {
                            dist: {
                                0: 0,
                                1: 60,
                                2: 119,
                                3: 179,
                                4: 238
                            }
                        },
                        'major': {
                            dist: {
                                0: 0,
                                1: 54,
                                2: 108,
                                3: 162,
                                4: 215
                            }
                        },
                        'minor': {
                            dist: {
                                0: 0,
                                1: 35,
                                2: 69,
                                3: 104,
                                4: 138
                            }
                        }
                    }
                },
                '10.2': {
                    slot: {
                        'head': {
                            dist: {
                                0: 0,
                                1: 65,
                                2: 130,
                                3: 195,
                                4: 260
                            }
                        },
                        'weapon': {
                            dist: {
                                0: 0,
                                1: 65,
                                2: 130,
                                3: 195,
                                4: 260
                            }
                        },
                        'major': {
                            dist: {
                                0: 0,
                                1: 59,
                                2: 117,
                                3: 176,
                                4: 235
                            }
                        },
                        'minor': {
                            dist: {
                                0: 0,
                                1: 38,
                                2: 76,
                                3: 113,
                                4: 151
                            }
                        }
                    }
                },
                '10.3': {
                    slot: {
                        'head': {
                            dist: {
                                0: 0,
                                1: 71,
                                2: 142,
                                3: 213,
                                4: 284
                            }
                        },
                        'weapon': {
                            dist: {
                                0: 0,
                                1: 71,
                                2: 142,
                                3: 213,
                                4: 284
                            }
                        },
                        'major': {
                            dist: {
                                0: 0,
                                1: 64,
                                2: 131,
                                3: 192,
                                4: 256
                            }
                        },
                        'minor': {
                            dist: {
                                0: 0,
                                1: 41,
                                2: 82,
                                3: 124,
                                4: 165
                            }
                        }
                    }
                },
                '10.4': {
                    slot: {
                        'head': {
                            dist: {
                                0: 0,
                                1: 78,
                                2: 160,
                                3: 233,
                                4: 310
                            }
                        },
                        'weapon': {
                            dist: {
                                0: 0,
                                1: 78,
                                2: 160,
                                3: 233,
                                4: 310
                            }
                        },
                        'major': {
                            dist: {
                                0: 0,
                                1: 70,
                                2: 140,
                                3: 210,
                                4: 280
                            }
                        },
                        'minor': {
                            dist: {
                                0: 0,
                                1: 45,
                                2: 90,
                                3: 135,
                                4: 180
                            }
                        }
                    }
                },
                '10.5': {
                    slot: {
                        'head': {
                            dist: {
                                0: 0,
                                1: 84,
                                2: 168,
                                3: 252,
                                4: 336
                            }
                        },
                        'weapon': {
                            dist: {
                                0: 0,
                                1: 84,
                                2: 168,
                                3: 252,
                                4: 336
                            }
                        },
                        'major': {
                            dist: {
                                0: 0,
                                1: 76,
                                2: 152,
                                3: 228,
                                4: 304
                            }
                        },
                        'minor': {
                            dist: {
                                0: 0,
                                1: 49,
                                2: 98,
                                3: 146,
                                4: 195
                            }
                        }
                    }
                }
            }
        },
        'magical-protection': {
            ql: {
                '10.0': {
                    slot: {
                        'head': {
                            dist: {
                                0: 0,
                                1: 55,
                                2: 109,
                                3: 164,
                                4: 219
                            }
                        },
                        'weapon': {
                            dist: {
                                0: 0,
                                1: 55,
                                2: 109,
                                3: 164,
                                4: 219
                            }
                        },
                        'major': {
                            dist: {
                                0: 0,
                                1: 49,
                                2: 99,
                                3: 148,
                                4: 197
                            }
                        },
                        'minor': {
                            dist: {
                                0: 0,
                                1: 32,
                                2: 63,
                                3: 95,
                                4: 127
                            }
                        }
                    }
                },
                '10.1': {
                    slot: {
                        'head': {
                            dist: {
                                0: 0,
                                1: 60,
                                2: 119,
                                3: 179,
                                4: 238
                            }
                        },
                        'weapon': {
                            dist: {
                                0: 0,
                                1: 60,
                                2: 119,
                                3: 179,
                                4: 238
                            }
                        },
                        'major': {
                            dist: {
                                0: 0,
                                1: 54,
                                2: 108,
                                3: 162,
                                4: 215
                            }
                        },
                        'minor': {
                            dist: {
                                0: 0,
                                1: 35,
                                2: 69,
                                3: 104,
                                4: 138
                            }
                        }
                    }
                },
                '10.2': {
                    slot: {
                        'head': {
                            dist: {
                                0: 0,
                                1: 65,
                                2: 130,
                                3: 195,
                                4: 260
                            }
                        },
                        'weapon': {
                            dist: {
                                0: 0,
                                1: 65,
                                2: 130,
                                3: 195,
                                4: 260
                            }
                        },
                        'major': {
                            dist: {
                                0: 0,
                                1: 59,
                                2: 117,
                                3: 176,
                                4: 235
                            }
                        },
                        'minor': {
                            dist: {
                                0: 0,
                                1: 38,
                                2: 76,
                                3: 113,
                                4: 151
                            }
                        }
                    }
                },
                '10.3': {
                    slot: {
                        'head': {
                            dist: {
                                0: 0,
                                1: 71,
                                2: 142,
                                3: 213,
                                4: 284
                            }
                        },
                        'weapon': {
                            dist: {
                                0: 0,
                                1: 71,
                                2: 142,
                                3: 213,
                                4: 284
                            }
                        },
                        'major': {
                            dist: {
                                0: 0,
                                1: 64,
                                2: 131,
                                3: 192,
                                4: 256
                            }
                        },
                        'minor': {
                            dist: {
                                0: 0,
                                1: 41,
                                2: 82,
                                3: 124,
                                4: 165
                            }
                        }
                    }
                },
                '10.4': {
                    slot: {
                        'head': {
                            dist: {
                                0: 0,
                                1: 78,
                                2: 160,
                                3: 233,
                                4: 310
                            }
                        },
                        'weapon': {
                            dist: {
                                0: 0,
                                1: 78,
                                2: 160,
                                3: 233,
                                4: 310
                            }
                        },
                        'major': {
                            dist: {
                                0: 0,
                                1: 70,
                                2: 140,
                                3: 210,
                                4: 280
                            }
                        },
                        'minor': {
                            dist: {
                                0: 0,
                                1: 45,
                                2: 90,
                                3: 135,
                                4: 180
                            }
                        }
                    }
                },
                '10.5': {
                    slot: {
                        'head': {
                            dist: {
                                0: 0,
                                1: 84,
                                2: 168,
                                3: 252,
                                4: 336
                            }
                        },
                        'weapon': {
                            dist: {
                                0: 0,
                                1: 84,
                                2: 168,
                                3: 252,
                                4: 336
                            }
                        },
                        'major': {
                            dist: {
                                0: 0,
                                1: 76,
                                2: 152,
                                3: 228,
                                4: 304
                            }
                        },
                        'minor': {
                            dist: {
                                0: 0,
                                1: 49,
                                2: 98,
                                3: 146,
                                4: 195
                            }
                        }
                    }
                }
            }
        }
    }
}