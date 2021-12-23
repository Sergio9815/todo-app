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
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="#313131" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={`feather feather-x ${openModal ? '' : 'hide'}`}><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#313131" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={`feather feather-pen-tool ${openModal ? 'hide' : ''}`}><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>
      </button>
    </div>
  );
}

export { CreateButton };