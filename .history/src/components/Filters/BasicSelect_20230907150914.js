import "../../App.css";

const BasicSelect = (props) => {
  const handleChange = () => {};
  return (
    <>
      <label>Marque :</label>
      <select
        name="marque"
        
        onChange={handleChange}
      >
        <selec value="">Toutes</selec>
        <option value="citroen">Citroën</option>
        <option value="peugeot">Peugeot</option>
        <option value="kia">Kia</option>
        <option value="bmw">BMW</option>
      </select>
    </>
  );
};

export default BasicSelect;
