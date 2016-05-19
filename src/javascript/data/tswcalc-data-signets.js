var tswcalc = tswcalc || {};
tswcalc.data = tswcalc.data || {};

tswcalc.data.signet_data = {
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
                epic: 24,
                elite: 16,
                normal: 8
            },
            id: 52,
            name: 'Abuse',
            icon: 'weapon_dps'
        }, {
            description: 'When you hit a weakened target you have a 15% chance to gain %d% damage increase for 6 seconds.',
            cooldown: '9',
            quality: {
                epic: 15,
                elite: 10,
                normal: 5
            },
            id: 1,
            name: 'Aggression',
            icon: 'weapon_util'
        }, {
            description: 'When you penetrate a target you make that target take %d% more damage from further penetrating hits for 7 seconds.',
            cooldown: '7',
            quality: {
                epic: 24,
                elite: 16,
                normal: 8
            },
            id: 2,
            name: 'Breaching',
            icon: 'weapon_dps'
        }, {
            description: 'When you hit a target you have a 10% chance to make your next %0 hits never glance and deal %1 more damage.',
            cooldown: '12',
            quality: [{
                    epic: 12,
                    elite: 8,
                    normal: 4
                }, {
                    epic: 3,
                    elite: 2,
                    normal: 1
                }
            ],
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
                epic: 15,
                elite: 10,
                normal: 5
            },
            id: 5,
            name: 'Fury',
            icon: 'weapon_dps'
        }, {
            description: 'When you critically hit a target, you gain a critical damage increase of %d% for 15 seconds.',
            cooldown: '15',
            quality: {
                epic: 24,
                elite: 16,
                normal: 8
            },
            id: 6,
            name: 'Laceration',
            icon: 'weapon_dps'
        }, {
            description: 'When you hit an impaired target you gain increased damage of %d% per stack for 5 seconds, up to 3 stacks.',
            cooldown: '0',
            quality: {
                epic: 6,
                elite: 4,
                normal: 2
            },
            id: 7,
            name: 'Obedience',
            icon: 'weapon_util'
        }, {
            description: 'When you hit an afflicted target, you have a 20% chance to hit them for an additional %d magical damage.',
            cooldown: '0',
            quality: {
                epic: 224,
                elite: 149,
                normal: 74
            },
            id: 8,
            name: 'Opportunism',
            icon: 'weapon_util'
        }, {
            description: 'When you hit a target you have a 10% chance to hit them for an additional %d magical damage.',
            cooldown: '0',
            quality: {
                epic: 427,
                elite: 284,
                normal: 80
            },
            id: 9,
            name: 'Sadism',
            icon: 'weapon_dps'
        }, {
            description: 'When you heal a target, there is a 20% chance they will gain a barrier that absorbs %d points of damage and lasts 10 seconds.',
            cooldown: '0',
            quality: {
                epic: 142,
                elite: 94,
                normal: 47
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
            description: 'When you hit a weakened target, you have a 5% chance to be healed for %d every 2 seconds for 8 seconds.',
            cooldown: '0',
            quality: {
                epic: 198,
                elite: 132,
                normal: 66
            },
            id: 12,
            name: 'Cruel Delight',
            icon: 'weapon_util'
        }, {
            description: 'When you hinder a target you are healed for %d.',
            cooldown: '0',
            quality: {
                epic: 141,
                elite: 94,
                normal: 47
            },
            id: 13,
            name: 'Extrication',
            icon: 'weapon_util'
        }, {
            description: 'When you impair a target, you are healed for %d every 2 seconds for 6 seconds.',
            cooldown: '0',
            quality: {
                epic: 167,
                elite: 111,
                normal: 55
            },
            id: 14,
            name: 'Interdiction',
            icon: 'weapon_util'
        }, {
            description: 'When you heal a target below 50% health they are healed for %d every 2 seconds for 8 seconds.',
            cooldown: '8',
            quality: {
                epic: 94,
                elite: 63,
                normal: 32
            },
            id: 15,
            name: 'Temperance',
            icon: 'weapon_heal'
        }, {
		id:106, 
		name: 'Blessed Steps', 
		description: 'Whenever you apply a barrier effect to an ally, that ally gains a beneficial effect which increases Evade Chance by %d% for 10 seconds. This effect is removed when the barrier effect is removed from that ally.', 
		cooldown: '0', 
		quality: { 
			epic: 12, 
			elite: 8, 
			normal: 4
			}, 
		icon: 'weapon_util', 
		shambala: true
	}, { 
		id:107, 
		name: 'Divine Inspiration', 
		description: 'Whenever you apply a barrier effect to an ally, that ally gains a beneficial effect which increases damage dealt by %d% for 10 seconds. This effect is removed when the barrier effect is removed from that ally.', 
		cooldown: '0', 
		quality: { 
		epic: 12, 
		elite: 8, 
		normal: 4}, 
		icon: 'weapon_dps', 
		shambala: true
	}, { 
		id:108, 
		name: 'Death\'s Note', 
		description: 'When you hit a target apply a detrimental effect for 5 seconds which causes them to take an additional %d physical damage every time you or anyone else with this signet hits them. This effect can only be applied once every 20 seconds.', 
		cooldown: '0', 
		quality: { 
			epic: 450, 
			elite: 300, 
			normal: 150
			}, 
		icon: 'weapon_dps', 
		shambala: true
	}, { 
		id:109, 
		name: 'Healer\'s Zeal', 
		description: 'Whenever you directly heal an ally who is below 50% health, you have a %d% chance to gain a resource for both weapons.', 
		cooldown: '0', 
		quality: { 
			epic: 30, 
			elite: 20, 
			normal: 10
			}, 
		icon: 'weapon_heal', 
		shambala: true
	}, { 
		id:110, 
		name: 'Karma', 
		description: 'Whenever you directly heal an ally, you have a 25% chance to heal yourself for %d% of the heal amount.', 
		cooldown: '0', 
		quality: { 
			epic: 45, 
			elite: 30, 
			normal: 15
			}, 
		icon: 'weapon_heal', 
		shambala: true
	}, { 
		id:111, 
		name: 'Insurance', 
		description: 'Whenever you hit or heal, you gain a beneficial effect which lasts 10 seconds. This effect can only be gained once every 15 seconds. If this effect is purged, you gain a beneficial effect which increases your Evade Chance and the chance for attacks to glance you by %d% for 10 seconds. This effect cannot be purged.', 
		cooldown: '0', 
		quality: { 
			epic: 30, 
			elite: 20, 
			normal: 10
			}, 
		icon: 'weapon_dps', 
		shambala: true
	}
    ],
    'head': [{
            description: 'Your Affliction effects deal %d% more damage.',
            cooldown: '0',
            quality: {
                epic: 21,
                elite: 14,
                normal: 7
            },
            id: 16,
            name: 'Corruption',
            icon: 'head_util'
        }, {
            description: 'When you are glanced you gain a %d Defense Rating for 8 seconds.',
            cooldown: '8',
            quality: {
                epic: 450,
                elite: 300,
                normal: 150
            },
            id: 17,
            name: 'Discipline',
            icon: 'head_tank'
        }, {
            description: 'When you block you gain %d% block chance for 4 seconds.',
            cooldown: '10',
            quality: {
                epic: 45,
                elite: 30,
                normal: 15
            },
            id: 18,
            name: 'Order',
            icon: 'head_tank'
        }, {
            description: 'When you are hit you gain a stacking buff that increases healing received by %d% per stack for 3 seconds, up to 10 stacks.',
            cooldown: '0',
            quality: {
                epic: 0.9,
                elite: 0.6,
                normal: 0.3
            },
            id: 19,
            name: 'Reinforcement',
            icon: 'head_tank'
        }, {
            description: 'When you block, evade or are glanced, you gain %d physical and magical protection per stack for 4 seconds, up to 3 stacks.',
            cooldown: '0',
            quality: {
                epic: 150,
                elite: 100,
                normal: 50
            },
            id: 20,
            name: 'Resilience',
            icon: 'head_tank'
        }, {
            id: 53,
            name: 'Kingdom',
            description: 'Whenever you hit you gain a single Kingdom counter which increases your Hit Rating by %d for 4 seconds per stack. This effect can stack up to 20 times. An additional stack is gained if an attack penetrates or critically hits.',
            cooldown: '0',
            quality: {
                epic: 6
            },
            icon: 'head_dps',
            requires: 'issue-6'
        }, {
            id: 54,
            name: 'Thinis',
            description: 'Whenever you use a healing ability which builds a resource, you have a %d% chance to gain a resource for your secondary weapon.',
            cooldown: '0',
            quality: {
                epic: 20
            },
            icon: 'head_heal',
            requires: 'issue-6'
        }, {
            id: 55,
            name: 'Trenches',
            description: 'Whenever you are glanced, you evade, or block an attack, you gain a Trench counter. Once this counter reaches %0 you are healed for %1% of your maximum health.',
            cooldown: '8',
            quality: [{
                    epic: 6
                }, {
                    epic: 3
                }
            ],
            icon: 'head_tank',
            requires: 'issue-6'
		}, {
			id:100, 
			name: 'Houdini\'s Guile', 
			description: 'Whenever you are Impaired or Hindered, the currently running recharge timers on your crowd control breaking abilities are reduced by %d seconds.', 
			cooldown: '0', 
			quality: { 
				epic: 9, 
				elite: 6, 
				normal: 3
			}, 
		icon: 'head_tank', 
		shambala: true
	}, {
		id:101, 
		name: 'Perpetual Motion', 
		description: 'While you are moving, you gain a beneficial effect which increases your damage by %d%. Standing still removes this effect. If this effect is removed it cannot be regained for 4 seconds.', 
		cooldown: '0', 
		quality: { 
			epic: 12, 
			elite: 8, 
			normal: 4
			}, 
		icon: 'head_dps', 
		shambala: true
	}, { 
		id:102, 
		name: 'Riposte', 
		description: 'When you block, evade or are glanced, you gain a beneficial effect which increases your Critical Chance and Penetration Chance by %d% for 2 seconds.', 
		cooldown: '0', 
		quality: { 
			epic: 18, 
			elite: 12, 
			normal: 9
			}, 
		icon: 'head_tank', 
		shambala: true
	}, { 
		id:103, 
		name: 'Soul Eating', 
		description: 'When you score the killing blow on an enemy player, you regain %d% of your health.', 
		cooldown: '0',
		quality: { 
			epic: 60, 
			elite: 40, 
			normal: 20
		}, 
		icon: 'head_dps', 
		shambala: true
	}, { 
		id:104, 
		name: 'the Time Thief', 
		description: 'When you score the killing blow on an enemy player, the duration of your currently running recharge timers is reduced by %d%.', 
		cooldown: '0', 
		quality: { 
			epic: 20, 
			elite: 40, 
			normal: 60
			},
		icon: 'head_dps', 
		shambala: true
	}, { 
		id:105, 
		name: 'Autonomy', 
		description: 'Whenever a Hinder or Impair effect ends, gain immunity to Hinder and Impair effects for %d seconds.', 
		cooldown: '0', 
		quality: { 
			epic: 2.25, 
			elite: 1.5, 
			normal: 0.75
			}, 
		icon: 'head_util', 
		shambala: true
        }
    ],
    'minor': [{
            description: 'Your Strike attacks do an additional %d% damage.',
            cooldown: '0',
            quality: {
                epic: 4.5,
                elite: 3,
                normal: 1.5
            },
            id: 24,
            name: 'Assassination',
            icon: 'minor_dps'
        }, {
            description: 'Your Blast attacks do an additional %d% damage.',
            cooldown: '0',
            quality: {
                epic: 4.5,
                elite: 3,
                normal: 1.5
            },
            id: 25,
            name: 'Barrage',
            icon: 'minor_dps'
        }, {
            description: 'Your Focus attacks do an additional %d% damage.',
            cooldown: '0',
            quality: {
                epic: 4.5,
                elite: 3,
                normal: 1.5
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
                epic: 4.5,
                elite: 3,
                normal: 1.5
            },
            id: 31,
            name: 'Rage',
            icon: 'minor_dps'
        }, {
            description: 'Your Chain attacks do an additional %d% damage.',
            cooldown: '0',
            quality: {
                epic: 4.5,
                elite: 3,
                normal: 1.5
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
                epic: 4.5,
                elite: 3,
                normal: 1.5
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
                }
            ],
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
            description: 'When you block, evade or are glanced you generate a %s amount of hate on your offensive target.',
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
        }, {
		id:121, 
			name: 'Backbite', 
			description: 'Whenever you hit a target from behind who is less than 5 metres away from you, you deal an additional %d physical damage. This additional damage cannot be blocked and it cannot glance.', 
			cooldown: '0', 
			quality: { 
				epic: 375, 
				elite: 250, 
				normal: 125
				},  
			icon: 'minor_dps', 
			shambala: true
			}, { 
			id:122, 
			name: 'Displacement', 
			description: 'Whenever you use your Active Dodge, your Evade Chance is increased by %d% for 1.5 seconds.', 
			cooldown: '0', 
			quality: { 
				epic: 60, 
				elite: 40, 
				normal: 20
				},  
			icon: 'minor_tank', 
			shambala: true
		}, { 
			id:123, 
			name: 'Defiance', 
			description: 'Whenever you receive damage greater than 10% of your maximum health in a single hit, you gain a barrier which absorbs 100% of incoming damage. The barrier\'s strength is equal to %d% of your maximum health. This effect cannot occur more than once every 20 seconds.', 
			cooldown: '0', 
			quality: { 
				epic: 15, 
				elite: 10, 
				normal: 5
				},  
			icon: 'minor_tank', 
			shambala: true
		}, { 
			id:124, 
			name: 'Deflection', 
			description: 'Whenever you are hit by a target who is more than 12 metres away from you, you gain a beneficial effect which reduces the damage you take by %d% for 3 seconds.', 
			cooldown: '0', 
			quality: { 
				epic: 9, 
				elite: 6, 
				normal: 3
				},  
			icon: 'minor_tank', 
			shambala: true
		}, { 
			id:125, 
			name: 'Desperation', 
			description: 'Whenever you directly heal an ally whose health is below 50%, you heal them for an additional %s. The amount healed is increased the closer your ally is to death. This effect cannot occur more than once every 20 seconds.', 
			cooldown: '0', 
			quality: { 
				epic: '600 - 2400', 
				elite: '400 - 1600', 
				normal: '200 - 800'
				},  
			icon: 'minor_heal', 
			shambala: true
		}, {
			id:126, 
			name: 'Recuperation', 
			description: 'Whenever you apply a heal over time effect to an ally, you have a %0% chance to apply a beneficial effect to that ally which lasts for 4 seconds. When this effect expires, that ally regains health equal to %2% of the damage they received while the effect was active. This effect cannot be applied more than once every 15 seconds.', 
			cooldown: '0', 
			quality: [{ 
				epic: 100, 
				elite: 66, 
				normal: 33
				}, {
					epic: 22.5, 
					elite: 15, 
					normal: 7.5
				}],  
			icon: 'minor_heal', 
			shambala: true
		}, { 
			id:127, 
			name: 'the Physician', 
			description: 'Whenever you directly heal an ally who is within 5 metres, you heal them for an additional %d.', 
			cooldown: '0', 
			quality: { 
				epic: 150, 
				elite: 100, 
				normal: 50
				},  
			icon: 'minor_heal', 
			shambala: true
		}, { 
			id:128, 
			name: 'the Protected', 
			description: 'Whenever you apply a barrier effect to an ally who already has a barrier, you heal them for %d.', 
			cooldown: '0', 
			quality: { 
				epic: 150, 
				elite: 100, 
				normal: 50
				},  
			icon: 'minor_heal', 
			shambala: true
		}, { 
			id:129, 
			name: 'Unceasing', 
			description: 'Whenever an attack penetrates or critically hits you for more than 700 damage, you are instantly healed for %d% of that damage.', 
			cooldown: '0', 
				quality: { 
				epic: 15, 
				elite: 10, 
				normal: 5
			},  
			icon: 'minor_tank', 
			shambala: true
		}
    ],
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
        },{
			id:112, 
			name: 'Coup De Gr\u00E2ce', 
			description: 'Whenever you hit a target who is below 35% health, you have a 33% chance to deal an additional %s physical damage to that target. Damage dealt increases the closer the target gets to death.', 
			cooldown: '0', 
			quality: { 
				epic: '450 - 900', 
				elite: '300 - 600', 
				normal: '150 - 300'
				}, 
			icon: 'major_dps', 
			shambala: true
		}, { 
			id:113, 
			name: 'Agony Shared', 
			description: 'Whenever you receive 300 or more damage in a single hit, you deal %d physical damage to enemies near you.', 
			cooldown: '0', 
				quality: { 
				epic: 300, 
				elite: 200, 
				normal: 100
				},  
			icon: 'major_tank', 
			shambala: true
		}, { 
			id:114, 
			name: 'Nergal\'s Ire', 
			description: 'Whenever you are hit, you have a %d% chance to apply one stack of Corrupt, Debilitated, or Exposed to your attacker. If the attack was blocked, evaded, or if it glanced you, there is an additional %d% chance to apply one stack of Corrupt, Debilitated, or Exposed to your attacker.', 
			cooldown: '0', 
			quality: { 
				epic: 15, 
				elite: 10, 
				normal: 5
				}, 
			icon: 'major_tank', 
			shambala: true
			}, { /*!!*/
			id:115, name: 'Protector\'s Wrath', 
			description: 'Whenever you heal an ally, you have a %d% chance to also deal %d damage to enemies within 5 metres of that ally. The damage dealt increases with your Heal Rating.', 
			cooldown: '0', 
			quality: { 
				epic: 21, 
				elite: 14, 
				normal: 7
				},  
			icon: 'major_heal', 
			shambala: true
		}, { 
			id:116, name: 'Hermes\' Feet', 
			description: 'Whenever you activate a movement ability, your movement speed is increased by %d% for 5 seconds.', 
			cooldown: '0', 
			quality: { 
				epic: 15, 
				elite: 10, 
				normal: 5
				},  
			icon: 'major_dps', 
			shambala: true
		}, { 
			id:117, 
			name: 'Renewed Vigil', 
			description: 'Whenever your barrier effects expire for any reason, you gain a beneficial effect which increases the strength of the next barrier you apply by %d%.', 
			cooldown: '0', 
			quality: { 
				epic: 15, 
				elite: 10, 
				normal: 5
				},  
			icon: 'major_heal', 
			shambala: true
		}, { /*!!*/
			id:118, 
			name: 'Martyr\'s Miracle', 
			description: 'Whenever you die, you create a healing area near where you died which lasts 10 seconds. Allies standing in the area are healed for %d every second. The amount healed increases with your heal rating.', 
			cooldown: '0', 
			quality: { 
				epic: 96, 
				elite: 64, 
				normal: 32
				},  
			icon: 'major_heal', 
			shambala: true
		}, { 
			id:119, 
			name: 'Persistent Malice', 
			description: 'Reduces the chance of your attacks being evaded by %d%.', 
			cooldown: '0', 
			quality: { 
				epic: 9, 
				elite: 6, 
				normal: 3
				}, 
			icon: 'major_dps', 
			shambala: true
		}, { 
			id:120, 
			name: 'the Death Curse', 
			description: 'Whenever your health drops below 10% you are unable to activate abilities and unable to be defeated for 3 seconds. When this effect expires, you are defeated and you deal %d physical damage to enemies near you.', 
			cooldown: '0', 
			quality: { 
				epic: 3000, 
				elite: 2000, 
				normal: 1000
				},  
			icon: 'major_dps', 
			shambala: true
		}
    ],
    'neck': [{
            id: 56,
            name: 'Chernobog',
            description: 'Your attack rating is increased by %d.',
            cooldown: '0',
            quality: {
                epic: 117
            },
            stat: 'attack-rating',
            icon: 'major_dps',
            requires: 'issue-7'
        }, {
            id: 57,
            name: 'Veles',
            description: 'Your health is increased by %d.',
            cooldown: '0',
            quality: {
                epic: 410
            },
            stat: 'hitpoints',
            icon: 'major_tank',
            requires: 'issue-7'
        }, {
            id: 58,
            name: 'Belobog',
            description: 'Your Heal rating is increased by %d.',
            cooldown: '0',
            quality: {
                epic: 117
            },
            stat: 'heal-rating',
            icon: 'major_heal',
            requires: 'issue-7'
        }
    ],
    'waist': [{
            id: 59,
            name: 'Venice',
            description: 'Increases damage dealt by %d%.',
            cooldown: '0',
            quality: {
                epic: 1.5
            },
            icon: 'minor_dps',
            requires: 'issue-8'
        }, {
            id: 60,
            name: 'Undying Roar',
            description: 'Increases evade chance by %d%.',
            cooldown: '0',
            quality: {
                epic: 1.5
            },
            icon: 'minor_tank',
            requires: 'issue-8'
        }, {
            id: 61,
            name: 'Saint Mark',
            description: 'Increases the effectiveness of your barrier, leech and healing abilities by %d%.',
            cooldown: '0',
            quality: {
                epic: 1.5
            },
            icon: 'minor_heal',
            requires: 'issue-8'
        }
    ],
    'ring': [{
            id: 62,
            name: 'Howling Oni',
            description: 'Your attack rating is increased by %d.',
            cooldown: '0',
            quality: {
                epic: 117
            },
            stat: 'attack-rating',
            icon: 'major_dps',
            requires: 'issue-9'
        }, {
            id: 63,
            name: 'Laughing Shisa',
            description: 'Your health is increased by %d.',
            cooldown: '0',
            quality: {
                epic: 410
            },
            stat: 'hitpoints',
            icon: 'major_tank',
            requires: 'issue-9'
        }, {
            id: 64,
            name: 'Singing Tengu',
            description: 'Your Heal rating is increased by %d.',
            cooldown: '0',
            quality: {
                epic: 117
            },
            stat: 'heal-rating',
            icon: 'major_heal',
            requires: 'issue-9'
        }
    ],
    'luck': [{
            id: 193,
            name: 'Set',
            description: 'Increases damage dealt by %d%.',
            cooldown: '0',
            quality: {
                epic: 1.5
            },
            icon: 'minor_dps',
            requires: 'issue-14'
        }, {
            id: 194,
            name: 'Horus',
            description: 'Increases the chance that attacks against you will glance by %d%.',
            cooldown: '0',
            quality: {
                epic: 1.5
            },
            icon: 'minor_tank',
            requires: 'issue-14'
        }, {
            id: 195,
            name: 'Sekhmet',
            description: 'Increases the effectiveness of your barrier, leech and healing abilities by %d%.',
            cooldown: '0',
            quality: {
                epic: 1.5
            },
            icon: 'minor_heal',
            requires: 'issue-14'
        }
    ],
    'occult': [{
            id: 65,
            name: 'Nure-onna\'s Coils',
            description: 'Increases damage dealt by %d%.',
            cooldown: '0',
            quality: {
                epic: 1.5
            },
            icon: 'minor_dps',
            requires: 'issue-10'
        }, {
            id: 66,
            name: 'Sarutahiko\'s Mettle',
            description: 'Increases block chance by %d%.',
            cooldown: '0',
            quality: {
                epic: 1.5
            },
            icon: 'minor_tank',
            requires: 'issue-10'
        }, {
            id: 67,
            name: 'Yakushi\'s Balm',
            description: 'Increases the effectiveness of your barrier, leech and healing abilities by %d%.',
            cooldown: '0',
            quality: {
                epic: 1.5
            },
            icon: 'minor_heal',
            requires: 'issue-10'
        }
    ],
    'wrist': [{
            id: 68,
            name: 'Repulsor Technology',
            description: 'Your attack rating is increased by %d.',
            cooldown: '0',
            quality: {
                epic: 117
            },
            stat: 'attack-rating',
            icon: 'major_dps',
            requires: 'issue-11'
        }, {
            id: 69,
            name: 'Personal Shielding',
            description: 'Your health is increased by %d.',
            cooldown: '0',
            quality: {
                epic: 410
            },
            stat: 'hitpoints',
            icon: 'major_tank',
            requires: 'issue-11'
        }, {
            id: 70,
            name: 'Biotechnology',
            description: 'Your Heal rating is increased by %d.',
            cooldown: '0',
            quality: {
                epic: 117
            },
            stat: 'heal-rating',
            icon: 'major_heal',
            requires: 'issue-11'
        }
		]
    //last item-id in this file: 195
    //last item-id in tswcalc-data-items.js: 192
    //update these item-ids when adding new items/signets either place to avoid conflicts
};