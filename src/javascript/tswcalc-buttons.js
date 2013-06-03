function DistributionButtonHandler(slotId) {
    var slotId = slotId;
    var self = this;

    this.initiate = function() {
        this.addListenersToGlyphDistButtons('primary');
        this.addListenersToGlyphDistButtons('secondary');
    };

    this.addListenersToGlyphDistButtons = function(glyph) {
        this.onlyActiveButton('#' + slotId + '-' + glyph + '-glyph-dist-btn0');
        $('#' + slotId + '-' + glyph + '-glyph-dist > button.btn').on('click', function(event) {
            self.onlyActiveButton('#' + this.id);
            self.balanceGlyphDist(this, glyph);
            summary.updateOffensiveDefensiveStats();
        });
    };

    this.balanceGlyphDist = function(button, glyph) {
        otherActiveButton = self.getActiveDist(self.getInverseGlyphStat(glyph));
        this.balanceGlyphDistOverflow(button, otherActiveButton);
    }

    this.getActiveDist = function(glyph) {
        return $('#' + slotId + '-' + glyph + '-glyph-dist > button.btn.active')[0];
    };

    this.balanceGlyphDistOverflow = function(clickedButton, otherButton) {
        if (otherButton != null) {
            var clickedDist = parseInt(clickedButton.innerHTML);
            var otherDist = parseInt(otherButton.innerHTML);
            var sumBothDist = clickedDist + otherDist;
            if ((sumBothDist) > 4) {
                var otherDistLoweredByOne = otherButton.id.substring(0, otherButton.id.length - 1) + (otherDist - (sumBothDist - 4));
                self.onlyActiveButton('#' + otherDistLoweredByOne);
            }
        }
    };

    this.onlyActiveButton = function(id) {
        $(id).siblings().removeClass('active');
        $(id).siblings().removeClass('btn-success');
        $(id).addClass('active');
        $(id).addClass('btn-success');
    };

    this.getInverseGlyphStat = function(glyph) {
        return glyph == 'primary' ? 'secondary' : 'primary';
    };
}