
//#region search

let arrow = document.getElementById('search');

let search = document.getElementById('search_engine');

let quit = document.getElementById('quit');

quit.onclick = function() {
    search.classList.add('for_visibility')
}

arrow.onclick = function () {

    if (search.classList.contains('for_visibility')) {
        search.classList.remove('for_visibility')
    }
    else{
        search.classList.add('for_visibility')
    }
}
//#endregion


