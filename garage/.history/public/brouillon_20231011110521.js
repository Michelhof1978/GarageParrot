useEffect(() => {
    fetch(
     lien 
    )
    
      .then((res) => res.json())// Va extraire les données de l'API sous format json
      .then((data) => console.log(data))//data ou on aurait pu mettre un nom reprèsente la réponse de la requête http
      .catch((err) => console.log(err));//Si erreur de la requête, catch retourne une erreur
  }, [lien]);