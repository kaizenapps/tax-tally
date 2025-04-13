/**
 * Node.js example for testing the Tax Tally API
 * 
 * This script demonstrates how to use the Tax Tally API from a Node.js environment.
 * 
 * Usage:
 * 1. Install dependencies: npm install node-fetch
 * 2. Run the script: node node-api-test.js
 */

// For Node.js < 18, you need to install and import node-fetch
// npm install node-fetch
// const fetch = require('node-fetch');

// For Node.js >= 18, fetch is built-in
// import fetch from 'node-fetch'; // Use this for ES modules

// Configuration
const API_BASE_URL = 'https://tax-tally.com';
const PDF_URL = 'https://example.com/path/to/tax-form.pdf'; // Replace with a real PDF URL

/**
 * Creates a new tax form preview
 */
async function createPreview() {
  try {
    console.log('Creating preview for PDF:', PDF_URL);
    
    const response = await fetch(`${API_BASE_URL}/create-preview`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        pdfUrl: PDF_URL,
        extraData: {
          source: 'node-api-test',
          timestamp: new Date().toISOString(),
          formType: 'W-2',
        },
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || `HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Preview created successfully!');
    console.log('Preview ID:', data.id);
    console.log('Preview URL:', data.previewUrl);
    
    return data;
  } catch (error) {
    console.error('Error creating preview:', error.message);
    throw error;
  }
}

/**
 * Retrieves a preview by ID
 */
async function getPreview(id) {
  try {
    console.log('Fetching preview with ID:', id);
    
    const response = await fetch(`${API_BASE_URL}/api/get-preview?id=${id}`);

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || `HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Preview fetched successfully!');
    console.log('Preview data:', JSON.stringify(data, null, 2));
    
    return data;
  } catch (error) {
    console.error('Error fetching preview:', error.message);
    throw error;
  }
}

/**
 * Main function to run the example
 */
async function main() {
  try {
    // Create a new preview
    const preview = await createPreview();
    
    // Get the preview data
    await getPreview(preview.id);
    
    console.log('\nTest completed successfully!');
    console.log(`Visit the preview URL to see the result: ${preview.previewUrl}`);
  } catch (error) {
    console.error('\nTest failed:', error.message);
    process.exit(1);
  }
}

// Run the example
main();
