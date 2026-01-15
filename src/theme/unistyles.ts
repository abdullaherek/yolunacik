import { StyleSheet } from 'react-native-unistyles';

import { colors } from './colors';
import { moderateScale, scale } from './scale';
import { spacing } from './spacing';
import { typography } from './typography';

const mainTheme = {
  colors: colors,
  typography: typography,
  spacing: spacing,
  moderateScale: moderateScale,
  scale: scale,
};

type AppThemes = {
  name: typeof mainTheme;
};
declare module 'react-native-unistyles' {
  export interface UnistylesThemes extends AppThemes {}
}

StyleSheet.configure({
  themes: {
    name: mainTheme,
  },
});
