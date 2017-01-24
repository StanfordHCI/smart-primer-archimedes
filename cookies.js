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

function findAndReplaceName() {
    document.body.innerHTML = document.body.innerHTML.str(/%%NAME%%/g, getCookie(name))
}