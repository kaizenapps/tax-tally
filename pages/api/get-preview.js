// pages/api/get-preview.js
import { db } from '../../lib/firebaseAdmin';

export default async function handler(req, res) {
  const { id } = req.query;
  try {
    const previewDoc = await db.collection("previews").doc(id).get();
    if (!previewDoc.exists) {
      return res.status(404).json({ error: 'Preview not found' });
    }
    res.status(200).json(previewDoc.data());
  } catch (error) {
    res.status(500).json({ error: 'Error fetching preview' });
  }
}