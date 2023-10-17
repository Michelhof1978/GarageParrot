
  
  const Navbar = (props) => (
    
  let nouveau = document.querySelector('#nouveau');
  let avi = document.querySelector('#avi');
  let auteur = document.querySelector('#auteur');
  let dernier = 0;
  let nombreAleatoire = 0;
  let avis = [
    ["Notre séjour chez Isabelle a été super ! L'hôte était très accueillant et la caravane était propre, confortable et bien situé. Nous avons vraiment apprécié notre séjour et nous recommandons vivement cet endroit !", "Carole"],
    ["Isabelle était très attentionnée et serviable, nous donnant des conseils sur les meilleurs endroits à visiter dans le coin. Nous avons adoré notre séjour ici et nous y retournerons certainement !", "Bastien"],
    ["Nous avons passé un excellent séjour au caravanes de la besbre! Logement confortable, l'hôte était très serviable et sympathique. Nous avons adoré l'emplacement, qui était proche du PAL. Nous recommandons vivement cet endroit.", "Pauline"],
    ["Nous avons passé un excellent séjour au camping. Tout était parfait, de la propreté de la caravane aux équipements fournis. La communication avec l'hôte était également excellente. Nous recommandons vivement cet endroit !", "Manu"],
    ["Nous avons été très impressionnés par la qualité du logement et l'hospitalité de l'hôte. Tout était propre et bien entretenu, et l'hôte était très sympathique et serviable. Nous le recommandons vivement.", "Marc"],

  ];

  // Fonction permettant de générer un nombre aléatoire
  function genererNombreEntier(max) {
    return Math.floor(Math.random() * Math.floor(max)); //Random donne entre 0 et 1 et floor pour arrondir au plus prêt
  }

  //Création evenement clic souris
  nouveau.addEventListener('click', () => {
    do {
      nombreAleatoire = genererNombreEntier(avis.length);
    } while (nombreAleatoire == dernier)

    avi.textContent = avis[nombreAleatoire][0]; //La propriété .textContent en JavaScript retourne ou définit le contenu textuel d'un élément HTML. Par exemple, si vous avez un élément de paragraphe avec du texte à l'intérieur, vous pouvez utiliser .textContent pour récupérer ce texte ou pour le remplacer par un nouveau texte.
    auteur.textContent = avis[nombreAleatoire][1];
    dernier = nombreAleatoire;
  }); //Ce code utilise un événement "click" sur un élément HTML avec l'id "nouveau". Lorsque l'événement est déclenché, le code génère un nombre aléatoire entier en utilisant la fonction "genererNombreEntier()" avec la longueur de l'array "avis". 

  //Ensuite, une boucle "do while" vérifie si le nombre aléatoire généré est différent de la dernière valeur stockée dans la variable "dernier". Si les deux valeurs sont égales, le code génère un nouveau nombre aléatoire jusqu'à ce qu'il obtienne une valeur différente.

  //Une fois que le code a obtenu un nombre aléatoire différent de la dernière valeur, il utilise ce nombre pour accéder à un élément spécifique de l'array "avis" et met à jour le contenu des éléments HTML avec les valeurs correspondantes en utilisant ".textContent".

  //Enfin, le code stocke la valeur aléatoire générée dans la variable "dernier", afin de s'assurer que la prochaine fois que l'événement "click" sera déclenché, le code ne répétera pas l'affichage du même élément que le précédent.                                    

