$(document).ready(function() {

    render_container(template_data);
    start_buttonHandlers();
    $('#summary').scrollToFixed();
});

function render_container(data) {
    dust.render("container", template_data,

    function(err, out) {
        if (err) {
            console.log(err);
        }
        $('.container').html(out);
    });
}

function start_buttonHandlers() {
    for(var i = 0; i < template_data.slots.length; i++) {
        var handler = new ButtonHandler(template_data.slots[i].id_prefix);
        handler.initiate();
    }
}

function ButtonHandler(slotId) {
    var slotId = slotId;
    var self = this;

    this.initiate = function() {
        this.addListenersToSlotQlButtons(slotId);
        this.addListenersToGlyphQlButtons(slotId, 'primary-glyph');
        this.addListenersToGlyphQlButtons(slotId, 'secondary-glyph');
    };

    this.addListenersToSlotQlButtons = function(id_prefix) {
        buttons = $('#'+id_prefix+'-ql > button.btn').on('click', function(event) {
            self.onlyActiveButton('#'+this.id);
        });
    };

    this.addListenersToGlyphQlButtons = function(id_prefix, glyph) {
        buttons = $('#'+id_prefix+'-'+glyph+'-ql > button.btn').on('click', function(event) {
            self.onlyActiveButton('#'+this.id);
            self.balanceGlyphQl(this, glyph);
        });
    };

    //TODO: Refactor this!
    this.balanceGlyphQl = function(button, glyph) {
        if(glyph == 'primary-glyph') {
            primaryGlyphQl = parseInt(button.innerHTML);
            activeSecondaryGlyph = $('#'+slotId+'-secondary-glyph-ql > button.btn.active');
            if($(activeSecondaryGlyph).length > 0) {
                secondaryGlyphQl = parseInt(activeSecondaryGlyph[0].innerHTML);
                if(primaryGlyphQl + secondaryGlyphQl > 5) {
                    oneLowerQlId = activeSecondaryGlyph[0].id.substring(0, activeSecondaryGlyph[0].id.length-1) + (secondaryGlyphQl-(primaryGlyphQl + secondaryGlyphQl - 5));
                    self.onlyActiveButton('#'+oneLowerQlId);
                }
            }
        } else {
            secondaryGlyphQl = parseInt(button.innerHTML);
            activePrimaryGlyph = $('#'+slotId+'-primary-glyph-ql > button.btn.active');
            if($(activePrimaryGlyph).length > 0) {
                primaryGlyphQl = parseInt(activePrimaryGlyph[0].innerHTML);
                if(primaryGlyphQl + secondaryGlyphQl > 5) {
                    oneLowerQlId = activePrimaryGlyph[0].id.substring(0, activePrimaryGlyph[0].id.length-1) + + (secondaryGlyphQl-(primaryGlyphQl + secondaryGlyphQl - 5));
                    self.onlyActiveButton('#'+oneLowerQlId);
                }
            }
        }
    }

    this.onlyActiveButton = function(id) {
        $(id).siblings().removeClass('active');
        $(id).siblings().removeClass('btn-success');
        $(id).addClass('active');
        $(id).addClass('btn-success');
    };

    this.findButtonIndex = function(id) {
        return id.charAt(id.length-1);
    };
}