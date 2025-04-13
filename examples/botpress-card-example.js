/**
 * Example Botpress Card for Tax Tally API Integration
 * 
 * This file demonstrates how to use the Tax Tally API from a Botpress card.
 * Copy and adapt this code into your Botpress card configuration.
 */

// Botpress Card: Create Tax Tally Preview
async function card() {
  // Get the PDF URL from your workflow variables or user inputs
  const pdfUrl = '{{workflow.pdfUrl}}'; // Replace with your actual variable
  
  // Optional additional data you might want to store
  const extraData = {
    userName: '{{user.name}}',
    email: '{{user.email}}',
    formType: 'W-2',
    // Add any other relevant data
  };
  
  try {
    const response = await fetch('https://tax-tally.com/create-preview', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Uncomment and add your secret if you enable the authorization check
        // 'Authorization': `Bearer ${process.env.BOTPRESS_SECRET}`
      },
      body: JSON.stringify({
        pdfUrl,
        extraData
      })
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to create preview');
    }
    
    const data = await response.json();
    
    // Store the preview URL to use in your bot's response
    workflow.previewUrl = data.previewUrl;
    
    return {
      status: 'success',
      id: data.id,
      previewUrl: data.previewUrl
    };
  } catch (error) {
    console.error('Error creating preview:', error);
    return {
      status: 'error',
      message: error.message
    };
  }
}

// Example of how to use the result in your Botpress workflow
/*
  If the card execution is successful, you can use the previewUrl in your bot's response:
  
  {{workflow.previewUrl}}
  
  For example, you could send a message like:
  
  "Your tax form preview is ready! Click here to view it: {{workflow.previewUrl}}"
  
  Or create a button that links to the preview:
  
  {
    "type": "button",
    "title": "View Your Tax Form",
    "url": "{{workflow.previewUrl}}"
  }
*/

return card();
