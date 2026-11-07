export type Navigation = {
  [key: string]: NavigationItem;
};

export type NavigationItem = {
  href: string;
  labelKey: string;
  ariaKey?: string;
};

export type CTA = { labelKey: string; ariaKey?: string } & (
  | {
      action: "link";
      href: string;
    }
  | {
      action: "click";
      onClick: () => void;
    }
);

export type SelectOption = {
  value: string;
  label: string;
};
