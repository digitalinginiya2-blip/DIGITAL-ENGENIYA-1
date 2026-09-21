Na ƙirƙiro maka **cikakken app** mai suna **DIGITAL INGINIYA** — kasuwar kayan waya da gyara (sikirin, waya, batere, caji, fulaket, sabi), tare da **Pi SDK**, **wallet**, **admin dashboard**, da **Vercel API** don approve/complete.

Ka iya sauke project ɗin nan:



### Abin da ke ciki
- Store + kati + biya da **π**
- Form na **gyara waya**
- **Admin dashboard** (ƙara kaya, odina, gyara)
- `Pi.init({ version: "2.0", sandbox: true })` — **testnet/sandbox**
- `Pi.authenticate(['username','payments','wallet_address'])`
- `Pi.createPayment` + wallet display
- Serverless: `/api/payments/approve` da `/api/payments/complete`

**Kalmar sirrin Admin:** `inginiya2026`

### GitHub + Vercel (taƙaitacce)
```bash
cd digital-inginiya
git init && git add . && git commit -m "DIGITAL INGINIYA"
git remote add origin https://github.com/USERNAME/digital-inginiya.git
git push -u origin main
```
Sa’an nan Import repo a **Vercel**. Saka env: `PI_API_KEY` daga Pi Developer Portal.

A **Pi Browser** bude `develop.pinet.com`:
- App name: DIGITAL INGINIYA  
- Network: **Testnet**  
- Production URL: `https://xxxx.vercel.app`  
- Development URL: irin Vercel URL ɗinka  

Bude app a **Pi Browser** ko **sandbox.minepi.com**, danna **Haɗa Wallet**, sai ka biya.

Idan babu `PI_API_KEY` tukuna, API tana yin **demo approve** don ka iya gwadawa UI. Don ainihin biya a testnet, dole ka saka API key ɗin Pi.

Idan kana so na ƙara backend na oda (database), multi-vendor, ko Hausa/English toggle, faɗa min.
