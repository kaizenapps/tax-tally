// pages/api/download/[id].js
import { db } from '../../../lib/firebaseAdmin';

export default async function handler(req, res) {
  const { id } = req.query;
  try {
    const previewDoc = await db.collection("previews").doc(id).get();
    if (!previewDoc.exists) {
      return res.status(404).json({ error: 'Preview not found' });
    }

    const data = previewDoc.data();
    if (data.paymentStatus !== 'paid') {
      return res.status(403).json({ error: 'Payment not verified' });
    }

    // Either proxy the PDF file or redirect the user to the file.
    // For simplicity, we redirect:
    res.redirect(data.pdfUrl);
  } catch (error) {
    res.status(500).json({ error: 'Error processing download' });
  }
}