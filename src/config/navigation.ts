/**
 * Navigation Configuration
 * Zentralisiertes Menü für Header & Footer.
 * KAIZEN: Single Source of Truth für alle Links.
 */

import type { Navigation } from '../lib/types';

export const navigation = {
  header: {
    main: [
      // 1. Das Produkt (Dropdown) - Der wichtigste Punkt
      { 
        label: 'Funktionen', 
        href: '/funktionen',
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

      // 3. Wissen & Mehrwert
      { 
        label: 'Ressourcen', 
        href: '#', // Dropdown Trigger
        items: [
          { label: 'Training & Videos', href: '/training' },
          { label: 'Downloads & Vorlagen', href: '/downloads' },
          { label: 'Software-Vergleich', href: '/vergleich' }, // Neu dazu
          { label: 'Blog', href: '/blog' },
        ]
      },

      // 4. Support
      { 
        label: 'Hilfe', 
        href: '/hilfe', // Fallback Link
        items: [
          { label: 'Support Center', href: '/hilfe' },
          { label: 'FAQ', href: '/faq' },
        ]
      },

      // 5. Unternehmen (Trust & Netzwerk) - HIER IST DIE ÄNDERUNG
      { 
        label: 'Unternehmen', 
        href: '#', 
        items: [
          { label: 'Über uns (Die Story)', href: '/ueber-uns' }, // Dein Trust-Booster
          { label: 'Partnernetzwerk', href: '/partnernetzwerk' },
        ]
      },
      
      // 6. Kontakt - Bleibt direkt für schnelle Erreichbarkeit
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

  // Footer - Hier war es schon fast perfekt, nur Vergleich ergänzt
  footer: {
    product: [
      { label: 'Funktionen', href: '/funktionen' },
      { label: 'Preise', href: '/preise' },
      { label: 'Für Steuerberater', href: '/steuerberater' },
      { label: 'Software-Vergleich', href: '/vergleich' }, // Neu
    ],
    solutions: [
      { label: 'Blog', href: '/blog' },
      { label: 'Training', href: '/training' },
      { label: 'Downloads (PDF)', href: '/downloads' }, // Neu
      { label: 'Hilfe & FAQ', href: '/faq' },
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