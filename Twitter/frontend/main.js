document.getElementById("user-connected").innerText =localStorage.getItem("username")+" est actuellement connécté"

function tweeter(){
   
    if(document.getElementById("corps").value.length != 0){
        var corps = document.getElementById("corps").value;
        var profil = localStorage.getItem("username");
        const xhr = new XMLHttpRequest();
        xhr.open("POST","http://127.0.0.1:5000/tweeter/"+profil+"/"+corps);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
        xhr.setRequestHeader("Origin", "https://lucas-b700-expert-giggle-rw7gwvwqq44c5jg4-8080.preview.app.github.dev/");
        xhr.onload = () => {
            if (xhr.status == 200) {
                alert("tweeté ! : "+xhr.response)
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