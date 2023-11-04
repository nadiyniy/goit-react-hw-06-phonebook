import styled from 'styled-components';

export const StyledFilterDiv = styled.div`
  min-width: 400px;

  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px 20px;
  border: 1px solid black;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  & input {
    display: block;
    margin-top: 10px;
    padding: 5px 10px;
    border-radius: 5px;
  }
`;
