import 'styled-components';

import themes from '../styles/theme'

export type ITheme = typeof themes

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}