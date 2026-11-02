import { GOOGLE_ADS_ID, GOOGLE_ADS_LABELS } from "@/lib/constants";

type LeadType = keyof typeof GOOGLE_ADS_LABELS;

const GA_EVENTS: Record<LeadType, string> = {
  form: "generate_lead",
  whatsapp: "whatsapp_click",
};

// The treatment is left out on purpose: health details must not reach Google.
export const trackLead = (type: LeadType) => {
  if (typeof window === "undefined" || !window.gtag) return;

  window.gtag("event", GA_EVENTS[type]);

  const label = GOOGLE_ADS_LABELS[type];
  if (label) {
    window.gtag("event", "conversion", { send_to: `${GOOGLE_ADS_ID}/${label}` });
  }
};
