// pages/api/create-preview.js
import { db } from '../../lib/firebaseAdmin';
import { v4 as uuidv4 } from 'uuid';

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // (Optional) Validate an incoming secret token to secure this endpoint.
  // For example:
  // if (req.headers.authorization !== `Bearer ${process.env.BOTPRESS_SECRET}`) {
  //   return res.status(401).json({ error: 'Unauthorized' });
  // }

  const { pdfUrl, botUserId, extraData } = req.body;

  if (!pdfUrl || !botUserId) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Create a unique preview ID using UUID
  const id = uuidv4();

  const record = {
    id,
    pdfUrl,
    botUserId,
    extraData: extraData || {},
    paymentStatus: 'pending',
    createdAt: new Date().toISOString()
  };

  try {
    await db.collection("previews").doc(id).set(record);
    res.status(200).json({ id, previewUrl: `https://taxtally.com/preview/${id}` });
  } catch (error) {
    console.error("Error saving preview:", error);
    res.status(500).json({ error: 'Error saving preview' });
  }
}