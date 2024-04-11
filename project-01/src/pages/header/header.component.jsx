import {
  SHeaderContainer,
  SButtonContainer,
  SButton,
} from './header-component.styles';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const HandleBack = () => navigate(-1);

  return (
    <SHeaderContainer>
      <SButtonContainer>
        <Link to="Click1">
          <SButton>Click 1</SButton>
        </Link>
        <Link to="Click2">
          <SButton>Click 2</SButton>
        </Link>
        <SButton onClick={HandleBack}>Back</SButton>
      </SButtonContainer>
    </SHeaderContainer>
  );
};

export default Header;
