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
                    minlength: 1
                },
                purdate: {
                    required: true,
                    dateISO: true
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
                    minlength: "Please enter a Brand."
                },
                style: {
                    required: "Please enter a Style.",
                    minlength: "Please enter a Style."
                },
                color: {
                    required: "Please enter a Color.",
                    minlength:  "Please enter a Color."
                },
                purdate: {
                    required: "Please enter the date of purchase.",
                    dateISO:  "Please enter a date in the format YYYY-MM-DD."
                },
                shoeprice: {
                    required: "Please enter a price (leave out currency).",
                    number:  "Please enter the price without the currency (e.g 199 instead of R199)."
                },
                agree: "Please accept our terms & condition."
            }
        });

        
})


    }();


