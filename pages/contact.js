// pages/contact.js
import Head from 'next/head';
import Header from '../components/header';
import Footer from '../components/footer';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Tax Tally - Contact Us</title>
        <meta
          name="description"
          content="Have questions or need support? Contact Tax Tally for any inquiries, feedback, or assistance with your tax filing needs."
        />
      </Head>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex">
          <section className="flashing-grid w-full flex flex-col justify-center items-center py-12 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 w-full">
              <div className="text-center space-y-6 md:space-y-8 mb-8 md:mb-16">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                  Get in Touch
                </h1>
                <p className="text-lg sm:text-xl max-w-2xl mx-auto px-4">
                  We're here to help! Whether you have questions about our services or need support with your tax filing, feel free to reach out.
                </p>
              </div>
              <div className="w-full max-w-md mx-auto px-4">
                <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 text-center">
                  <h2 className="text-xl sm:text-2xl font-bold mb-4">Contact Us</h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Send us an email at <span className="text-[#0088cc]">contact@kaizenapps.com</span> for inquiries or support.
                  </p>
                  <a
                    href="mailto:contact@kaizenapps.com"
                    className="bg-[#0088cc] hover:bg-[#006699] text-white font-semibold py-3 px-6 rounded-lg inline-block transition-colors duration-200"
                  >
                    Send Email
                  </a>
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