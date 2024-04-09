import { Select as AntdSelect } from 'antd';
import styled from 'styled-components';

export const SSelect = styled(AntdSelect)`
  &.ant-select {
    border-radius: 5px;
    width: 200px;

    .ant-select-selector {
      background: #b3bcfd;
      border-color: #4096ff;
    }
  }
`;
