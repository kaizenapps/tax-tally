# Tax Tally API Integration Guide

This guide explains how to integrate with the Tax Tally API to create tax form previews and handle payments.

## API Endpoints

### Create Preview

Creates a new tax form preview and returns a unique ID and preview URL.

**URL:** `https://tax-tally.com/create-preview`

**Method:** `POST`

**Request Body:**

```json
{
  "pdfUrl": "https://example.com/path/to/tax-form.pdf",
  "extraData": {
    "userName": "John Doe",
    "email": "john@example.com",
    "formType": "W-2",
    "customField1": "value1",
    "customField2": "value2"
  }
}
```

**Required Fields:**
- `pdfUrl`: URL to the PDF file that will be previewed

**Optional Fields:**
- `extraData`: An object containing any additional data you want to store with the preview

**Response:**

```json
{
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "previewUrl": "https://tax-tally.com/preview/550e8400-e29b-41d4-a716-446655440000"
}
```

**Error Responses:**

- `400 Bad Request`: Missing required fields
- `500 Internal Server Error`: Error saving preview

## Botpress Integration

### Setting Up the Integration

1. Create a new card in your Botpress workflow
2. Copy the code from the example below into your card
3. Customize the variables to match your workflow
4. Use the returned `previewUrl` in your bot's response

### Example Botpress Card Code

```javascript
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

return card();
```

### Using the Result in Your Workflow

After the card executes successfully, you can use the `previewUrl` in your bot's response:

```
Your tax form preview is ready! Click here to view it: {{workflow.previewUrl}}
```

Or create a button that links to the preview:

```json
{
  "type": "button",
  "title": "View Your Tax Form",
  "url": "{{workflow.previewUrl}}"
}
```

## Security Considerations

If you need to secure the API endpoint, you can uncomment the authorization check in the API code and add a `BOTPRESS_SECRET` environment variable to both your Next.js project and your Botpress workflow.

Then, add the Authorization header to your fetch request:

```javascript
headers: {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${process.env.BOTPRESS_SECRET}`
},
```

## Workflow Example

1. User uploads or generates a tax form PDF
2. Your system stores the PDF and gets its URL
3. Your Botpress workflow calls the Tax Tally API to create a preview
4. The bot sends the preview URL to the user
5. User views the preview and can choose to pay for the full document
6. After payment, the user can download the processed tax form

## Need Help?

If you have any questions or need assistance with the API integration, please contact our support team at support@tax-tally.com.
