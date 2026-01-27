/**
 * Navigation Configuration
 * Angepasst an die neue deutsche Dateistruktur (src/pages).
 */

import type { Navigation } from '../lib/types';

export const navigation: Navigation = {
  /**
   * Kopfzeile (Header)
   */
  header: {
    main: [
      { label: 'Funktionen', href: '/funktionen' }, // zeigt auf src/pages/funktionen/index.astro
      { label: 'Preise', href: '/preise' },         // zeigt auf src/pages/preise.astro
      { label: 'Über uns', href: '/ueber-uns' },    // zeigt auf src/pages/ueber-uns.astro
      { label: 'Partner', href: '/partnernetzwerk' }, // zeigt auf src/pages/partnernetzwerk.astro
      { label: 'Blog', href: '/blog' },
    ],
    cta: [
      // Link zur existierenden Web-App
      { label: 'Login', href: 'https://garage.autaxo.de', variant: 'ghost' },
      // Link zur Registrierung
      { label: 'Kostenlos testen', href: 'https://garage.autaxo.de/auth/sign-up', variant: 'primary' },
    ],
  },

  /**
   * Fußzeile (Footer)
   */
  footer: {
    // Spalte 1: Produkt
    product: [
      { label: 'Funktionen', href: '/funktionen' },
      { label: 'Preise', href: '/preise' },
      { label: 'Für Steuerberater', href: '/steuerberater' }, // Neu!
      { label: 'Downloads', href: '/downloads' },             // Neu!
    ],
    
    // Spalte 2: Ressourcen & Wissen (Habe ich zusammengefasst, da "Solutions" leer war)
    solutions: [
      { label: 'Blog', href: '/blog' },
      { label: 'Training', href: '/training' },               // Neu!
      { label: 'Hilfe', href: '/hilfe' },
      { label: 'FAQ', href: '/faq' },
    ],
    
    // Spalte 3: (Wird im Theme oft "Resources" genannt, wir nutzen es hier nicht oder doppelt)
    // Ich lasse es leer, damit der Footer nicht zu breit wird, oder wir packen hier Whitepaper rein
    resources: [
        // Falls du eine Whitepaper Seite hast, könnte die hier hin:
        // { label: 'Whitepaper', href: '/whitepaper' },
    ],
    
    // Spalte 4: Unternehmen
    company: [
      { label: 'Über uns', href: '/ueber-uns' },
      { label: 'Partnernetzwerk', href: '/partnernetzwerk' },
      { label: 'Kontakt', href: '/kontakt' },
    ],
    
    // Spalte 5: Rechtliches (Ganz wichtig: korrekte deutsche Pfade)
    legal: [
      { label: 'Impressum', href: '/impressum' },
      { label: 'Datenschutz', href: '/datenschutz' }, // War vorher /privacy
      { label: 'AGB', href: '/agb' },                 // War vorher /terms
    ],
  },
};