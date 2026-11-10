import Header from "@/lib/layout/Header";
import Footer from "@/lib/layout/Footer";
import Contact from "@/lib/layout/sections/Contact";

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
