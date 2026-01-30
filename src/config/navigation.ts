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
          { label: 'Rechnungen', href: '/funktionen/faktura-rechnungen' },
          { label: 'Buchhaltung & DATEV', href: '/funktionen/buchhaltung' },
          { label: 'Steuerlogik (§25a)', href: '/funktionen/differenzbesteuerung-25a-ustg' },
          { label: 'KI-Assistent Carlo', href: '/funktionen/ki-assistent' },
          { label: 'Marktplatzanbindungen', href: '/funktionen/mobile-schnittstellen' },
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
          { label: 'Software-Vergleich', href: '/vergleich' },
          { label: 'Blog', href: '/blog' },
        ]
      },

      // 4. Support
      { 
        label: 'Hilfe', 
        href: '/hilfe',
        items: [
          { label: 'Tools', href: '/tools' },
          { label: 'Support Center', href: '/kontakt' },
          { label: 'FAQ', href: '/faq' },
        ]
      },

      // 5. Unternehmen & Netzwerk
      { 
        label: 'Unternehmen', 
        href: '#', 
        items: [
          { label: 'Über uns (Die Story)', href: '/ueber-uns' },
          // Der Hub-Link im Header reicht, um das Menü schlank zu halten
          { label: 'Partnernetzwerk', href: '/partnernetzwerk' }, 
        ]
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

  // FOOTER: Hier gehen wir in die Tiefe (SEO & Navigation)
  footer: {
    product: [
      { label: 'Funktionen', href: '/funktionen' },
      { label: 'Preise', href: '/preise' },
      { label: 'Software-Vergleich', href: '/vergleich' },
      { label: 'Für Steuerberater', href: '/steuerberater' }, // Falls diese Seite noch existiert, sonst entfernen
    ],
    solutions: [
      { label: 'Training & Academy', href: '/training' },
      { label: 'Downloads (PDF)', href: '/downloads' },
      { label: 'Hilfe & FAQ', href: '/faq' },
      { label: 'Blog', href: '/blog' },
    ],
    // NEU: Eigener Bereich oder Integration für das Netzwerk
    // Wir integrieren es intelligent in "Company" oder erweitern die Liste, 
    // um die Struktur sauber zu halten. Hier: Erweiterung von "Company".
    company: [
      { label: 'Über uns', href: '/ueber-uns' },
      { label: 'Kontakt', href: '/kontakt' },
      // Die Deep-Links zum Netzwerk für SEO
      { label: 'Partner: Steuerberatung', href: '/partnernetzwerk/steuerberatung' },
      { label: 'Partner: Buchhaltung', href: '/partnernetzwerk/buchhaltung' },
      { label: 'Partner: Digitalisierung', href: '/partnernetzwerk/digitalisierung' },
    ],
    legal: [
      { label: 'Impressum', href: '/impressum' },
      { label: 'Datenschutz', href: '/datenschutz' },
      { label: 'AGB', href: '/agb' },
    ],
  },
};