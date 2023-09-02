
import React from 'react';

const TitreH1 = ({ children }) => {
  return <h1 style={{ color: 'blue', fontWeight:'bold' }}>{children}</h1>;
};

export default TitreH1;



=======
import React from "react"; 

const TitreH1 = (props) => (

   
   <h1 className="text-start text-primary">{props.children}</h1>

);

export default TitreH1;
>>>>>>> 004625550824244cfb7c22ebdcd3132c8a18505b
