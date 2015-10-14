$(document).ready(function(){
 console.log("hi");

    $("#submitButton").click(function(){
        console.log("hiii");
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
    function seeAll(destination) {
        ref.orderByChild("destination").equalTo(destination).on("child_added", function(snapshot) {
            // var data = snapshot.val();
            document.location.href = './view_itinerary.html?' + destination
        });
    }

    //See all button takes you to see all itineraries
    $('#see_All').click(function(){
         document.location.href = 'viewall.html'
         console.log('hi');
    });


    //on submit, takes the value inside the search and uses it to get values
    $('#see_All').click(function(){
         document.location.href = 'viewall.html'
         console.log('HEY');
         // e.preventDefault();
         // var str = $('#search_location').val();
         // console.log(str);
         // seeAll(str);
    });

    ref.orderByChild("timestamp").limitToLast(10).on("child_added", function(snapshot) {
        var data = snapshot.val();
        console.log(data.photo);
            // <div class="item"></></div>
        $('#owl-demo').append("<div class='item'><a href='./view_itinerary.html?" + data.destination +  "'><img src = '"+ data.photo +"'/><div class='inner'>" + data.destination + "</div></a></div>");
    });

    setTimeout(function() {
        $("#owl-demo").owlCarousel({
            autoPlay: 2000, //Set AutoPlay to 3 seconds
            items : 4,
            itemsDesktop : [1199,3],
            itemsDesktopSmall : [979,3]
        });
    }, 800);

    var ref = new Firebase("https://amber-heat-5381.firebaseio.com");
     //console.logs the information about destination.
     function searchForDestination(destination) {
         ref.orderByChild("destination").equalTo(destination).on("child_added", function(snapshot) {
             // var data = snapshot.val();
             document.location.href = './searchfor.html?' + destination;
         });
     }
     //on submit, takes the value inside the search and uses it to get values
     $('#searchBox').submit(function(e){
          e.preventDefault();
          var str = $('#search_location').val();
          console.log(str);
          searchForDestination(str)
     });

    //  ref.orderByChild("timestamp").limitToLast(10).on("child_added", function(snapshot) {
    //      var data = snapshot.val();
    //      console.log(data.photo);
    //          // <div class="item"></></div>
    //      var css="background-image:url('"+ data.photo +"');";
    //      console.log(css);
    //      $('#owl-demo').append("<a class='item' href='./view_itinerary.html?" + data.destination +  "'><div class='inner' style="+ css + ">" + data.destination + "</div></a>");
    //  });

    //user is logged in
    function loggedin(imageUrl) {
        console.log('loggedin');
        $("#logout").show();
        $("#FB").hide();
        $('#home').show();
        $('#myProfile').show();
        console.log('testpic');
        $("#profilecontainer").append('<div id="profile_div"><img id="kittens" src="' + imageUrl + '"/></div>');
         console.log('my profile pic1');
        $("#profilecontainer").append('<div id="name_div"><img id="myName" src="' + 'name' + '"/></div>');
        console.log('my name');
    }

    var ref = new Firebase("https://amber-heat-5381.firebaseio.com/");
    var user = ref.getAuth();
    console.log(user);
    if (user==null) {
    //user not logged in
        console.log('notloggedin');
        $("#logout").hide();
        $("#FB").show();
        $('#myProfile').hide();
        $('#home').show();
        $('#submitButton').show();

    } else {
      var info = user.uid.split(":")
      var id = info[1];
      loggedin("https://graph.facebook.com/" + id + "/picture");
      loggedin("https://graph.facebook.com/" + id + "/name");
    }

    $("#FB").click(function(){
        ref.authWithOAuthPopup("facebook", function(error, authData) {
            console.log('loginactions');
            if (error) {
                console.log("Login Failed!", error);
            } else {
                console.log("Authenticated successfully with payload:", authData);
                //window.location.reload(true);
                //on successful login, display user profile picture
                loggedin(authData.facebook.profileImageURL);
                loggedin(authData.facebook.'name');



            };
        });
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

    var button = document.getElementsByClassName("buttonhead");

    for (var i=0; i<button.length; i++) {

      (function (showbutton) {
        button[i].addEventListener("mouseover", function(e) {e.preventDefault();
          button[showbutton].style.color = "white";
          button[showbutton].style.backgroundColor = "#34b3a0";
          button[showbutton].style.height = '34px';
        }, 'false');
        button[i].addEventListener("mouseout", function(e) {e.preventDefault();
          button[showbutton].style.backgroundColor = "white";
          button[showbutton].style.color = "#34b3a0";
          button[showbutton].style.height = '34px';

        }, 'false');
        // button[i].addEventListener("click", function(e) {e.preventDefault();
        //   alert ("Under construction...")}, 'false');
    }) (i);
    }
});
