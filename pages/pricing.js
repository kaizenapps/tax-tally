// pages/pricing.js
import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';

export default function Pricing() {
  return (
    <>
      <Head>
        <title>Tax Tally - Pricing</title>
        <meta
          name="description"
          content="File your taxes through Tax Tally for just $2.99 per form. No hidden fees, no subscriptions - just simple, transparent pricing."
        />
      </Head>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="flashing-grid py-24">
            <div className="container mx-auto px-6 text-center space-y-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-green-50 p-4 rounded-lg">
                Simple & Transparent Pricing
              </h1>
              <p className="text-xl mb-10 max-w-2xl mx-auto bg-green-50 p-4 rounded-lg">
                No hidden fees, no subscriptions - just a simple flat rate for each tax form you need.
              </p>
            </div>
          </section>

          {/* Pricing Card Section */}
          <section className="flashing-grid">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <div className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:shadow-xl text-center">
                  <div className="text-5xl mb-6 text-[#0088cc] bg-blue-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto">💰</div>
                  <h2 className="text-3xl font-bold mb-6">$2.99 per PDF</h2>
                  <div className="space-y-4 text-gray-600 mb-8">
                    <p className="text-lg">Everything you need to file your taxes:</p>
                    <ul className="space-y-3">
                      <li className="flex items-center justify-center">
                        <span className="text-[#0088cc] mr-3">✓</span>
                        Complete tax form generation as PDF
                      </li>
                      <li className="flex items-center justify-center">
                        <span className="text-[#0088cc] mr-3">✓</span>
                        Guided chat-based filing process via Telegram/WhatsApp
                      </li>
                      <li className="flex items-center justify-center">
                        <span className="text-[#0088cc] mr-3">✓</span>
                        Instant digital delivery 
                      </li>
                      <li className="flex items-center justify-center">
                        <span className="text-[#0088cc] mr-3">✓</span>
                        Secure payment processing via Stripe
                      </li>
                    </ul>
                  </div>
                  <a
                    href="https://t.me/TaxTallyBot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#0088cc] hover:bg-[#97cfebcc] text-white hover:text-[#0088cc] font-semibold text-[clamp(14px,1vw,16px)] rounded-2xl transition-colors duration-200 py-4 px-10 inline-block"
                  >
                    Start Filing Now
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="flashing-grid py-20">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-12 bg-green-50 p-4 rounded-lg">Frequently Asked Questions</h2>
              <div className="max-w-3xl mx-auto grid gap-6">
                <div className="bg-white rounded-xl shadow-lg p-6 text-left">
                  <h3 className="font-bold text-lg mb-2">When do I need to pay?</h3>
                  <p className="text-gray-600">You only pay when your tax form is ready. Preview your form first, then pay $2.99 to download.</p>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-6 text-left">
                  <h3 className="font-bold text-lg mb-2">Are there any hidden fees?</h3>
                  <p className="text-gray-600">No hidden fees whatsoever. You pay exactly $2.99 per form - that's it!</p>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-6 text-left">
                  <h3 className="font-bold text-lg mb-2">What payment methods do you accept?</h3>
                  <p className="text-gray-600">We accept all major credit cards through our secure payment processor, Stripe.</p>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
