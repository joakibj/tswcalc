var importModule = {};

module('import-unit-tests', {
    setup: function() {
        importModule = new Import();
    },
    teardown: function() {
        
    }
});

test('should import URL', 1, function() {
    equal(true, true);
});