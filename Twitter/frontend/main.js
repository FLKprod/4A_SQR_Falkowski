document.getElementById("user-connected").innerText =localStorage.getItem("username")

function tweeter(){
    if(document.getElementById("corps").value.length != 0){
        var corps = document.getElementById("corps").value;
        var profil = localStorage.getItem("username")
        var json = '{"profil":'+ profil + ',"corps":'+ corps + '}'

        fetch('http://localhost:5000/tweeter/'+profil+'/'+corps,
        {
            method: "POST", 
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
        }
        })
        .then( response => response.json() )
        .then( data => console.log(data) )
    }
    else{
        alert("tweet vide..")
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