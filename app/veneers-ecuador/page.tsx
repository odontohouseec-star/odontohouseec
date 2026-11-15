import { TreatmentPage, treatmentMetadata } from "@/components/pages/TreatmentPage";

export const generateMetadata = () => treatmentMetadata("veneers-ecuador");

export default function Page() {
  return <TreatmentPage slug="veneers-ecuador" />;
}
