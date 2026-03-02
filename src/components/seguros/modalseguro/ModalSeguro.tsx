import Popup from 'reactjs-popup';

import 'reactjs-popup/dist/index.css';
import FormSeguro from '../formseguro/FormSeguro';

function ModalSeguro() {
  return (
    <>
      <Popup
        trigger={
          <button
            className='border rounded px-4 py-2 hover:bg-white hover:text-indigo-800'>
            Nova Seguro
          </button>
        }
        modal
        contentStyle={{
          borderRadius: '1rem',
          paddingBottom: '2rem'
        }}
      >
        <FormSeguro />
      </Popup>
    </>
  );
}

export default ModalSeguro;