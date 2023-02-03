import styled from "styled-components";

export const Section = styled.section`
  grid-area: search;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 36.7rem;
  min-height: 35rem;
  padding: 3.2rem;
  border-radius: 3rem;
  border: 0.1rem solid rgba(255, 255, 255, 0.7);
  background: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.2),
    rgba(255, 255, 255, 0)
  );
  backdrop-filter: blur(2rem);
`;

export const Article = styled.article`
  text-align: center;

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-top: 1rem;
  }
`;
