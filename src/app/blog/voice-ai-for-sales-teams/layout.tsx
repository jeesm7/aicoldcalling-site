import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Voice AI for Sales Teams: A Practical Guide for 2026 | Duvox',
  description: 'How sales teams are using voice AI for outbound calling, lead qualification, and appointment booking. Covers setup, use cases, and integration with existing sales workflows.',
  keywords: 'voice ai for sales, voice ai sales teams, ai voice agent sales, ai calling for sales teams, voice ai outbound sales',
  authors: [{ name: 'Duvox Team' }],
  openGraph: {
    title: 'Voice AI for Sales Teams: A Practical Guide for 2026',
    description: 'How sales teams use voice AI for outbound calling, qualification, and booking.',
    url: 'https://aicoldcallingsoftware.com/blog/voice-ai-for-sales-teams',
    siteName: 'Duvox - AI Cold Calling Software',
    images: [{ url: 'https://aicoldcallingsoftware.com/og-image.jpg', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Voice AI for Sales Teams: A Practical Guide for 2026',
    description: 'Practical guide to using voice AI in sales. Setup, use cases, and workflow integration.',
    images: ['https://aicoldcallingsoftware.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://aicoldcallingsoftware.com/blog/voice-ai-for-sales-teams',
  },
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children
}
