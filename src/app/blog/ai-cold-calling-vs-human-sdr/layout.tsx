import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Cold Calling vs Human SDRs: An Honest Comparison for 2026 | Duvox',
  description: 'AI cold calling vs human SDRs compared across cost, speed, conversion rates, scalability, and conversation quality. Real data to help you decide the right mix for your sales team in 2026.',
  keywords: 'ai cold calling vs human sdr, ai vs human sales, automated cold calling comparison, ai sdr vs human sdr, cold calling automation vs manual',
  authors: [{ name: 'Duvox Team' }],
  openGraph: {
    title: 'AI Cold Calling vs Human SDRs: An Honest Comparison for 2026',
    description: 'AI cold calling vs human SDRs compared across cost, speed, conversion, and quality. Real data for 2026.',
    url: 'https://aicoldcallingsoftware.com/blog/ai-cold-calling-vs-human-sdr',
    siteName: 'Duvox - AI Cold Calling Software',
    images: [
      {
        url: 'https://aicoldcallingsoftware.com/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Cold Calling vs Human SDRs: An Honest Comparison for 2026',
    description: 'AI cold calling vs human SDRs compared across cost, speed, conversion rates, scalability, and conversation quality.',
    images: ['https://aicoldcallingsoftware.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://aicoldcallingsoftware.com/blog/ai-cold-calling-vs-human-sdr',
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
