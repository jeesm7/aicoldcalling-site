'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CTASection } from '@/components/CTASection';

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
      <Navbar />
      <main className="pt-24 pb-16">
        <article className="max-w-4xl mx-auto px-6">
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white text-sm font-medium mb-6"
            >
              Cost Analysis
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              AI SDR vs Human SDR: The Real Cost Breakdown for 2026
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Hiring an SDR costs more than their salary. AI SDRs cost less than you think. Here is a line-by-line cost comparison so you can make an informed decision.
            </p>
            <div className="flex items-center justify-center mt-8 text-gray-400">
              <span>March 4, 2026</span>
              <span className="mx-3">•</span>
              <span>9 min read</span>
            </div>
          </motion.header>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="prose prose-lg prose-invert max-w-none"
          >
            <div className="text-gray-300 leading-relaxed space-y-8">

              <p>
                We published a broader <Link href="/blog/ai-cold-calling-vs-human-sdr" className="text-blue-400 hover:text-blue-300 underline">comparison of AI cold calling vs human SDRs</Link> that covers quality, scalability, and use cases. This post goes deeper on the one thing most people want to know first: the money.
              </p>

              <p>
                What does a human SDR actually cost when you add everything up? What does an AI SDR cost at different volumes? And where is the breakeven point?
              </p>

              <h2 className="text-3xl font-bold text-white mt-12 mb-6">The True Cost of a Human SDR</h2>

              <p>
                Most people think of SDR cost as the salary on the job listing. That is only the starting point. Here is what a single SDR actually costs a company in the United States.
              </p>

              <p>
                <strong className="text-white">Base salary:</strong> $45,000 to $65,000 per year for a junior SDR. $65,000 to $85,000 for experienced. In high cost-of-living markets like SF, NYC, or Boston, add 20% to 30%.
              </p>

              <p>
                <strong className="text-white">Variable compensation:</strong> Most SDR comp plans include a bonus or commission component of $10,000 to $25,000 per year. This is on top of base salary.
              </p>

              <p>
                <strong className="text-white">Benefits and payroll taxes:</strong> Health insurance, 401(k) match, payroll taxes (FICA, unemployment). This adds 25% to 35% on top of the total cash compensation. On a $60,000 base + $15,000 variable, benefits add roughly $18,000 to $26,000.
              </p>

              <p>
                <strong className="text-white">Tools and software:</strong> CRM seat ($100 to $300/month), dialer ($100 to $200/month), sales engagement platform ($100 to $200/month), phone/headset, email tools. Total: $300 to $700 per month, or $3,600 to $8,400 per year.
              </p>

              <p>
                <strong className="text-white">Management overhead:</strong> An SDR manager typically manages 6 to 10 reps. If the manager costs $120,000 fully loaded, that is $12,000 to $20,000 per SDR per year in management cost.
              </p>

              <p>
                <strong className="text-white">Recruiting and training:</strong> Average cost to hire an SDR is $4,000 to $8,000 (recruiting fees, interview time, onboarding). Training takes 2 to 4 weeks during which the SDR is not productive but is being paid. With average SDR tenure of 14 months, you are recruiting and training roughly once a year.
              </p>

              <p>
                <strong className="text-white">The fully loaded total:</strong> For a mid-range SDR in the US, the fully loaded annual cost is typically $95,000 to $140,000. That is $7,900 to $11,700 per month.
              </p>

              <p>
                Most sales leaders know the salary. Few have calculated the fully loaded number. When you include everything, a single SDR costs roughly twice their base salary.
              </p>

              <h2 className="text-3xl font-bold text-white mt-12 mb-6">The True Cost of an AI SDR</h2>

              <p>
                AI SDR costs are more straightforward but vary by volume.
              </p>

              <p>
                <strong className="text-white">Platform subscription:</strong> $200 to $2,000 per month depending on the platform and tier. This covers the dashboard, analytics, CRM integrations, and support.
              </p>

              <p>
                <strong className="text-white">Per-minute voice costs:</strong> $0.08 to $0.30 per minute of conversation. A typical cold call that connects is 2 to 4 minutes. Calls that go to voicemail are 15 to 30 seconds.
              </p>

              <p>
                <strong className="text-white">Telephony costs:</strong> Some platforms include phone numbers and carrier costs. Others charge separately. Expect $1 to $3 per phone number per month plus $0.01 to $0.03 per minute in carrier charges.
              </p>

              <p>
                <strong className="text-white">Setup and maintenance:</strong> Initial setup (scripts, integrations, testing) typically takes 10 to 40 hours. Ongoing optimization (script updates, A/B tests, performance review) takes 2 to 5 hours per week. If done by a consultant, expect $100 to $200 per hour. If done internally, it is an opportunity cost.
              </p>

              <h2 className="text-3xl font-bold text-white mt-12 mb-6">Cost at Different Volumes</h2>

              <p>
                Here is what an AI SDR costs at three common call volumes, assuming $500/month platform fee and $0.15/minute voice costs.
              </p>

              <p>
                <strong className="text-white">50 calls per day (1,000/month):</strong> Assuming 20% connect rate, 200 connected calls averaging 3 minutes each = 600 minutes. Voice cost: $90. Plus 800 voicemail drops at 0.5 minutes = 400 minutes, $60. Platform: $500. Total: roughly $650 per month.
              </p>

              <p>
                <strong className="text-white">200 calls per day (4,000/month):</strong> 800 connected calls at 3 minutes = 2,400 minutes ($360). 3,200 voicemails at 0.5 minutes = 1,600 minutes ($240). Platform: $500. Total: roughly $1,100 per month.
              </p>

              <p>
                <strong className="text-white">500 calls per day (10,000/month):</strong> 2,000 connected calls at 3 minutes = 6,000 minutes ($900). 8,000 voicemails at 0.5 minutes = 4,000 minutes ($600). Platform: $1,000 (higher tier). Total: roughly $2,500 per month.
              </p>

              <h2 className="text-3xl font-bold text-white mt-12 mb-6">The Direct Comparison</h2>

              <p>
                At 200 calls per day, which is roughly what a productive human SDR can manage:
              </p>

              <p>
                Human SDR: $8,000 to $11,000 per month (fully loaded).
              </p>

              <p>
                AI SDR: $1,100 per month.
              </p>

              <p>
                That is a 7x to 10x cost difference at the same call volume.
              </p>

              <p>
                But the AI can also do 500 calls per day for $2,500 per month. To match that volume with humans, you would need 2 to 3 SDRs at $16,000 to $33,000 per month.
              </p>

              <p>
                The cost gap widens as volume increases because AI calling costs scale linearly while human costs scale in steps (each new hire is another $8,000+ per month).
              </p>

              <h2 className="text-3xl font-bold text-white mt-12 mb-6">What the Numbers Do Not Capture</h2>

              <p>
                The cost comparison above is real but incomplete. Here are the factors that do not show up in a spreadsheet.
              </p>

              <p>
                <strong className="text-white">Human SDRs build relationships.</strong> A good SDR who connects with a prospect can build rapport that leads to a warmer handoff. The AI qualifies efficiently but does not charm anyone. For complex B2B sales, this matters more than the cost difference.
              </p>

              <p>
                <strong className="text-white">Human SDRs handle the unexpected.</strong> When a prospect says something completely off-script, a human adapts. An AI agent handles it reasonably well for common objections but can stumble on truly novel situations.
              </p>

              <p>
                <strong className="text-white">AI never has a bad day.</strong> Every call gets the same energy, the same script execution, the same follow-through. Human performance varies by day, by mood, by how close they are to burning out.
              </p>

              <p>
                <strong className="text-white">AI scales instantly.</strong> Need to call 10,000 leads from a trade show by Friday? An AI agent handles it without hiring, training, or overtime. A human team cannot spin up that fast.
              </p>

              <p>
                <strong className="text-white">Turnover is a hidden cost killer.</strong> With 14-month average tenure, you are perpetually recruiting, training, and ramping SDRs. The AI does not quit. It does not need a promotion path. It does not get recruited by a competitor.
              </p>

              <h2 className="text-3xl font-bold text-white mt-12 mb-6">The Hybrid Model</h2>

              <p>
                Most companies that get the best results do not go fully AI or fully human. They use AI for the high-volume, repetitive calling (initial outreach, re-engagement, qualification) and humans for the high-value conversations (discovery calls, demos, relationship-building).
              </p>

              <p>
                In this model, AI handles 80% of the dial volume at 10% of the cost, and humans focus on the 20% of conversations that require real skill and judgment. The total spend goes down while results go up because humans are spending their time on the calls that actually convert.
              </p>

              <p>
                For a practical guide on setting this up, start with our <Link href="/blog/how-to-automate-cold-calling" className="text-blue-400 hover:text-blue-300 underline">step-by-step guide to automating cold calling</Link>, then read our <Link href="/blog/ai-outbound-calling-roi" className="text-blue-400 hover:text-blue-300 underline">AI calling ROI analysis</Link> to build the business case.
              </p>

            </div>
          </motion.div>
        </article>
      </main>
      <CTASection />
      <Footer />
    </div>
  );
}
