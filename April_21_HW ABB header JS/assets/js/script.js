
//#region search

let arrow = document.getElementById('search');

let search = document.getElementById('search_engine');

let quit = document.getElementById('quit');

quit.onclick = function () {
    search.classList.add('for_visibility')
}

arrow.onclick = function () {

    if (search.classList.contains('for_visibility')) {
        search.classList.remove('for_visibility')
    }
    else {
        search.classList.add('for_visibility')
    }
}
//#endregion


let langs = document.getElementById('langs_shadow');

let lang_btn = document.getElementById('lang')


lang_btn.onclick = function () {

    if (langs.classList.contains('for_visibility1')) {
        langs.classList.remove('for_visibility1')
    }
    else {
        langs.classList.add('for_visibility1')
    }
}





let btn = document.getElementById('tap_it');

let languages = document.getElementById('hidden_langs');

btn.onclick = function() {

    if (languages.classList.contains('hide_show')) {
        languages.classList.remove('hide_show')
    }
    else {
        languages.classList.add('hide_show')
    }
}












