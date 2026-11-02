export const WA_NUMBER = "593990904443";
export const WA_PHONE = `+${WA_NUMBER}`;
export const waLink = (text?: string) =>
  `https://wa.me/${WA_NUMBER}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

export const SOCIAL = {
  instagram: "https://www.instagram.com/odontohouse?igsh=djR1cmd1ejY4d2Zr",
  tiktok: "https://www.tiktok.com/@odontohouse.ec?_r=1&_t=ZS-95uAlkmVHRx",
  facebook: "https://www.facebook.com/share/1E4Z3Cuzws/",
} as const;

export const BASE_URL = "https://odontohouse.com";

export const GOOGLE_ADS_ID = "AW-18432745273";
export const GOOGLE_ADS_LABELS = {
  form: "n3hACMT247AdELm-tdVE",
  whatsapp: "n3hACMT247AdELm-tdVE",
} as const;

export const MAP_SRC = "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3986.980601354422!2d-79.9140833!3d-2.1610833000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMsKwMDknMzkuOSJTIDc5wrA1NCc1MC43Ilc!5e0!3m2!1ses!2sec!4v1777318549865!5m2!1ses!2sec";
