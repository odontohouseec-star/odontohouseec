import { GOOGLE_ADS_ID, GOOGLE_ADS_LABELS } from "@/lib/constants";

type LeadType = keyof typeof GOOGLE_ADS_LABELS;

const GA_EVENTS: Record<LeadType, string> = {
  form: "generate_lead",
  whatsapp: "whatsapp_click",
};

// The treatment is left out on purpose: health details must not reach Google.
export const trackLead = (type: LeadType) => {
  if (typeof window === "undefined" || !window.gtag) return;

  // lead_type keeps the two intents apart in GA4 even while Ads shares one label.
  window.gtag("event", GA_EVENTS[type], { lead_type: type });

  const label = GOOGLE_ADS_LABELS[type];
  if (label) {
    window.gtag("event", "conversion", {
      send_to: `${GOOGLE_ADS_ID}/${label}`,
      // The WhatsApp link can take over the tab on mobile; a beacon survives it.
      transport_type: "beacon",
    });
  }
};
