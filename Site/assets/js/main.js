$('.navButton').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 750);
    return false;
});

$('.phoneNumber').text('562 - 895 - 9788');
$('.email').text('dks99455@gmail.com');