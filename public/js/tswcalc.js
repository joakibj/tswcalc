$(document).ready(function() {

    render_container(data);
    $('#summary').scrollToFixed();

    function render_container(data) {
        dust.render("container", data,

        function(err, out) {
            if (err) {
                console.log(err);
            }
            $('.container').html(out);
        });
    }
});