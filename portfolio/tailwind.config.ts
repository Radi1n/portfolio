import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{ts,tsx}'],
  future: { hoverOnlyWhenSupported: true },
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        ink: 'var(--text)',
        muted: 'var(--text-2)',
        line: 'var(--line)',
        'line-strong': 'var(--line-strong)',
        hover: 'var(--hover)',
        chip: 'var(--chip-bg)',
        placeholder: 'var(--placeholder)',
        'placeholder-line': 'var(--placeholder-line)',
        brand: 'var(--brand)',
        'brand-hover': 'var(--brand-hover)',
        'on-brand': 'var(--on-brand)',
        accent: 'var(--accent-text)',
        focus: 'var(--focus)',
      },
      fontFamily: {
        sans: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        display: [
          'clamp(44px, 6vw, 72px)',
          { lineHeight: '1.04', letterSpacing: '-0.035em', fontWeight: '800' },
        ],
        h2: ['36px', { lineHeight: '1.1', letterSpacing: '-0.03em', fontWeight: '800' }],
        'h2-lg': ['48px', { lineHeight: '1.1', letterSpacing: '-0.03em', fontWeight: '800' }],
        feature: ['26px', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '800' }],
        'feature-lg': ['32px', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '800' }],
        h3: ['20px', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '700' }],
        'h3-lg': ['22px', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '700' }],
        body: ['16px', { lineHeight: '1.65' }],
        'body-lg': ['18px', { lineHeight: '1.65' }],
        small: ['15px', { lineHeight: '1.5' }],
        caption: ['13px', { lineHeight: '1.4' }],
      },
      boxShadow: {
        card: 'var(--shadow)',
        'tile-hover': '0 0 0 1px var(--brand), var(--shadow)',
      },
      borderRadius: {
        card: '20px',
      },
    },
  },
  plugins: [],
}

export default config
