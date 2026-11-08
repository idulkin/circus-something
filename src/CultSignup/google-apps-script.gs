/**
 * Google Apps Script for CultSignup.
 *
 * Setup:
 * 1. Create a Google Sheet to collect signups. Add a header row: "Email".
 * 2. In the sheet: Extensions > Apps Script. Paste this file's contents in, replacing
 *    any boilerplate.
 * 3. Deploy > New deployment > type "Web app".
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 4. Copy the resulting web app URL and paste it into SIGNUP_ENDPOINT in
 *    src/CultSignup/CultSignup.tsx.
 * 5. Re-deploy (Deploy > Manage deployments > edit > New version) any time this
 *    script changes — editing the script alone does not update a live deployment.
 */

function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = JSON.parse(e.postData.contents);
  const email = (data.email || "").trim();

  const validationRegex = /\S+@\S+\.\S+/;
  if (!validationRegex.test(email)) {
    return ContentService.createTextOutput(
      JSON.stringify({ result: "error", message: "Invalid email" })
    ).setMimeType(ContentService.MimeType.JSON);
  }

  sheet.appendRow([email]);

  return ContentService.createTextOutput(
    JSON.stringify({ result: "success" })
  ).setMimeType(ContentService.MimeType.JSON);
}
