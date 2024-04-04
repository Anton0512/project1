import { SButtonAntd } from './button-antd.component.styles';
const ButtonAntd = ({ ...rest }) => {
  return <SButtonAntd shape="round" gradientstatus='true' {...rest}></SButtonAntd>;
};

export default ButtonAntd;
