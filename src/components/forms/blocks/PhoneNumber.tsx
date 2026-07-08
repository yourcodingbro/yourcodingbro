"use client";

import { useCallback, useState } from "react";
import { allCountries } from "country-telephone-data";
import * as Flags from "country-flag-icons/react/3x2";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn, detectLocale } from "@/lib/utils";

const fieldClass =
  "h-auto px-4 py-3 bg-surface border-line text-fg placeholder:text-fg-4 focus-visible:border-brand focus-visible:ring-brand/30 rounded-lg";

type Country = (typeof allCountries)[number];

export type PhoneNumberProps = {
  value: string;
  placeholder?: string;
  onChange?: (value: string) => void;
};

export default function PhoneNumber({
  value,
  onChange,
  placeholder = "Phone number",
}: PhoneNumberProps) {
  const detected = detectLocale("us");
  const exists = allCountries.some((c) => c.iso2 === detected);
  const defaultIso2 = exists ? detected : "us";

  const [selectedCountry, setSelectedCountry] = useState(
    allCountries.find((c) => c.iso2 === defaultIso2)
  );

  const match = value.match(/^(\+\d+)\s?(.*)$/);
  const [number, setNumber] = useState<string>(match?.[2] ?? "");
  const [iso2, setIso2] = useState<string>(defaultIso2);

  const update = useCallback(
    (country: Country, num: string) => {
      setSelectedCountry(country);
      onChange?.(num ? `+${country.dialCode} ${num}` : "");
    },
    [onChange]
  );

  return (
    <div className="flex gap-2">
      <Select
        value={iso2}
        onValueChange={(value) => {
          if (!value) return;

          setIso2(value);

          const country = allCountries.find((c) => c.iso2 === value);
          if (country) {
            update(country, number);
          }
        }}
      >
        <SelectTrigger className={cn(fieldClass, "min-w-32 shrink-0")}>
          <SelectValue>
            {selectedCountry && (
              <span className="flex items-center gap-2">
                <Flag iso2={selectedCountry.iso2} />
                <span>({selectedCountry.iso2.toUpperCase()})</span>
                <span>+{selectedCountry.dialCode}</span>
              </span>
            )}
          </SelectValue>
        </SelectTrigger>
        <SelectContent className="max-h-64">
          {allCountries.map((c) => (
            <SelectItem key={c.iso2} value={c.iso2}>
              <span className="flex items-center gap-2">
                <Flag iso2={c.iso2} />
                <span>
                  ({c.iso2.toUpperCase()}) +{c.dialCode}
                </span>
              </span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Input
        type="tel"
        value={number}
        onChange={(e) => {
          setNumber(e.target.value);
          if (selectedCountry) {
            update(selectedCountry, e.target.value);
          }
        }}
        placeholder={createPlaceholder(selectedCountry?.format ?? placeholder)}
        className={fieldClass}
      />
    </div>
  );
}

function Flag({ iso2 }: { iso2: string }) {
  const code = iso2.toUpperCase() as keyof typeof Flags;
  const FlagComponent = Flags[code];

  if (!FlagComponent) return null;

  return <FlagComponent className="size-6 shrink-0 rounded-md" />;
}

function createPlaceholder(format: string): string {
  const parenIdx = format.indexOf("(");
  const dashIdx = format.indexOf("-");

  const start = parenIdx !== -1 ? parenIdx : dashIdx !== -1 ? dashIdx + 1 : 0;
  const relevant = format.slice(start);

  let counter = 1;

  return relevant.replace(/\./g, () => String(counter++ % 10));
}
