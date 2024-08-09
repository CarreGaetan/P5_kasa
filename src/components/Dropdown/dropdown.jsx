import { useState } from 'react';
import './dropdown.scss';
import BackArrow from '../../assets/BackArrow.png';

function Dropdown({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <div className="dropdown-header" onClick={toggleDropdown}>
        <h4>{title}</h4>
        <img src={BackArrow} alt="arrow icon" className={`arrow ${isOpen ? 'open' : ''}`} />
      </div>
      <div className={`dropdown-content ${isOpen ? 'open' : ''}`}>
        {children}
      </div>
    </div>
  );
}

export default Dropdown;
