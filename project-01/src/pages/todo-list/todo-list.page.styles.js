import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.label`
  margin-top: 15px;
`;

export const Select = styled.select`
  color: #bf4f74;
  height: 25px;
  font-size: 1em;
  border: 1px solid #bf4f74;
  border-radius: 3px;
  margin: 0 15px;
  width: 50%;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 20px;
`;

export const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 10px;
`;

export const Button = styled.button`
  margin-left: 20px;
  border: 2px solid #ccc;
  background: blue;
  border: 2px solid #bf4f74;
  color: white;
  padding: 0.25em 1em;
  width: 170px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1em;
`;
