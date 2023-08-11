class  Accueil extends Component{//Composant STATEFUL qui va être récupérer par Site.js
    componentDidMount = () => {//Fonction qui va être lancé quand le composant est montée, ici, on va mettre un titre pour la page onglet
        document.title = "Parc d'animaux my Zoo";
    }

    render() {
        return (
           <div>
           <img src={banderole} alt="banderole" className="img-fluid"/>
             <TitreH1 bgColor="bg-success"> Bienvenue sur le parc d'animaux My Zoo</TitreH1>

             <div className="container">
             <p>
             Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. 
             Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla
              ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre
               cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié
             </p>

             <p>
             Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. 
             Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla
              ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre
               cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié
             </p>

            <div className="row no-gutters align-items-center">

                <div className="col-12 col-md-6">
                        <img src={logo} alt="logo du site" className= "img-fluid"></img>
                </div>

                <div className="col-12 col-md-6">
                Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. 
             Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla
              ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre
               cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié
                </div>

                <div className="col-12 col-md-6">
                Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. 
             Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla
              ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre
               cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié
                </div>

                <div className="col-12 col-md-6">
                        <img src={logo} alt="logo du site" className= "img-fluid"></img>
                </div>

            </div>
             </div>
           </div>
        );
    }
}

export default Accueil;

// `componentDidMount` est une méthode du cycle de vie d'un composant React qui est appelée une fois que le composant a été monté 
// dans le DOM (Document Object Model). C'est l'un des nombreux hooks de cycle de vie disponibles dans React.

// La méthode `componentDidMount` est souvent utilisée pour effectuer des actions qui nécessitent des manipulations DOM, des requêtes
//  réseau ou des initialisations de données asynchrones. Voici quelques cas d'utilisation courants de `componentDidMount` :

// 1. Appels à des API : Vous pouvez utiliser `componentDidMount` pour effectuer des appels à des API externes et récupérer des 
// données nécessaires au fonctionnement de votre composant ou de votre application. Par exemple, vous pouvez récupérer des données
//  d'un serveur backend et les mettre à jour dans l'état du composant.

// 2. Manipulation du DOM : Si vous avez besoin d'effectuer des manipulations directes sur le DOM après que le composant ait été
//  rendu, `componentDidMount` est le bon endroit pour le faire. Par exemple, vous pouvez utiliser cette méthode pour initialiser 
//  des bibliothèques tierces qui nécessitent une référence à des éléments DOM spécifiques.

// 3. Abonnements aux événements : Si vous devez mettre en place des abonnements à des événements, comme des écouteurs d'événements
//  de fenêtre ou de document, `componentDidMount` est un bon endroit pour les initialiser. Cela garantit que les abonnements sont
//   actifs une fois que le composant est monté et prêt à recevoir des événements.

// 4. Chargement initial de données : Si vous avez besoin de charger des données initiales pour votre composant, telles que la 
// configuration ou les préférences de l'utilisateur, `componentDidMount` peut être utilisé pour déclencher le chargement initial et 
// mettre à jour l'état du composant en conséquence.

// Il est important de noter que `componentDidMount` est appelé uniquement une fois, après que le composant a été monté. 
// Si vous avez besoin de mettre à jour le composant en réponse à des changements de props ou d'état, vous devriez envisager 
// d'utiliser d'autres méthodes du cycle de vie, telles que `componentDidUpdate`.

// À partir de React 16.3, `componentDidMount` peut être remplacé par le hook `useEffect` avec un tableau de dépendances vide (`[]`) 
// pour obtenir un comportement équivalent dans les composants fonctionnels.
// ---------------------------------------------------------------------------------------------------------------------------
// Dans le contexte de Bootstrap, les gutters font référence à l'espace horizontal entre les colonnes d'une grille Bootstrap. 
// Ils permettent de créer des marges entre les colonnes adjacentes pour améliorer la mise en page et l'espacement visuel.

// Bootstrap propose plusieurs classes de gutters que vous pouvez utiliser pour ajuster l'espace entre les colonnes. 
// Voici quelques-unes des classes les plus couramment utilisées :

// - `gutter`: Cette classe est utilisée pour ajouter un espace par défaut (gutter) entre les colonnes. Elle ajoute une marge de 
// 1,5 rem (24 pixels) de chaque côté des colonnes.

// - `gutter-sm`: Cette classe ajoute un espace plus petit (small gutter) entre les colonnes. Elle ajoute une marge de 0,75 rem 
// (12 pixels) de chaque côté des colonnes.

// - `gutter-md`: Cette classe ajoute un espace moyen (medium gutter) entre les colonnes. Elle ajoute une marge de 1 rem (16 pixels)
//  de chaque côté des colonnes.

// - `gutter-lg`: Cette classe ajoute un espace plus grand (large gutter) entre les colonnes. Elle ajoute une marge de 2 rem 
// (32 pixels) de chaque côté des colonnes.

// - `gutter-xl`: Cette classe ajoute un espace extra-large (extra-large gutter) entre les colonnes. Elle ajoute une marge de 3 rem
//  (48 pixels) de chaque côté des colonnes.

// Pour utiliser ces classes de gutters, vous pouvez les ajouter à vos éléments de grille Bootstrap en les combinant avec les classes 
// de colonnes. Par exemple :

// ```html
// <div class="row">
//   <div class="col-6 gutter">Contenu de la colonne 1</div>
//   <div class="col-6 gutter">Contenu de la colonne 2</div>
// </div>
// ```

// Cela ajoutera un espace par défaut (gutter) de chaque côté des colonnes, créant ainsi un espacement horizontal entre les deux
//  colonnes.

// N'oubliez pas d'inclure la feuille de style Bootstrap appropriée dans votre projet pour utiliser ces classes de gutters.