import MainLayout from "@/components/layout/MainLayout";
import { default as Content } from "@/components/sections/Contact";

export default async function Contact() {
  return (
    <MainLayout hasContact={false}>
      <Content />
    </MainLayout>
  );
}
