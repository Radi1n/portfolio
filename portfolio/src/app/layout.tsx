import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import { profile } from '@/data/profile'
import { siteUrl } from '@/lib/site'
import '@/styles/tokens.css'
import './globals.css'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-jakarta',
})

const title = `${profile.name} | ${profile.role}`

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description: profile.bio,
  openGraph: {
    type: 'website',
    title,
    description: profile.bio,
    url: '/',
    siteName: profile.name,
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description: profile.bio,
    images: ['/og-image.png'],
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FAF7F4' },
    { media: '(prefers-color-scheme: dark)', color: '#171413' },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={jakarta.variable} suppressHydrationWarning>
      <body>
        <noscript>
          <style>{'.reveal{opacity:1;transform:none}'}</style>
        </noscript>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
