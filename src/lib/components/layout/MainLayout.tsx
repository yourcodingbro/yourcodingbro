import Header from "@/lib/components/layout/Header";
import Footer from "@/lib/components/layout/Footer";
import Contact from "@/lib/components/sections/Contact";

export type MainLayoutProps = React.PropsWithChildren & {
  hasContact?: boolean;
};

export default function MainLayout({
  children,
  hasContact = true,
}: MainLayoutProps) {
  return (
    <>
      <Header />
      {children}
      {hasContact && <Contact />}
      {process.env.CONTACT_EMAIL && (
        <Footer contactEmail={process.env.CONTACT_EMAIL} />
      )}
    </>
  );
}
