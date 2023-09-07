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
        min={props.Min}
        max={props.Max}
        value={filtres.Min}
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
