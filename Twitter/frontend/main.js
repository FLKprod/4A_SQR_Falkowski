document.getElementById("user-connected").innerText =localStorage.getItem("username")+" est actuellement connécté"

// Affichage de tous les tweets -----------------------------------------------------------------------------------------------


if (localStorage.getItem("sujet") == null){
    localStorage.setItem("sujet","Globale")
    
}
else{
    document.getElementById("theme-selected").innerHTML =localStorage.getItem("sujet");
    document.getElementsByClassName("textarea-interface").value=localStorage.getItem("sujet");
}

var xhr = new XMLHttpRequest();
xhr.open("POST","http://127.0.0.1:5000/all_tweets");
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
xhr.onload = () => {
    if (xhr.status === 200) {
    var tweets = JSON.parse(xhr.response)
    for(i=tweets.length-1;i>0;i--){
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
        let elements = document.getElementsByClassName("tweet");

        var sujets = []
        for (let i = 0; i < elements.length; i++) {
            var sujetElement = elements[i].querySelector("#sujet");
            sujet=sujetElement.textContent
            console.log(sujet)
            sujets.push(sujet)
        }
        var sujets = sujets.filter((value, index, self) => {
            return self.indexOf(value) === index;
        });
        console.log(" LES SUJETS : " +sujets)
    
        var options = document.getElementsByTagName("option")
        var dejavu=false
        for(let j=0;j<sujets.length;j++){
            if(sujets[j]!="#Globale"){
            for(let k=0;k<options.length;k++){
                console.log(sujets[j] + " et " + options[k].textContent)
                if(sujets[j]==options[k].textContent){
                    dejavu = true
                }
            }
            if(dejavu==false){
                var option = document.createElement("option");
                option.innerHTML=sujets[j];
                document.getElementById("all-themes").appendChild(option)
            }
        }
    }
    }
    else {
        console.log(`Error: ${xhr.status}`);
    }
};
xhr.send();

// ---------------------------------------------------------------------------------------------------------------------




// pouvoir tweeter -----------------------------------------------------------------------------------------------------

function tweeter(){
    if(document.getElementById("corps").value.length != 0){
        var id = Date.now();
        var corps = document.getElementById("corps").value;
        var profil = localStorage.getItem("username");
        var sujet = localStorage.getItem("sujet").substring(1);
        var xhr = new XMLHttpRequest();
        xhr.open("POST","http://127.0.0.1:5000/tweeter/"+profil+"/"+corps+"/"+sujet+"/"+id);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
        xhr.onload = () => {
            if (xhr.status == 200) {
                alert("c'est tweeté !");
                var newtweet = document.createElement("div");
                newtweet.setAttribute("id", "tweet")
                tweets = document.getElementById("tweets")
                tweets.insertBefore(newtweet, tweets.firstChild);

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

// ---------------------------------------------------------------------------------------------------

// changer l'utilisateur -----------------------------------------------------------------------------

function changeuser(){
    if(document.getElementById("connect-user").value.length != 0){
        localStorage.setItem("username",document.getElementById("connect-user").value)
        document.getElementById("user-connected").innerText = localStorage.getItem("username") + " est actuellement connecté";
        var xhr = new XMLHttpRequest();
        var id = 0;
        var profil = localStorage.getItem("username");
        xhr.open("POST","http://127.0.0.1:5000/user/"+profil+"/"+id);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.setRequestHeader("Access-Control-Allow-Origin","*");
        xhr.onload = () => {
            if (xhr.status == 200) {
                alert("ca marche regarde : "+xhr.response)
            }
            else {
                alert("marche po")
                console.log(`Error: ${xhr.status}`);
            }
        };
        xhr.send("ok");
    }
    else{
        alert("veuillez saisir un utilisateur")
    }   
}

// --------------------------------------------------------------------------------------------------

// changer le theme ---------------------------------------------------------------------------------

function changetheme(){
    let elements = document.getElementsByClassName("tweet");
    localStorage.setItem("sujet",document.getElementById("select-theme").value)
    document.getElementById("theme-selected").innerHTML =localStorage.getItem("sujet");

    console.log(elements.length)
    for (let i = 0; i < elements.length; i++) {
        var sujetElement = elements[i].querySelector("#sujet");
        sujet=localStorage.getItem("sujet")
        if(localStorage.getItem("sujet")=="#Globale"){
            elements[i].style.display = "";
        }
        else{
        if(sujetElement.textContent!=sujet)
            elements[i].style.display = "none";
        else{
            elements[i].style.display = "";
        }
    }
    }
    document.getElementById("select-theme").value="";
}

// -------------------------------------------------------------------------------------------------


// transition ver user.html ------------------------------------------------------------------------
function gouser() {
    let elements = document.getElementsByTagName("body");
    for (let i = 0; i < elements.length; i++) {
      elements[i].classList.add("fade-out");
    }
    setTimeout(function() {
        window.location.href='user.html';
    }, 700);
    
}

// -------------------------------------------------------------------------------------------------


// fonction retweeter ------------------------------------------------------------------------------
function retweet(){

}