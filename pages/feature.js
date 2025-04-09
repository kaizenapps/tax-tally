import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';

export default function Features() {
  return (
    <>
      <Head>
        <title>Tax Tally - Features</title>
        <meta
          name="description"
          content="Explore the powerful features of Tax Tally. Seamlessly file your taxes using Telegram and WhatsApp bots."
        />
      </Head>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <section className="py-20">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-8">Our Features</h1>
              <p className="text-xl mb-12">
                Discover the innovative features that make Tax Tally the go-to solution for hassle-free tax filing.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Feature 1: Chat-Based Filing */}
                <div className="bg-white p-6 rounded shadow hover:shadow-lg transition-all">
                  <div className="text-5xl text-blue-600 mb-4">💬</div>
                  <h2 className="text-2xl font-bold mb-2">Chat-Based Filing</h2>
                  <p>
                    Communicate effortlessly with our intuitive Telegram and WhatsApp bots. We guide you through every step, eliminating the need for manual forms.
                  </p>
                </div>
                {/* Feature 2: Fast & Efficient */}
                <div className="bg-white p-6 rounded shadow hover:shadow-lg transition-all">
                  <div className="text-5xl text-blue-600 mb-4">⚡</div>
                  <h2 className="text-2xl font-bold mb-2">Fast & Efficient</h2>
                  <p>
                    Our advanced automation ensures rapid processing of your tax details. Your completed tax form is generated in minutes, not hours.
                  </p>
                </div>
                {/* Feature 3: Secure & Reliable */}
                <div className="bg-white p-6 rounded shadow hover:shadow-lg transition-all">
                  <div className="text-5xl text-blue-600 mb-4">🔒</div>
                  <h2 className="text-2xl font-bold mb-2">Secure & Reliable</h2>
                  <p>
                    Your data security is our top priority. With state-of-the-art encryption and robust infrastructure, Tax Tally ensures your sensitive information is protected.
                  </p>
                </div>
              </div>
              <div className="mt-16">
                <h3 className="text-2xl font-bold mb-4">Why Choose Tax Tally?</h3>
                <ul className="list-disc list-inside text-left max-w-2xl mx-auto">
                  <li>Streamlined experience through popular messaging platforms</li>
                  <li>Transparent, flat-fee pricing with no hidden costs</li>
                  <li>Enhanced efficiency with real-time document previews and secure payment processing</li>
                  <li>Support for a wide array of tax forms and financial documents</li>
                </ul>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}