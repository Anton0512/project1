import { Button as AntdButton } from 'antd';
import styled from 'styled-components';

export const SButtonAntd = styled(AntdButton)`
  &.ant-btn-default,
  ant-btn {
    position: relative;
    color: white;
    background: ${(props) =>
      props.gradientstatus
        ? ' linear-gradient(to right, blue, green, orange )'
        : 'blue'};

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
`;
