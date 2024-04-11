import { Outlet } from 'react-router-dom';
import { SLayoutContainer } from './main.layout.component.styles.js';
import Header from '../../pages/header/header.component.jsx';

const MainLayout = () => {
  return (
    <SLayoutContainer>
      <Header />
      <Outlet />
    </SLayoutContainer>
  );
};

export default MainLayout;
