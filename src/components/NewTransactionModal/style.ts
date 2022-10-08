import styled from "styled-components";

export const Container = styled.form`
  h2 {
    color: var(--gray7);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.85rem;
    border: none;
    color: white;
    background: var(--gray1);
    font-weight: 400;
    font-size: 1rem;
    
    &:focus {
      border: none;
      outline: 1px solid var(--green-light);
    }

    &::placeholder {
      color: var(--gray5);
    }

    & + input {
      margin-top: 1rem;
    }
  }
  input[type=number] { 
   -moz-appearance: textfield;
   appearance: textfield;
}

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    color: white;
    border-radius: 0.25rem;
    border: none;
    font-size: 1rem;
    margin-top: 1.5rem;
    font-weight: 600;
    transition: filter 0.2s;

     &:hover {
      filter: brightness(0.9);
     }
  }

`

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`
interface RadioBoxProps {
  isActive: boolean;
  activeColor: 'green' | 'red';
}

const colors = {
  green: '#015F43',
  red: '#AA2834'
}

export const RadioBox= styled.button<RadioBoxProps>`
    height: 4rem;
    border-radius: 0.25rem;
    background: ${(props) => props.isActive ? colors[props.activeColor] : 'var(--gray3)'};
    border: none;

    display: flex;
    align-items: center;
    justify-content: center;

   svg {
    path {
      fill: ${(props) => props.isActive ? '#fff' : ''};
    }
   }

    span {
      display: inline-block;
      margin-left: 1rem;
      font-size: 1rem;
      color: ${(props) => props.isActive ? '#fff' : 'var(--gray6)'};;
    }
`