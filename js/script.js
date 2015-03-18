/* Mobile navigation
   ========================================================================== */
$(document).ready(function() {
    
    /*Mobile nav */
    $(".menu-icon").click(function() {
        $(".main-nav ul").slideToggle("fast", function() {});
    });
    

    /*Smilies in table */
    if ($(window).width() > 768) {
        // Get number
        $("table.family-size td:nth-child(1)").slice(1).each(function(index) {
            var text = $(this).text();
            var number = parseInt(text, 10);
            // Hide number
            $("p", this).hide();
            // Build array
            var smile = Array(number + 1).join("<i class='fa fa-smile-o'></i>");
            // Append to the parent.
            $(this).append(smile);
        });
    }


});