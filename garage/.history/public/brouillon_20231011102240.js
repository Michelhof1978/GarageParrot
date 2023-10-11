const BasicSelect = (props) => {
  const handleChange = (event) => {
        const {value, name} = event.target; 
        props.handleChange(name, value); 
    };
  return (
      <>
        <label>{props.label}</label>
        <select
          name={props.name}
          onChange={handleChange}>
    {props.options.map((ele, idx) => { 
        if(idx = 0){   
            return(<option selected value={ele.value}>{ele.text}</option>) 
          
           }else{ return(<option value={ele.value}>{ele.text}</option>) }})
        }
    </select>
      </>
    );
  };
  export default BasicSelect;
  