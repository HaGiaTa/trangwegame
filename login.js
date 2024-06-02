// let acc = [
//     {
//         id: 1,
//         email: "admin@gmail.com",
//         username: "admin",
//         password: "admin",
//     },
//     {
//         id: 2,
//         email: "admin2@gmail.com",
//         username: "admin2",
//         password: "admin2",
//     }
// ];
// localStorage.setItem('account', JSON.stringify(acc));





var dataAcc = JSON.parse(localStorage.getItem('account'));
function checkEmail(email, password, type) {
    console.log('dataAccount');
    var exists = false;

    for (let i = 0; i < dataAcc.length; i++) {
        if (email === dataAcc[i].email) {
            if (type === 'login') {
                if (password === dataAcc[i].password) {
                    return exists = true;
                } else {
                    return exists;
                }
            }
            return exists = true;
        }
    }
    return exists;

}




function handlelogin() {
    event.preventDefault();
    let valueEmail = document.getElementById('signup-email').value;
    let valuePassword = document.getElementById('signup-password').value;

    if (valueEmail !== '' || valuePassword !== '') {
        if (checkEmail(valueEmail, valuePassword, 'login')) {
            alert('Login success')
            window.location.href = 'index.html';
        } else {
            alert('Login fail')
        }

    } else {
        alert('please enter your value')
    }


}



function handleRegister() {
    event.preventDefault()
    let valueEmail = document.getElementById('signup-email2').value;
    let valuePassword = document.getElementById('signup-password2').value;
    let valueConfirmpw = document.getElementById('signup-Confirmpw').value;

    if (valueEmail !== '' || valuePassword !== '' || valueConfirmpw !== '') {
        if (checkEmail(valueEmail)) {
            alert('Email already exists !')
        } else {
            if (valuePassword === valueConfirmpw) {
                dataAcc.push({
                    id: dataAcc.length + 1,
                    email: valueEmail,
                    password: valuePassword
                })
                localStorage.setItem('account', JSON.stringify(dataAcc));
                alert('Register Successfully')
                window.location.href = 'login.html'
            } else {
                alert('Confirm Password Failed');
            }
        }
    } else {
        alert('Please Enter Email and Password!');
    }


}