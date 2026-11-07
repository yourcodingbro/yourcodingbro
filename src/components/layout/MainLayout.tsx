import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Contact from "@/components/sections/Contact";

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
