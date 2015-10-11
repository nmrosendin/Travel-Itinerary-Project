$(document).ready(function(){

    $("#submitButton").click(function(){
        console.log("hi");
        window.location.href="Travel-Itinerary-Project/travel_submit_itinerary.html"
    });

    $("#myProfile").click(function(){
        console.log("hi");
        window.location.href="profile.html"
    });

    $("#home").click(function(){
        console.log("hi");
        window.location.href="index.html"
    });


// var str = $('#search_submit').val();
    // var ref = new Firebase("https://amber-heat-5381.firebaseio.com/");
    // ref.authWithOAuthPopup("facebook", function(error, authData) { d93713f82b19709de0f521137e0cab03 }, {
    //     remember: "sessionOnly",
    //     scope: "email,user_likes"
    // });

    var ref = new Firebase("https://amber-heat-5381.firebaseio.com/");
    var user = ref.getAuth();
        if (user==null) {
        //user not logged in
            console.log('notloggedin');
            $("#logout").hide();
            $("#FB").show();
            $('#myProfile').hide();
            $('#home').hide();
            $('#submitButton').hide();

        } else {
         //user is logged in
            console.log('loggedin');
            $("#logout").show();
            $("#FB").hide();
        }

    $("#FB").click(function(){
        ref.authWithOAuthPopup("facebook", function(error, authData) {
            if (error) {
                console.log("Login Failed!", error);
            } else {
                console.log("Authenticated successfully with payload:", authData);
                window.location.reload(true);
                //on successful login, display user profile picture
                function newprofilediv() {
                var newprofilediv = $("<div id='mynewprofilediv'></div>");
                var image = 'http://peanutonthetable.com/wp-content/uploads/2013/01/happy-puppy.jpg';
                    $('#FB').click(function () {
                        console.log('hi');
                        $(".homeHeader").append(newprofilediv);
                        $(newprofilediv).append(image);
                    });
                };
        };
     });

    $("#logout").click(function(){
        console.log("logmeout");
        ref.unauth();
        window.location.href="index.html"
        $("#logout").hide();
        $("#FB").show();
        $('#myProfile').hide();
        $('#home').hide();
    });
});
