import styled from "styled-components";

export const Li = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.6rem 1rem;
  border-radius: 1.5rem;
  border: 0.1rem solid rgba(255, 255, 255, 0.7);
  background: rgba(1, 0, 17, 0.25);
  backdrop-filter: blur(2rem);
  text-align: center;
  p {
    font-size: 1.4rem;
    color: rgba(255, 255, 255, 0.85);
  }
  p:first-child {
    font-size: 1.6rem;
    margin-bottom: 1.2rem;
    color: #ffffff;
  }
  img {
    margin-bottom: 1rem;
  }
  h3 {
    font-size: 1.6rem;
    font-weight: 500;
    margin-bottom: 1.2rem;
  }
  p:nth-child(4) {
    margin-bottom: 0.4rem;
  }
`;
