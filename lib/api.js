/**
 * API client for Tax Tally
 * Contains functions for interacting with the Tax Tally API endpoints
 */

/**
 * Creates a new tax form preview
 * @param {string} pdfUrl - URL to the PDF file
 * @param {Object} extraData - Optional additional data to store with the preview
 * @returns {Promise<Object>} - Response containing the preview ID and URL
 */
export async function createPreview(pdfUrl, extraData = {}) {
  try {
    const response = await fetch('/create-preview', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        pdfUrl,
        extraData,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to create preview');
    }

    return await response.json();
  } catch (error) {
    console.error('Error creating preview:', error);
    throw error;
  }
}

/**
 * Retrieves a preview by ID
 * @param {string} id - The preview ID
 * @returns {Promise<Object>} - The preview data
 */
export async function getPreview(id) {
  try {
    const response = await fetch(`/api/get-preview?id=${id}`);
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to fetch preview');
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching preview:', error);
    throw error;
  }
}

/**
 * Creates a checkout session for a preview
 * @param {string} previewId - The preview ID
 * @returns {Promise<Object>} - The checkout session data
 */
export async function createCheckoutSession(previewId) {
  try {
    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        previewId,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to create checkout session');
    }

    return await response.json();
  } catch (error) {
    console.error('Error creating checkout session:', error);
    throw error;
  }
}
