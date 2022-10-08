import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  margin-top: -10rem;

  div {
    background: var(--gray4);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--gray6);

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;
      margin-top: 1rem;
      color: var(--gray7);
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }

    &.highlight-background {
      background-color: var(--green-dark);
    }
  }
`;