import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  align-items: center;
  border-radius: 1.5rem;
  background-color: rgba(1, 0, 17, 0.4);
`;

export const Input = styled.input`
  width: 100%;
  height: 7rem;
  padding: 0 2rem;
  border: 0.1rem solid #ffffff;
  border-radius: 1.5rem 0 0 1.5rem;
  background: none;
  font-size: 2.4rem;
  color: rgba(255, 255, 255, 0.8);


  &::placeholder {
    color: rgba(255, 255, 255, 0.8);
  }
`

export const Button = styled.button`
  height: 7rem;
  padding: 0 2rem;
  border: 0.1rem solid #ffffff;
  border-radius: 0 1.5rem 1.5rem 0;
  background: none;
  cursor: pointer;
`;
