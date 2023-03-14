document.getElementById("user-connected").innerText =localStorage.getItem("username")+" est actuellement connécté"

function tweeter(){
    server.listen(3001, 'localhost'); // or server.listen(3001, '0.0.0.0'); for all interfaces
    server.on('listening', function() {
        console.log('Express server started on port %s at %s', server.address().port, server.address().address);
});
    if(document.getElementById("corps").value.length != 0){
        var corps = document.getElementById("corps").value;
        var profil = localStorage.getItem("username");
        const xhr = new XMLHttpRequest();
        xhr.open("POST","http://localhost/calculate/"+profil+"/"+corps);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
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