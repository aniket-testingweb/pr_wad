// script.js

// Ready function when the page loads
$(document).ready(function(){

    // Smooth scroll on navbar click (optional nice feature)
    $('a[href^="#"]').click(function(e){
        e.preventDefault();
        var target = $(this).attr('href');
        $.mobile.changePage(target, { transition: "slide" });
    });

    // Message on clicking product image (for demo)
    $('.product-img').click(function(){
        alert('Product clicked!');
    });

});
