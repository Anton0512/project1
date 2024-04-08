import { Select as AntdSelect } from 'antd';
import styled from 'styled-components';

export const SSelect = styled(AntdSelect)`
  &.ant-select {
    border-radius: 5px;
    min-width: 50%;

    .ant-select-selector {
      background: #b3bcfd;
    }
  }
`;
