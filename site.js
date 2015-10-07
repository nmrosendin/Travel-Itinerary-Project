$(document).ready(function(){

    $("#submitButton").click(function(){
        console.log("hi");
        window.location.href="travel_submit_itinerary.html"
    });
});

$(document).ready(function(){

    $("#myProfile").click(function(){
        console.log("hi");
        window.location.href="profile.html"
    });
});

$(document).ready(function(){

    $("#home").click(function(){
        console.log("hi");
        window.location.href="landingpage.html"
    });
});

$(document).ready(function(){

    // var ref = new Firebase("https://amber-heat-5381.firebaseio.com/");
    // ref.authWithOAuthPopup("facebook", function(error, authData) { d93713f82b19709de0f521137e0cab03 }, {
    //     remember: "sessionOnly",
    //     scope: "email,user_likes"
    // });

    $("#FB").click(function(){
        var ref = new Firebase("https://amber-heat-5381.firebaseio.com/");
        ref.authWithOAuthPopup("facebook", function(error, authData) {
            if (error) {
                console.log("Login Failed!", error);
            } else {
                console.log("Authenticated successfully with payload:", authData);
                    }
            });
        });
    });
