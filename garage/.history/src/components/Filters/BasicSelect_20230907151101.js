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
        <option selected value="">Toutes</option> selected = selectionne toutes les marques
        <option value="citroen">Citroën</option>
        <option value="peugeot">Peugeot</option>
        <option value="kia">Kia</option>
        <option value="bmw">BMW</option>
      </select>
    </>
  );
};

export default BasicSelect;
