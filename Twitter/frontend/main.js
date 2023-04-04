document.getElementById("user-connected").innerText =localStorage.getItem("username")+" est actuellement connécté"

function tweeter(){
   
    if(document.getElementById("corps").value.length != 0){
        var corps = document.getElementById("corps").value;
        var profil = localStorage.getItem("username");
        const xhr = new XMLHttpRequest();
        xhr.open("POST","http://127.0.0.1:5000/tweeter/"+profil+"/"+corps);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
        xhr.onload = () => {
            if (xhr.status == 200) {
                alert("c'est tweeté ! : ");
                var newtweet = document.createElement("div");
                newtweet.setAttribute("id", "tweet")
                document.getElementById("tweets").appendChild(newtweet)

                var newuser = document.createElement("div");
                newuser.setAttribute("id", "user")
                newtweet.appendChild(newuser)

                var newuserphoto =  document.createElement("img");
                newuserphoto.setAttribute("id", "photo-auteur")
                newuserphoto.src = "user-photo.png";
                newuser.appendChild(newuserphoto)

                var newusername = document.createElement("p");
                newusername.setAttribute("id", "auteur")
                newusername.innerText = profil;
                newuser.appendChild(newusername)

                var newtweetcorps = document.createElement("p");
                newtweetcorps.setAttribute("id", "corps")
                newtweetcorps.innerText = corps;
                newtweet.appendChild(newtweetcorps)

                var buttons = document.createElement("div");
                buttons.setAttribute("class", "buttons")
                newtweet.appendChild(buttons)

                var likebutton = document.createElement("button");
                likebutton.setAttribute("id", "like")
                likebutton.innerText = "❤️";
                buttons.appendChild(likebutton)

                var retweetbutton = document.createElement("button");
                retweetbutton.setAttribute("id", "retweet")
                retweetbutton.innerText = "🔁";
                buttons.appendChild(retweetbutton)
            }
            else {
                console.log(`Error: ${xhr.status}`);
            }
        };
        xhr.send("ok");
    }  
}

function changeuser(){
    if(document.getElementById("connect-user").value.length != 0){
        localStorage.setItem("username",document.getElementById("connect-user").value)
        alert("username modifié")
        document.getElementById("user-connected").innerText = localStorage.getItem("username") + " est actuellement connecté"
    }
    else{
        alert("veuillez saisir un utilisateur")
    }
}


function gouser() {
    let elements = document.getElementsByTagName("body");
    for (let i = 0; i < elements.length; i++) {
      elements[i].classList.add("fade-out");
    }
    setTimeout(function() {
        window.location.href='user.html';
    }, 700);
    
  }