

let btn = document.getElementById('submit');

btn.addEventListener('click', function () {

    //#region variables
    let email = document.getElementById('email');
    let phone = document.getElementById('phone');
    let sssurname = document.getElementById('surname').value;
    let nnname = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let elements = document.getElementById('all');

    let phone_regex = new RegExp(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im);
    let email_regex = new RegExp(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/)

    // console.log(email_regex.test(email.value));
    //#endregion

    //#region phone validation
    if (phone_regex.test(phone.value)) {
        document.getElementById('p_number').classList.add('d-none');
        phone.style.boxShadow = '0px 0px 5px 2px green';
    }
    else {
        phone.style.boxShadow = '0px 0px 5px 2px red';
        // alert("Enter your phone number in right way!")  //belede olar
        // let p = document.createElement('p');            // belede olar
        // p.setAttribute('id', 'p');                      // amma yaxshisi yaradib d-none vermekdi
        // p.innerHTML = "Enter in right Way!"
        // elements.append(p);
        document.getElementById('p_number').classList.remove('d-none');
    }
    //#endregion

    //#region email validation
    if (email_regex.test(email.value)) {
        document.getElementById('p_email').classList.add('d-none');
        email.style.boxShadow = '0px 0px 5px 2px green';
    }
    else {
        // alert('Write eMail in right way!');
        email.style.boxShadow = '0px 0px 5px 2px red';
        document.getElementById('p_email').classList.remove('d-none');
    }

    //#endregion

    //#region name validation

    if (nnname.length < 1) {
        // alert('Name must be minimum 1 character');
        document.getElementById('p_name').classList.remove('d-none');
    }
    else {
        // nnname.style.boxShadow = '0px 0px 5px 2px green';
        document.getElementById('p_name').classList.add('d-none');
    }
    //#endregion

    //#region surname validation

    if (sssurname.length < 1) {
        // alert('Surname must be minimum 1 character');
        document.getElementById('p_surname').classList.remove('d-none');
    }
    else {
        document.getElementById('p_surname').classList.add('d-none');
        // sssurname.style.boxShadow = '0px 0px 5px 2px green';
    }
    //#endregion

    //#region age validation

    if (age <= 18) {
        // alert('Your age must be at least 18');
        document.getElementById('p_age').classList.remove('d-none');
    }
    else {
        document.getElementById('p_age').classList.add('d-none');
        age.style.boxShadow = '0px 0px 5px 2px green';
    }

    //#endregion

})