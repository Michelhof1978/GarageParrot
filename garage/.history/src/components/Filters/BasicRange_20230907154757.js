import "../../App.css";


const BasicRange = (props) => {
  const handleChange = () => {};
  return (
   <> 
   <label>Prix :</label>
    <div className="range-filter">
      <span>5000 €</span>
      <input
        type="range"
        name="prixMin"
        min={props.min}
        max={props.Max}
        value={filtres.prixMin}
        onChange={handleInputChange}
        onMouseMove={(e) => handleMouseMove(e, "prix")}
        step="1000"
      />
      <span>{props.max} €</span>
     
    </div>
   </>
    
  );
};

export default BasicRange;
