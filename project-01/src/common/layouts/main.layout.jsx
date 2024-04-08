// import { Outlet } from 'react-router';
import {
  LayoutContainer,
  LeftSide,
  RightSide,
  Button,
} from './main.layout.component.styles.js';

const MainLayout = () => {
  const handleLeftButtonClick = () => {
    console.log('leftclick');
  };

  const handleRightButtonClick = () => {
    console.log('rightclick');
  };

  return (
    <LayoutContainer>
      <LeftSide>
        <Button onClick={handleLeftButtonClick}>Left Side</Button>
      </LeftSide>
      <RightSide>
        <Button onClick={handleRightButtonClick}>Right Side</Button>
      </RightSide>
    </LayoutContainer>
  );
};

export default MainLayout;
