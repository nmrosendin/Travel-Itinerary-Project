$(document).ready(function(){

    $("#submitButton").click(function(){
        console.log("hi");
        window.location.href="travel_submit_itinerary.html"
    });

    $("#myProfile").click(function(){
        console.log("hi");
        window.location.href="profile.html"
    });

    $("#home").click(function(){
        console.log("hi");
        window.location.href="index.html"
    });

    $('#searchBox').click(function(e){
         e.preventDefault();
         var str = $('#search_location').val();
         console.log(str);
    });

// var str = $('#search_submit').val();
    // var ref = new Firebase("https://amber-heat-5381.firebaseio.com/");
    // ref.authWithOAuthPopup("facebook", function(error, authData) { d93713f82b19709de0f521137e0cab03 }, {
    //     remember: "sessionOnly",
    //     scope: "email,user_likes"
    // });

    var user = ref.getAuth();
        if (user==null) {
      //user not logged in
            console.log('notloggedin');
            $("#logout").hide();
            $("#FB").show();
            $('#myProfile').hide();
            $('#submitButton').hide();
            $('#home').hide();
        } else {
            console.log('loggedin');
            $("#logout").show();
            $("#FB").hide();
        }

    $("#FB").click(function(){
        var ref = new Firebase("https://amber-heat-5381.firebaseio.com/");
        ref.authWithOAuthPopup("facebook", function(error, authData) {
            if (error) {
                console.log("Login Failed!", error);
            } else {
                console.log("Authenticated successfully with payload:", authData);
                window.location.reload(true);
            }
        });
    });

    $("#logout").click(function(){
        console.log("logmeout");
        ref.unauth();
        window.location.href="index.html"
    });
 });
