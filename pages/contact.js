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
            <div className="container mx-auto px-4 sm:px-6 w-full py-24">
              <div className="text-center space-y-6 md:space-y-8 mb-8 md:mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-green-50 p-4 rounded-lg">
                  Get in Touch
                </h1>
                <p className="text-xl mb-10 max-w-2xl mx-auto bg-green-50 p-4 rounded-lg">
                  We're here to help! Whether you have questions about our services or need support with your tax filing, feel free to reach out.
                </p>
              </div>
              <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:shadow-xl text-center">
                  <div className="text-5xl mb-6 text-[#0088cc] bg-blue-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto">📧</div>
                  <h2 className="text-3xl font-bold mb-6">Email Us</h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Send us an email at <a href="mailto:contact@kaizenapps.com"><strong className="text-[#0088cc]">contact@kaizenapps.com</strong></a> for inquiries or support.
                  </p>
                  <a
                    href="mailto:contact@kaizenapps.com"
                    className="bg-[#0088cc] hover:bg-[#97cfebcc] text-white hover:text-[#0088cc] font-semibold py-3 px-6 rounded-xl inline-block transition-colors duration-200"
                  >
                    Send Email
                  </a>
                </div>
                
                <div className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:shadow-xl text-center">
                  <div className="text-5xl mb-6 text-[#7B68EE] bg-purple-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto">📝</div>
                  <h2 className="text-3xl font-bold mb-6">Support Form</h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Fill out our <a href="https://forms.clickup.com/20570259/f/kkr4k-4451/NMY2NBB72FOHF7K15R" target="_blank" rel="noopener noreferrer" className="text-[#7B68EE]">ClickUp support form</a> for detailed assistance & report any issues.
                  </p>
                  <a
                    href="https://forms.clickup.com/20570259/f/kkr4k-4451/NMY2NBB72FOHF7K15R"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#7B68EE] hover:bg-[#cfc7fc] text-white hover:text-[#7B68EE] font-semibold py-3 px-6 rounded-lg inline-block transition-colors duration-200"
                  >
                    Open Form
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