class  Accueil extends Component{//Composant STATEFUL qui va être récupérer par Site.js
    componentDidMount = () => {//Fonction qui va être lancé quand le composant est montée, ici, on va mettre un titre pour la page onglet
        document.title = "Garage Parrot - Accueil";
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

