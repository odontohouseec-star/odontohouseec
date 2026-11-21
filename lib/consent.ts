// Countries where Google Consent Mode must default to "denied" until the user opts in.
// EEA + UK + Switzerland (GDPR / UK GDPR / FADP).
const OPT_IN_COUNTRIES = new Set([
  "AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR",
  "DE", "GR", "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL",
  "PL", "PT", "RO", "SK", "SI", "ES", "SE",
  "IS", "LI", "NO",
  "GB", "CH",
]);

export type ConsentValue = "granted" | "denied";

export type ConsentDefaults = {
  analytics_storage: ConsentValue;
  ad_storage: ConsentValue;
  ad_user_data: ConsentValue;
  ad_personalization: ConsentValue;
  functionality_storage: ConsentValue;
  personalization_storage: ConsentValue;
  security_storage: ConsentValue;
};

/**
 * Default consent state for a visitor's country.
 * Only EEA/UK/CH require an explicit opt-in; everywhere else we can measure
 * from the first page view so EU-style defaults do not blind US campaigns.
 * An unknown country stays denied: never grant by accident.
 */
export const getConsentDefaults = (country?: string | null): ConsentDefaults => {
  const known = Boolean(country);
  const requiresOptIn = OPT_IN_COUNTRIES.has((country ?? "").toUpperCase());
  const measurement: ConsentValue = known && !requiresOptIn ? "granted" : "denied";

  return {
    analytics_storage: measurement,
    ad_storage: measurement,
    ad_user_data: measurement,
    // Never personalised: Google health-ads policy bars remarketing for this clinic.
    ad_personalization: "denied",
    functionality_storage: "granted",
    personalization_storage: "granted",
    security_storage: "granted",
  };
};
