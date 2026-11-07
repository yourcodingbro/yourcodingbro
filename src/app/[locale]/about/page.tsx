import MainLayout from "@/components/layout/MainLayout";
import { default as Content } from "@/components/sections/WhyUs";

export default async function About() {
  return (
    <MainLayout>
      <Content depth="circles" depthColor="bg-violet/15" />
    </MainLayout>
  );
}
