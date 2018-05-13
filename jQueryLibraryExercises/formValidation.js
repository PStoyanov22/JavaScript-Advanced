function validate() {
    let username = $('#username');
    let email = $('#email');
    let password = $('#password');
    let confirmPass = $('#confirm-password');
    let checkBox = $('#company');
    let companyInfo = $('#companyInfo');
    let companyNumber = $('#companyNumber');

    let submitBtn = $('#submit');

    let validForm = $('#valid');
    let allValid = true;

    let userRegex = /^[A-Za-z\d]{3,20}$/g;
    let emailRegex = /^\w+@.*?\..*?$/g;
    let passReg = /^\w{5,15}$/g;
    let confirmPassReg = /^\w{5,15}$/g;


    checkBox.on('change', function(){
        if (checkBox.is(':checked')) {
            companyInfo.css('display', 'block');
        }else{
            companyInfo.css('display', 'none');
        }
    });


    submitBtn.on('click', function(event){
        event.preventDefault();
        validateForm();

        validForm.css('display', allValid ? 'block' : 'none');
        allValid = true;
    });



    function validateForm() {
        valid(username, userRegex);
        valid(email, emailRegex);
        if(password.val() === confirmPass.val()){
            valid(password, passReg);
            valid(confirmPass, confirmPassReg);
        }else{
            password.css('border', 'solid red');
            confirmPass.css('border', 'solid red');
            allValid = false;
        }
        if (checkBox.is(':checked')){
            validateCompanyInfo()
        }

    }

    function valid(input, regex) {
        if (!regex.test(input.val())) {
            input.css('border', 'solid red');
            allValid = false;

        } else {
            input.css('border', 'none');
        }

    }

    function validateCompanyInfo() {
        let numValue = Number(companyNumber.val());
        if (numValue >= 1000 && numValue <= 9999) {
            companyNumber.css("border", "none");
        } else {
            companyNumber.css("border", "solid red");
            allValid = false;
        }
    }

}