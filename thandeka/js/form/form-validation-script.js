var Script = function () {

    $.validator.setDefaults({
        submitHandler: function() { alert("submitted!"); }
    });

    $().ready(function() {
        // validate the comment form when it is submitted
        $("#feedback_form").validate();

        // validate signup form on keyup and submit
        $("#register_form").validate({
            rules: {
                brand: {
                    required: true,
                    minlength: 1
                },
                style: {
                    required: true,
                    minlength: 1
                },
                color: {
                    required: true,
                    minlength: 3
                },
                shoeprice: {
                    required: true,
                    number: true
                },
                agree: "required"
            },
            messages: {                
                brand: {
                    required: "Please enter a Brand.",
                    minlength: "Your Brand name must be valid."
                },
                style: {
                    required: "Please enter the Style.",
                    minlength: "Your Style must be valid."
                },
                color: {
                    required: "Please enter a Color.",
                    minlength: "Your Color must be valid."
                },
                shoeprice: "Please enter a valid price without the ZAR lettering included.",
                agree: "Please accept our terms & condition."
            }
        });


    });


}();