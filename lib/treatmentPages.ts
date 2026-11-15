import type { Locale } from "@/lib/dictionary";

export type TreatmentSlug = "dental-implants-ecuador" | "veneers-ecuador";

export type TreatmentContent = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  intro: string;
  heroImage: string;
  heroAlt: string;
  highlights: string[];
  ctaQuote: string;
  ctaWhatsApp: string;
  waMsg: string;
  /** Must match one of footer.treatmentOptions so the form is preselected. */
  formOption: string;
  pricesTitle: string;
  pricesSubtitle: string;
  colTreatment: string;
  colUsa: string;
  colEcuador: string;
  saveLabel: string;
  prices: { name: string; usa: string; ecuador: string; unit: string; savings: string }[];
  priceNote: string;
  stepsTitle: string;
  steps: { title: string; text: string }[];
  stepsNote?: string;
  includedTitle: string;
  included: string[];
  results?: { title: string; before: string; after: string };
  doctorTitle: string;
  doctorText: string;
  faqTitle: string;
  faqs: { q: string; a: string }[];
  finalTitle: string;
  finalText: string;
  otherLabel: string;
  otherHref: string;
  otherText: string;
  homeLabel: string;
};

const implants: Record<Locale, TreatmentContent> = {
  en: {
    metaTitle: "Dental Implants in Ecuador – Single Implant from $950",
    metaDescription:
      "Dental implants in Guayaquil, Ecuador with an English-speaking dentist. Single implants avg. $950, All-on-4 avg. $8,500 per arch. Straumann & Nobel Biocare. Free virtual consultation.",
    eyebrow: "Dental Implants · Guayaquil, Ecuador",
    h1: "Dental Implants in Ecuador. Save Up to 79% vs. the US",
    intro:
      "Replace one tooth or a full arch with Straumann or Nobel Biocare implants, placed by an English-speaking dentist in Guayaquil. Send us your case on WhatsApp and get a free quote.",
    heroImage: "/hero.webp",
    heroAlt: "Odonto House dental clinic in Guayaquil",
    highlights: ["Single implant avg. $950", "All-on-4 avg. $8,500 per arch", "Straumann & Nobel Biocare"],
    ctaQuote: "Get a Free Implant Quote",
    ctaWhatsApp: "Chat on WhatsApp",
    waMsg: "Hi! I'm interested in dental implants in Ecuador. Can you give me a quote?",
    formOption: "Dental Implants",
    pricesTitle: "Implant Prices: US vs. Ecuador",
    pricesSubtitle: "Same premium implant brands. Prices in US dollars.",
    colTreatment: "Treatment",
    colUsa: "USA",
    colEcuador: "Odonto House",
    saveLabel: "Save",
    prices: [
      { name: "Single Dental Implant", usa: "$4,500", ecuador: "$950", unit: "per implant", savings: "79%" },
      { name: "All-on-4 Implants", usa: "$28,000", ecuador: "$8,500", unit: "per arch", savings: "70%" },
      { name: "All-on-6 Implants", usa: "$35,000", ecuador: "$12,000", unit: "per arch", savings: "66%" },
      { name: "Zirconia Crown", usa: "$1,800", ecuador: "$400", unit: "per tooth", savings: "78%" },
    ],
    priceNote: "*Average prices. Your final quote comes after your free virtual consultation.",
    stepsTitle: "How Your Implant Treatment Works",
    steps: [
      { title: "Free virtual consultation", text: "Send photos or X-rays on WhatsApp and talk to Dr. Elena Barroso in English. You get a personal plan and quote." },
      { title: "Trip 1: implant placement", text: "We pick you up at Guayaquil airport (GYE). Exam, X-rays and placement of your implants." },
      { title: "Healing at home", text: "The implants bond with the bone, usually over 3 to 6 months. We stay in touch on WhatsApp." },
      { title: "Trip 2: your final teeth", text: "We fit your final crowns or full-arch bridge and check your bite." },
    ],
    stepsNote: "Most implant cases need two trips. Your exact schedule depends on your case and is confirmed in your consultation.",
    includedTitle: "What's Included",
    included: [
      "Free virtual consultation in English",
      "Premium implants (Straumann, Nobel Biocare)",
      "Airport pickup in Guayaquil",
      "Guest suites at the clinic",
      "Follow-up visits during your stay",
      "Pay by card, Zelle, cash or wire transfer",
    ],
    doctorTitle: "Your Dentist: Dr. Elena Barroso",
    doctorText:
      "Dr. Elena Barroso has over 10 years of experience and speaks fluent English, so you understand every step of your treatment before you travel.",
    faqTitle: "Dental Implant FAQ",
    faqs: [
      { q: "How many trips do I need for dental implants?", a: "Usually two: one to place the implants and one, after healing (often 3 to 6 months), to fit your final teeth. We confirm your schedule in the consultation." },
      { q: "Which implant brands do you use?", a: "We work with Straumann and Nobel Biocare, two of the best-known implant brands in the world." },
      { q: "How much do dental implants cost in Ecuador?", a: "A single implant averages $950, All-on-4 averages $8,500 per arch and All-on-6 averages $12,000 per arch. Your final price comes after your free virtual consultation." },
      { q: "Am I a candidate for implants?", a: "Send us photos and, if you have one, a recent panoramic X-ray on WhatsApp. Dr. Barroso will review your case and tell you which options fit you." },
      { q: "Do you speak English?", a: "Yes. Dr. Barroso and our main team speak fluent English." },
      { q: "Where will I stay?", a: "Our clinic has private guest suites, and we pick you up at José Joaquín de Olmedo International Airport (GYE)." },
    ],
    finalTitle: "Ready to Get Your Implant Quote?",
    finalText: "Send us your case on WhatsApp. We reply with next steps and a personal quote.",
    otherLabel: "Also see",
    otherHref: "/veneers-ecuador",
    otherText: "Porcelain Veneers & Smile Design in Ecuador",
    homeLabel: "Back to home",
  },
  es: {
    metaTitle: "Implantes Dentales en Ecuador – Implante desde $950",
    metaDescription:
      "Implantes dentales en Guayaquil, Ecuador, con doctora que habla inglés. Implante unitario promedio $950, All-on-4 promedio $8.500 por arcada. Straumann y Nobel Biocare. Consulta virtual gratis.",
    eyebrow: "Implantes Dentales · Guayaquil, Ecuador",
    h1: "Implantes Dentales en Ecuador. Ahorra hasta 79% frente a EE. UU.",
    intro:
      "Reemplaza un diente o una arcada completa con implantes Straumann o Nobel Biocare, colocados por una doctora bilingüe en Guayaquil. Envíanos tu caso por WhatsApp y recibe una cotización gratis.",
    heroImage: "/hero.webp",
    heroAlt: "Clínica dental Odonto House en Guayaquil",
    highlights: ["Implante unitario promedio $950", "All-on-4 promedio $8.500 por arcada", "Straumann y Nobel Biocare"],
    ctaQuote: "Cotiza tus implantes gratis",
    ctaWhatsApp: "Escríbenos por WhatsApp",
    waMsg: "¡Hola! Me interesan los implantes dentales. ¿Me pueden dar una cotización?",
    formOption: "Implantes Dentales",
    pricesTitle: "Precios de implantes: EE. UU. vs. Ecuador",
    pricesSubtitle: "Las mismas marcas premium. Precios en dólares.",
    colTreatment: "Tratamiento",
    colUsa: "EE. UU.",
    colEcuador: "Odonto House",
    saveLabel: "Ahorro",
    prices: [
      { name: "Implante dental unitario", usa: "$4.500", ecuador: "$950", unit: "por implante", savings: "79%" },
      { name: "Implantes All-on-4", usa: "$28.000", ecuador: "$8.500", unit: "por arcada", savings: "70%" },
      { name: "Implantes All-on-6", usa: "$35.000", ecuador: "$12.000", unit: "por arcada", savings: "66%" },
      { name: "Corona de zirconio", usa: "$1.800", ecuador: "$400", unit: "por diente", savings: "78%" },
    ],
    priceNote: "*Precios promedio. Tu cotización final se da después de la consulta virtual gratuita.",
    stepsTitle: "Cómo funciona tu tratamiento de implantes",
    steps: [
      { title: "Consulta virtual gratis", text: "Envía fotos o radiografías por WhatsApp y habla con la Dra. Elena Barroso. Recibes un plan y una cotización personal." },
      { title: "Viaje 1: colocación", text: "Te recogemos en el aeropuerto de Guayaquil (GYE). Evaluación, radiografías y colocación de tus implantes." },
      { title: "Cicatrización en casa", text: "El implante se une al hueso, normalmente en 3 a 6 meses. Seguimos en contacto por WhatsApp." },
      { title: "Viaje 2: tus dientes definitivos", text: "Colocamos tus coronas o tu puente de arcada completa y revisamos tu mordida." },
    ],
    stepsNote: "La mayoría de los casos de implantes necesitan dos viajes. Tu calendario exacto depende de tu caso y se confirma en la consulta.",
    includedTitle: "Qué incluye",
    included: [
      "Consulta virtual gratis",
      "Implantes premium (Straumann, Nobel Biocare)",
      "Recogida en el aeropuerto de Guayaquil",
      "Suites para huéspedes en la clínica",
      "Controles durante tu estadía",
      "Pago con tarjeta, Zelle, efectivo o transferencia",
    ],
    doctorTitle: "Tu doctora: Dra. Elena Barroso",
    doctorText:
      "La Dra. Elena Barroso tiene más de 10 años de experiencia y habla inglés con fluidez, para que entiendas cada paso de tu tratamiento antes de viajar.",
    faqTitle: "Preguntas frecuentes sobre implantes",
    faqs: [
      { q: "¿Cuántos viajes necesito para implantes?", a: "Normalmente dos: uno para colocar los implantes y otro, tras la cicatrización (a menudo de 3 a 6 meses), para los dientes definitivos. Confirmamos tu calendario en la consulta." },
      { q: "¿Qué marcas de implantes usan?", a: "Trabajamos con Straumann y Nobel Biocare, dos de las marcas de implantes más reconocidas del mundo." },
      { q: "¿Cuánto cuestan los implantes en Ecuador?", a: "Un implante unitario cuesta en promedio $950, el All-on-4 $8.500 por arcada y el All-on-6 $12.000 por arcada. El precio final se da después de la consulta virtual gratuita." },
      { q: "¿Soy candidato para implantes?", a: "Envíanos fotos y, si tienes, una radiografía panorámica reciente por WhatsApp. La Dra. Barroso revisará tu caso y te dirá qué opciones te convienen." },
      { q: "¿Hablan inglés?", a: "Sí. La Dra. Barroso y nuestro equipo principal hablan inglés con fluidez." },
      { q: "¿Dónde me hospedo?", a: "La clínica tiene suites privadas para huéspedes y te recogemos en el Aeropuerto Internacional José Joaquín de Olmedo (GYE)." },
    ],
    finalTitle: "¿Listo para cotizar tus implantes?",
    finalText: "Envíanos tu caso por WhatsApp. Te respondemos con los siguientes pasos y una cotización personal.",
    otherLabel: "Mira también",
    otherHref: "/veneers-ecuador",
    otherText: "Carillas de porcelana y Diseño de Sonrisa en Ecuador",
    homeLabel: "Volver al inicio",
  },
};

const veneers: Record<Locale, TreatmentContent> = {
  en: {
    metaTitle: "Porcelain Veneers & Smile Design in Ecuador – From $350",
    metaDescription:
      "Emax porcelain veneers and Hollywood Smile in Guayaquil, Ecuador. Veneers avg. $350 per tooth, 10-12 veneers avg. $4,200. Most smiles done in 3-5 days. English-speaking dentist.",
    eyebrow: "Smile Design · Guayaquil, Ecuador",
    h1: "Porcelain Veneers in Ecuador. Your New Smile in 3-5 Days",
    intro:
      "Emax porcelain veneers and full Smile Design by an English-speaking dentist in Guayaquil. A Hollywood Smile averages $4,200 vs. about $18,000 in the US.",
    heroImage: "/after2.webp",
    heroAlt: "Smile Design result at Odonto House",
    highlights: ["Veneers avg. $350 per tooth", "10-12 veneers avg. $4,200", "Most smiles done in 3-5 days"],
    ctaQuote: "Get a Free Smile Quote",
    ctaWhatsApp: "Chat on WhatsApp",
    waMsg: "Hi! I'm interested in porcelain veneers / Smile Design in Ecuador. Can you give me a quote?",
    formOption: "Smile Design",
    pricesTitle: "Veneer Prices: US vs. Ecuador",
    pricesSubtitle: "Emax porcelain. Prices in US dollars.",
    colTreatment: "Treatment",
    colUsa: "USA",
    colEcuador: "Odonto House",
    saveLabel: "Save",
    prices: [
      { name: "Porcelain Veneer (Emax)", usa: "$1,500", ecuador: "$350", unit: "per tooth", savings: "77%" },
      { name: "Hollywood Smile (10-12 veneers)", usa: "$18,000", ecuador: "$4,200", unit: "full smile", savings: "77%" },
      { name: "Zirconia Crown", usa: "$1,800", ecuador: "$400", unit: "per tooth", savings: "78%" },
      { name: "Teeth Whitening (Laser)", usa: "$800", ecuador: "$250", unit: "per session", savings: "69%" },
    ],
    priceNote: "*Average prices. Your final quote comes after your free virtual consultation.",
    stepsTitle: "How Your Smile Design Works",
    steps: [
      { title: "Free virtual consultation", text: "Send smile photos on WhatsApp and talk to Dr. Elena Barroso in English. You get a personal plan and quote." },
      { title: "Arrival and smile plan", text: "We pick you up at Guayaquil airport (GYE). Exam and design of your new smile with you." },
      { title: "Preparation and try-in", text: "Your teeth are prepared and your veneers are made and tried in, so you can see the result." },
      { title: "Final placement", text: "Your veneers are placed and checked before you fly home." },
    ],
    stepsNote: "Most Smile Designs take 3 to 5 days. Your exact schedule is confirmed in your consultation.",
    includedTitle: "All-Inclusive Smile Design Package",
    included: [
      "Smile Design (10-12 porcelain veneers)",
      "Suite stay at the clinic for your whole treatment",
      "3 meals a day",
      "Airport pickup and drop-off in Guayaquil",
      "Guayaquil city tour",
      "All follow-up visits during your stay",
    ],
    results: { title: "Real Smile Design Result", before: "Before", after: "After" },
    doctorTitle: "Your Dentist: Dr. Elena Barroso",
    doctorText:
      "Dr. Elena Barroso has over 10 years in aesthetic dentistry and speaks fluent English. She designs your smile with you, so you know how it will look before your veneers are placed.",
    faqTitle: "Veneers FAQ",
    faqs: [
      { q: "How long does a Smile Design take?", a: "Most Smile Designs are done in 3 to 5 days, so you can plan a short trip." },
      { q: "How much do veneers cost in Ecuador?", a: "Emax porcelain veneers average $350 per tooth. A Hollywood Smile of 10-12 veneers averages $4,200. Your final price comes after your free virtual consultation." },
      { q: "Do veneers damage my teeth?", a: "Placing porcelain veneers usually requires removing a thin layer of enamel. Dr. Barroso explains exactly what your case needs before you decide." },
      { q: "How long do porcelain veneers last?", a: "With good care, porcelain veneers often last 10 to 15 years or more." },
      { q: "Do you speak English?", a: "Yes. Dr. Barroso and our main team speak fluent English." },
      { q: "What payment methods do you accept?", a: "Major international credit cards, Zelle, cash and wire transfers." },
    ],
    finalTitle: "Ready for Your New Smile?",
    finalText: "Send us your smile photos on WhatsApp. We reply with next steps and a personal quote.",
    otherLabel: "Also see",
    otherHref: "/dental-implants-ecuador",
    otherText: "Dental Implants in Ecuador",
    homeLabel: "Back to home",
  },
  es: {
    metaTitle: "Carillas de Porcelana y Diseño de Sonrisa en Ecuador – Desde $350",
    metaDescription:
      "Carillas de porcelana Emax y Hollywood Smile en Guayaquil, Ecuador. Carilla promedio $350 por diente, 10-12 carillas promedio $4.200. La mayoría en 3 a 5 días. Doctora bilingüe.",
    eyebrow: "Diseño de Sonrisa · Guayaquil, Ecuador",
    h1: "Carillas de porcelana en Ecuador. Tu nueva sonrisa en 3 a 5 días",
    intro:
      "Carillas de porcelana Emax y Diseño de Sonrisa completo con una doctora bilingüe en Guayaquil. Un Hollywood Smile cuesta en promedio $4.200, frente a unos $18.000 en EE. UU.",
    heroImage: "/after2.webp",
    heroAlt: "Resultado de Diseño de Sonrisa en Odonto House",
    highlights: ["Carilla promedio $350 por diente", "10-12 carillas promedio $4.200", "La mayoría en 3 a 5 días"],
    ctaQuote: "Cotiza tu sonrisa gratis",
    ctaWhatsApp: "Escríbenos por WhatsApp",
    waMsg: "¡Hola! Me interesan las carillas / Diseño de Sonrisa. ¿Me pueden dar una cotización?",
    formOption: "Diseño de Sonrisa",
    pricesTitle: "Precios de carillas: EE. UU. vs. Ecuador",
    pricesSubtitle: "Porcelana Emax. Precios en dólares.",
    colTreatment: "Tratamiento",
    colUsa: "EE. UU.",
    colEcuador: "Odonto House",
    saveLabel: "Ahorro",
    prices: [
      { name: "Carilla de porcelana (Emax)", usa: "$1.500", ecuador: "$350", unit: "por diente", savings: "77%" },
      { name: "Hollywood Smile (10-12 carillas)", usa: "$18.000", ecuador: "$4.200", unit: "sonrisa completa", savings: "77%" },
      { name: "Corona de zirconio", usa: "$1.800", ecuador: "$400", unit: "por diente", savings: "78%" },
      { name: "Blanqueamiento láser", usa: "$800", ecuador: "$250", unit: "por sesión", savings: "69%" },
    ],
    priceNote: "*Precios promedio. Tu cotización final se da después de la consulta virtual gratuita.",
    stepsTitle: "Cómo funciona tu Diseño de Sonrisa",
    steps: [
      { title: "Consulta virtual gratis", text: "Envía fotos de tu sonrisa por WhatsApp y habla con la Dra. Elena Barroso. Recibes un plan y una cotización personal." },
      { title: "Llegada y diseño", text: "Te recogemos en el aeropuerto de Guayaquil (GYE). Evaluación y diseño de tu nueva sonrisa contigo." },
      { title: "Preparación y prueba", text: "Se preparan tus dientes y se fabrican y prueban tus carillas, para que veas el resultado." },
      { title: "Colocación final", text: "Se colocan tus carillas y se revisan antes de que vuelvas a casa." },
    ],
    stepsNote: "La mayoría de los Diseños de Sonrisa toman de 3 a 5 días. Tu calendario exacto se confirma en la consulta.",
    includedTitle: "Paquete todo incluido de Diseño de Sonrisa",
    included: [
      "Diseño de Sonrisa (10-12 carillas de porcelana)",
      "Estadía en suite en la clínica durante todo el tratamiento",
      "3 comidas al día",
      "Recogida y traslado al aeropuerto de Guayaquil",
      "Tour por Guayaquil",
      "Todos los controles durante tu estadía",
    ],
    results: { title: "Resultado real de Diseño de Sonrisa", before: "Antes", after: "Después" },
    doctorTitle: "Tu doctora: Dra. Elena Barroso",
    doctorText:
      "La Dra. Elena Barroso tiene más de 10 años en odontología estética y habla inglés con fluidez. Diseña tu sonrisa contigo, para que sepas cómo quedará antes de colocar las carillas.",
    faqTitle: "Preguntas frecuentes sobre carillas",
    faqs: [
      { q: "¿Cuánto tarda un Diseño de Sonrisa?", a: "La mayoría se completan en 3 a 5 días, así que puedes planear un viaje corto." },
      { q: "¿Cuánto cuestan las carillas en Ecuador?", a: "Las carillas de porcelana Emax cuestan en promedio $350 por diente. Un Hollywood Smile de 10-12 carillas, $4.200 en promedio. El precio final se da después de la consulta virtual gratuita." },
      { q: "¿Las carillas dañan mis dientes?", a: "Colocar carillas de porcelana suele requerir retirar una capa delgada de esmalte. La Dra. Barroso te explica qué necesita tu caso antes de que decidas." },
      { q: "¿Cuánto duran las carillas de porcelana?", a: "Con buen cuidado, las carillas de porcelana suelen durar de 10 a 15 años o más." },
      { q: "¿Hablan inglés?", a: "Sí. La Dra. Barroso y nuestro equipo principal hablan inglés con fluidez." },
      { q: "¿Qué formas de pago aceptan?", a: "Tarjetas de crédito internacionales, Zelle, efectivo y transferencias." },
    ],
    finalTitle: "¿Listo para tu nueva sonrisa?",
    finalText: "Envíanos fotos de tu sonrisa por WhatsApp. Te respondemos con los siguientes pasos y una cotización personal.",
    otherLabel: "Mira también",
    otherHref: "/dental-implants-ecuador",
    otherText: "Implantes Dentales en Ecuador",
    homeLabel: "Volver al inicio",
  },
};

export const TREATMENT_PAGES: Record<TreatmentSlug, Record<Locale, TreatmentContent>> = {
  "dental-implants-ecuador": implants,
  "veneers-ecuador": veneers,
};
