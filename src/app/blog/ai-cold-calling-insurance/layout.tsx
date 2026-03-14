import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Cold Calling for Insurance: How Agents Are Booking More Appointments in 2026 | Duvox',
  description: 'Learn how AI cold calling for insurance works. Discover how insurance agents and agencies use AI voice agents to qualify leads, book appointments, and grow their book of business faster in 2026.',
  keywords: 'ai cold calling for insurance, ai cold calling insurance agents, automated cold calling insurance, ai insurance leads, voice ai for insurance, insurance cold calling software',
  authors: [{ name: 'Duvox Team' }],
  openGraph: {
    title: 'AI Cold Calling for Insurance: How Agents Are Booking More Appointments in 2026',
    description: 'How insurance agents and agencies use AI voice agents to qualify leads and book more appointments.',
    url: 'https://aicoldcallingsoftware.com/blog/ai-cold-calling-insurance',
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
    title: 'AI Cold Calling for Insurance: How Agents Are Booking More Appointments in 2026',
    description: 'How insurance agents and agencies use AI voice agents to qualify leads and book more appointments.',
    images: ['https://aicoldcallingsoftware.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://aicoldcallingsoftware.com/blog/ai-cold-calling-insurance',
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
