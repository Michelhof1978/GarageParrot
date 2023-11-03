import React from "react";
import TitreH1 from "../UI/Titreh1/TitresH1";

const error = (props) => 

<>
    <TitreH1 bgColo>Erreur 404{props.type}</TitreH1>
    <div>
        {props.children}
    </div>
</>;

export default error;
