import styled from 'styled-components';

export const Container = styled.header`
  background-color: var(--gray1);
`;

export const Content = styled.div`
  max-width:1120px;
  margin:0 auto;
  padding: 2rem 1rem 12rem;

  display:flex;
  align-items: center;
  justify-content: space-between;

  button {
    font-size: 1rem;
    color: #fff;
    background-color: var(--green);
    border: none;
    border-radius: 0.25rem;
    padding: 0 2rem;
    height:3rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;