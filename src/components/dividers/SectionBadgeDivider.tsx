import SectionBadge from "@/components/badges/SectionBadge";

export type SectionBadgeDividerProps = {
  children: React.ReactNode;
};

export default function SectionBadgeDivider({
  children,
}: SectionBadgeDividerProps) {
  return (
    <div className="flex gap-4 items-center">
      <div className="flex-1 h-px bg-line" />
      <SectionBadge>{children}</SectionBadge>
      <div className="flex-1 h-px bg-line" />
    </div>
  );
}
