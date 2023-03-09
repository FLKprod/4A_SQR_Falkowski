function tweeter(){
    var corps = document.getElementById("corps").value;
    var profil = "falko"
    var json = '{"profil":'+ profil + ',"corps":'+ corps + '}'
    fetch('http://localhost:5000/tweeter/'+profil+'/'+corps).then(function(response) {
      return response.blob();
    });
}  