function Slot(id, name, group) {
    var self = this;
    this.id = id;
    this.name = name;
    this.group = group;

    this.el = {
        role: $('#' + this.id + '-role'),
        ql: $('#' + this.id + '-ql'),
        glyphql: $('#' + this.id + '-glyph-ql'),
        primaryglyph: $('#' + this.id + '-primary-glyph'),
        secondaryglyph: $('#' + this.id + '-secondary-glyph')
    };

    this.role = function() {
        return this.el.role.val();
    };

    this.ql = function() {
        return this.el.ql.val();
    };

    this.glyphql = function() {
        return this.el.glyphql.val();
    };

    this.primaryglyph = function() {
        return this.el.primaryglyph.val();
    };

    this.secondaryglyph = function() {
        return this.el.secondaryglyph.val();
    };
}

var slots = {
    //this method can only be called after the document is ready
    init: function() {
        for (var i = 0; i < template_data.slots.length; i++) {
            var slotData = template_data.slots[i];
            this[slotData.id_prefix] = new Slot(slotData.id_prefix, slotData.name, slotData.group);
        }
    }
};
