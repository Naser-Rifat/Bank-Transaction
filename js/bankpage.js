document.getElementById('submit-btn').addEventListener('click', function () {

    const emailFiled = document.getElementById('email-filed');
    const userEmail = emailFiled.value;
    // console.log(emailFiled.value);

    const passwordFiled = document.getElementById('password-filed');
    const userPassword = passwordFiled.value;
    // console.log(passwordFiled.value);

    if (userEmail == 'rifat@gmail.com' && userPassword == 'rifat') {
        window.location.href = "newbank.html";


    }

    else {
        console.log('error');
    }
});