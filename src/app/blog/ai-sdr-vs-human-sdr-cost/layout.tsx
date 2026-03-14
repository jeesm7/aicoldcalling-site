import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI SDR vs Human SDR: The Real Cost Breakdown for 2026 | Duvox',
  description: 'A detailed cost comparison of AI SDRs versus human SDRs. Covers salary, tools, overhead, per-call costs, and total cost of ownership for outbound sales teams.',
  keywords: 'ai sdr vs human sdr cost, ai sdr cost, human sdr cost, ai sales rep cost comparison, sdr cost breakdown 2026',
  authors: [{ name: 'Duvox Team' }],
  openGraph: {
    title: 'AI SDR vs Human SDR: The Real Cost Breakdown for 2026',
    description: 'Detailed cost comparison of AI SDRs versus human SDRs for outbound sales.',
    url: 'https://aicoldcallingsoftware.com/blog/ai-sdr-vs-human-sdr-cost',
    siteName: 'Duvox - AI Cold Calling Software',
    images: [{ url: 'https://aicoldcallingsoftware.com/og-image.jpg', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI SDR vs Human SDR: The Real Cost Breakdown for 2026',
    description: 'Detailed cost comparison: AI SDRs vs human SDRs for outbound sales.',
    images: ['https://aicoldcallingsoftware.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://aicoldcallingsoftware.com/blog/ai-sdr-vs-human-sdr-cost',
  },
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children
}
