import React from 'react';
import './button.css';

function CreateButton({ setOpenModal, openModal }) {

  const onClickBtn = () => {
    setOpenModal(!openModal);
  }

  return (
    <div className='btn-container'>
      <button 
        className='add-btn'
        onClick={onClickBtn}      
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#313131" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={`feather feather-x ${openModal ? '' : 'hide'}`}><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#313131" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={`feather feather-plus ${openModal ? 'hide' : ''}`}><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
      </button>
    </div>
  );
}

export { CreateButton };