import 'styled-components/native';
import theme from '../shared/theme/index';

declare module 'styled-components' {
  type ThemeType = typeof theme;

  export interface DefaultTheme extends ThemeType { }
}