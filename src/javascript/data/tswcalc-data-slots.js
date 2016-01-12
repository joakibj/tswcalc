var tswcalc = tswcalc || {};
tswcalc.data = tswcalc.data || {};

tswcalc.data.template_data = {
    slots: [{
            id_prefix: 'weapon',
            name: 'Primary Weapon',
            is_weapon: true,
            group: 'weapon',
            is_primary: true
        },{
            id_prefix: 'weapon2',
            name: 'Secondary Weapon',
            is_weapon: true,
            group: 'weapon',
            is_primary: false
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
            group: 'major',
            is_neck: true
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
        }
    ]
};