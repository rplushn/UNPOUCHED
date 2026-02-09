/**
 * UNPOUCHED Design System — theme.ts (FINAL)
 * Single source of truth for all visual tokens.
 * Import this file everywhere. Never hardcode colors, sizes, or spacing.
 *
 * v1.1 FINAL — Incorporates advisor review:
 *   1. Overlay: single source of truth (color + opacity separate)
 *   2. DRY: shared ACCENT constant, no hex duplication
 *   3. Monospace: Platform-specific (Menlo on iOS, monospace on Android)
 *   4. Body: 16px confirmed (legibility > PRD for anxiety context)
 *   5. Card radius: 12px (serious tool, not wellness app)
 *   6. state.info: kept but scope-restricted to Timeline tab only
 *
 * Usage:
 *   import { colors, typography, spacing, layout, opacity, animation } from '@/constants/theme';
 */

import { Platform } from 'react-native';

// ────────────────────────────────────────────
// SHARED CONSTANTS (DRY — single source of truth)
// ────────────────────────────────────────────

const ACCENT = '#34D399';        // Emerald-400. ONE accent. No exceptions.
const WARNING = '#FBBF24';       // Amber-400. Slips, caution. Never red.
const MONO_FONT = Platform.select({ ios: 'Menlo', android: 'monospace' }) as string;

// ────────────────────────────────────────────
// COLORS
// ────────────────────────────────────────────

export const colors = {
  bg: {
    /** #09090B — App background. Near-black, OLED-friendly. */
    primary: '#09090B',
    /** #131316 — Cards, inputs, modal content. */
    secondary: '#131316',
    /** #1C1C22 — Tab bar, FAB surface, elevated chrome. */
    elevated: '#1C1C22',
    /** #000000 — Modal backdrop base. Apply opacity.overlay in styles. */
    overlay: '#000000',
  },

  text: {
    /** #F4F4F5 — Headings, hero numbers. NOT pure white. */
    primary: '#F4F4F5',
    /** #A1A1AA — Body text, descriptions. WCAG AA on bg.primary. */
    secondary: '#A1A1AA',
    /** #52525B — Placeholders, disabled states, tertiary info. */
    muted: '#52525B',
    /** #09090B — Text on accent-colored buttons. */
    inverse: '#09090B',
  },

  accent: {
    /** Emerald-400. Primary CTAs, FAB, streak, success. */
    primary: ACCENT,
    /** 12% opacity tint for success card backgrounds. */
    primaryMuted: `${ACCENT}1F`,
  },

  state: {
    /** Same as accent. Success IS the primary action. */
    success: ACCENT,
    /** Amber-400. Slips, caution. Warm, not punitive. NEVER red. */
    warning: WARNING,
    /** Amber at 12% — slip card background tint. */
    warningMuted: `${WARNING}1F`,
    /** Red-400. SYSTEM ERRORS ONLY. Never for user behavior. */
    error: '#F87171',
    /** Sky-400. RESTRICTED: Timeline tab + Settings badges ONLY.
     *  Never on Home, Craving Modal, or Paywall. */
    info: '#38BDF8',
  },

  border: {
    /** #27272A — Card borders, dividers. Subtle on OLED. */
    default: '#27272A',
    /** Accent border for active/selected states (e.g., annual plan). */
    accent: ACCENT,
  },
} as const;

// ────────────────────────────────────────────
// TYPOGRAPHY
// ────────────────────────────────────────────
// System fonts only. SF Pro on iOS, Roboto on Android.
// Monospace: Menlo (iOS), monospace (Android).
// letterSpacing values in px (RN convention).
// No italic anywhere. No custom fonts. No font below 12px.

export const typography = {
  /** 64px Bold — Streak counter on Home. The ONLY element at this size. */
  hero: {
    fontSize: 64,
    fontWeight: '700' as const,
    lineHeight: 64,
    letterSpacing: -1.28,
  },

  /** 32px Semibold — Money saved, pouches avoided. */
  stat: {
    fontSize: 32,
    fontWeight: '600' as const,
    lineHeight: 38,
    letterSpacing: -0.32,
  },

  /** 24px Semibold — Screen titles. */
  h1: {
    fontSize: 24,
    fontWeight: '600' as const,
    lineHeight: 31,
    letterSpacing: -0.12,
  },

  /** 20px Semibold — Section headers within a screen. */
  h2: {
    fontSize: 20,
    fontWeight: '600' as const,
    lineHeight: 26,
    letterSpacing: -0.06,
  },

  /** 16px Regular — Default for all readable content. */
  body: {
    fontSize: 16,
    fontWeight: '400' as const,
    lineHeight: 24,
    letterSpacing: 0,
  },

  /** 14px Medium — Button labels, card subtitles, input labels. */
  label: {
    fontSize: 14,
    fontWeight: '500' as const,
    lineHeight: 20,
    letterSpacing: 0.07,
  },

  /** 12px Regular — Timestamps, disclaimers, meta. Minimum readable size. */
  caption: {
    fontSize: 12,
    fontWeight: '400' as const,
    lineHeight: 17,
    letterSpacing: 0.12,
  },

  /** 48px Mono Bold — Intervention countdown timer. */
  timer: {
    fontSize: 48,
    fontWeight: '700' as const,
    lineHeight: 48,
    letterSpacing: -0.48,
    fontFamily: MONO_FONT,
  },

  /** 16px Mono Regular — Timer sub-label ("1:30 remaining"). */
  timerSub: {
    fontSize: 16,
    fontWeight: '400' as const,
    lineHeight: 19,
    letterSpacing: 0,
    fontFamily: MONO_FONT,
  },
} as const;

// ────────────────────────────────────────────
// SPACING
// Base unit: 4px. Primary rhythm: 8/16/24/32.
// All values are multiples of 4.
// ────────────────────────────────────────────

export const spacing = {
  /** 4px — Inline gaps (icon-to-text within a button). */
  xs: 4,
  /** 8px — Tight vertical gaps (label-to-value). */
  sm: 8,
  /** 16px — Default spacing (between cards, form fields). */
  md: 16,
  /** 24px — Section breaks within a screen. */
  lg: 24,
  /** 32px — Major section breaks, top/bottom padding. */
  xl: 32,
  /** 48px — Screen-level breathing room (below hero, above FAB). */
  xxl: 48,
} as const;

// ────────────────────────────────────────────
// LAYOUT
// ────────────────────────────────────────────

export const layout = {
  /** 20px — Horizontal padding on all screens. */
  screenPaddingH: 20,
  /** 16px — Internal padding on all cards. Equal all sides. */
  cardPadding: 16,
  /** 12px — Gap between cards in a list. */
  cardGap: 12,
  /** 12px — Card corner radius. Serious tool, not wellness app. */
  cardRadius: 12,
  /** 1px — Card border width. */
  cardBorderWidth: 1,
  /** 56px — FAB diameter (iOS). Use 60 on Android if needed. */
  fabSize: 56,
  /** 8 — FAB shadow elevation (Android) / shadow config (iOS). */
  fabElevation: 8,
  /** 44px — Minimum tap target per Apple HIG. */
  minTapTarget: 44,
  /** 100px — Bottom scroll padding to clear tab bar + FAB. */
  scrollPaddingBottom: 100,
} as const;

// ────────────────────────────────────────────
// OPACITY
// ────────────────────────────────────────────

export const opacity = {
  /** 0.38 — Disabled buttons, locked features. */
  disabled: 0.38,
  /** 0.80 — Modal overlay backdrop. Apply to colors.bg.overlay. */
  overlay: 0.80,
  /** 0.12 — Accent color as background tint (used in primaryMuted). */
  subtle: 0.12,
} as const;

// ────────────────────────────────────────────
// ANIMATION PRESETS (react-native-reanimated)
// ────────────────────────────────────────────

export const animation = {
  /** Modal open — critically damped spring. No bounce. */
  modalOpen: { damping: 28, stiffness: 280 },
  /** Modal close — fast and effortless. */
  modalCloseDuration: 200,
  /** Card press — subtle scale feedback. Never below 0.95. */
  cardPress: { toValue: 0.97, duration: 100 },
  /** Count-up (streak, money saved) — decelerating arrival. */
  countUpDuration: 1500,
  /** Stagger delay: money saved starts after streak finishes. */
  countUpDelay: 300,
  /** Box breathing — one phase (in/hold/out/hold). Linear easing. */
  breathingPhaseDuration: 4000,
  /** Box breathing total session. */
  breathingTotalDuration: 90000,
  /** Delay timer intervention total. */
  delayTimerDuration: 180000,
  /** Urge surfing intervention total. */
  urgeSurfingDuration: 120000,
  /** Replacement intervention total. */
  replacementDuration: 60000,
} as const;

// ────────────────────────────────────────────
// HELPER: Overlay style (use instead of hardcoded rgba)
// ────────────────────────────────────────────

export const overlayStyle = {
  backgroundColor: colors.bg.overlay,
  opacity: opacity.overlay,
} as const;