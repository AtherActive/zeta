let passwordForm;
let passwordV;
let filters = [' ', '=']
let passwordMaxLength = 128
let errormsg = "Your password contains invalid characters or is too long. Max length is 128."

document.addEventListener("DOMContentLoaded", (event) => {
    passwordForm = document.getElementById('password');
    passwordForm.oninput = () => {
        if (check() === false) { displayWarning(errormsg,'pwdwarning') } else { displayWarning('','pwdwarning') }
    }

    passwordV = document.getElementById('passwordv');
    if(passwordV == null) {return}
    passwordV.oninput = () => {
        if (!compare()) { displayWarning('Passwords do not match.','pwdwarningv') } else { displayWarning('','pwdwarningv') }
    }
})

function check() {
    if (passwordForm.value.length > passwordMaxLength) {
        return false
    } else {
        return true
    }
}

function compare() {
    return passwordV.value==passwordForm.value
}


function displayWarning(msg,component) {
    let warning = document.getElementById(component);
    warning.innerHTML = msg
}

async function loadRegister(){
    let loginContainer = document.getElementById('content');
    let url = document.URL.split('/');
    let page = fetch((url[0]+'//'+url[2])+'/register.php')
    let content = (await page).text()
    loginContainer.innerHTML = await content

    new Component()
}