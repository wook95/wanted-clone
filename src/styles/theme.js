import { css } from 'styled-components';

const wrapSize = '1060px';

const wrapper = css`
  margin: 0 auto;
  width: ${wrapSize};
`;

const deviceSizes = {
  small: '768px',
  medium: '992px',
  large: '1100px',
};

const colors = {
  black: '#000000',
  white: '#FFFFFF',
  gray_1: '#666',
  gray_2: '#ddd',
  gray_3: '#e1e2e3',
};

const theme = {
  colors,
  deviceSizes,
  wrapSize,
  wrapper,
};

export default theme;
