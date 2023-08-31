import React from "react"; 

const Formulaire = (props) => (
    <>
        <h4 className="m-5 text-center border border-3 rounded text-white p-2 display-6 h4Index" id="contact"><strong>NOUS CONTACTER</strong></h4>

<form className="needs-validation" id="formulaire" novalidate action="#" method="POST">
    <fieldset className="mb-5 ms-2 me-2">

        <div className="row d-flex justify-content-center">
            <div className="col-md-6">


<div className="row mb-4">

    <div className="col">
        <div className="form-outline">
            <input name="firstName" type="text" id="firstName" className="form-control"placeholder="Prénom" required/>
            <label for="firstName" className="form-label"></label>
        <div className="invalid-feedback">
            Veuillez saisir votre prénom.
        </div>
        </div>
</div>

<div className="col">
    <div className="form-outline">
        <input name="lastName" type="text" id="lastName" className="form-control"placeholder="Nom" required/>
            <label for="lastName" className="form-label"></label>
                <div className="invalid-feedback">
                    Veuillez saisir votre nom.
                </div>
    </div>
</div>

<div className="col">
    <div className="form-outline">
        <input name="phoneNumber" type="tel" id="phoneNumber" className="form-control" placeholder="Téléphone" required/>
            <label for="phoneNumber" className="form-label"></label>
                <div className="invalid-feedback">
                     Veuillez saisir votre téléphone.
                </div>
    </div>
</div>

</div>


<div className="form-outline mb-4">
    <div className="input-group has-validation">
        <span className="input-group-text" id="inputGroupPrepend">@</span>
            <input name="email" type="email" id="email" className="form-control " placeholder="Email" required/>
                </div>
                    <label for="email" className="form-label"></label>
                        <div className="invalid-feedback">
                            Veuillez saisir votre Email.
                        </div>
                </div>

<div className="form-outline mb-4">
    <label className="form-label round" for="objet">Objet :</label>
        <select className="form-label" name="objet" id="objet">
            <option>Renseignements</option>
            <option>Prendre Rdv</option>
            <option>Administratif</option>
        </select>
</div>


<div className="form-floating ">
    <textarea name="message" className="form-control " id="message" required></textarea>
        <label for="message">Message</label>
            <div className="invalid-feedback">
                Veuillez saisir votre message.
            </div>
</div>




<button type="submit" value="Valider" id="send-data" className="btn btn-primary btn-block mb-4 ">
    Envoyez
</button>

</div>
    </div>
        </fieldset>
</form>


    </>
);

export default Formulaire;