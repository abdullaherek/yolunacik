export const typography = {
  fontFamily: {
    regular: 'Inter-Regular',
    semibold: 'Inter-SemiBold',
    bold: 'Inter-Bold',
  },

  /* ------------------------------------------------------------------ */
  /* TITLE */
  /* ------------------------------------------------------------------ */
  title: {
    10: { fontSize: 32, lineHeight: 38, fontWeight: '700' },
    20: { fontSize: 28, lineHeight: 34, fontWeight: '700' },
    30: { fontSize: 24, lineHeight: 29, fontWeight: '700' },
    40: { fontSize: 20, lineHeight: 24, fontWeight: '700' },
    50: { fontSize: 18, lineHeight: 22, fontWeight: '700' },
    60: { fontSize: 16, lineHeight: 19, fontWeight: '700' },
    70: { fontSize: 14, lineHeight: 17, fontWeight: '700' },
  },

  /* ------------------------------------------------------------------ */
  /* HEADING */
  /* ------------------------------------------------------------------ */
  heading: {
    10: { fontSize: 28, lineHeight: 34, fontWeight: '600' },
    20: { fontSize: 24, lineHeight: 29, fontWeight: '600' },
    30: { fontSize: 20, lineHeight: 24, fontWeight: '600' },
    40: { fontSize: 18, lineHeight: 22, fontWeight: '600' },
    50: { fontSize: 16, lineHeight: 19, fontWeight: '600' },
    60: { fontSize: 14, lineHeight: 17, fontWeight: '600' },
    70: { fontSize: 12, lineHeight: 14, fontWeight: '600' },
  },

  /* ------------------------------------------------------------------ */
  /* LABEL */
  /* ------------------------------------------------------------------ */
  label: {
    10: { fontSize: 18, lineHeight: 18, fontWeight: '600' },
    20: { fontSize: 16, lineHeight: 16, fontWeight: '600' },
    30: { fontSize: 14, lineHeight: 14, fontWeight: '600' },
    40: { fontSize: 12, lineHeight: 12, fontWeight: '600' },
  },

  /* ------------------------------------------------------------------ */
  /* BODY */
  /* ------------------------------------------------------------------ */
  body: {
    10: { fontSize: 18, lineHeight: 22, fontWeight: '400' },
    20: { fontSize: 16, lineHeight: 19, fontWeight: '400' },
    30: { fontSize: 14, lineHeight: 17, fontWeight: '400' },
    40: { fontSize: 12, lineHeight: 14, fontWeight: '400' },
  },

  /* ------------------------------------------------------------------ */
  /* COMPONENT – BUTTON / INPUT */
  /* ------------------------------------------------------------------ */
  component: {
    buttonLabel: {
      xs: { fontSize: 10, lineHeight: 16, fontWeight: '600' },
      sm: { fontSize: 12, lineHeight: 16, fontWeight: '600' },
      lg: { fontSize: 14, lineHeight: 16, fontWeight: '600' },
    },

    inputLabel: {
      sm: { fontSize: 12, lineHeight: 16, fontWeight: '600' },
      md: { fontSize: 14, lineHeight: 16, fontWeight: '600' },
    },

    inputValue: {
      sm: { fontSize: 12, lineHeight: 16, fontWeight: '400' },
      lg: { fontSize: 14, lineHeight: 20, fontWeight: '400' },
    },

    inputHelper: {
      fontSize: 12,
      lineHeight: 12,
      fontWeight: '400',
    },
  },
} as const;
