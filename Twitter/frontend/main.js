document.getElementById("user-connected").innerText =localStorage.getItem("username")+" est actuellement connécté"
document.getElementById("sujet-selected").value =localStorage.getItem("sujet");
function tweeter(){
   
    if(document.getElementById("corps").value.length != 0){
        var id = Date.now();
        console.log("id:", id);
        var corps = document.getElementById("corps").value;
        var profil = localStorage.getItem("username");
        var sujet = localStorage.getItem("sujet");
        var xhr = new XMLHttpRequest();
        xhr.open("POST","http://127.0.0.1:5000/tweeter/"+profil+"/"+corps+"/"+sujet+"/"+id);
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

                var newtweettheme = document.createElement("p");
                newtweettheme.setAttribute("id", "sujet")
                newtweettheme.innerText = "#"+sujet;
                newuser.appendChild(newtweettheme)

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

                console.log(xhr.responseText)
            }
            else {
                console.log(`Error: ${xhr.status}`);
            }
        };
        xhr.send();
    }  
}

function changeuser(){
    if(document.getElementById("connect-user").value.length != 0){
        localStorage.setItem("username",document.getElementById("connect-user").value)
        document.getElementById("user-connected").innerText = localStorage.getItem("username") + " est actuellement connecté"
        var xhr = new XMLHttpRequest();
        var id = 0;
        var profil = localStorage.getItem("username");
        xhr.open("POST","http://127.0.0.1:5000/user/"+profil+"/"+id);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
        xhr.onload = () => { 
            if (xhr.status == 200) {
                alert("username modifié")
                console.log(xhr.responseText)
            }
            else {
                console.log(`Error: ${xhr.status}`);
            }
        };
        xhr.send();
    }
    else{
        alert("veuillez saisir un utilisateur")
    }
}

function changetheme(){
    localStorage.setItem("sujet",document.getElementById("select-theme").value)
}

function selecttheme(){
    localStorage.setItem("sujet",document.getElementById("sujet-selected").value)
}
sujet_selected=document.getElementById("sujet-selected")
sujet_selected.addEventListener('change', selecttheme);



function gouser() {
    let elements = document.getElementsByTagName("body");
    for (let i = 0; i < elements.length; i++) {
      elements[i].classList.add("fade-out");
    }
    setTimeout(function() {
        window.location.href='user.html';
    }, 700);
    
  }

  function alltweets(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET","http://127.0.0.1:5000/tweeter");
    xhr.onload = () => {
        if (xhr.status == 200) {
           for(let i=0;i<xhr.response.length;i++){
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
            newusername.innerText = "profil";                   // Pouvoir recuperer via redis le profil ayant tweeté
            newuser.appendChild(newusername)

            var newtweetcorps = document.createElement("p");
            newtweetcorps.setAttribute("id", "corps")
            newtweetcorps.innerText = "corps";                  // Pouvoir recuperer via redis le corps du tweet
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

            console.log(xhr.responseText)
        }
    }
    else {
        console.log(`Error: ${xhr.status}`);
    }
    };
    xhr.send();
  }