//Using popup
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.6&appId=930671277052791";
  fjs.parentNode.insertBefore(js, fjs);
  OAuth.initialize('3WUmCrIoI-7GsgSO9wjspOArqO0');
  
  OAuth.popup('facebook')
      .done(function(result) {
        console.log(result);
        //use result.access_token in your API request 
        //or use result.get|post|put|del|patch|me methods (see below)
      })
      .fail(function (err) {
        console.log(err);
        //handle error with err
  });
}(document, 'script', 'facebook-jssdk'));







// window.fbAsyncInit = function() {
//     FB.init({
//       appId      : '930671277052791',
//       xfbml      : true,
//       version    : 'v2.6'
//     });
//   };
//   FB.logout(function(response) {
//     // Person is now logged out
//   });
//   (function(d, s, id){
//      var js, fjs = d.getElementsByTagName(s)[0];
//      if (d.getElementById(id)) {return;}
//      js = d.createElement(s); js.id = id;
//      js.src = "//connect.facebook.net/en_US/sdk.js";
//      fjs.parentNode.insertBefore(js, fjs);
//    }(document, 'script', 'facebook-jssdk'));


// FB.getLoginStatus(function(response) {
//     statusChangeCallback(response);
// });

// function checkLoginState() {
//   FB.getLoginStatus(function(response) {
//     statusChangeCallback(response);
//   });
// }



// function statusChangeCallback(response) {
//     console.log('statusChangeCallback');
//     console.log(response);
//     // The response object is returned with a status field that lets the
//     // app know the current login status of the person.
//     // Full docs on the response object can be found in the documentation
//     // for FB.getLoginStatus().
//     if (response.status === 'connected') {
//       // Logged into your app and Facebook.
//       testAPI();
//     } else if (response.status === 'not_authorized') {
//       // The person is logged into Facebook, but not your app.
//       document.getElementById('status').innerHTML = 'Please log ' +
//         'into this app.';
//     } else {
//       // The person is not logged into Facebook, so we're not sure if
//       // they are logged into this app or not.
//       document.getElementById('status').innerHTML = 'Please log ' +
//         'into Facebook.';
//     }
//   }

//   function testAPI() {
//     console.log('Welcome!  Fetching your information.... ');
//     FB.api('/me', function(response) {
//       console.log('Successful login for: ' + response.name);
//       document.getElementById('status').innerHTML =
//         'Thanks for logging in, ' + response.name + '!';
//     });
//   }

  
