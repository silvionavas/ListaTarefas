import React  from 'react';
import { FaPlus } from "react-icons/fa";
import PropTypes from 'prop-types';
import './Form.css';

export default function Form({handleSubmit, handleChange, novaTarefa}) {
  return (
    <form onSubmit={handleSubmit} action="#" className='form'>
          <input
            onChange= {handleChange}
            type="text"
            value={novaTarefa}
          />
          <button type="submit">
            <FaPlus />
          </button>
        </form>
  );
}

Form.proptypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  novaTarefa: PropTypes.string.isRequired,
}
