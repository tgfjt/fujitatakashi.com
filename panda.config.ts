import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  preflight: true,
  include: ['./src/**/*.{astro,ts,tsx}'],
  outdir: 'styled-system',

  theme: {
    tokens: {
      colors: {
        ink: { value: '#1a1a1a' },
        paper: { value: '#f5f0e8' },
      },
      fonts: {
        body: {
          value: [
            '"Hiragino Kaku Gothic ProN"',
            '"Hiragino Sans"',
            '"Noto Sans JP"',
            'sans-serif',
          ].join(', '),
        },
        mono: {
          value: [
            '"JetBrains Mono"',
            '"Source Code Pro"',
            'monospace',
          ].join(', '),
        },
      },
      fontSizes: {
        sm: { value: '0.875rem' },
        base: { value: '1rem' },
        lg: { value: '1.25rem' },
        xl: { value: '1.5rem' },
        '2xl': { value: '2rem' },
      },
      spacing: {
        xs: { value: '0.25rem' },
        sm: { value: '0.5rem' },
        md: { value: '1rem' },
        lg: { value: '1.5rem' },
        xl: { value: '2rem' },
        '2xl': { value: '4rem' },
      },
      radii: {
        sm: { value: '2px' },
        md: { value: '4px' },
      },
    },
    semanticTokens: {
      colors: {
        bg: { value: '{colors.paper}' },
        fg: { value: '{colors.ink}' },
        link: { value: '{colors.ink}' },
        'link.hover': { value: '#1a1a1ab3' },
        border: { value: '#1a1a1a33' },
        'border.strong': { value: '#1a1a1a80' },
        'tag.bg': { value: '#1a1a1a14' },
      },
    },
  },

  globalCss: {
    body: {
      bg: 'bg',
      color: 'fg',
      fontFamily: 'body',
      fontSize: 'base',
      lineHeight: '1.8',
      maxWidth: '48rem',
      mx: 'auto',
      px: 'md',
      py: 'xl',
    },
    a: {
      color: 'link',
      textDecoration: 'underline',
      textUnderlineOffset: '3px',
      _hover: {
        color: 'link.hover',
      },
    },
    'h1, h2, h3': {
      lineHeight: '1.3',
      fontWeight: 'bold',
    },
  },
});
