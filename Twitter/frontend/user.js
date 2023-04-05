profil = localStorage.getItem("username");
document.getElementById("user-connected").innerText =profil;



function tweets(){
var xhr = new XMLHttpRequest();
xhr.open("GET","http://127.0.0.1:5000/tweeter/"+ profil);
  xhr.onload = () => {
    if (xhr.status === 200) {
      /*console.log("200 !!!")
      var newtweet = document.createElement("div");
      newtweet.setAttribute("id", "tweet")
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
      newusername.innerText = "zzz";
      newuser.appendChild(newusername)

      var newtweettheme = document.createElement("p");
      newtweettheme.setAttribute("id", "sujet")
      newtweettheme.innerText = "#"+"sujet";
      newuser.appendChild(newtweettheme)

      var newtweetcorps = document.createElement("p");
      newtweetcorps.setAttribute("id", "corps")
      newtweetcorps.innerText = "deded";
      newtweet.appendChild(newtweetcorps)*/
      console.log(xhr.responseText)
  }
  else {
    console.log(`Error: ${xhr.status}`);
  }
};
xhr.send();
}

const bodyElements = document.querySelectorAll('body *');
    for (let i = 0; i < bodyElements.length; i++) {
      if(bodyElements[i].id == 'action'){
        bodyElements[i].innerText =localStorage.getItem("username") + " a tweeté";
      }
    }

function goprincipal() {
    let elements = document.getElementsByTagName("body");
    for (let i = 0; i < elements.length; i++) {
      elements[i].classList.add("fade-out");
    }
    setTimeout(function() {
        window.location.href='index.html';
    }, 700);
  }
