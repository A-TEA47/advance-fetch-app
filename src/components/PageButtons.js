import React from 'react';
import '../styles/PageButtons.css';  

const PageButtons = ({ label, onClick }) => {
  return <button onClick={onClick}>{label}</button>;
}

export default PageButtons;
