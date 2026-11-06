# Setup guide (everything is free)

Files: `index.html` (the invitation), `links.html` (personal-link maker), `css/`, `js/`, `apps-script/Code.gs`.

## 1. Preview on your PC
Double-click `index.html`. Test a personal link by adding `?to=Perera-Family` to the address.
(The RSVP form is in *demo mode* until step 2 – nothing is saved.)

## 2. Connect the RSVP form to a private Google Sheet
1. Go to <https://sheets.new>, name it **Wedding RSVP**.
2. Menu **Extensions → Apps Script**. Delete the sample code, paste all of `apps-script/Code.gs`, click **Save**.
3. Click **Deploy → New deployment → ⚙ Select type → Web app**.
   - *Execute as:* **Me**
   - *Who has access:* **Anyone**
   - **Deploy**, approve the permissions (Advanced → Go to project), and **copy the Web app URL**.
4. Open `js/config.js` and paste the URL into `RSVP_ENDPOINT: "…"`.
5. Submit a test RSVP – a row appears in the **RSVP** tab.

The sheet itself stays private; only the form can add rows. If you edit `Code.gs` later, use **Deploy → Manage deployments → Edit → New version**.

## 3. Publish free (GitHub Pages)
1. Create a GitHub repository (e.g. `wedding`), upload all files (`index.html`, `links.html`, `css`, `js`; `apps-script` is optional).
2. **Settings → Pages → Branch: main / root → Save.**
3. After ~1 minute your site is at `https://<your-username>.github.io/wedding/`.

(Alternative: drag the folder onto <https://app.netlify.com/drop>.)

## 4. Make personal links
Open `<your site>/links.html`, paste guest names (one per line), and press **Make links** – copy or send each one directly by WhatsApp.
Format: `https://…/?to=Perera-Family` → page shows **Perera Family**. Hyphens/underscores become spaces; use `%20` or the link maker for names with `&` or Sinhala letters.

## Notes
- Opens on any phone/laptop (Android, iOS, Windows, Mac) – no app needed.
- The Sinhala text is a draft; please have someone proof-read it (`js/main.js`, object `T.si`).
- The couple illustration is original vector art in `js/main.js` (`#couple`). To use your own picture instead, replace the `<svg id="couple">` in `index.html` with `<img>` and remove the `innerHTML` block in `main.js`.
- Event end time (for calendar) is set to 2.00 pm in `js/config.js` – change if needed.
- Your printed card shows "COLOMBO" under the hotel name; the web page says "Homagama" only (matching your pasted text). Easy to change in `js/main.js` (`venue_sub`).
