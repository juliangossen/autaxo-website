Hier ist die komplett aktualisierte Dokumentation, angepasst auf den Wechsel zu **Google Tag Manager** und die spezifische Integration in das **BaseLayout**.

---

# Dokumentation: High-Performance Google Tag Manager (Astro + Partytown)

**Ziel:** Zentrale Steuerung aller Marketing-Tags (Google Ads, GA4, Meta) über den Google Tag Manager (GTM), ohne die Ladezeit (Score 99+) zu gefährden.
**Technik:** Der GTM-Container wird in einen **Web Worker (Partytown)** ausgelagert, damit der Haupt-Thread für den Nutzer frei bleibt.

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

Aktivierung von Partytown und Weiterleitung der Events (`dataLayer`, `gtag`) vom Worker an den Browser. Dies ist zwingend notwendig, damit GTM Signale empfangen kann.

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
        // WICHTIG: Leitet Events vom Worker an den Main Thread weiter
        forward: ['dataLayer.push', 'gtag'],
      },
    }),
  ],
});

```

---

### 3. Die Komponente (`src/components/GoogleAds.astro`)

Enthält die gesamte Logik: GTM-Snippet (Partytown-modifiziert), Consent Mode v2 Defaults (Denied) und den Cookie-Banner.

**Datei:** `src/components/GoogleAds.astro`
**Container ID:** `GTM-KMC8PBKV`

```astro
---
// GTM Container ID
const CONTAINER_ID = 'GTM-KMC8PBKV';
---

<script is:inline>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  
  // Consent Mode v2 Default: Denied
  gtag('consent', 'default', {
    'ad_storage': 'denied',
    'ad_user_data': 'denied',
    'ad_personalization': 'denied',
    'analytics_storage': 'denied',
    'wait_for_update': 500
  });
  
  gtag('js', new Date());
</script>

<script type="text/partytown">
  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-KMC8PBKV');
</script>

<div id="cookie-banner" class="fixed bottom-0 left-0 w-full bg-slate-900 text-white p-4 z-50 hidden shadow-xl border-t border-slate-700">
  <div class="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
    <p class="text-sm">Wir nutzen Cookies für maximale Effizienz.</p>
    <div class="flex gap-2">
      <button id="btn-decline" class="px-4 py-2 text-sm bg-slate-700 hover:bg-slate-600 rounded hover:cursor-pointer">Ablehnen</button>
      <button id="btn-accept" class="px-4 py-2 text-sm bg-green-600 hover:bg-green-500 font-bold rounded hover:cursor-pointer">Akzeptieren</button>
    </div>
  </div>
</div>

<script is:inline>
  const banner = document.getElementById('cookie-banner');
  const btnAccept = document.getElementById('btn-accept');
  const btnDecline = document.getElementById('btn-decline');

  // Check LocalStorage
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
    // 1. Update Consent to Granted
    window.gtag('consent', 'update', {
      'ad_storage': 'granted',
      'ad_user_data': 'granted',
      'ad_personalization': 'granted',
      'analytics_storage': 'granted'
    });
    // 2. Fire custom event for GTM Trigger
    window.dataLayer.push({'event': 'consent_update'});
  }
</script>

```

---

### 4. Einbindung (`src/layouts/BaseLayout.astro`)

Platzierung der Komponente im **Basis-Layout**, damit sie global auf allen Seiten (auch Marketing-Seiten) geladen wird.

**Datei:** `src/layouts/BaseLayout.astro`

```astro
---
// ... Imports
import GoogleAds from '../components/GoogleAds.astro'; // 1. Import hinzufügen
---

<body class="min-h-screen bg-[#0b0c10] text-white antialiased">
  <slot />
  <slot name="body-end" />
  
  <GoogleAds />
</body>
</html>

```

---

### 5. To-Do im Google Tag Manager (Wichtig!)

Da der Code nun ein "Event" feuert, muss der GTM darauf hören.

1. Logge dich in den GTM Container `GTM-KMC8PBKV` ein.
2. Erstelle einen **neuen Trigger**:
* **Typ:** Benutzerdefiniertes Ereignis (Custom Event)
* **Ereignisname:** `consent_update`


3. Konfiguriere deine Tags (z.B. Google Ads Conversion, GA4 Config):
* **Trigger:** Nutze den neuen `consent_update` Trigger (zusätzlich zu "All Pages", falls nötig, aber "All Pages" feuert oft zu früh für den Consent).
* *Strategie:* Tags sollten feuern, wenn `consent_update` passiert ODER wenn Consent schon da ist.