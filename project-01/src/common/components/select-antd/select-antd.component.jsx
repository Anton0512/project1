import { SSelect } from './select-antd.component.styles.js';

const SelectElement = ({ children, ...rest }) => {
  return <SSelect {...rest}>{children}</SSelect>;
};

SelectElement.propTypes;
export default SelectElement;
