Hier ist die saubere Dokumentation für deine Unterlagen. Du kannst das als `DOCS_GOOGLE_ADS.md` oder ähnlich speichern, damit das Team später genau weiß, wie das Setup funktioniert.

---

# Dokumentation: High-Performance Google Ads (Astro + Partytown)

**Ziel:** Einbindung von Google Ads Tracking und Consent Mode v2 ohne Verlust der PageSpeed-Performance (Score 99+).
**Technik:** Nutzung von **Partytown** (Web Worker), um Tracking-Skripte vom Haupt-Thread fernzuhalten.

---

### 1. Installation (`package.json`)

Hinzufügen der Partytown-Bibliothek, damit Cloudflare sie beim Build installiert.

**Datei:** `package.json`

```json
"dependencies": {
  // ... andere Dependencies
  "@astrojs/partytown": "^2.1.0", 
  // ...
}

```

---

### 2. Konfiguration (`astro.config.mjs`)

Aktivierung von Partytown und Weiterleitung der Google-Events (`dataLayer`, `gtag`) vom Worker an den Browser.

**Datei:** `astro.config.mjs`

```javascript
import { defineConfig } from 'astro/config';
// ... andere Imports
import partytown from '@astrojs/partytown'; // 1. Import

export default defineConfig({
  // ...
  integrations: [
    // ... andere Integrationen
    
    // 2. Integration konfigurieren
    partytown({
      config: {
        forward: ['dataLayer.push', 'gtag'],
      },
    }),
  ],
});

```

---

### 3. Die Komponente (`src/components/GoogleAds.astro`)

Enthält die gesamte Logik: Consent Mode v2 Defaults (Denied), das eigentliche Tag via Partytown und den Cookie-Banner.

**Datei:** `src/components/GoogleAds.astro`
**Wichtig:** `AW-IHRE-ID` muss hier angepasst werden.

```astro
---
const ADS_ID = 'AW-IHRE-ID-HIER-EINFÜGEN'; // TODO: Echte ID eintragen
---

<script is:inline define:vars={{ ADS_ID }}>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  
  gtag('consent', 'default', {
    'ad_storage': 'denied',
    'ad_user_data': 'denied',
    'ad_personalization': 'denied',
    'analytics_storage': 'denied',
    'wait_for_update': 500
  });
  
  gtag('js', new Date());
  gtag('config', ADS_ID);
</script>

<script
  type="text/partytown"
  src={`https://www.googletagmanager.com/gtag/js?id=${ADS_ID}`}
></script>

<script type="text/partytown">
  window.dataLayer = window.dataLayer || [];
  window.gtag = function() { dataLayer.push(arguments); }
</script>

<div id="cookie-banner" class="fixed bottom-0 left-0 w-full bg-slate-900 text-white p-4 z-50 hidden shadow-xl border-t border-slate-700">
  <div class="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
    <p class="text-sm">Wir nutzen Cookies für maximale Effizienz.</p>
    <div class="flex gap-2">
      <button id="btn-decline" class="px-4 py-2 text-sm bg-slate-700 hover:bg-slate-600 rounded">Ablehnen</button>
      <button id="btn-accept" class="px-4 py-2 text-sm bg-green-600 hover:bg-green-500 font-bold rounded">Akzeptieren</button>
    </div>
  </div>
</div>

<script is:inline>
  const banner = document.getElementById('cookie-banner');
  const btnAccept = document.getElementById('btn-accept');
  const btnDecline = document.getElementById('btn-decline');

  // Prüfen ob Consent fehlt
  if (!localStorage.getItem('cookie-consent')) {
    banner.classList.remove('hidden');
  } else if (localStorage.getItem('cookie-consent') === 'granted') {
    enableTracking();
  }

  btnAccept.addEventListener('click', () => {
    localStorage.setItem('cookie-consent', 'granted');
    banner.classList.add('hidden');
    enableTracking();
  });

  btnDecline.addEventListener('click', () => {
    localStorage.setItem('cookie-consent', 'denied');
    banner.classList.add('hidden');
  });

  function enableTracking() {
    window.gtag('consent', 'update', {
      'ad_storage': 'granted',
      'ad_user_data': 'granted',
      'ad_personalization': 'granted',
      'analytics_storage': 'granted'
    });
  }
</script>

```

---

### 4. Einbindung (`src/layouts/Layout.astro`)

Platzierung der Komponente auf allen Seiten (global).

**Datei:** `src/layouts/Layout.astro`

```astro
---
// ... Imports
import GoogleAds from '../components/GoogleAds.astro'; // 1. Import
---

<!doctype html>
<html lang="de">
  <body>
    <slot />
    
    <GoogleAds />
  </body>
</html>

```