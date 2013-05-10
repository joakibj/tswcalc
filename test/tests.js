module("qlbuttons", {
    setup: function() {
        $("#qunit-fixture").append('<button id="weapon-ql-btn0" class="btn btn-mini btn-danger">0</button>');
    }
});

test("should make button active", function() {
    new ButtonHandler('weapon').onlyActiveButton('weapon-ql-btn0');
    equal($("#weapon-ql-btn0").hasClass('active'), true);
    equal($("#weapon-ql-btn0").hasClass('btn-success'), true);

});