var tswcalc = tswcalc || {};
tswcalc.data = tswcalc.data || {};

tswcalc.data.ny_raid_items = {
    'head': {
        healer: {
            name: 'Blood of the Old Ones',
            signet: {
                id: 80,
                name: 'Blood of the Old Ones',
                description: 'Whenever you apply a heal effect to a friend, there is a %0% chance that you will heal the target for an additional %1% of their maximum health.',
                cooldown: 5,
                quality: [{
                        epic: 10
                    }, {
                        epic: 3
                    }
                ],
                icon: 'blood_of_the_old_ones'
            }
        },
        tank: {
            name: 'Mark of the Starspawn',
            signet: {
                id: 81,
                name: 'Mark of the Starspawn',
                description: 'Whenever you are attacked, you have a %d% chance to gain a beneficial effect that reduces damage received from penetrating attacks for 15 seconds. The duration of this effect is not refreshed when reapplied.',
                cooldown: 0,
                quality: {
                    epic: 5
                },
                icon: 'mark_of_the_starspawn'
            }
        },
        dps: {
            name: 'Ashes of Elder Things',
            signet: {
                id: 82,
                name: 'Ashes of Elder Things',
                description: 'Whenever you penetrate, you gain a beneficial effect that increases your Penetration Rating by %d% for 15 seconds. The duration of this effect is not refreshed when reapplied.',
                cooldown: 0,
                quality: {
                    epic: 25
                },
                bonus: {
                    stat: ['penetration-rating'],
                    multiply: 1.25
                },
                icon: 'ashes_of_elder_things'
            }
        }
    },
    'ring': {
        healer: {
            name: 'Coney Island Band',
            signet: {
                id: 83,
                name: 'Coney Island Band',
                description: 'Whenever you critically heal, you gain a beneficial effect that increases your Crit Power by %d% for 15 seconds. The duration of this effect is not refreshed when reapplied.',
                cooldown: 0,
                quality: {
                    epic: 25
                },
                bonus: {
                    stat: ['critical-power-percentage'],
                    add: 25
                },
                icon: 'coney_island_band'
            }
        }
    },
    'neck': {
        dps: {
            name: 'Egon Pendant',
            signet: {
                id: 84,
                name: 'Egon Pendant',
                description: 'Whenever you critically hit, you gain a beneficial effect that increases the effectiveness of your Critical Rating for 12 seconds. The duration of this effect is not refreshed when reapplied.',
                cooldown: 0,
                quality: {
                    epic: 0
                },
                bonus: {
                    stat: ['critical-rating'],
                    multiply: 1.25
                },
                icon: 'egon_pendant'
            }
        }
    },
    'wrist': {
        tank: {
            name: 'Brooklyn Bracer',
            signet: {
                id: 85,
                name: 'Brooklyn Bracer',
                description: 'Whenever you are attacked, you gain a single stack of a beneficial effect that increases your Evade Chance by %d% per stack. This effect is removed after you successfully evade.',
                cooldown: 6,
                quality: {
                    epic: 5
                },
                icon: 'brooklyn_bracer'
            }
        }
    },
    'luck': {
        dps: {
            name: 'Subway Tokens',
            description: 'Every 6 seconds, you gain a single stack of a beneficial effect that increases all damage dealt by 1% per stack. This effect is removed whenever you glance or the number of stacks exceeds 10.',
            signet: {
                id: 86,
                name: 'Subway Tokens',
                description: 'Every 6 seconds, you gain a single stack of a beneficial effect that increases all damage dealt by 1% per stack. This effect is removed whenever you glance or the number of stacks exceeds 10.',
                cooldown: 0,
                quality: {
                    epic: 0
                },
                bonus: {
                    stat: ['damage-deal-percentage'],
                    add: 1
                },
                stack_interval: 6,
                stack_max: 10,
                icon: 'subway_tokens'
            }
        }
    },
    'waist': {
        tank: {
            name: 'NY Buckle',
            signet: {
                id: 87,
                name: 'NY Buckle',
                description: 'Every 6 seconds, you gain a single stack of a beneficial effect that increases your Physical and Magical Protection by 3% per stack. This effect is removed whenever you are penetrated or the number of stacks exceeds 10.',
                cooldown: 0,
                quality: {
                    epic: 0
                },
                bonus: {
                    stat: ['physical-protection', 'magical-protection'],
                    multiply: 0.03
                },
                stack_interval: 6,
                stack_max: 10,
                icon: 'ny_buckle'
            }
        }
    },
    'occult': {
        healer: {
            name: 'Broadway Charm',
            signet: {
                id: 88,
                name: 'Broadway Charm',
                description: 'Whenever you heal a target that is below 66% of their health, there is a 33% chance that you will also give them a beneficial effect that increases their Physical and Magical Protection by 400 for 10 seconds.',
                cooldown: 6,
                quality: {
                    epic: 0
                },
                icon: 'broadway_charm'
            }
        }
    }
};