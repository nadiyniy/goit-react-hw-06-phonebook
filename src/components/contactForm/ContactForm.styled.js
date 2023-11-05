import styled from 'styled-components';

export const StyledContactForm = styled.form`
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 10px;
  padding: 5px 10px;
  max-width: 420px;
  margin: 0 auto;
  width: 100%;

  label {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  input {
    padding: 5px 15px;
    max-width: 420px;
    border-radius: 10px;
    border: 1px solid black;
    margin-bottom: 10px;
  }
  button {
    width: 120px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 5px 10px;
    height: 28px;
    cursor: pointer;
    border-radius: 5px;
    border: 1px solid black;

    &:hover,
    &:focus {
      box-shadow: 0 0 1px 1px black;
    }
  }
`;
