import "@/app/globals.css";

import { Metadata as NextMetadata } from "next";

import { Footer } from "@/components/layouts/footer";
import { Header } from "@/components/layouts/header";
import Metadata from "@/const/meta"

export const metadata: NextMetadata = {
  description: Metadata.description,
  openGraph: {
    title: {
      default: Metadata.title,
      template: `%s | ${Metadata.title}`,
    },
    description: Metadata.description,
    url: Metadata.baseUrl,
    siteName: Metadata.title,
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: Metadata.title,
    description: Metadata.description,
    site: Metadata.twitterId,
    creator: Metadata.twitterId,
  },
  alternates: {
    canonical: Metadata.baseUrl,
    types: {
      'application/rss+xml': '/feed',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body>
      <Header />
      <main>{children}</main>
      <Footer />
    </body>
  );
}