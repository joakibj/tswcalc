$(document).ready(function() {

    render_container(template_data);
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
