// Initialize Firebase
var config = {
    apiKey: "AIzaSyDS0RtCRlEo3Df30K6fM6MZCBDBtsbBxlw",
    authDomain: "smart-primer-archimedes.firebaseapp.com",
    databaseURL: "https://smart-primer-archimedes.firebaseio.com",
    storageBucket: "smart-primer-archimedes.appspot.com",
    messagingSenderId: "1096269521328"
};
firebase.initializeApp(config);


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function identity(string) {
    return string;
}

function findAndReplaceName() {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            var userID = firebase.auth().currentUser.uid;
            firebase.database().ref('/users/'+userID).once('value').then( function(snapshot) { 
                var currentHTML = document.body.innerHTML;
                var value = snapshot.val();
                var replacements = [["%%NAME%%", identity, "name"],
                                    ["%%POS%%", identity, "possessive"],
                                    ["%%SUBPRO%%", identity, "subject_pronoun"],
                                    ["%%OBJPRO%%", identity, "object_pronoun"],
                                    ["%%POS_CAP%%", capitalizeFirstLetter, "possessive"],
                                    ["%%SUBPRO_CAP%%", capitalizeFirstLetter, "subject_pronoun"]];

                // for each replacement triple
                for (var i = 0; i < replacements.length; i++) {
                    replacement = replacements[i];
                    var regex = new RegExp(replacement[0], "g");
                    var func = replacement[1];
                    console.log(replacement);
                    currentHTML = currentHTML.replace(regex, func(value[replacement[2]]));
                }

                document.body.innerHTML = currentHTML;
            });
        } else {
        // No user is signed in.
        }
    });

    
}