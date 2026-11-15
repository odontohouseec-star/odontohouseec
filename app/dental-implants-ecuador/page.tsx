import { TreatmentPage, treatmentMetadata } from "@/components/pages/TreatmentPage";

export const generateMetadata = () => treatmentMetadata("dental-implants-ecuador");

export default function Page() {
  return <TreatmentPage slug="dental-implants-ecuador" />;
}
