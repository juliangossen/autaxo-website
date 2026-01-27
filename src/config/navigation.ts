/**
 * Navigation Configuration
 * Optimiert für Conversion und Übersichtlichkeit.
 */

import type { Navigation } from '../lib/types';

// Hinweis: Wir erweitern die Struktur hier um "items" für Dropdowns.
// Falls TypeScript meckert, müssen wir gleich kurz die types.ts anpassen.
export const navigation = {
  header: {
    main: [
      // 1. Das Produkt (Dropdown) - Der wichtigste Punkt
      { 
        label: 'Funktionen', 
        href: '/funktionen', // Klick auf Hauptlink geht zur Übersicht
        items: [
          { label: 'Alle Funktionen', href: '/funktionen' },
          { label: 'Verträge & E-Signatur', href: '/funktionen/digitale-vertraege-esignatur' },
          { label: 'Buchhaltung', href: '/funktionen/buchhaltung' },
          { label: 'Steuerlogik (§25a)', href: '/funktionen/differenzbesteuerung-25a-ustg' },
          { label: 'KI-Assistent Carlo', href: '/funktionen/ki-assistent' },
        ]
      },
      
      // 2. Preise - Muss sofort sichtbar sein
      { 
        label: 'Preise', 
        href: '/preise' 
      },

      // 3. Wissen & Mehrwert (Ehemals "News")
      { 
        label: 'Ressourcen', 
        items: [
          { label: 'Blog', href: '/blog' },
          { label: 'Downloads & Whitepaper', href: '/downloads' },
        ]
      },

      // 4. Vertrauen & Hilfe
      { 
        label: 'Hilfe', 
        items: [
          { label: 'Support Center', href: '/hilfe' },
          { label: 'FAQ', href: '/faq' },
          { label: 'Training', href: '/training' },
        ]
      },

      // 5. Netzwerk
      { 
        label: 'Partner', 
        href: '/partnernetzwerk' 
      },
      
      // 6. Kontakt
      { 
        label: 'Kontakt', 
        href: '/kontakt' 
      },
    ],
    
    // Die Buttons rechts oben
    cta: [
      { label: 'Login', href: 'https://garage.autaxo.de', variant: 'ghost' },
      { label: 'Kostenlos testen', href: 'https://garage.autaxo.de/auth/sign-up', variant: 'primary' },
    ],
  },

  // Footer bleibt schlank und rechtssicher
  footer: {
    product: [
      { label: 'Funktionen', href: '/funktionen' },
      { label: 'Preise', href: '/preise' },
      { label: 'Für Steuerberater', href: '/steuerberater' },
      { label: 'Downloads', href: '/downloads' },
    ],
    solutions: [
      { label: 'Blog', href: '/blog' },
      { label: 'Training', href: '/training' },
      { label: 'Hilfe', href: '/hilfe' },
      { label: 'FAQ', href: '/faq' },
    ],
    company: [
      { label: 'Über uns', href: '/ueber-uns' },
      { label: 'Partnernetzwerk', href: '/partnernetzwerk' },
      { label: 'Kontakt', href: '/kontakt' },
    ],
    legal: [
      { label: 'Impressum', href: '/impressum' },
      { label: 'Datenschutz', href: '/datenschutz' },
      { label: 'AGB', href: '/agb' },
    ],
  },
};