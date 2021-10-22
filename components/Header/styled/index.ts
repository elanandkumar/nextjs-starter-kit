import styled from 'styled-components';
import { HEADER_HEIGHT } from '../../constants';

export const Wrapper = styled.header`
  background: red;
  height: ${HEADER_HEIGHT};
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100vw;
`;