import Sstyled from 'styled-components';

export const SLayoutContainer = Sstyled.div`
  display: flex;
  height: 100%;
  min-width: 1280px;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
     
`;

export const SLeftSide = Sstyled.div`
  flex: 1;
  background-color: #f9f9f9;
  background-color: 
  padding: 20px;
  width: 100%;
`;

export const SRightSide = Sstyled.div`
  flex: 1;
  background-color: #f4f4f4;
  background-color: ;
  padding: 20px;
  width: 100%;
`;

export const SButton = Sstyled.button`
  margin-top: 25px;
  color: white;
  border-radius: 5px;
  height: 25px;
  width: 100px;
`;
