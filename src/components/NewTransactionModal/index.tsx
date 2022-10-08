import ReactModal from "react-modal";
import { Container, RadioBox, TransactionTypeContainer } from "./style";

import closeImg from '../../assets/close.svg'
import { FormEvent, useState } from "react";
import { api } from "../../services/api";

interface NewTransactionModalProps {
  isOpen: boolean,
  onRequestClose: () => void
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const [title, setTitle] = useState('')
  const [value, setValue] = useState(0)
  const [category, setCategory] = useState('')

  const [type, setType] = useState('deposit')

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault()

    const data = {
      title,
      value,
      category
    }

    api.post('/transactions', data)
    api.get('transactions')
  }

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

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>cadrastar transações</h2>

        <input
          placeholder="Titulo"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />

        <input
          type="number"
          placeholder="valor"
          value={value}
          onChange={event => setValue(Number(event.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => setType('deposit')}
            isActive={type === 'deposit'}
            activeColor='green'
          >
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M16 5C9.92487 5 5 9.92487 5 16C5 22.0751 9.92487 27 16 27C22.0751 27 27 22.0751 27 16C27 9.92487 22.0751 5 16 5ZM3 16C3 8.8203 8.8203 3 16 3C23.1797 3 29 8.8203 29 16C29 23.1797 23.1797 29 16 29C8.8203 29 3 23.1797 3 16Z" fill="#00B37E" />
              <path fillRule="evenodd" clipRule="evenodd" d="M16 10C16.2652 10 16.5195 10.1054 16.7071 10.2929L20.9446 14.5304C21.3351 14.9209 21.3351 15.5541 20.9446 15.9446C20.554 16.3351 19.9209 16.3351 19.5303 15.9446L16 12.4142L12.4696 15.9446C12.079 16.3351 11.4459 16.3351 11.0553 15.9446C10.6648 15.5541 10.6648 14.9209 11.0553 14.5304L15.2928 10.2929C15.4804 10.1054 15.7347 10 16 10Z" fill="#00B37E" />
              <path fillRule="evenodd" clipRule="evenodd" d="M16 10C16.5523 10 17 10.4477 17 11V21C17 21.5523 16.5523 22 16 22C15.4477 22 15 21.5523 15 21V11C15 10.4477 15.4477 10 16 10Z" fill="#00B37E" />
            </svg>
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={() => setType('withdraw')}
            isActive={type === 'withdraw'}
            activeColor='red'
          >
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M16 5C9.92487 5 5 9.92487 5 16C5 22.0751 9.92487 27 16 27C22.0751 27 27 22.0751 27 16C27 9.92487 22.0751 5 16 5ZM3 16C3 8.8203 8.8203 3 16 3C23.1797 3 29 8.8203 29 16C29 23.1797 23.1797 29 16 29C8.8203 29 3 23.1797 3 16Z" fill="#F75A68" />
              <path fillRule="evenodd" clipRule="evenodd" d="M11.0553 16.0553C11.4459 15.6648 12.079 15.6648 12.4696 16.0553L16 19.5857L19.5303 16.0553C19.9209 15.6648 20.554 15.6648 20.9446 16.0553C21.3351 16.4459 21.3351 17.079 20.9446 17.4696L16.7071 21.7071C16.3165 22.0976 15.6834 22.0976 15.2928 21.7071L11.0553 17.4696C10.6648 17.079 10.6648 16.4459 11.0553 16.0553Z" fill="#F75A68" />
              <path fillRule="evenodd" clipRule="evenodd" d="M16 10C16.5523 10 17 10.4477 17 11V21C17 21.5523 16.5523 22 16 22C15.4477 22 15 21.5523 15 21V11C15 10.4477 15.4477 10 16 10Z" fill="#F75A68" />
            </svg>

            <span>Saida</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          placeholder="Categoria"
          value={category}
          onChange={event => setCategory(event.target.value)}
        />

        <button type="submit">Cadrastar</button>

      </Container>
    </ReactModal>
  );
}