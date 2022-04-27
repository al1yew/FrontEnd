

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
    // if (phone_regex.test(phone.value)) {
    //     phone.style.boxShadow = '0px 0px 5px 2px green';
    // }
    // else {
    //     phone.style.boxShadow = '0px 0px 5px 2px red';
    //     alert("Enter your phone number in right way!")  //belede olar
    //     // let p = document.createElement('p');            // belede olar
    //     // p.setAttribute('id', 'p');                      // amma yaxshisi yaradib d-none vermekdi
    //     // p.innerHTML = "Enter in right Way!"
    //     // elements.append(p);

    // }
    //#endregion

    //#region email validation
    if (email_regex.test(email.value)) {
        email.style.boxShadow = '0px 0px 5px 2px green';
        document.getElementById('email_p').classList.remove('email_p_active');
    }
    else {
        // alert('Write eMail in right way!');
        document.getElementById('email_p').classList.add('email_p_active');
        email.style.boxShadow = '0px 0px 5px 2px red';
    }

    //#endregion

    // //#region name validation

    // if (nnname.length < 1) {
    //     alert('Name must be minimum 1 character')
    // }
    // else {
    //     nnname.style.boxShadow = '0px 0px 5px 2px green';
    // }
    // //#endregion

    // //#region surname validation

    // if (sssurname.length < 1) {
    //     alert('Surname must be minimum 1 character')
    // }
    // else {
    //     sssurname.style.boxShadow = '0px 0px 5px 2px green';
    // }
    // //#endregion

    // //#region age validation

    // if (age <= 18) {
    //     alert('Your age must be at least 18')
    // }
    // else {
    //     age.style.boxShadow = '0px 0px 5px 2px green';
    // }

    // //#endregion

})