import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  preflight: true,
  include: ['./src/**/*.{astro,ts,tsx}'],
  outdir: 'styled-system',

  conditions: {
    dark: '@media (prefers-color-scheme: dark)',
  },

  theme: {
    tokens: {
      colors: {
        ink: { value: '#1a1a29' },
        'ink.light': { value: '#242433' },
        paper: { value: '#f0efe6' },
      },
      fonts: {
        body: {
          value: [
            '"Palatino Linotype"',
            'Palatino',
            '"Book Antiqua"',
            '"Hiragino Mincho ProN"',
            '"YuMincho"',
            '"Yu Mincho"',
            '"Noto Serif JP"',
            'serif',
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
        bg: {
          value: { base: '{colors.paper}', _dark: '#2a2826' },
        },
        fg: {
          value: { base: '{colors.ink}', _dark: '#d4d0c8' },
        },
        'fg.secondary': {
          value: { base: '{colors.ink.light}', _dark: '#b8b4ac' },
        },
        link: {
          value: { base: '{colors.ink}', _dark: '#d4d0c8' },
        },
        'link.hover': {
          value: { base: '#1a1a29b3', _dark: '#d4d0c8b3' },
        },
        border: {
          value: { base: '#1a1a2933', _dark: '#d4d0c833' },
        },
        'border.strong': {
          value: { base: '#1a1a2980', _dark: '#d4d0c880' },
        },
        'tag.bg': {
          value: { base: '#1a1a2914', _dark: '#d4d0c814' },
        },
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
      position: 'relative',
      _before: {
        content: '""',
          position: 'fixed',
          inset: '0',
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='256' height='256'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.1'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          pointerEvents: 'none',
          zIndex: '-1',
      },
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
      textShadow: '0 1px 0 rgba(255,255,255,0.3)',
    },
    'p, li, dd, blockquote': {
      textShadow: '0 1px 0 rgba(255,255,255,0.3)',
    },
  },
});
