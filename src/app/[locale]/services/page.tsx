import MainLayout from "@/components/layout/MainLayout";
import { default as Content } from "@/components/sections/Services";

export default async function Services() {
  return (
    <MainLayout>
      <Content depth="circles" depthColor="bg-accent/5" />
    </MainLayout>
  );
}
