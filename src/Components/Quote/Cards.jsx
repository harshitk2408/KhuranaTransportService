import React, { useContext } from 'react';
import './Card.css';
import { MyContext } from '../../MyContext';
const Cards = (props) => {
  const {detail,setDetails} = useContext(MyContext);
  const handleChange = (e) => {
    setDetails({
     ...detail,[e.target.name]:e.target.value
    })
  }
  return (
    <div className="input-container">
      <input name={props.val} type="text" id="input" required onChange={handleChange} value={detail[props.val]} />
      <label htmlFor={props.val} className="label">
        {props.name}
      </label>
      <div className="underline"></div>
    </div>
  );
};

export default Cards;
