import styled from 'styled-components';

export const StyledFilterDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 10px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 10px;
  padding: 5px 10px;
  max-width: 420px;
  div {
  }
  p {
    margin-bottom: 10px;
  }

  input {
    height: 40px;

    padding: 5px 15px;
    max-width: 420px;
    border-radius: 10px;
    border: 1px solid black;
    margin-bottom: 10px;
  }
`;
