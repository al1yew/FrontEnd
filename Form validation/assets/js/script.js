

let btn = document.getElementById('submit');

btn.addEventListener('click', function () {

    //#region variables
    let email = document.getElementById('email');
    let phone = document.getElementById('phone');
    let surname_input = document.getElementById('surname').value;
    let name_input = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let name_ = document.getElementById('name');
    let surname_ = document.getElementById('surname');
    let age_ = document.getElementById('age');

    let phone_regex = new RegExp(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im);
    let email_regex = new RegExp(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/)

    //#endregion

    //#region phone validation
    if (phone_regex.test(phone.value)) {
        phone.style.boxShadow = '0px 0px 5px 2px green';
    }
    else {
        phone.style.boxShadow = '0px 0px 5px 2px red';
        alert("Enter your phone number in right way!")
    }
    //#endregion

    //#region email validation
    if (email_regex.test(email.value)) {
        email.style.boxShadow = '0px 0px 5px 2px green';
    }
    else {
        alert('Write eMail in right way!');
        email.style.boxShadow = '0px 0px 5px 2px red';
    }

    //#endregion

    //#region name validation

    if (name_input.length < 1) {
        alert('Name must be minimum 1 character');
        name_.style.boxShadow = '0px 0px 5px 2px red';
    }
    else {
        name_.style.boxShadow = '0px 0px 5px 2px green';
    }
    //#endregion

    //#region surname validation

    if (surname_input.length < 1) {
        alert('Surname must be minimum 1 character');
        surname_.style.boxShadow = '0px 0px 5px 2px red';
    }
    else {
        surname_.style.boxShadow = '0px 0px 5px 2px green';
    }
    //#endregion

    //#region age validation

    if (age <= 18) {
        alert('Your age must be at least 18');
        age_.style.boxShadow = '0px 0px 5px 2px red';
    }
    else {
        age_.style.boxShadow = '0px 0px 5px 2px green';
    }

    //#endregion

})