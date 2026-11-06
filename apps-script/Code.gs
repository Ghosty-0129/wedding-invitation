/**
 * RSVP receiver – paste this into Extensions > Apps Script of your Google Sheet.
 * Every RSVP becomes one row in a tab called "RSVP".
 */
var SHEET_NAME = 'RSVP';
var HEADERS = ['Received', 'Invite link name', 'Name', 'Attending', 'Which part', 'Message', 'Language'];

function clean_(v, max) {
  v = String(v == null ? '' : v).slice(0, max || 200);
  // stop spreadsheet formula injection
  return /^[=+\-@]/.test(v) ? "'" + v : v;
}

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(15000);
  try {
    var d = JSON.parse(e.postData.contents);
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sh = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
    if (sh.getLastRow() === 0) {
      sh.appendRow(HEADERS);
      sh.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold').setBackground('#14302a').setFontColor('#ffffff');
      sh.setFrozenRows(1);
    }
    sh.appendRow([
      new Date(),
      clean_(d.link, 80), clean_(d.name, 80), clean_(d.attending, 5),
      clean_(d.part, 60), clean_(d.message, 500), clean_(d.lang, 3)
    ]);
    return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false })).setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

// Visiting the URL in a browser just shows that it is alive.
function doGet() {
  return ContentService.createTextOutput('RSVP endpoint is running.');
}
