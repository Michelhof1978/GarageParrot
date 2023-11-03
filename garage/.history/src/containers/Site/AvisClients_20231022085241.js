import React, { Component} from 'react';



class Contact extends Component {
        // Nom de la page dans l'onglet
        componentDidMount = () => {
          document.title = "Page de contact";
        }
        handleEnvoiMail = (message) => {
         axios.post("http://localhost/garageback/front/contact",message)
         .then(reponse=>{console.log(reponse)})
            .catch(error=>{console.log(error)})
        }

    render () {
        return (
            <>
             <TitreH2>Nous Contacter</TitreH2>
             <BannerInfo imageUrl={BannerContactForm} altText="formulaire de contact" />
           
            
            <div className="container">
          
            <div className='text-center'>
  <Textes>
    <p className='fw-bold mb-2'>Adresse</p> 
    <p className='mb-4'>11 rue de la quiche 33 000 Toulouse</p>

    <p className='fw-bold mb-2'>Téléphone</p> 
    <p className='mb-4'>04-70-45-25-36</p>
  </Textes>
</div>

               
                <TitreH3>Nous écrire </TitreH3>
                <Form sendMail = {this.handleEnvoiMail} />
               
                </div>
                <BannerInfo imageUrl={BannerQuality} altText="Offre satisfaction" />

            </>
        )
}
}

export default Contact;