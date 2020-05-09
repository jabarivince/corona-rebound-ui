function setUpFirebase() {
  var firebaseConfig = {
    apiKey: "AIzaSyBJgE1tubVU5ud0AQUGN4e2bRAVBO_k43c",
    authDomain: "corona-rebound.firebaseapp.com",
    databaseURL: "https://corona-rebound.firebaseio.com",
    projectId: "corona-rebound",
    storageBucket: "corona-rebound.appspot.com",
    messagingSenderId: "1077806466597",
    appId: "1:1077806466597:web:b9a3d6eef2d99816c6a1cc",
    measurementId: "G-YWYFVNKYKH"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
}

function setupTwitter() {
  !function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
  },s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='//static.ads-twitter.com/uwt.js',
  a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');

  twq('init','o3oq8');
  twq('track','PageView');
}

function handleAds() {
  window.addEventListener('load', function () {
    let iframes = document.getElementsByTagName('iframe')

    let topBanner = iframes[0]
    let bottomBanner = iframes[1]

    if (screen.width < topBanner.width) {
      topBanner.width = screen.width
      topBanner.src = topBanner.src

      bottomBanner.width = screen.width
      bottomBanner.src = bottomBanner.src
    }
  })
}
