import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border: 1px solid blue;
  padding: 25px;
  color: #bf4f74;
`;

export const InputWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 20px;
  align-items: center;
`;

export const Input = styled.input`
  color: #bf4f74;
  height: 25px;
  font-size: 1em;
  border: 1px solid #bf4f74;
  border-radius: 3px;
  margin: 0 15px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

export const Select = styled.select`
  height: 25px;
  font-size: 1em;
  border: 1px solid #bf4f74;
  margin: 0 15px;
  width: 100%;
`;

export const ErrorMessageStyle = styled.div`
  color: red;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-around;
`;
