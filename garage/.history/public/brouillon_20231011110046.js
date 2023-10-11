useEffect(() => {
    fetch(
     lien //"http://localhost/GarageBack/API/vehicule.php?kilometremin=0&kilometremax=200000&anneemin=2000&anneemax=2023&prixmin=0&prixmax=50000"
    )
    //Si reponse reçu de la requête http, then va gére la reponse de cette promesse et va prendre une fonction de rappel en argument:
      .then((res) => res.json())// Va extraire les données de l'API sous format json
      .then((data) => console.log(data))//data ou on aurait pu mettre un nom reprèsente la réponse de la requête http
      .catch((err) => console.log(err));//Si erreur de la requête, catch retourne une erreur
  }, [lien]);