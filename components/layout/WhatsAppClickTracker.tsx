"use client";

import { useEffect } from "react";
import { trackLead } from "@/lib/analytics";

export const WhatsAppClickTracker = () => {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const link = (e.target as Element).closest?.('a[href*="wa.me/"]');
      if (link) trackLead("whatsapp");
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
};
