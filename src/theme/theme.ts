import { colors } from './colors';
import { moderateScale, scale } from './scale';
import { spacing } from './spacing';
import { typography } from './typography';

export const theme = {
  colors,
  spacing: Object.fromEntries(Object.entries(spacing).map(([k, v]) => [k, moderateScale(v)])),
  typography,
  scale,
  moderateScale,
};
