import styled from 'styled-components';

export const LayoutContainer = styled.div`
  display: flex;
  height: 100vh;
  min-width: 1280px;
`;

export const LeftSide = styled.div`
  flex: 1;
  background-color: #f0f0f0;
  padding: 20px;
  width: 100%;
`;

export const RightSide = styled.div`
  flex: 1;
  background-color: #e0e0e0;
  padding: 20px;
  width: 100%;
`;

export const Button = styled.button`
  margin-top: 25px;
  color: white;
  border-radius: 5px;
  height: 25px;
  width: 100px;
`;
