import type { Metadata } from "next";
import './css/globals.css';
import { Header } from "./components/Header";
import { Layout } from "./components/Layout";
import 'slick-carousel/slick/slick.css';
import { Footer } from "./components/Footer";


export const metadata: Metadata = {
  title: {
    template: 'Brandify',
    default: 'Brandify - One stop premium clothing'
  },
  description: "Brandify is a dynamic e-commerce clothing brand that blends style, quality, and affordability. Shopping with Brandify is a seamless experience, thanks to our user-friendly website, easy navigation, and secure payment options. With fast shipping and hassle-free returns, we aim to make fashion accessible and enjoyable."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-bodyFont w-full bg-main-bg text-darkText">
        <Layout>
          <Header />
          {children}
          <Footer />
        </Layout>
      </body>
    </html>
  );
}
