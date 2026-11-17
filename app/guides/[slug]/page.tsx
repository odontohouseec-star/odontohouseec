import { notFound } from "next/navigation";
import { GuidePage, guideMetadata } from "@/components/pages/GuidePage";
import { GUIDE_SLUGS, GuideSlug } from "@/lib/guides";

type Props = { params: Promise<{ slug: string }> };

const isGuide = (slug: string): slug is GuideSlug => (GUIDE_SLUGS as string[]).includes(slug);

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  return isGuide(slug) ? guideMetadata(slug) : {};
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  if (!isGuide(slug)) notFound();
  return <GuidePage slug={slug} />;
}
