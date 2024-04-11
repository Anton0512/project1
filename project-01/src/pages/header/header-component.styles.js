import styled from 'styled-components';

export const SHeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #b3bcfd;
  color: #fff;
  width: 100%;
  padding: 20px 0 20px;
`;

export const SButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export const SButton = styled.button`
   margin: 0 5px;
  padding: 10px 20px;
  background-color: #007bff;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
`;
