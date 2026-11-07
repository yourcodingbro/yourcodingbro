import MainLayout from "@/lib/components/layout/MainLayout";
import { default as Content } from "@/lib/components/sections/Contact";

export default async function Contact() {
  return (
    <MainLayout hasContact={false}>
      <Content />
    </MainLayout>
  );
}
