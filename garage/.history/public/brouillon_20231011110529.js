useEffect(() => {
    fetch(
     lien 
    )
    
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));//Si erreur de la requête, catch retourne une erreur
  }, [lien]);