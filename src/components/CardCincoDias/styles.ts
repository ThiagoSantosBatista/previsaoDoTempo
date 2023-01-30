import styled from "styled-components";

export const CardCincoDias = styled.section`
  grid-area: cincoDias;
  padding: 4rem 3.2rem;
  border-radius: 3rem;
  border: 0.1rem solid #ffffff;
  background: rgba(1, 0, 17, 0.4);
  backdrop-filter: blur(2rem);

  h2 {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 3.2rem;
  }
`;

export const CardList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
  gap: 1.6rem;
`;
