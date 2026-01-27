/**
 * Type Definitions for Site Configuration
 *
 * @description
 * TypeScript interfaces used across the site configuration.
 * Updated to support nested navigation (dropdowns) and modern SaaS requirements.
 */

/* =========================================
   1. NAVIGATION SYSTEM (Updated for Dropdowns)
   ========================================= */

export interface NavigationItem {
  label: string;
  /** Link target (optional for parent items with dropdowns) */
  href?: string;
  /** Child items for dropdown menus */
  items?: NavigationItem[];
  /** Feature flag key - item only shows if this feature is enabled */
  feature?: keyof FeatureFlags;
}

export interface NavigationCTA {
  label: string;
  href: string;
  variant: 'primary' | 'secondary' | 'ghost';
}

export interface HeaderNavigation {
  /** Main navigation items (can be nested) */
  main: NavigationItem[];
  /** CTA buttons on the right side */
  cta: NavigationCTA[];
}

export interface FooterNavigation {
  /** Product-related links */
  product: NavigationItem[];
  /** Solutions/use-case links */
  solutions: NavigationItem[];
  /** Company info links */
  company: NavigationItem[];
  /** Legal links */
  legal: NavigationItem[];
  /** Social links (optional separate section) */
  social?: NavigationItem[];
}

export interface Navigation {
  header: HeaderNavigation;
  footer: FooterNavigation;
}

/* =========================================
   2. SITE CONFIGURATION (General)
   ========================================= */

export interface SocialLinks {
  twitter?: string;
  github?: string;
  discord?: string;
  linkedin?: string;
  instagram?: string;
  youtube?: string;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

export interface ContactInfo {
  email: string;
  supportEmail?: string;
  salesEmail?: string;
  phone?: string;
  address: Address;
}

export interface LegalConfig {
  privacyEmail: string;
  legalEmail: string;
  lastUpdated: string;
}

/* =========================================
   3. FEATURES & FLAGS
   ========================================= */

export interface FeatureFlags {
  blog: boolean;
  docs: boolean;
  changelog: boolean;
  testimonials: boolean;
  roadmap: boolean;
}

export interface AnnouncementConfig {
  enabled: boolean;
  id: string; // Unique ID for local storage dismissal
  text: string;
  href?: string;
  linkText?: string;
  variant: 'primary' | 'secondary' | 'gradient';
  dismissible: boolean;
}

/* =========================================
   4. CONTENT & STRINGS
   ========================================= */

export interface NewsletterStrings {
  title: string;
  description: string;
  placeholder: string;
  buttonText: string;
  successMessage: string;
  errorMessage: string;
  privacyNote: string;
}

export interface ContentStrings {
  newsletter: NewsletterStrings;
}

/* =========================================
   5. MASTER CONFIG INTERFACE
   ========================================= */

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  author: string;
  logo: string; // Path to logo file
  ogImage: string; // Open Graph image path
  contact: ContactInfo;
  legal: LegalConfig;
  social: SocialLinks;
  navigation: Navigation;
  features: FeatureFlags;
  announcement: AnnouncementConfig;
  content: ContentStrings;
}

/* =========================================
   6. PRICING MODELS
   ========================================= */

export interface PricingPlan {
  name: string;
  monthlyPrice: number | null;
  customPrice?: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
  cta: { label: string; href: string };
}

/* =========================================
   7. DASHBOARD & APP MODELS
   ========================================= */

export interface Project {
  id: string;
  name: string;
  description: string;
  status: 'active' | 'archived' | 'draft';
  createdAt: Date;
  updatedAt: Date;
  owner: string;
}

export interface TeamMember {
  id: string;
  name: string;
  email: string;
  role: 'owner' | 'admin' | 'member';
  avatar?: string;
  joinedAt: Date;
}

export interface Metric {
  title: string;
  value: string | number;
  trend?: {
    value: number; // Percentage
    direction: 'up' | 'down';
  };
  icon: string; // Lucide icon name
  description?: string;
}

export interface ChartData {
  labels: string[];
  datasets: Array<{
    label: string;
    data: number[];
    color?: string;
  }>;
}

export interface DashboardUser {
  name: string;
  email: string;
  avatar?: string;
}

export interface BillingPlan {
  name: string;
  price: number;
  interval: 'month' | 'year';
  features: string[];
  nextBillingDate: Date;
}

export interface PaymentMethod {
  type: 'card' | 'paypal' | 'bank';
  last4?: string;
  brand?: string;
  expiryMonth?: number;
  expiryYear?: number;
}

export interface BillingHistoryItem {
  id: string;
  date: Date;
  description: string;
  amount: number;
  status: 'paid' | 'pending' | 'failed';
  invoiceUrl?: string;
}