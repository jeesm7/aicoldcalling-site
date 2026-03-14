import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Outbound Calling ROI: What to Realistically Expect in 2026 | Duvox',
  description: 'A realistic breakdown of AI outbound calling ROI. Covers cost per call, conversion rates, time savings, and how to calculate whether AI calling makes sense for your business.',
  keywords: 'ai outbound calling roi, ai calling roi, ai cold calling cost, ai sdr roi, voice ai roi calculator, ai calling return on investment',
  authors: [{ name: 'Duvox Team' }],
  openGraph: {
    title: 'AI Outbound Calling ROI: What to Realistically Expect in 2026',
    description: 'Real numbers on AI outbound calling costs, conversion rates, and return on investment.',
    url: 'https://aicoldcallingsoftware.com/blog/ai-outbound-calling-roi',
    siteName: 'Duvox - AI Cold Calling Software',
    images: [{ url: 'https://aicoldcallingsoftware.com/og-image.jpg', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Outbound Calling ROI: What to Realistically Expect in 2026',
    description: 'Real numbers on AI outbound calling costs, conversion rates, and return on investment.',
    images: ['https://aicoldcallingsoftware.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://aicoldcallingsoftware.com/blog/ai-outbound-calling-roi',
  },
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children
}
