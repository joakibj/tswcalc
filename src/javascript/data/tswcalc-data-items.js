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
        slots: ['head', 
		'major', 
		'minor']
    },
    {
        id: '1',
        name: 'Tank',
        role: 'tank',
        slots: ['head', 
		'major', 
		'minor']
    },
    {
        id: '2',
        name: 'Healer',
        role: 'healer',
        slots: ['head', 
		'major', 
		'minor']
    },
    
    //NY Items 80-88
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
        ql: ['10.4', 
		'10.9'],
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
        ql: ['10.4', 
		'10.9'],
        slots: ['waist'],
        role: 'tank',
        signet: {
            name: 'NY Buckle',
            description: 'Every 6 seconds, you gain a single stack of a beneficial effect that increases your Physical and Magical Protection by 3% per stack. This effect is removed whenever you are penetrated or the number of stacks exceeds 10.',
            quality: 'epic',
            bonus: {
                stat: ['physical-protection', 
		'magical-protection'],
                multiply: 1.30
            },
            icon: 'ny_buckle'
        }
    },
    {
        id: '88',
        name: 'Broadway Charm',
        ql: ['10.4', 
		'10.9'],
        slots: ['occult'],
        role: 'healer',
        signet: {
            name: 'Broadway Charm',
            description: 'Whenever you heal a target that is below 66% of their health, there is a 33% chance that you will also give them a beneficial effect that increases their Physical and Magical Protection by 400 for 10 seconds. 6 seconds cooldown.',
            quality: 'epic',
            icon: 'broadway_charm'
        }
    },
    
    //Woodcutters item-id 90-93
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
    },
		//MFB id 130 - 192
	{ 
		id:'153', 
		name: 'Anansi Chance Bender', 
		ql: '10.8', 
		role:'weapon', 
		slots:['weapon'], 
		glyph: { 
			ql:'10.5', 
			primary:{ 
				stat: 'hit-raiting', 
				dist: 4 
				}, 
				secondary: {
					stat: 'none', 
					dist: 0
					} 
				}, 
		signet: { 
			name: 'Anansi Chance Bender', 
			description: 'When you hit a target you have a 10% chance to gain a damage increase of 16% for 5 seconds. 11 second cooldown.', 
			quality: 'elite', 
			icon: 'weapon_dps' 
			}
	},
	{ 
		id:'163', 
		name: 'Anansi Chance Bender', 
		ql: '10.9', 
		role:'weapon', 
		slots:['weapon'], 
		glyph: { 
			ql:'10.5', 
			primary:{ 
				stat: 'hit-raiting', 
				dist: 4 
				}, 
			secondary: {
				stat: 'none' , 
				dist: 0}
				}, 
		signet: { 
			name: 'Anansi Chance Bender', 
			description: 'When you hit a target you have a 10% chance to gain a damage increase of 24% for 5 seconds. 11 second cooldown.', 
			quality: 'epic', 
			icon: 'weapon_dps' 
			} 
	},
	{ 
	id:'150', 
		name: 'Anansi Chance-Enhancement Coins', 
		ql: '10.8', 
		role:'tank', 
		slots:['luck'], 
		glyph: { 
		ql:'10.5', 
		primary:{ 
			stat: 'block-raiting', 
			dist: 4 }, 
		secondary: { 
			stat: 'none' , 
			dist: 0
			}
		}, 
		signet: { 
		name: 'Anansi Chance-Enhancement Coins', 
			description: 'When you block, evade or are glanced you gain 4% damage reduction for 5 seconds. 6 second cooldown', 
		quality: 'elite', 
		icon: 'minor_tank' 
			}
	},
	{ 
		id:'186', 
		name: 'Anansi Chance-Enhancement Coins', 
		ql: '10.9', 
		role:'tank', 
		slots:['luck'], 
		glyph: { 
			ql:'10.5', 
			primary:{ 
				stat: 'block-raiting', 
				dist: 4 
				}, 
			secondary: {
				stat: 'none' , 
				dist: 0
				} 
			}, 
		signet: { 
			name: 'Anansi Chance-Enhancement Coins', 
			description: 'When you block, evade, or are glanced, you gain 6% damage reduction for 5 seconds. 6 second cooldown.', 
			quality: 'epic', 
			icon: 'minor_tank' 
			} 
	},
	{ 
	id:'149', 
		name: 'Anansi Chaos Generators', 
		ql: '10.8', 
		role:'dps', 
		slots:['luck'], 
		glyph: { 
			ql:'10.5', 
			primary:{ 
			stat: 'penetration-rating', 
			dist: 4 
			}, 
		secondary: {
			stat: 'none' , 
			dist: 0}
			}, 
		signet: { 
		name: 'Anansi Chaos Generators', 
			description: 'Increases damage dealt by 1%.', 
		quality: 'elite', 
		icon: 'minor_dps' }
	},
	{ 
	id:'184', 
		name: 'Anansi Chaos Generators', 
		ql: '10.9', 
		role:'dps', 
		slots:['luck'], 
		glyph: { 
		ql:'11.0', 
		primary:{ 
			stat: 'penetration-rating', 
			dist: 4 
			}, 
		secondary: { 
			stat: 'none' , 
			dist: 0
			}
		}, 
		signet: { 
			name: 'Anansi Chaos Generators', 
			description: 'Increases damage dealt by 1.5%.', 
			quality: 'epic', 
			icon: 'minor_dps' 
			}
	},
	{ 
	id:'130', 
		name: 'Anansi Smart-Tarot', 
		ql: '10.8', 
		role:'healer', 
		slots:['luck'], 
		glyph: { 
		ql:'10.5', 
		primary:{ 
			stat: 'Crititical Raiting', 
			dist: 4 }, 
		secondary: { 
			stat: 'none' , 
			dist: 0
			}
		}, 
		signet: { 
			name: 'Anansi Smart-Tarot', 
			description: 'Your Healing effects are increased by 2%.', 
			quality: 'elite', 
			icon: 'minor_heal' 
			}
	},
	{ 
	id:'185', 
		name: 'Anansi Smart-Tarot', 
		ql: '10.9', 
		role:'healer', 
		slots:['luck'], 
		glyph: { 
		ql:'11.0', 
		primary:{ 
			stat: 'Crititical Raiting', 
			dist: 4 }, 
		secondary: { 
			stat: 'none' , 
			dist: 0
			}
		}, 
		signet: { 
		name: 'Anansi Smart-Tarot', 
			description: 'Your Healing effects are increased by 3%.', 
		quality: 'epic', 
		icon: 'minor_heal' 
			}
	},
	{ 
	id:'154', 
		name: 'Anansi Smart-Tome', 
		ql: '10.8', 
		role:'weapon', 
		slots:['luck'], 
		glyph: { 
		ql:'10.5', 
		primary:{ 
			stat: 'hit-raiting', 
			dist: 4 }, 
		secondary: { 
			stat: 'none' , 
			dist: 0
			}
		}, 
		signet: { 
			name: 'Anansi Smart-Tome', 
			description: 'When you penetrate a target you make that target take 16% more damage from further penetrating hits for 7 seconds. 7 second cooldown.', 
			quality: 'elite', 
			icon: 'weapon_dps' 
			}
	},
	{ 
	id:'162', 
		name: 'Anansi Smart-Tome', 
		ql: '10.9', 
		role:'weapon', 
		slots:['weapon'], 
		glyph: { 
		ql:'11.0', 
		primary:{ 
			stat: 'hit-raiting', 
			dist: 4 }, 
		secondary: { 
			stat: 'none' , 
			dist: 0
			}
		}, 
		signet: { 
			name: 'Anansi Smart-Tome', 
			description: 'When you penetrate a target you make that target take 24% more damage from further penetrating hits for 7 seconds. 7 second cooldown.', 
			quality: 'epic', 
			icon: 'weapon_dps' 
			}
	},
	{ 
	id:'181', 
		name: 'Anansi Smart-Tome', 
		ql: '10.9', 
		role:'weapon', 
		slots:['weapon'], 
		glyph: { 
		ql:'11.0', 
		primary:{ 
			stat: 'hit-raiting', 
			dist: 4 }, 
		secondary: { 
			stat: 'none' , 
			dist: 0
			}
		}, 
		signet: { 
			name: 'Anansi Smart-Tome', 
			description: 'When you heal a target below 50% health they are healed for 94 every 2 seconds for 8 seconds. 8 second cooldown.', 
			quality: 'epic', 
			icon: 'weapon_heal' 
			}
	},
	{ 
	id:'145', 
		name: 'Anima-Calibrated Power Cable', 
		ql: '10.8', 
		role:'healer', 
		slots:['occult'], 
		glyph: { 
		ql:'10.5', 
		primary:{ 
			stat: 'critical-power', 
			dist: 2 }, 
		secondary: { 
			stat: 'Crititical Raiting' , 
			dist: 2
			}
		}, 
		signet: { 
		name: 'Anima-Calibrated Power Cable', 
			description: 'Your Healing effects are increased by 2%.', 
		quality: 'elite', 
		icon: 'minor_heal' 
			}
	},
	{ 
	id:'191', 
		name: 'Anima-Calibrated Power Cable', 
		ql: '10.9', 
		role:'healer', 
		slots:['occult'], 
		glyph: { 
		ql:'11.0', 
		primary:{ 
			stat: 'critical-power', 
			dist: 2 }, 
		secondary: { 
			stat: 'Crititical Raiting' , 
			dist: 2
			}
		}, 
		signet: { 
			name: 'Anima-Calibrated Power Cable', 
			description: 'Your Healing effects are increased by 3%.', 
			quality: 'epic', 
			icon: 'minor_heal' 
			}
	},
	{ 
	id:'139', 
		name: 'Biotech Amulet', 
		ql: '10.8', 
		role:'healer', 
		slots:['neck'], 
		glyph: { 
		ql:'10.5', 
		primary:{ 
			stat: 'critical-power', 
			dist: 4 }, 
		secondary: { 
			stat: 'none' , 
			dist: 0
			}
		}, 
		signet: { 
			name: 'Biotech Amulet', 
			description: 'Your heal rating is increased by an additional 94.', 
			quality: {elite: 94}, 
			stat: 'heal-raiting', 
			icon: 'major_heal' 
			}
	},
	{ 
	id:'170', 
		name: 'Biotech Amulet', 
		ql: '10.9', 
		role:'healer', 
		slots:['neck'], 
		glyph: { 
		ql:'11.0', 
		primary:{ 
			stat: 'critical-power', 
			dist: 4 }, 
		secondary: { 
			stat: 'none' , 
			dist: 0
			}
		}, 
		signet: { 
			name: 'Biotech Amulet', 
			description: 'Your heal rating is increased by an additional 141.', 
			quality: {epic: 141}, 
			stat: 'heal-raiting', 
			icon: 'major_heal' 
			}
	},
	{ 
	id:'142', 
		name: 'Biotech Band', 
		ql: '10.8', 
		role:'healer', 
		slots:['ring'], 
		glyph: { 
		ql:'10.5', 
		primary:{ 
			stat: 'Crititical Raiting', 
			dist: 4 }, 
		secondary: { 
			stat: 'none' , 
			dist: 0
			}
		}, 
		signet: { 
			name: 'Biotech Band', 
			description: 'Your heal rating is increased by an additional 94.', 
			quality: 'elite', 
			icon: 'major_heal' 
			}
	},
	{ 
	id:'176', 
		name: 'Biotech Band', 
		ql: '10.9', 
		role:'healer', 
		slots:['ring'], 
		glyph: { 
		ql:'11.0', 
		primary:{ 
			stat: 'Crititical Raiting', 
			dist: 4 }, 
		secondary: { 
			stat: 'none' , 
			dist: 0
			}
		}, 
		signet: { 
			name: 'Biotech Band', 
			description: 'Your heal rating is increased by an additional 141.', 
			quality: 'epic', 
			icon: 'major_heal' 
			}
	},
	{ 
	id:'141', 
		name: 'Chemical Enhancement Knot', 
		ql: '10.8', 
		role:'tank', 
		slots:['ring'], 
		glyph: { 
		ql:'10.5', 
		primary:{ 
			stat: 'hit-raiting', 
			dist: 4 }, 
		secondary: { 
			stat: 'none' , 
			dist: 0
			}
		}, 
		signet: { 
			name: 'Chemical Enhancement Knot', 
			description: 'Your health is increased by an additional 330.', 
			quality: {elite: 330}, 
			stat: 'hitpoints', 
			icon: 'major_tank' 
			}
	},
	{ 
	id:'177', 
		name: 'Chemical Enhancement Knot', 
		ql: '10.9', 
		role:'tank', 
		slots:['ring'], 
		glyph: { 
		ql:'11.0', 
		primary:{ 
			stat: 'hit-raiting', 
			dist: 4 }, 
		secondary: { 
			stat: 'none' , 
			dist: 0
			}
		}, 
		signet: { 
			name: 'Chemical Enhancement Knot', 
			description: 'Your health is increased by an additional 494.', 
			quality: {epic: 494}, 
			stat: 'hitpoints', 
			icon: 'major_tank' 
			}
	},
	{ 
	id:'134', 
		name: 'Draug Lord Ink', 
		ql: '10.8', 
		role:'healer', 
		slots:['head'], 
		glyph: { 
		ql:'10.5', 
		primary:{ 
			stat: 'critical-power', 
			dist: 2 }, 
		secondary: { 
			stat: 'Crititical Raiting' , 
			dist: 2
			}
		}, 
		signet: { 
			name: 'Draug Lord Ink', 
			description: 'When you heal a target, there is a 20% chance they will gain a barrier that absorbs 94 points of damage and lasts 10 seconds.', 
			quality: 'elite', 
			icon: 'head_heal' 
			}
	},
	{
	id:'180', 
		name: 'Draug Lord Ink', 
		ql: '10.9', 
		role:'healer', 
		slots:['head'], 
		glyph: { 
		ql:'11.0', 
		primary:{ 
			stat: 'critical-power', 
			dist: 2 }, 
		secondary: { 
			stat: 'Crititical Raiting' , 
			dist: 2
			}
		}, 
		signet: { 
			name: 'Draug Lord Ink', 
			description: 'When you heal a target, there is a 20% chance they will gain a barrier that absorbs 142 points of damage and lasts 10 seconds.', 
			quality: 'epic', 
			icon: 'head_heal' 
			}
	},
	{	
	id:'138', 
		name: 'Experimental Forcefield Pendant', 
		ql: '10.8', 
		role:'tank', 
		slots:['neck'], 
		glyph: { 
		ql:'10.5', 
		primary:{ 
			stat: 'evade-raiting', 
			dist: 4 }, 
		secondary: { 
			stat: 'none' , 
			dist: 0
			}
		}, 
		signet: { 
			name: 'Experimental Forcefield Pendant', 
			description: 'Your health is increased by an additional 330.', 
			quality: {elite: 330}, 
			stat: 'hitpoints', 
			icon: 'major_tank' 
			}
	},
	{ 
	id:'171', 
		name: 'Experimental Forcefield Pendant', 
		ql: '10.9', 
		role:'tank', 
		slots:['neck'], 
		glyph: { 
		ql:'11.0', 
		primary:{ 
			stat: 'evade-raiting', 
			dist: 4 }, 
		secondary: { 
			stat: 'none' , 
			dist: 0
			}
		}, 
		signet: { 
			name: 'Experimental Forcefield Pendant', 
			description: 'Your health is increased by an additional 494.', 
			quality: {epic: 494}, 
			stat: 'hitpoints', 
			icon: 'major_tank' 
			}
	},
	{ 
	id:'136', 
		name: 'Experimental Repulsor Bracer', 
		ql: '10.8', 
		role:'tank', 
		slots:['wrist'], 
		glyph: { 
		ql:'10.5', 
		primary:{ 
			stat: 'block-raiting', 
			dist: 4 }, 
		secondary: { 
			stat: 'defense-rating' , 
			dist: 0
			}
		}, 
		signet: { 
		name: 'Experimental Repulsor Bracer', 
			description: 'Your health is increased by an additional 330.', 
		quality: 'elite', 
		icon: 'major_tank' 
			}
	},
	{ 
	id:'173', 
		name: 'Experimental Repulsor Bracer', 
		ql: '10.9', 
		role:'tank', 
		slots:['wrist'], 
		glyph: { 
		ql: '11.0', 
		primary:{ 
			stat: 'block-raiting', 
			dist: 4 }, 
		secondary: { 
			stat: 'defense-rating' , 
			dist: 0
			}
		}, 
		signet: { 
			name: 'Experimental Repulsor Bracer', 
			description: 'Your health is increased by an additional 494.', 
			quality: 'epic', 
			icon: 'major_tank' 
			}
	},
	{ 
	id:'147', 
		name: 'Invinci-Tech Belt', 
		ql: '10.8', 
		role:'tank', 
		slots:['waist'], 
		glyph: { 
		ql:'10.5', 
		primary:{ 
			stat: 'hit-raiting', 
			dist: 4 }, 
		secondary: { 
			stat: 'none' , 
			dist: 0
			}
		}, 
		signet: { 
			name: 'Invinci-Tech Belt', 
			description: 'When your health is below 50% the next 5 hits against you do 17% less damage. 12 second cooldown', 
			quality: 'elite', 
			icon: 'minor_tank' 
			}
	},
	{ 
	id:'187', 
		name: 'Invinci-Tech Belt', 
		ql: '10.9', 
		role:'tank', 
		slots:['waist'], 
		glyph: { 
		ql:'11.0', 
		primary:{ 
			stat: 'hit-raiting', 
			dist: 4 }, 
		secondary: { 
			stat: 'none' , 
			dist: 0
			}
		}, 
		signet: { 
			name: 'Invinci-Tech Belt', 
			description: 'When your health is below 50%, the next 5 hits against you do 25% less damage. 12 second cooldown.', 
			quality: 'epic', 
			icon: 'minor_tank' 
			}
	},
	{ 
	id:'132', 
		name: 'Lycanthrope Bone Powder', 
		ql: '10.8', 
		role:'dps', 
		slots:['head'], 
		glyph: { 
		ql:'10.5', 
		primary:{ 
			stat: 'hit-raiting', 
			dist: 2 }, 
		secondary: { 
			stat: 'penetration-rating' , 
			dist: 2
			}
		}, 
		signet: { 
			name: 'Lycanthrope Bone Powder', 
			description: 'When you penetrate a target you make that target take 16% more damage from further penetrating hits for 7 seconds. 7 second cooldown.', 
			quality: 'elite', 
			icon: 'head_dps' 
			}
	},
	{ 
	id:'178', 
		name: 'Lycanthrope Bone Powder', 
		ql: '10.9', 
		role:'dps', 
		slots:['head'], 
		glyph: { 
		ql:'11.0', 
		primary:{ 
			stat: 'penetration-rating', 
			dist: 4 }, 
		secondary: { 
			stat: 'none' , 
			dist: 0
			}
		}, 
		signet: { 
			name: 'Lycanthrope Bone Powder', 
			description: 'When you penetrate a target you make that target take 24% more damage from further penetrating hits for 7 seconds. 7 second cooldown.', 
			quality: 'epic', 
			icon: 'head_dps' 
			}
	},
	{ 
	id:'152', 
		name: 'Manticore Cross-Supremacy', 
		ql: '10.8', 
		role:'weapon', 
		slots:['weapon'], 
		glyph: { 
		ql:'10.5', 
		primary:{ 
			stat: 'hit-raiting', 
			dist: 4 }, 
		secondary: { 
			stat: 'none' , 
			dist: 0
			}
		}, 
		signet: { 
			name: 'Manticore Cross-Supremacy', 
			description: 'When you hit a target you have a 10% chance to gain a damage increase of 16% for 5 seconds. 11 second cooldown.', 
			quality: 'elite', 
			icon: 'weapon_dps'
			}
	},
	{ 
	id:'164', 
		name: 'Manticore Cross-Supremacy', 
		ql: '10.9', 
		role:'weapon', 
		slots:['weapon'], 
		glyph: { 
		ql:'11.0', 
		primary:{ 
			stat: 'hit-raiting', 
			dist: 4 }, 
		secondary: { 
			stat: 'none' , 
			dist: 0
			}
		}, 
		signet: { 
			name: 'Manticore Cross-Supremacy', 
			description: 'When you hit a target you have a 10% chance to gain a damage increase of 24% for 5 seconds. 11 second cooldown.', 
			quality: 'epic', 
			icon: 'weapon_dps'
			}
	},
	{ 
	id:'155', 
		name: 'Manticore Cyber-Slice', 
		ql: '10.8', 
		role:'weapon', 
		slots:['weapon'], 
		glyph: { 
		ql:'10.5', 
		primary:{ 
			stat: 'hit-raiting', 
			dist: 4 }, 
		secondary: { 
			stat: 'none' , 
			dist: 0
			}
		}, 
		signet: { 
			name: 'Manticore Cyber-Slice', 
			description: 'When you penetrate a target you make that target take 16% more damage from further penetrating hits for 7 seconds. 7 second cooldown.', 
			quality: 'elite', 
			icon: 'weapon_dps' 
			}
	},
	{ 
	id:'161', 
		name: 'Manticore Cyber-Slice', 
		ql: '10.9', 
		role:'weapon', 
		slots:['weapon'], 
		glyph: { 
		ql:'11.0', 
		primary:{ 
			stat: 'hit-raiting', 
			dist: 4 }, 
		secondary: { 
			stat: 'none' , 
			dist: 0
			}
		}, 
		signet: { 
			name: 'Manticore Cyber-Slice', 
			description: 'When you penetrate a target you make that target take 24% more damage from further penetrating hits for 7 seconds. 7 second cooldown.', 
			quality: 'epic', 
			icon: 'weapon_dps' 
			}
	},
	{ 
	id:'157', 
		name: 'Manticore Dread-Reaper', 
		ql: '10.8', 
		role:'weapon', 
		slots:['weapon'], 
		glyph: { 
		ql:'10.5', 
		primary:{ 
			stat: 'hit-raiting', 
			dist: 4 }, 
		secondary: { 
			stat: 'none' , 
			dist: 0
			}
		}, 
		signet: { 
			name: 'Manticore Dread-Reaper', 
			description: 'When you penetrate a target you make that target take 16% more damage from further penetrating hits for 7 seconds. 7 second cooldown.', 
			quality: 'elite', 
			icon: 'weapon_dps' 
			}
	},
	{ 
	id:'168', 
		name: 'Manticore Dread-Reaper', 
		ql: '10.9', 
		role:'weapon', 
		slots:['weapon'], 
		glyph: { 
		ql:'11.0', 
		primary:{ 
			stat: 'hit-raiting', 
			dist: 4 }, 
		secondary: { 
			stat: 'none' , 
			dist: 0
			}
		}, 
		signet: { 
			name: 'Manticore Dread-Reaper', 
			description: 'When you penetrate a target you make that target take 24% more damage from further penetrating hits for 7 seconds. 7 second cooldown.', 
			quality: 'epic', 
			icon: 'weapon_dps' 
			}
	},
	{ 
	id:'146', 
		name: 'Manticore Elite Chain', 
		ql: '10.8', 
		role:'dps', 
		slots:['waist'], 
		glyph: { 
		ql:'10.5', 
		primary:{ 
			stat: 'hit-raiting', 
			dist: 4 }, 
		secondary: { 
			stat: 'none' , 
			dist: 0
			}
		}, 
		signet: { 
			name: 'Manticore Elite Chain', 
			description: 'Increases damage dealt by 1%.', 
			quality: 'elite', 
			icon: 'minor_dps' 
			}
	},
	{ 
	id:'189', 
		name: 'Manticore Elite Chain', 
		ql: '10.9', 
		role:'dps', 
		slots:['waist'], 
		glyph: { 
		ql:'11.0', 
		primary:{ 
			stat: 'hit-raiting', 
			dist: 4 }, 
		secondary: { 
			stat: 'none' , 
			dist: 0
			}
		}, 
		signet: { 
			name: 'Manticore Elite Chain', 
			description: 'Increases damage dealt by 1.5%.', 
			quality: 'epic', 
			icon: 'minor_dps' 
			}
	},
	{ 
	id:'143', 
		name: 'Manticore Elite Effigy', 
		ql: '10.8', 
		role:'dps', 
		slots:['occult'], 
		glyph: { 
		ql:'10.5', 
		primary:{ 
			stat: 'Crititical Raiting', 
			dist: 4 }, 
		secondary: { 
			stat: 'none' , 
			dist: 0
			}
		}, 
		signet: { 
			name: 'Manticore Elite Effigy', 
			description: 'Increases damage dealt by 1%.', 
			quality: 'elite', 
			icon: 'minor_dps' 
			}
	},
	{ 
	id:'192', 
		name: 'Manticore Elite Effigy', 
		ql: '10.9', 
		role:'dps', 
		slots:['occult'], 
		glyph: { 
		ql:'11.0', 
		primary:{ 
			stat: 'Crititical Raiting', 
			dist: 4 }, 
		secondary: { 
			stat: 'none' , 
			dist: 0
			}
		}, 
		signet: { 
			name: 'Manticore Elite Effigy', 
			description: 'Increases damage dealt by 1.5%.', 
			quality: 'epic', 
			icon: 'minor_dps' 
			}
	},
	{ 
	id:'140', 
		name: 'Manticore Elite Ring', 
		ql: '10.8', 
		role:'dps', 
		slots:['ring'], 
		glyph: { 
		ql:'10.5', 
		primary:{ 
			stat: 'hit-raiting', 
			dist: 4 }, 
		secondary: { 
			stat: 'none' , 
			dist: 0
			}
		}, 
		signet: { 
			name: 'Manticore Elite Ring', 
			description: 'Your attack rating is increased by an additional 94.', 
			quality: {elite: 94}, 
			stat: 'attack-raiting', 
			icon: 'major_dps' 
			}
	},
	{ 
	id:'169', 
		name: 'Manticore Elite Ring', 
		ql: '10.9', 
		role:'dps', 
		slots:['ring'], 
		glyph: { 
		ql:'11.0', 
		primary:{ 
			stat: 'penetration-rating', 
			dist: 4 }, 
		secondary: { 
			stat: 'none' , 
			dist: 0
			}
		}, 
		signet: { 
			name: 'Manticore Elite Ring', 
			description: 'Your attack rating is increased by an additional 141.', 
			quality: {epic: 141}, 
			stat: 'attack-raiting', 
			icon: 'major_dps' 
			}
	},
	{ 
	id:'137', 
		name: 'Manticore Elite Tags', 
		ql: '10.8', 
		role:'dps', 
		slots:['neck'], 
		glyph: { 
		ql:'10.5', 
		primary:{ 
			stat: 'Crititical Raiting', 
			dist: 2 }, 
		secondary: { 
			stat: 'penetration-rating' , 
			dist: 2
			}
		}, 
		signet: { 
			name: 'Manticore Elite Tags', 
			description: 'Your attack rating is increased by an additional 94.', 
			quality: {elite: 94}, 
			stat: 'attack-raiting', 
			icon: 'major_dps' 
			}
	},
	{ 
	id:'172', 
		name: 'Manticore Elite Tags', 
		ql: '10.9', 
		role:'dps', 
		slots:['neck'], 
		glyph: { 
		ql:'11.0', 
		primary:{ 
			stat: 'Crititical Raiting', 
			dist: 2 }, 
		secondary: { 
			stat: 'penetration-rating' , 
			dist: 2
			}
		}, 
		signet: { 
			name: 'Manticore Elite Tags', 
			description: 'Your attack rating is increased by an additional 141.', 
			quality: {epic: 141}, 
			stat: 'attack-raiting', 
			icon: 'major_dps' 
			}
	},
	{ 
	id:'135', 
		name: 'Manticore Elite Wristlet', 
		ql: '10.8', 
		role:'dps', 
		slots:['wrist'], 
		glyph: { 
		ql:'10.5', 
		primary:{ 
			stat: 'critical-power', 
			dist: 4 }, 
		secondary: { 
			stat: 'none' , 
			dist: 0
			}
		}, 
		signet: { 
			name: 'Manticore Elite Wristlet', 
			description: 'Your attack rating is increased by an additional 94.', 
			quality: {elite: 94}, 
			stat: 'attack-raiting', 
			icon: 'major_dps' 
			}
	},
	{ 
	id:'175', 
		name: 'Manticore Elite Wristlet', 
		ql: '10.9', 
		role:'dps', 
		slots:['wrist'], 
		glyph: { 
		ql:'11.0', 
		primary:{ 
			stat: 'critical-power', 
			dist: 4 }, 
		secondary: { 
			stat: 'none' , 
			dist: 0
			}
		}, 
		signet: { 
			name: 'Manticore Elite Wristlet', 
			description: 'Your attack rating is increased by an additional 141.', 
			quality: {epic: 141}, 
			stat: 'attack-raiting', 
			icon: 'major_dps' 
			}
	},
	{ 
	id:'158', 
		name: 'Manticore Obliterator', 
		ql: '10.8', 
		role:'weapon', 
		slots:['weapon'], 
		glyph: { 
		ql:'10.5', 
		primary:{ 
			stat: 'hit-raiting', 
			dist: 4 }, 
		secondary: { 
			stat: 'none' , 
			dist: 0
			}
		}, 
		signet: { 
			name: 'Manticore Obliterator', 
			description: 'When you hit a target you have a 10% chance to gain a damage increase of 16% for 5 seconds. 11 second cooldown.', 
			quality: 'elite', 
			icon: 'weapon_dps' 
			}
	},
	{ 
	id:'167', 
		name: 'Manticore Obliterator', 
		ql: '10.9', 
		role:'weapon', 
		slots:['weapon'], 
		glyph: { 
		ql:'11.0', 
		primary:{ 
			stat: 'hit-raiting', 
			dist: 4 }, 
		secondary: { 
			stat: 'none' , 
			dist: 0
			}
		}, 
		signet: { 
			name: 'Manticore Obliterator', 
			description: 'When you hit a target you have a 10% chance to gain a damage increase of 24% for 5 seconds. 11 second cooldown.', 
			quality: 'epic', 
			icon: 'weapon_dps' 
			}
	},
	{ 
	id:'156', 
		name: 'Manticore Subjugator', 
		ql: '10.8', 
		role:'weapon', 
		slots:['weapon'], 
		glyph: { 
		ql:'10.5', 
		primary:{ 
			stat: 'hit-raiting', 
			dist: 4 }, 
		secondary: { 
			stat: 'none' , 
			dist: 0
			}
		}, 
		signet: { 
			name: 'Manticore Subjugator', 
			description: 'When you hit a target you have a 10% chance to gain a damage increase of 16% for 5 seconds. 11 second cooldown.', 
			quality: 'elite', 
			icon: 'weapon_dps' 
			}
	},
	{ 
	id:'160', 
		name: 'Manticore Subjugator', 
		ql: '10.9', 
		role:'weapon', 
		slots:['weapon'], 
		glyph: { 
		ql:'11.0', 
		primary:{ 
			stat: 'hit-raiting', 
			dist: 4 }, 
		secondary: { 
			stat: 'none' , 
			dist: 0
			}
		}, 
		signet: { 
			name: 'Manticore Subjugator', 
			description: 'When you hit a target you have a 10% chance to gain a damage increase of 24% for 5 seconds. 11 second cooldown.', 
			quality: 'epic', 
			icon: 'weapon_dps' 
			}
	},
	{ 
	id:'183', 
		name: 'Manticore Subjugator', 
		ql: '10.9', 
		role:'weapon', 
		slots:['weapon'], 
		glyph: { 
		ql:'11.0', 
		primary:{ 
			stat: 'hit-raiting', 
			dist: 4 }, 
		secondary: { 
			stat: 'none' , 
			dist: 0
			}
		}, 
		signet: { 
			name: 'Manticore Subjugator', 
			description: 'When you heal a target below 50% health they are healed for 94 every 2 seconds for 8 seconds. 8 second cooldown.', 
			quality: 'epic', 
			icon: 'weapon_dps' 
			}
	},
	{ 
	id:'159', 
		name: 'Manticore Talon', 
		ql: '10.8', 
		role:'weapon', 
		slots:['weapon'], 
		glyph: { 
		ql:'10.5', 
		primary:{ 
			stat: 'hit-raiting', 
			dist: 4 }, 
		secondary: { 
			stat: 'none' , 
			dist: 0
			}
		}, 
		signet: { 
			name: 'Manticore Talon', 
			description: 'When you hit a target you have a 10% chance to gain a damage increase of 16% for 5 seconds. 11 second cooldown.', 
			quality: 'elite', 
			icon: 'weapon_dps'
			}
	},
	{ 
	id:'166', 
		name: 'Manticore Talon', 
		ql: '10.9', 
		role:'weapon', 
		slots:['weapon'], 
		glyph: { 
		ql:'11.0', 
		primary:{ 
			stat: 'hit-raiting', 
			dist: 4 }, 
		secondary: { 
			stat: 'none' , 
			dist: 0
			}
		}, 
		signet: { 
			name: 'Manticore Talon', 
			description: 'When you hit a target you have a 10% chance to gain a damage increase of 24% for 5 seconds. 11 second cooldown.', 
			quality: 'epic', 
			icon: 'weapon_dps'
			}
	},
	{ 
	id:'182', 
		name: 'Manticore Talon', 
		ql: '10.9', 
		role:'weapon', 
		slots:['weapon'], 
		glyph: { 
		ql:'11.0', 
		primary:{ 
			stat: 'hit-raiting', 
			dist: 4 }, 
		secondary: { 
			stat: 'none' , 
			dist: 0
			}
		}, 
		signet: { 
		name: 'Manticore Talon', 
			description: 'When you heal a target below 50% health they are healed for 94 every 2 seconds for 8 seconds. 8 second cooldown.', 
			quality: 'epic', 
			icon: 'weapon_heal'
			}
	},
	{ 
	id:'144', 
		name: 'Preserved Wendigo Bone', 
		ql: '10.8', 
		role:'tank', 
		slots:['occult'], 
		glyph: { 
		ql:'10.5', 
		primary:{ 
			stat: 'defense-rating', 
			dist: 4 }, 
		secondary: { 
			stat: 'none' , 
			dist: 0
			}
		}, 
		signet: { 
		name: 'Preserved Wendigo Bone', 
			description: 'When your health is below 50% you are healed for 100 and affected by a heal over time effect healing you for 38 every 2 seconds for 8 seconds. 12 second cooldown', 
			quality: 'elite', 
			icon: 'minor_tank' 
			}
	},
	{ 
	id:'190', 
		name: 'Preserved Wendigo Bone', 
		ql: '10.9', 
		role:'tank', 
		slots:['occult'], 
		glyph: { 
		ql:'11.0', 
		primary:{ 
			stat: 'defense-rating', 
			dist: 4 }, 
		secondary: { 
			stat: 'none' , 
			dist: 0
			}
		}, 
		signet: { 
		name: 'Preserved Wendigo Bone', 
			description: 'When your health is below 50%, you are healed for 150 health and affected by a heal over time effect healing you for 57 health every 2 seconds for 8 seconds. 12 second cooldown.', 
			quality: 'epic', 
			icon: 'minor_tank' 
			}
	},
	{ 
	id:'151', 
		name: 'Sycoil Supreme Effigy', 
		ql: '10.8', 
		role:'weapon', 
		slots:['weapon'], 
		glyph: { 
		ql:'10.5', 
		primary:{ 
			stat: 'hit-raiting', 
			dist: 4 }, 
		secondary: { 
			stat: 'none' , 
			dist: 0
			}
		}, 
		signet: { 
			name: 'Sycoil Supreme Effigy', 
			description: 'When you penetrate a target you make that target take 16% more damage from further penetrating hits for 7 seconds. 7 second cooldown.', 
			quality: 'elite', 
			icon: 'weapon_dps'
			}
	},
	{ 
	id:'165', 
		name: 'Sycoil Supreme Effigy', 
		ql: '10.9', 
		role:'weapon', 
		slots:['weapon'], 
		glyph: { 
		ql:'11.0', 
		primary:{ 
			stat: 'hit-raiting', 
			dist: 4 }, 
		secondary: { 
			stat: 'none' , 
			dist: 0
			}
		}, 
		signet: { 
			name: 'Sycoil Supreme Effigy', 
			description: 'When you penetrate a target you make that target take 24% more damage from further penetrating hits for 7 seconds. 7 second cooldown.', 
			quality: 'epic', 
			icon: 'weapon_dps'
			}
	},
	{ 
	id:'133', 
		name: 'The Colour Out of Space', 
		ql: '10.8', 
		role:'tank', 
		slots:['head'], 
		glyph: { 
		ql:'10.5', 
		primary:{ 
			stat: 'block-raiting', 
			dist: 4 }, 
		secondary: { 
			stat: 'none' , 
			dist: 0
			}
		}, 
		signet: { 
			name: 'The Colour Out of Space', 
			description: 'When you block you gain 30% block chance for 4 seconds. 10 second cooldown.', 
			quality: 'elite', 
			icon: 'head_tank' 
			}
	},
	{ 
	id:'179', 
		name: 'The Colour Out of Space', 
		ql: '10.9', 
		role:'tank', 
		slots:['head'], 
		glyph: { 
		ql:'11.0', 
		primary:{ 
			stat: 'block-raiting', 
			dist: 2 }, 
		secondary: { 
			stat: 'evade-raiting' , 
			dist: 2
			}
		}, 
		signet: { 
			name: 'The Colour Out of Space', 
			description: 'When you block you gain 45% block chance for 4 seconds. 10 second cooldown.', 
			quality: 'epic', 
			icon: 'head_tank' 
			}
	},
	{ 
	id:'148', 
		
	name: 'V\u00E1li Resilience Buckle', 
		
	ql: '10.8', 
		role:'healer', 
		slots:['waist'], 
		glyph: { 
		ql:'10.5', 
		primary:{ 
			stat: 'critical-power', 
			dist: 4 }, 
		secondary: { 
			stat: 'none' , 
			dist: 0
			}
		}, 
		signet: { 
			name: 'V\u00E1li Resilience Buckle', 
			description: 'Your Healing effects are increased by 2%.', 
			quality: 'elite', 
			icon: 'minor_heal' 
			}
	},
	{ 
	id:'188', 
		
	name: 'V\u00E1li Resilience Buckle', 
		
	ql: '10.9', 
		role:'healer', 
		slots:['waist'], 
		glyph: { 
		ql:'11.0', 
		primary:{ 
			stat: 'critical-power', 
			dist: 4 }, 
		secondary: { 
			stat: 'none' , 
			dist: 0
			}
		}, 
		signet: { 
			name: 'V\u00E1li Resilience Buckle', 
			description: 'Your Healing effects are increased by 3%.', 
			quality: 'epic', 
			icon: 'minor_heal' 
			}
		},
	{ 
		id:'131', 
		name: 'V\u00E1li Smart-Watch', 
		ql: '10.8', 
		role:'healer', 
		slots:['wrist'], 
		glyph: { 
			ql:'10.5', 
			primary:{ 
				stat: 'critical-power', 
				dist: 4 }, 
			secondary: {
				stat: 'none' , 
				dist: 0} 
				}, 
		signet: { 
			name: 'V\u00E1li Smart-Watch', 
			description: 'Your heal rating is increased by an additional 94.', 
			quality: {elite: 94}, 
			stat: 'heal-raiting',
			icon: 'major_heal' 
			} 
	},
	{ 
		id:'174', 
		name: 'V\u00E1li Smart-Watch', 
		ql: '10.9', 
		role:'healer', 
		slots:['wrist'], 
		glyph: { 
			ql:'11.0', 
			primary:{ 
				stat: 'critical-power', 
				dist: 4 }, 
			secondary: {
				stat: 'none' , 
				dist: 0}
			}, 
		signet: { 
			name: 'V\u00E1li Smart-Watch', 
			description: 'Your heal rating is increased by an additional 141.', 
			quality: {epic: 141}, 
			stat: 'heal-raiting',  
			icon: 'major_heal' 
			}
		},
		//last item-id in this file: 192
];
