$(document).ready(function() {
	var imgHeight = $('.clients .carousel .slider-nav img').height();
	imgHeight = imgHeight / 4.57;
	$('.clients .carousel .slider-nav').css('top', imgHeight + 'px');

    $("#form").submit(function(){
        var form = $(this);
        var error = false;
        if (!error) {
            var data = form.serialize();
            $.ajax({
                type: 'POST',
                url: '../mail.php', // путь дo oбрaбoтчикa
                dataType: 'json',
                data: data,
                beforeSend: function(data) {
                    form.find('input[type="submit"]').attr('disabled', 'disabled');
                    form.find('input[type="submit"]').css('background-color', '#6c992e'); 
                },
                success: function(data){
                    if (data['error']) {
                        alert(data['error']);
                    } else {
                        $('#form').html('');
                        $('.forma .after-form').css('display', 'block');
                    }
                },
                complete: function(data) {
                    form.find('input[type="submit"]').css('background-color', '#8dc63f');
                    form.find('input[type="submit"]').prop('disabled', false);
                    $('#form').html('');
                    $('.forma .after-form').css('display', 'block');
                }         
            });
        }
        return false;
    })

})