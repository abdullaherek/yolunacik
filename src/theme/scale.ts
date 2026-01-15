import { Dimensions, PixelRatio } from 'react-native';
import { TextStyle } from 'react-native';
const { width, height } = Dimensions.get('window');

const BASE_WIDTH = 390;
const BASE_HEIGHT = 844;

const widthScale = width / BASE_WIDTH;
const heightScale = height / BASE_HEIGHT;

export const scale = (size: number) => PixelRatio.roundToNearestPixel(size * widthScale);

export const verticalScale = (size: number) => PixelRatio.roundToNearestPixel(size * heightScale);

export const moderateScale = (size: number, factor = 0.5) => size + (scale(size) - size) * factor;

export const scaleText = (style: TextStyle, scale: (v: number) => number): TextStyle => ({
  ...style,
  fontSize: style.fontSize ? scale(style.fontSize) : undefined,
  lineHeight: style.lineHeight ? scale(style.lineHeight) : undefined,
});

/* 

| Element type       | Use this                |
| ------------------ | ----------------------- |
| Font size          | `moderateScale`         |
| Icons near text    | `moderateScale`         |
| Buttons / inputs   | `moderateScale`         |
| Horizontal spacing | `scale`                 |
| Vertical spacing   | `verticalScale`         |
| Text & LineHeight  |  `scaleText`            |
| Page layout        | ❌ no scaling / vertical |

 */
