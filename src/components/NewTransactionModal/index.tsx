import ReactModal from "react-modal";
import { Container } from "./style";

import closeImg from '../../assets/close.svg'

interface NewTransactionModalProps {
  isOpen: boolean,
  onRequestClose: () => void
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      >
      <button 
      type="button"
      onClick={onRequestClose}
      className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>
      <Container>
      <h2>cadrastar transações</h2>

      <input 
        placeholder="Titulo"
      />

       <input 
        type="number"
        placeholder="valor"
      />

       <input 
        placeholder="Categoria"
      />

      <button type="submit">Cadrastar</button>

      </Container>
    </ReactModal>
  );
}