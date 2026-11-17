import { GuidesIndexPage, guidesIndexMetadata } from "@/components/pages/GuidePage";

export const generateMetadata = () => guidesIndexMetadata();

export default function Page() {
  return <GuidesIndexPage />;
}
