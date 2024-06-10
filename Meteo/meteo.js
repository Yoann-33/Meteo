    /* Déclenchement de la recherche en appuyant sur la touche entrée*/
document.querySelector(".cityname").addEventListener("keyup", (event) => {
    if(event.key == "Enter"){
            /* Récupération de la ville entrée par l'utilisateur, appel de l'API et exécution de la fonction WeatherData*/
        let city =document.querySelector(".cityname").value;
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=91c00c3faea2b4dbfcec6cf0a97b4d10&lang=fr&units=metric")
            .then((Response) => Response.json())
            .then(data => this.WeatherData(data))
            .catch(() => {
                document.querySelector(".Ville").innerText="Cette ville n'existe pas"
                document.querySelector(".temperature").innerText = "";
                document.querySelector(".vent").innerText = "";
                document.querySelector(".humidite").innerText = "";
                document.querySelector(".description").innerText =  "" ;
              })
    }
})
document.addEventListener('keyup', debounce(function(e){
    let city = document.querySelector(".cityname").value;
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=91c00c3faea2b4dbfcec6cf0a97b4d10&lang=fr&units=metric")
        .then((Response) => Response.json())
        .then(data => this.WeatherData(data))
},1000*10))
    /* Déclenchement de la recherche en cliquant sur le bouton*/
document.querySelector(".Valide").addEventListener("click", (event) => { 
    let city = document.querySelector(".cityname").value;
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=91c00c3faea2b4dbfcec6cf0a97b4d10&lang=fr&units=metric")
        .then((Response) => Response.json())
        .then(data => this.WeatherData(data))
        
});

function WeatherData(data){
    /*Affichage de la réponse fourni par l'API dans la console*/
    console.log(data)
    /*Récupération des données utiles*/
    let city = data.name
    const temp = data.main.temp;
    const wind = data.wind.speed;
    const humidity = data.main.humidity;
    const description = data.weather[0].description;
    /*Mise à jour du texte sur le fichier HTML*/
    document.querySelector(".temperature").innerText = temp + "°C";
    document.querySelector(".vent").innerText = "Vent : " + wind + "km/h";
    document.querySelector(".humidite").innerText = "Humidité : " + humidity + "%";
    document.querySelector(".description").innerText =  description ;
    document.querySelector(".Ville").innerText=city
}
/*Ville par défaut*/
let city = "Paris"
fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=91c00c3faea2b4dbfcec6cf0a97b4d10&lang=fr&units=metric")
            .then((Response) => Response.json())
            .then(data => this.WeatherData(data));



/*Ameliorations : Catch error si ville n'existe pas; Changement de la valeur par défaut;*/