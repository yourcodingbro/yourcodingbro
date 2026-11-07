import Header from "@/lib/components/layout/Header";
import Footer from "@/lib/components/layout/Footer";
import Contact from "@/lib/components/sections/Contact";

export default async function SubpagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <Contact />
      {process.env.CONTACT_EMAIL && (
        <Footer contactEmail={process.env.CONTACT_EMAIL} />
      )}
    </>
  );
}
