import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Best AI Cold Calling Software in 2026: An Honest Comparison | Duvox',
  description: 'A practical comparison of the best AI cold calling software in 2026. Covers features, pricing, voice quality, and which platform fits different use cases.',
  keywords: 'best ai cold calling software, ai cold calling software comparison, ai calling platforms 2026, top ai cold calling tools, ai dialer software',
  authors: [{ name: 'Duvox Team' }],
  openGraph: {
    title: 'Best AI Cold Calling Software in 2026: An Honest Comparison',
    description: 'Practical comparison of the top AI cold calling platforms. Features, pricing, and honest takes.',
    url: 'https://aicoldcallingsoftware.com/blog/best-ai-cold-calling-software',
    siteName: 'Duvox - AI Cold Calling Software',
    images: [{ url: 'https://aicoldcallingsoftware.com/og-image.jpg', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best AI Cold Calling Software in 2026: An Honest Comparison',
    description: 'Practical comparison of the top AI cold calling platforms.',
    images: ['https://aicoldcallingsoftware.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://aicoldcallingsoftware.com/blog/best-ai-cold-calling-software',
  },
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children
}
