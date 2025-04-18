// pages/index.js
import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Tax Tally - Home</title>
        <meta
          name="description"
          content="Tax Tally is the modern, hassle-free tax filing solution powered by Telegram and WhatsApp bots."
        />
      </Head>
      <div className="min-h-screen flex flex-col">
        {/* Header Component */}
        <Header />

        {/* Main Content */}
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="flashing-grid py-24">
            <div className="container mx-auto px-6 text-center space-y-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-green-50 p-4 rounded-lg">
                Simplify Your Tax Filling
              </h1>
              <p className="text-xl mb-10 max-w-2xl mx-auto bg-green-50 p-4 rounded-lg">
                Welcome to Tax Tally - Chat based Tax Form Filling Assistant.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full">
                <a
                  href="https://t.me/TaxTallyBot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[200px] h-[60px] flex items-center justify-center bg-[#0088cc] hover:bg-[#97cfebcc] text-white hover:text-[#0088cc] font-semibold text-[clamp(14px,1vw,16px)] rounded-2xl transition-colors duration-200"
                >
                  Try on Telegram
                </a>
                <a
                  href="/"
                  target=""
                  rel="noopener noreferrer"
                  className="w-[200px] h-[60px] flex items-center justify-center bg-[#075e54] hover:bg-[#128c7ecc] text-white hover:text-[#075e54] font-semibold text-[clamp(14px,1vw,16px)] rounded-2xl transition-colors duration-200"
                >
                  Coming Soon on WhatsApp
                </a>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section id="features" className="py-20 bg-[#f6fef6]">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-16">Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <div className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 text-center">
                  <div className="text-5xl mb-6 text-[#0088cc] bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto">💬</div>
                  <h3 className="text-xl font-bold mb-4">Chat-Based Filling</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Interact with our intuitive Telegram and WhatsApp bots for a seamless tax filling experience.
                  </p>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 text-center">
                  <div className="text-5xl mb-6 text-[#0088cc] bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto">⚡</div>
                  <h3 className="text-xl font-bold mb-4">Fast & Efficient</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Enjoy lightning fast processing through advanced automation and APIs. 
                  </p>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 text-center">
                  <div className="text-5xl mb-6 text-[#0088cc] bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto">🔒</div>
                  <h3 className="text-xl font-bold mb-4">Secure & Reliable</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Advanced security measures and reliable infrastructure ensure your data is always safe.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section id="pricing" className="flashing-grid py-24">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-4 bg-green-50 p-4 rounded-lg">Simple & Transparent Pricing</h2>
              <p className="text-xl mb-8 bg-green-50 p-4 rounded-lg">
                Only $2.99 per tax form. No hidden fees or subscriptions.
              </p>
              <a
                href="https://t.me/TaxTallyBot"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0088cc] hover:bg-[#97cfebcc] text-white hover:text-[#0088cc] font-semibold py-4 px-10 rounded-2xl inline-block transition-colors duration-200"
              >
                Try on Telegram
              </a>
            </div>
          </section>
        </main>

        {/* Footer Component */}
        <Footer />
      </div>
    </>
  );
}