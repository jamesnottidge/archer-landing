/**
 * Friendly legal page configuration.
 * Update these values before publishing to App Store Connect.
 */
export const friendlyLegalConfig = {
  legalName: "James Nottidge",
  effectiveDate: "5 June 2026",
  lastUpdated: "5 June 2026",
  contactEmail: "nottidge@archer.africa",
  privacyEmail: "nottidge@archer.africa",
  mailingAddress: null as string | null, // Set if required in your jurisdiction
  jurisdiction: "Nigeria",
  liabilityCap:
    "the greater of the amount you paid us in the past 12 months or USD $50",
  usesAppleSignIn: false,
  usesSentry: false,
  sentryProviderName: "Sentry",
} as const;
