import styled from "styled-components";

export const Form = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  gap: 1rem;

  .error {
    display: none;
    position: absolute;
    bottom: -4rem;
    left: 0;
    color: #ffff00;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 5rem;
  padding: 0 1.2rem;
  color: #ffffff;
  border-radius: 0.8rem;
  border: 0.1rem solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  font-size: clamp(1.6rem, 1.4875rem + 0.3125vw, 1.8rem);
  transition: all 0.3s;

  &::placeholder {
    color: #ffffff;
  }

  @media (hover: hover) {
    &:hover {
      border: 0.1rem solid #ffffff;
    }
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  height: 5rem;
  padding: 0 1.2rem;
  border: none;
  border-radius: 0.8rem;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(20px);
  cursor: pointer;
  transition: all 0.3s linear;

  .load {
    display: none;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 100%;
    border-top: 0.2rem solid transparent;
    border-left: 0.2rem solid #070707;
    animation: loading 0.8s linear infinite;
  }

  @media (hover: hover) {
    &:hover {
      background: rgba(255, 255, 255, 0.9);
    }
  }

  @keyframes loading {
    100% {
      transform: rotate(360deg);
    }
  }
`;
