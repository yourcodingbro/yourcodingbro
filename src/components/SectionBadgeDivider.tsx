import SectionBadge from "@/components/SectionBadge";

type SectionBadgeDividerProps = {
  children: React.ReactNode;
};

export default function SectionBadgeDivider({
  children,
}: SectionBadgeDividerProps) {
  return (
    <div className="flex items-center gap-4 mb-14 sm:mb-20">
      <div className="flex-1 h-px bg-line" />
      <SectionBadge>{children}</SectionBadge>
      <div className="flex-1 h-px bg-line" />
    </div>
  );
}
