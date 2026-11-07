import MainLayout from "@/lib/components/layout/MainLayout";
import { default as Content } from "@/lib/components/sections/Portfolio";
import SocialProof from "@/lib/components/sections/SocialProof";

export default async function Portfolio() {
  return (
    <MainLayout>
      <Content depth="circles" depthColor="bg-violet/15" />
      <SocialProof depth="row" depthColor="via-brand/15" />
    </MainLayout>
  );
}
