import MainLayout from "@/components/layout/MainLayout";
import { default as Content } from "@/components/sections/Portfolio";
import SocialProof from "@/components/sections/SocialProof";

export default async function Portfolio() {
  return (
    <MainLayout>
      <Content depth="circles" depthColor="bg-violet/15" />
      <SocialProof depth="row" depthColor="via-brand/15" />
    </MainLayout>
  );
}
