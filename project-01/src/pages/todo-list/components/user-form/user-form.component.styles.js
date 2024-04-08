import Sstyled from 'styled-components';

export const FormContainer = Sstyled.div`
  display: flex;
  justify-content: center;
  align-items: center; 
  border: 1px solid blue;
  padding: 25px;
  color: #bf4f74;
`;

export const InputWrapper = Sstyled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

export const Input = Sstyled.input`
  color: #bf4f74;
  height: 25px;
  font-size: 1em;
  border: 1px solid #bf4f74;
  border-radius: 3px;
  margin: 0 15px;
`;

export const ButtonWrapper = Sstyled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

export const Select = Sstyled.select`
  height: 25px;
  font-size: 1em;
  border: 1px solid #bf4f74;
  margin: 0 15px;
`;

export const ErrorMessageStyle = Sstyled.div`
  color: red;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-around;
`;
