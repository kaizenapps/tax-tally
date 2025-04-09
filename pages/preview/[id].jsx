// pages/preview/[id].jsx
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function PreviewPage() {
  const router = useRouter();
  const { id } = router.query;
  const [previewData, setPreviewData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    fetch(`/api/get-preview?id=${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPreviewData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  const handlePayment = async () => {
    const res = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ previewId: id })
    });
    const session = await res.json();
    const stripe = await stripePromise;
    stripe.redirectToCheckout({ sessionId: session.id });
  };

  if (loading) return <div className="p-4">Loading...</div>;
  if (!previewData) return <div className="p-4">Preview not found.</div>;

  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <div className="max-w-xl mx-auto bg-white shadow-md rounded p-6">
        <h1 className="text-2xl font-bold mb-4">Your Tax Form Preview</h1>
        <div className="mb-4">
          <iframe
            src={previewData.pdfUrl}
            className="w-full h-96 border"
            title="PDF Preview"
          />
        </div>
        {previewData.paymentStatus !== 'paid' ? (
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handlePayment}
          >
            Pay $2.99
          </button>
        ) : (
          <a
            href={`/api/download/${id}`}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Download PDF
          </a>
        )}
      </div>
    </div>
  );
}