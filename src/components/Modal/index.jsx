import ReactDOM from 'react-dom';
import './modal.css'

 function Modal({children}) {
  return ReactDOM.createPortal(
      <div className='ContainerModal'>
          <div className="Modal">
            {children}
          </div>
      </div>,
    document.getElementById('modal')
  );
}


export default Modal;