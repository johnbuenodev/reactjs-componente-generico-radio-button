import { useEffect, useState } from 'react';

function Radiobutton(props) {

  const [radiovalues, setRadiovalues] = useState([]);
  const [radioselected, setRadioselected] = useState({});
 
  const { handleValueRadiobutton , titleComponent, arrayData } = props; 

  const handleRadioClick = (value) => {

    setRadioselected(value);

    handleValueRadiobutton(value);
  }

  const isRadioSelected = (radioItem) => {
   return radioItem.name === radioselected.name ? true : false;
  }

  useEffect(() => {
    setRadiovalues(arrayData); 
  }, []);


  return (
    <div>
     { titleComponent ? <h3>{titleComponent}</h3> : null }   
     { radiovalues.length > 0 ? radiovalues.map((radioItem) => {
       return(
        <div key={radioItem.value}>
         <input 
          type="radio"
          name="react-radio-btn"
          value="radio1"
          checked={isRadioSelected(radioItem)} 
          onChange={() => handleRadioClick(radioItem)}
         />
         <label>{radioItem.name}</label>
        </div>
       )}) : null
     }
    </div>
  );
}

export default Radiobutton;
