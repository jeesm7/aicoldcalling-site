import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Automate Cold Calling: A Step-by-Step Guide for 2026 | Duvox',
  description: 'Learn how to automate cold calling with AI voice agents. This step-by-step guide covers choosing software, building scripts, launching campaigns, and measuring ROI for automated outbound calling.',
  keywords: 'how to automate cold calling, automate cold calling, cold calling automation, ai cold calling setup, automated outbound calling, cold call automation guide',
  authors: [{ name: 'Duvox Team' }],
  openGraph: {
    title: 'How to Automate Cold Calling: A Step-by-Step Guide for 2026',
    description: 'The complete playbook for automating cold calling with AI voice agents in 2026.',
    url: 'https://aicoldcallingsoftware.com/blog/how-to-automate-cold-calling',
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
    title: 'How to Automate Cold Calling: A Step-by-Step Guide for 2026',
    description: 'Learn how to automate cold calling with AI voice agents. Covers choosing software, building scripts, launching campaigns, and measuring ROI.',
    images: ['https://aicoldcallingsoftware.com/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://aicoldcallingsoftware.com/blog/how-to-automate-cold-calling',
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
