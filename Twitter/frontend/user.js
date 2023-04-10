var profil = localStorage.getItem("username");
document.getElementById("user-connected").innerText =profil;
var xhr = new XMLHttpRequest();
xhr.open("POST","http://127.0.0.1:5000/"+profil);
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
xhr.onload = () => {
if (xhr.status === 200) {
  var tweets = JSON.parse(xhr.response)
  for(i=tweets.length-1;i>=0;i--){
    if(tweets[i].profil==localStorage.getItem("username")){

      var action =document.createElement("p");
      action.setAttribute("id", "action")
      action.setAttribute("class", "action")
      action.innerText =localStorage.getItem("username") + " a tweeté";
      document.getElementById("tweets").appendChild(action)

      var newtweet = document.createElement("div");
      newtweet.setAttribute("id", "tweet")
      newtweet.setAttribute("class", "tweet")
      document.getElementById("tweets").appendChild(newtweet)

      var newuser = document.createElement("div");
      newuser.setAttribute("id", "user");
      newtweet.appendChild(newuser)

      var newuserphoto =  document.createElement("img");
      newuserphoto.setAttribute("id", "photo-auteur")
      newuserphoto.src = "user-photo.png";
      newuser.appendChild(newuserphoto)

      var newusername = document.createElement("p");
      newusername.setAttribute("id", "auteur")
      newusername.innerText = tweets[i].profil;
      newuser.appendChild(newusername)

      var newtweettheme = document.createElement("p");
      newtweettheme.setAttribute("id", "sujet")
      newtweettheme.innerText = "#"+tweets[i].sujet;
      newuser.appendChild(newtweettheme)

      var newtweetcorps = document.createElement("p");
      newtweetcorps.setAttribute("id", "corps")
      newtweetcorps.innerText = tweets[i].corps;
      newtweet.appendChild(newtweetcorps)
    }
  }
  let bodyElements = document.getElementsByClassName("tweet");
  console.log(bodyElements.length)
    for (let i = 0; i < bodyElements.length; i++) {
      if(bodyElements[i].id == 'action'){
        var newtweetcorps = document.createElement("p");
        newtweetcorps.setAttribute("id", "corps")
        bodyElements[i].innerText =localStorage.getItem("username") + " a tweeté";
      }
    }
}
else {
  console.log(`Error: ${xhr.status}`);
}};
xhr.send();



function goprincipal() {
    let elements = document.getElementsByTagName("body");
    for (let i = 0; i < elements.length; i++) {
      elements[i].classList.add("fade-out");
    }
    setTimeout(function() {
        window.location.href='index.html';
    }, 700);
  }