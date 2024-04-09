import Sstyled from 'styled-components';

export const LayoutContainer = Sstyled.div`
  display: flex;
  height: 100vh;
  min-width: 1280px;
`;

export const LeftSide = Sstyled.div`
  flex: 1;
  background-color: #f0f0f0;
  padding: 20px;
  width: 100%;
`;

export const RightSide = Sstyled.div`
  flex: 1;
  background-color: #e0e0e0;
  padding: 20px;
  width: 100%;
`;

export const Button = Sstyled.button`
  margin-top: 25px;
  color: white;
  border-radius: 5px;
  height: 25px;
  width: 100px;
`;
