/**
 * SKOLR INDIA - Google Sheet Lead Capture Backend Webhook
 * 
 * Instructions:
 * 1. Create a Google Sheet with the following headers in row 1:
 *    Timestamp | Name | Email | Phone | School Name | Message
 * 2. In the Google Sheet, go to Extensions -> Apps Script.
 * 3. Delete any code in the editor, and paste the content of this file.
 * 4. Click the Save icon (floppy disk).
 * 5. Click "Deploy" (top right) -> "New deployment".
 * 6. Select type "Web app".
 * 7. Configure:
 *    - Description: SKOLR Leads Webhook
 *    - Execute as: Me (your-email@gmail.com)
 *    - Who has access: Anyone
 * 8. Click "Deploy". Authorize permissions if prompted.
 * 9. Copy the generated "Web app URL" (Webhook URL).
 * 10. Open index.html, locate `const appsScriptUrl = 'YOUR_WEBHOOK_URL';` (around line 585) 
 *     and replace 'YOUR_WEBHOOK_URL' with your copied Web app URL.
 */

function doPost(e) {
  // Add proper CORS headers to the response
  var headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type"
  };

  try {
    // Check if postData is present
    if (!e || !e.postData || !e.postData.contents) {
      return ContentService.createTextOutput(JSON.stringify({
        status: "error",
        message: "No data received."
      }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders(headers);
    }

    // Parse the payload (sent as JSON text/plain to avoid CORS preflight issues)
    var data = JSON.parse(e.postData.contents);
    
    // Validate required fields
    if (!data.name || !data.email || !data.phone || !data.schoolName || !data.message) {
      return ContentService.createTextOutput(JSON.stringify({
        status: "error",
        message: "Missing required fields."
      }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders(headers);
    }

    // Connect to the active spreadsheet and sheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Record current timestamp in IST (or server timezone)
    var timestamp = new Date();
    
    // Append the lead data as a new row: Timestamp | Name | Email | Phone | School Name | Message
    sheet.appendRow([
      timestamp,
      data.name,
      data.email,
      data.phone,
      data.schoolName,
      data.message
    ]);

    // Return success response
    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      message: "Lead successfully recorded in Google Sheets!"
    }))
    .setMimeType(ContentService.MimeType.JSON)
    .setHeaders(headers);

  } catch (error) {
    // Return error response
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: error.toString()
    }))
    .setMimeType(ContentService.MimeType.JSON)
    .setHeaders(headers);
  }
}

/**
 * Handle preflight CORS OPTIONS requests (if triggered by some browsers/clients)
 */
function doOptions(e) {
  var headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400"
  };
  
  return ContentService.createTextOutput("")
    .setMimeType(ContentService.MimeType.TEXT)
    .setHeaders(headers);
}
