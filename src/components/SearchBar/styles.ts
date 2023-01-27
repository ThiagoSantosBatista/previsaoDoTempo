import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  align-items: center;
  border-radius: 1.5rem;
  backdrop-filter: blur(2rem);
`;

export const Input = styled.input`
  width: 100%;
  height: 6rem;
  padding: 0 2rem;
  border: 0.1rem solid #ffffff;
  border-radius: 1.5rem 0 0 1.5rem;
  background: rgba(1, 0, 17, 0.4);
  font-size: 2rem;
  color: #ffffff;

  &::placeholder {
    color: rgba(255, 255, 255, 0.9);
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  height: 6rem;
  padding: 0 2rem;
  border: 0.1rem solid #ffffff;
  border-radius: 0 1.5rem 1.5rem 0;
  background: rgba(1, 0, 17, 0.7);
  cursor: pointer;
`;
