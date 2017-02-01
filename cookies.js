function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var user = getCookie("name");
    if (user != "") {
        alert("Welcome again " + user);
    } else {
        alert("Go to the introduction page."); // todo: fail gracefully
    }
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function findAndReplaceName() {
    var possessive = getCookie("possessive");
    var subject = getCookie("subject_pronoun");
    document.body.innerHTML = document.body.innerHTML.replace(/%%NAME%%/g, getCookie("name"));
    document.body.innerHTML = document.body.innerHTML.replace(/%%POS%%/g, possessive);
    document.body.innerHTML = document.body.innerHTML.replace(/%%SUBPRO%%/g, subject);
    document.body.innerHTML = document.body.innerHTML.replace(/%%OBJPRO%%/g, getCookie("object_pronoun"));

    // capitals
    document.body.innerHTML = document.body.innerHTML.replace(/%%POS_CAP%%/g, capitalizeFirstLetter(possessive));
    document.body.innerHTML = document.body.innerHTML.replace(/%%SUBPRO_CAP%%/g, capitalizeFirstLetter(subject));
}