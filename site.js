$(document).ready(function(){
 console.log("hi");

 //test
    $("#FB").click(function(){
        $("#container").append('<div id="pro_div"><img id="img_div" src="facebook.profileImageURL" height="42" width="42"/></div>');
        console.log('my profile pic1');
     });
 //end test
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

// carousel
    var ref = new Firebase("https://amber-heat-5381.firebaseio.com");
    //console.logs the information about destination.
    function searchForDestination(destination) {
        ref.orderByChild("destination").equalTo(destination).on("child_added", function(snapshot) {
            // var data = snapshot.val();
            document.location.href = './view_itinerary.html?' + destination
        });
    }
    //on submit, takes the value inside the search and uses it to get values
    $('#searchBox').submit(function(e){
         e.preventDefault();
         var str = $('#search_location').val();
         console.log(str);
         searchForDestination(str);
    });

    ref.orderByChild("timestamp").limitToLast(10).on("child_added", function(snapshot) {
        var data = snapshot.val();
        console.log(data.photo);
            // <div class="item"></></div>
        $('#owl-demo').append('<a class="item" href="./view_itinerary.html?' + data.destination +  '"><img src="' + data.photo + '"/><td class=inner>Destination: ' + data.destination + '<br> Date: '+ data.depart +'</td></a>');
    });

    setTimeout(function() {
        $("#owl-demo").owlCarousel({
            autoPlay: false, //Set AutoPlay to 3 seconds
            items : 4,
            itemsDesktop : [1199,3],
            itemsDesktopSmall : [979,3]
        });
    }, 800);


    // var data = snapshot.val();
    // console.log(snapshot.val);
    // for (var i = 0; i < data.length; i++) {
    //  $('#owl-demo').append('<td>Destination: ' + data[i] + '<br> Date: '+ data[i] +'</td>' );
    // }

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
                var image = authData.facebook.profileImageURL;
                    $("#FB").click(function(){
                    $("#container").append('<div id="pro_div"><img id="img_div" src="' + image + '" height="42" width="42"/></div>');
                    console.log('my profile pic1');
                    });
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
});

