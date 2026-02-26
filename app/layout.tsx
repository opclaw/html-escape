import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://html-escape.vercel.app'),
  alternates: {
    canonical: 'https://html-escape.vercel.app',
  },
  title: 'HTML Escape / Unescape — Online Tool | Free',
  description: 'Escape and unescape HTML entities. Free online HTML encoder and decoder for web developers.',
  keywords: ['html escape', 'html unescape', 'html encoder', 'html decoder', 'html entities'],
  authors: [{ name: 'SmartOK Tools' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://html-escape.vercel.app',
    siteName: 'HTML Escape',
    title: 'HTML Escape / Unescape — Online Tool',
    description: 'Escape and unescape HTML entities.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HTML Escape / Unescape',
    description: 'Escape and unescape HTML entities.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'HTML Escape / Unescape',
              applicationCategory: 'DeveloperApplication',
              operatingSystem: 'Any',
              offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
              featureList: 'HTML escaping, HTML unescaping, Entity encoding',
            })
          }}
        />
      </head>
      <body className="min-h-screen bg-slate-50">{children}</body>
    </html>
  )
}
