import styled from "styled-components";

export const Form = styled.form`
  position: relative;
  grid-area: search;
  display: flex;
  align-items: center;
  border-radius: 1.5rem;
  margin-bottom: 10.4rem;
  backdrop-filter: blur(2rem);

  .error {
    display: none;
    position: absolute;
    bottom: -5rem;
    left: 0;
    padding: 1rem 1.5rem;
    color: yellow;
    border-radius: 1.5rem;
    border: 0.1rem solid #ffffff;
    background: rgba(1, 0, 17, 0.4);
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 5rem;
  padding: 0 1.5rem;
  border: 0.1rem solid #ffffff;
  border-radius: 1.5rem 0 0 1.5rem;
  background: rgba(1, 0, 17, 0.4);
  font-size: 1.8rem;
  color: #ffffff;

  &::placeholder {
    color: rgba(255, 255, 255, 0.85);
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  height: 5rem;
  padding: 0 1.5rem;
  border: 0.1rem solid #ffffff;
  border-radius: 0 1.5rem 1.5rem 0;
  background: rgba(1, 0, 17, 0.6);
  cursor: pointer;

  .load {
    display: none;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 100%;
    border-top: 0.2rem solid transparent;
    border-left: 0.2rem solid #ffffff;
    animation: loading 0.8s linear infinite;
  }

  @keyframes loading {
    100% {
      transform: rotate(360deg);
    }
  }
`;
