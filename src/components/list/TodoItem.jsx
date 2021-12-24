import React from 'react';
import './item.css';

function TodoItem({ completed, text, onComplete, onDelete }) {
  return (
    <li>
        <button className={`Icon item-btn-check ${completed && 'complete'}`}
          onClick={onComplete}
        >
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check-circle" className="svg-inline--fa fa-check-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ff8ba7" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path></svg>
        </button>
        <button className={`Icon item-btn-cir ${!completed && 'complete'}`}
          onClick={onComplete}
        >
          <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="circle" className="svg-inline--fa fa-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200z"></path></svg>
        </button>
        <p className={`${completed ? 'complete' : ''}`}>{text}</p>
        <button 
          className='Icon item-btn-del'
          onClick={onDelete}
          >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#A9A9A9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
    </li>
  );
}

export { TodoItem };