import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Cold Calling for Mortgage Leads: How Loan Officers Are Closing More in 2026 | Duvox',
  description: 'How mortgage brokers and loan officers use AI cold calling to qualify leads, book appointments, and close more loans. Covers setup, scripts, compliance, and ROI.',
  keywords: 'ai cold calling mortgage, ai cold calling mortgage leads, ai calling for loan officers, mortgage lead generation ai, automated mortgage calls',
  authors: [{ name: 'Duvox Team' }],
  openGraph: {
    title: 'AI Cold Calling for Mortgage Leads: How Loan Officers Are Closing More in 2026',
    description: 'The complete guide to using AI voice agents for mortgage lead qualification and appointment booking.',
    url: 'https://aicoldcallingsoftware.com/blog/ai-cold-calling-mortgage-leads',
    siteName: 'Duvox - AI Cold Calling Software',
    images: [{ url: 'https://aicoldcallingsoftware.com/og-image.jpg', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Cold Calling for Mortgage Leads: How Loan Officers Are Closing More in 2026',
    description: 'How mortgage brokers use AI cold calling to qualify leads and book more appointments.',
    images: ['https://aicoldcallingsoftware.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://aicoldcallingsoftware.com/blog/ai-cold-calling-mortgage-leads',
  },
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children
}
