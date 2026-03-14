import Link from "next/link";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blog | AI Cold Calling and Voice AI Insights",
  description:
    "Learn about AI cold calling, full-duplex voice AI, and how to scale outbound calling for real estate. Guides, comparisons, and technical deep dives.",
  alternates: {
    canonical: "https://aicoldcallingsoftware.com/blog",
  },
  openGraph: {
    title: "Duvox Blog | AI Cold Calling and Voice AI",
    description:
      "Guides on AI cold calling, full-duplex voice AI, and scaling outbound for real estate.",
  },
};

const cardClass =
  "bg-white rounded-2xl border border-[var(--color-border-light)] shadow-[0_8px_32px_rgba(0,0,0,0.08),0_2px_8px_rgba(0,0,0,0.04)]";

const posts = [
  {
    slug: "voice-ai-for-sales-teams",
    title: "Voice AI for Sales Teams: A Practical Guide for 2026",
    date: "March 4, 2026",
    preview:
      "How sales teams are using voice AI for outbound calling, lead qualification, and appointment booking. Covers setup, use cases, and integration with existing sales workflows.",
    tag: "Sales Guide",
  },
  {
    slug: "ai-sdr-vs-human-sdr-cost",
    title: "AI SDR vs Human SDR: The Real Cost Breakdown for 2026",
    date: "March 4, 2026",
    preview:
      "A line-by-line cost comparison of AI SDRs versus human SDRs. Covers salary, tools, overhead, per-call costs, and total cost of ownership for outbound sales teams.",
    tag: "Cost Analysis",
  },
  {
    slug: "best-ai-cold-calling-software",
    title: "Best AI Cold Calling Software in 2026: An Honest Comparison",
    date: "March 4, 2026",
    preview:
      "A practical comparison of the top AI cold calling platforms. Covers voice quality, script flexibility, CRM integrations, pricing, and which platform fits different use cases.",
    tag: "Comparison",
  },
  {
    slug: "ai-outbound-calling-roi",
    title: "AI Outbound Calling ROI: What to Realistically Expect in 2026",
    date: "March 4, 2026",
    preview:
      "Real numbers on AI outbound calling costs, conversion rates, and return on investment. Includes a framework for calculating whether AI calling makes sense for your business.",
    tag: "ROI Analysis",
  },
  {
    slug: "ai-cold-calling-mortgage-leads",
    title: "AI Cold Calling for Mortgage Leads: How Loan Officers Are Closing More in 2026",
    date: "March 4, 2026",
    preview:
      "How mortgage brokers and loan officers use AI cold calling to qualify leads, book appointments, and close more loans. Covers setup, scripts, compliance, and ROI.",
    tag: "Mortgage",
  },
  {
    slug: "how-to-automate-cold-calling",
    title: "How to Automate Cold Calling: A Step-by-Step Guide for 2026",
    date: "February 27, 2026",
    preview:
      "A complete step-by-step guide to automating cold calling with AI voice agents. Covers choosing software, writing scripts, launching campaigns, optimizing results, and scaling what works.",
    tag: "How-To",
  },
  {
    slug: "ai-cold-calling-insurance",
    title: "AI Cold Calling for Insurance: How Agents Are Booking More Appointments in 2026",
    date: "February 26, 2026",
    preview:
      "How insurance agents and agencies use AI voice agents to qualify leads, book appointments, and grow their book of business faster. Covers Medicare, life, auto, commercial, and final expense.",
    tag: "Insurance",
  },
  {
    slug: "ai-cold-calling-vs-human-sdr",
    title: "AI Cold Calling vs Human SDRs: An Honest Comparison for 2026",
    date: "February 24, 2026",
    preview:
      "AI cold calling and human SDRs each have real strengths. A side-by-side comparison across cost, speed, conversion rates, quality, and scalability to help you find the right mix.",
    tag: "Comparison",
  },
  {
    slug: "ai-cold-calling-benefits",
    title: "7 Benefits of AI Cold Calling That Change Your Sales Pipeline",
    date: "February 19, 2026",
    preview:
      "Discover the 7 key benefits of AI cold calling: faster qualification, higher conversion rates, 24/7 operation, cost savings, zero fatigue, better data, and 10x scale.",
    tag: "Guide",
  },
  {
    slug: "what-is-an-ai-sdr",
    title: "What Is an AI SDR? How AI Sales Development Reps Work in 2026",
    date: "February 18, 2026",
    preview:
      "AI SDRs are changing outbound sales. They prospect, call, qualify, and book meetings without human intervention. Here is exactly what they are, how they work, and whether they can replace your sales team.",
    tag: "AI Sales",
  },
  {
    slug: "how-ai-cold-calling-works",
    title: "How AI Cold Calling Works: A Technical Breakdown",
    date: "February 16, 2026",
    preview:
      "AI cold calling is not a robocall. It is a voice agent that listens, understands, and responds in real time. Here is exactly how the technology works under the hood.",
    tag: "Technology",
  },
  {
    slug: "ai-phone-calling-complete-guide",
    title: "Complete Guide to AI Phone Calling: Setup, Benefits & Best Practices",
    date: "February 13, 2026",
    preview:
      "Everything you need to know about AI phone calling. From choosing the right platform to launching your first campaign, this guide covers setup, ROI analysis, and best practices for sales teams.",
    tag: "Guide",
  },
  {
    slug: "full-duplex-voice-ai",
    title: "Full Duplex Voice AI: Why It Matters for Cold Calling",
    date: "February 9, 2026",
    preview:
      "Every AI calling tool on the market uses half-duplex voice. That means your AI waits, thinks, then talks. The result? Awkward pauses that kill conversions. Full-duplex changes everything.",
    tag: "Technology",
  },
  {
    slug: "ai-cold-calling-real-estate-2026",
    title: "AI Cold Calling for Real Estate in 2026: The Complete Guide",
    date: "February 9, 2026",
    preview:
      "What AI cold calling actually is, how it works, the ROI compared to human SDRs, and what features to look for in AI calling software. Everything a real estate agent needs to know.",
    tag: "Guide",
  },
];

export default function BlogIndex() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-32 sm:pt-40 pb-16 sm:pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-display)] leading-tight mb-4">
            Blog
          </h1>
          <p className="text-lg text-[var(--color-text-secondary)]">
            Insights on AI cold calling, full-duplex voice AI, and scaling outbound for real estate.
          </p>
        </div>
      </section>

      <section className="pb-20 px-6">
        <div className="max-w-3xl mx-auto space-y-6">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
              <article className={`${cardClass} p-6 sm:p-8 hover:shadow-[0_12px_48px_rgba(0,0,0,0.12),0_4px_12px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 transition-all duration-300`}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-2.5 py-1 rounded-full bg-[var(--color-accent-light)] text-[var(--color-accent-dark)] text-xs font-medium">
                    {post.tag}
                  </span>
                  <span className="text-xs text-[var(--color-text-muted)]">{post.date}</span>
                </div>
                <h2 className="text-xl font-semibold font-[family-name:var(--font-display)] mb-2 group-hover:text-[var(--color-accent-dark)] transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {post.preview}
                </p>
                <span className="inline-block mt-4 text-sm font-medium text-[var(--color-accent-dark)]">
                  Read more &rarr;
                </span>
              </article>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
