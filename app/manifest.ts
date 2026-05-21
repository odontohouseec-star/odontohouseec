import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Odonto House | Premium Dental Tourism in Ecuador",
    short_name: "Odonto House",
    description:
      "Premium dental care in Ecuador. Save up to 70% on implants, veneers & smile design. Expert dentists in Guayaquil.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#051A2F",
    icons: [
      {
        src: "/icon.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
