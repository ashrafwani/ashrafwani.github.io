$(function() {

    var form = $('#ajax-contact');
    var formMessages = $('#form-messages');

    $(form).submit(function(e) {

        e.preventDefault();

        var formData = $(form).serialize();

        $.ajax({
            type: 'POST',
            url: $(form).attr('action'),
            data: formData,
            headers: {
                'Accept': 'application/json'
            }
        })

        .done(function(response) {

            $(formMessages)
                .removeClass('bg-danger')
                .addClass('bg-success')
                .text('Your message successfully sent');

            $('#name, #email, #message').val('');

            setTimeout(function() {
                window.location.href =
                    'https://ashrafwani.github.io/thankyou.html';
            }, 1000);

        })

        .fail(function(data) {

            $(formMessages)
                .removeClass('bg-success')
                .addClass('bg-danger');

            $(formMessages).text(
                'Oops! Your message could not be sent. Please try again.'
            );

            console.log('Formspree error:', data);

        });

    });

});
