import "../../App.css";

const BasicSelect = (props) => {
  
  const handl
  return (
    <>
      <label>{props.label}</label>
      <select
        name={props.name}
        
        onChange={props.handleChange}
      >

      {props.options.map((ele, idx) => { //element , index

        if(
            idx = 0
        
        )

        {   return(<option selected value={ele.value}>{ele.text}</option>) 
        
         }else{ return(<option value={ele.value}>{ele.text}</option>) }

      })
      }
 
      </select>
    </>
  );
};

export default BasicSelect;