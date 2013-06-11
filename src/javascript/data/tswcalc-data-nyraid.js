ny_raid_items = {
    'head': {
        heal: {
            name: 'Blood of the Old Ones',
            description: 'Whenever you apply a heal effect to a friend, there is a 10% chance that you will heal the target for an additional 3% of their maximum health. This can only happen once every 5 seconds.',
            cooldown: 5,
            stack_interval: 0,
            stack_max: 0
        },
        tank: {
            name: 'Mark of the Starspawn',
            description: 'Whenever you are attacked, you have a 5% chance to gain a beneficial effect that reduces damage received from penetrating attacks for 15 seconds. The duration of this effect is not refreshed when reapplied.',
            cooldown: 0,
            stack_interval: 0,
            stack_max: 0
        },
        dps: {
            name: 'Ashes of Elder Things',
            description: 'Whenever you penetrate, you gain a beneficial effect that increases your Penetration Rating by 25% for 15 seconds. The duration of this effect is not refreshed when reapplied.',
            cooldown: 0,
            stack_interval: 0,
            stack_max: 0
        }
    },
    'ring': {
        heal: {
            name: 'Coney Island Band',
            description: 'Whenever you critically heal, you gain a beneficial effect that increases your Crit Power by 25% for 15 seconds. The duration of this effect is not refreshed when reapplied.',
            cooldown: 0,
            stack_interval: 0,
            stack_max: 0
        }
    },
    'neck': {
        dps: {
            name: 'Egon Pendant',
            description: 'Whenever you critically hit, you gain a beneficial effect that increases the effectiveness of your Critical Rating for 12 seconds. The duration of this effect is not refreshed when reapplied.',
            cooldown: 0,
            stack_interval: 0,
            stack_max: 0
        }
    },
    'wrist': {
        tank: {
            name: 'Brooklyn Bracer',
            description: 'Whenever you are attacked, you gain a single stack of a beneficial effect that increases your Evade Chance by 5% per stack. This effect is removed after you successfully evade.',
            cooldown: 6,
            stack_interval: 0,
            stack_max: 0
        }
    },
    'luck': {
        dps: {
            name: 'Subway Tokens',
            description: 'Every 6 seconds, you gain a single stack of a beneficial effect that increases all damage dealt by 1% per stack. This effect is removed whenever you glance or the number of stacks exceeds 10.',
            cooldown: 0,
            stack_interval: 6,
            stack_max: 10,
            stack_value: 1
        }
    },
    'waist': {
        tank: {
            name: 'NY Buckle',
            description: 'Every 6 seconds, you gain a single stack of a beneficial effect that increases your Physical and Magical Protection by 3% per stack. This effect is removed whenever you are penetrated or the number of stacks exceeds 10.',
            cooldown: 0,
            stack_interval: 6,
            stack_max: 10,
            stack_value: 3
        }
    },
    'occult': {
        heal: {
            name: 'Broadway Charm',
            description: 'Whenever you heal a target that is below 66% of their health, there is a 33% chance that you will also give them a beneficial effect that increases their Physical and Magical Protection by 400 for 10 seconds.',
            cooldown: 0,
            stack_interval: 6,
            stack_max: 10,
            stack_value: 1
        }
    }
};