$(document).ready(function() {
    data = {
        slots: [{id_prefix: 'weapon', name: 'Weapon'}, {id_prefix: 'head', name: 'Head Talisman'}]
    }

    dust.render("container", data,

    function(err, out) {
        if (err) {
            console.log(err);
        }
        $('.container').html(out);
    });
});