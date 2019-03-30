import { Button as RebassButton } from 'rebass';
import styled from 'styled-components';

export const Button = styled(RebassButton)`
  cursor: pointer;
  outline: none;

  &:disabled {
    background-color: gray;
  }
`;
