import { BASE_URL, WA_PHONE } from "@/lib/constants";

export const SchemaOrg = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["MedicalClinic", "Dentist"],
    "@id": `${BASE_URL}/#organization`,
    "name": "Odonto House",
    "description": "Premium Smile Design, Orthodontics, and Expert Dental Care in Guayaquil, Ecuador. Save up to 70% on dental treatments.",
    "url": BASE_URL,
    "image": `${BASE_URL}/hero.jpg`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. las Aguas 1106 entre Jiguas y Laureles",
      "addressLocality": "Guayaquil",
      "addressRegion": "Guayas",
      "addressCountry": "EC",
    },
    "telephone": WA_PHONE,
    "email": "elenazbm@hotmail.com",
    "priceRange": "$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday"],
        "opens": "09:00",
        "closes": "14:00",
      },
    ],
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-2.1894",
      "longitude": "-79.8898",
    },
    "areaServed": [
      {
        "@type": "Country",
        "name": "United States",
      },
      {
        "@type": "Country",
        "name": "Canada",
      },
      {
        "@type": "Country",
        "name": "Ecuador",
      },
    ],
    "serviceType": [
      "Smile Design",
      "Orthodontics",
      "Dental Implants",
      "Teeth Whitening",
      "Wisdom Teeth Removal",
    ],
  };

  const doctorSchema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": `${BASE_URL}/#doctor`,
    "name": "Dr. Elena Barroso",
    "jobTitle": "Specialist in Aesthetic Dentistry",
    "description": "Dr. Elena Barroso is a dedicated specialist with over 10 years of experience in aesthetic dentistry. Fluent in English and trained in the latest global techniques.",
    "url": BASE_URL,
    "image": `${BASE_URL}/doctora.jpg`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. las Aguas 1106 entre Jiguas y Laureles",
      "addressLocality": "Guayaquil",
      "addressCountry": "EC",
    },
    "telephone": WA_PHONE,
    "sameAs": "https://instagram.com/odontohouse",
    "worksFor": {
      "@id": `${BASE_URL}/#organization`,
    },
    "memberOf": [
      {
        "@type": "MedicalOrganization",
        "name": "Ecuadorian Dental Association",
      },
    ],
    "medicalSpecialty": ["Aesthetic Dentistry", "Orthodontics"],
    "qualifications": [
      "DDS - Doctor of Dental Surgery",
      "Specialist in Aesthetic Dentistry",
      "10+ Years of Experience",
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        name: "Is it safe to travel to Ecuador for dental work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. Our clinic is located in one of the safest and most exclusive areas. We also offer concierge services including airport pick-up and secure transportation to trusted hotels.",
        },
      },
      {
        "@type": "Question",
        name: "Do you speak English?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! Our lead doctor and main staff are fluent in English, ensuring clear communication with no language barriers.",
        },
      },
      {
        "@type": "Question",
        name: "How long does a Smile Design take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most Smile Design procedures can be completed in just 3 to 5 days, making it perfect for a short vacation.",
        },
      },
      {
        "@type": "Question",
        name: "What payment methods do you accept?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We accept major international credit cards, Zelle, cash, and wire transfers.",
        },
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: BASE_URL,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(doctorSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
};