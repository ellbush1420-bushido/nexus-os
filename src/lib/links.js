import { AVATAR_SRC } from './avatarSrc'
/** Easy-to-edit link-in-bio config for Leyla / NEXUS//OS */
export const PROFILE = {
  displayName: 'Leyla',
  label: 'NEXUS//OS',
  bio: 'Confident, warm, assertive modular AI assistant. Calm, precise, minimal.',
  avatar: AVATAR_SRC,
}

export const FEATURED_LINKS = [
  { id: 'dashboard', label: 'NEXUS//OS Command Deck', href: '/dashboard', featured: true },
  { id: 'qr', label: 'QR Generator', href: '/qr', featured: true },
  {
    id: 'basilisk',
    label: 'Basilisk Deck (private mock)',
    href: '/basilisk',
    featured: false,
    private: true,
    concept: true,
  },
  { id: 'placeholder-1', label: 'Coming Soon · Vault', href: '#', featured: false },
  { id: 'placeholder-2', label: 'Coming Soon · Brief', href: '#', featured: false },
]

/**
 * Social URLs — leave empty to hide the icon.
 * Temporarily set one to test icon rendering.
 */
export const SOCIAL_LINKS = [
  { id: 'instagram', label: 'Instagram', href: '' },
  { id: 'x', label: 'X', href: '' },
  { id: 'youtube', label: 'YouTube', href: '' },
  { id: 'tiktok', label: 'TikTok', href: '' },
]
