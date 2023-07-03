/* eslint-disable @typescript-eslint/no-non-null-assertion */
import clsx from 'clsx';
import ReactDOM from 'react-dom';

interface ModalProperties {
  isOpen: boolean;
  children: any;
  onClose: () => void;
}

function Modal({ isOpen, children, onClose }: ModalProperties) {
  return ReactDOM.createPortal(
    <div
      className={clsx('fixed inset-0 flex items-center justify-center z-50', {
        hidden: !isOpen
      })}
    >
      <div
        className='modal-overlay fixed inset-0 bg-gray-800 opacity-75'
        onClick={onClose}
      />
      <div className='modal-container bg-white w-1/3 p-6 rounded-lg'>{children}</div>
    </div>,
    document.querySelector('modal-root')!
  );
}

export default Modal;
