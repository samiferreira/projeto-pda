import { useState } from 'react';
import Janela from '../modal/modal';
import './text.css';


export default function SectionText() {
  const [showModal, setShowModal] = useState(false); 

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className='text'>
      <h1 className='title'>DOE</h1>
      <p>DOE é um projeto que visa ajudar pessoas que necessitam de doações de sangue.</p>
      <p>Se você deseja ajudar, basta clicar no botão abaixo e preencher o formulário.</p>
      <p>Se você precisa de doação de sangue, clique no botão abaixo e preencha o formulário.</p>
      <button onClick={handleOpenModal}>clique para se cadastrar e doar!</button>
      {showModal && <Janela show={showModal} onClose={handleCloseModal} />} {/* Passa as props show e onClose */}
    </div>
  );
}