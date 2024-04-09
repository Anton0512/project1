import styled from 'styled-components';

export const SFormContainer = styled.div`
  border: 1px solid blue;
  padding-top: 25px;
  color: #bf4f74;
`;
export const SInputColContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #bf4f74;
  gap: 10px;
`;

export const SInputWrapperColOne = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
`;

export const SInputWrapperColTwo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
`;

export const SButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const SErrorMessageStyle = styled.div`
  color: red;
  padding: 0px 50px 5px;
`;
