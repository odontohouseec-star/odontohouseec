import type { Metadata } from "next";
import { BASE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Odonto House collects, uses, and protects your personal data. Our privacy policy explains your rights and our commitment to data security.",
  alternates: {
    canonical: `${BASE_URL}/privacy`,
  },
  openGraph: {
    title: "Privacy Policy | Odonto House",
    description:
      "Learn how Odonto House collects, uses, and protects your personal data.",
    url: `${BASE_URL}/privacy`,
  },
  robots: { index: true, follow: true },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
