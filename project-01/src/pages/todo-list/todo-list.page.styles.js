import Sstyled from 'styled-components';

export const Container = Sstyled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = Sstyled.label`
  margin-top: 15px;
`;

export const Select = Sstyled.select`
  color: #bf4f74;
  height: 25px;
  font-size: 1em;
  border: 1px solid #bf4f74;
  border-radius: 3px;
  margin: 0 15px;
  width: 50%;
`;

export const ButtonContainer = Sstyled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 20px;
`;

export const ButtonRow = Sstyled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 10px;
`;

export const Button = Sstyled.button`
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
