/* ------------------------------------------------------------------ */
/* PRIMITIVE COLORS (RAW PALETTE) */
/* ------------------------------------------------------------------ */

const dark = {
  full: '#0B0D10',
  150: '#12141A',
  140: '#1A1D24',
  A16: 'rgba(11,13,16,0.16)',
  A32: 'rgba(11,13,16,0.32)',
};

const white = {
  full: '#FFFFFF',
  A04: 'rgba(255,255,255,0.04)',
  A08: 'rgba(255,255,255,0.08)',
  A12: 'rgba(255,255,255,0.12)',
  A16: '#14161A0A',
};

const brand = {
  60: '#D8FF00',
  70: '#E4FF70',
  80: '#CEF300',
  A16: 'rgba(215,255,63,0.16)',
  A32: 'rgba(215,255,63,0.32)',
};

const red = {
  100: '#D63B1E',
  110: '#C2341A',
  140: '#8F2614',
  A08: 'rgba(214,59,30,0.08)',
  A32: 'rgba(214,59,30,0.32)',
};

const green = {
  100: '#3FAE5A',
  110: '#379A4F',
  140: '#2B7A3E',
  A08: 'rgba(63,174,90,0.08)',
  A32: 'rgba(63,174,90,0.32)',
};

const orange = {
  100: '#E3A11A',
  110: '#C48C16',
  140: '#9A6E12',
  A08: 'rgba(227,161,26,0.08)',
  A32: 'rgba(227,161,26,0.32)',
};

const blue = {
  100: '#2F6FDB',
  110: '#285FC0',
  140: '#1F4A96',
  A08: 'rgba(47,111,219,0.08)',
  A32: 'rgba(47,111,219,0.32)',
};

const neutral = {
  10: '#FFFFFF',
  30: '#E5E7EB',
  60: '#9CA3AF',
};

/* ------------------------------------------------------------------ */
/* SEMANTIC COLORS */
/* ------------------------------------------------------------------ */

export const colors = {
  /* ---------------- Layers ---------------- */
  layer: {
    0: dark.full,
    1: dark[150],
    2: dark[140],
    3: dark[140],
    overlay: dark.A16,
  },

  /* ---------------- Background / Surface ---------------- */
  surface: {
    low: white.A04,
    mid: white.A08,
    high: white.A12,
    default: white.full,

    brand: {
      default: brand[80],
      soft: brand.A16,
      transparent: brand.A32,
    },

    destructive: {
      default: red[110],
      soft: red.A08,
      transparent: red.A32,
    },

    positive: {
      default: green[110],
      soft: green.A08,
      transparent: green.A32,
    },

    warning: {
      default: orange[110],
      soft: orange.A08,
      transparent: orange.A32,
    },

    informative: {
      default: blue[110],
      soft: blue.A08,
      transparent: blue.A32,
    },
  },

  /* ---------------- Fill (Buttons etc.) ---------------- */
  fill: {
    brand: {
      default: brand[80],
      pressed: brand[60],
      transparent: brand.A16,
      disabled: brand.A32,
    },

    secondary: {
      default: neutral[10],
      pressed: dark[140],
      disabled: dark.A32,
    },

    tertiary: {
      default: white.A16,
      pressed: white.A08,
      disabled: white.A12,
    },

    destructive: {
      default: red[100],
      pressed: red[110],
      disabled: red.A32,
    },

    positive: {
      default: green[100],
      pressed: green[110],
      disabled: green.A32,
    },

    warning: {
      default: orange[100],
      pressed: orange[110],
      disabled: orange.A32,
    },

    informative: {
      default: blue[100],
      pressed: blue[110],
      disabled: blue.A32,
    },
  },

  /* ---------------- Text ---------------- */
  text: {
    high: white.full,
    mid: white.A12,
    low: white.A08,
    disabled: white.A04,

    brand: brand[70],
    destructive: red[100],
    positive: green[100],
    warning: orange[100],
    informative: blue[100],

    black: dark[150],
  },

  /* ---------------- Border ---------------- */
  border: {
    high: white.A12,
    mid: white.A08,
    low: white.A04,

    brand: brand[60],
    destructive: red[100],
    positive: green[100],
    warning: orange[100],
    informative: blue[100],
  },

  /* ---------------- Input ---------------- */
  input: {
    fill: dark[150],
    border: {
      default: white.A08,
      active: brand[60],
      focused: brand[70],
      disabled: white.A04,
      destructive: red[100],
    },
    text: {
      default: white.full,
      destructive: red[100],
    },
  },
} as const;
