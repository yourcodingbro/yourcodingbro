"use client";

import sanitizeHtml from "sanitize-html";
import Image from "next/image";
import cn from "classnames";
import { ExternalLink } from "lucide-react";
import Modal from "@/components/modals/Modal";
import { ButtonLink } from "@/components/ui/button";
import { typeStyle, statusStyle } from "@/components/cards/PortfolioCard";
import type {
  PortfolioItem,
  ProjectType,
  ProjectStatus,
} from "@/types/project";

type Props = {
  item: PortfolioItem | null;
  onClose: () => void;
};

export default function PortfolioModal({ item, onClose }: Props) {
  return (
    <Modal open={item !== null} onClose={onClose}>
      {item && (
        <>
          <div className="relative w-full aspect-video shrink-0">
            {item.has_image ? (
              <Image
                src={item.thumbnail}
                alt={item.title}
                fill
                className="object-cover"
              />
            ) : (
              <div
                className={cn(
                  "absolute inset-0 bg-gradient-to-br",
                  item.thumbnail
                )}
              />
            )}
          </div>

          <div className="p-6 overflow-y-auto flex flex-col gap-5">
            <div>
              <h2 className="text-fg font-bold text-xl mb-3">{item.title}</h2>
              <div className="flex flex-wrap gap-2">
                {item.type.map((t) => (
                  <span
                    key={t}
                    className={cn(
                      "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border",
                      typeStyle[t as ProjectType]
                    )}
                  >
                    {t}
                  </span>
                ))}
                <span
                  className={cn(
                    "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border",
                    statusStyle[item.status as ProjectStatus]
                  )}
                >
                  {item.status}
                </span>
              </div>
            </div>

            <div
              className="text-fg-2 text-sm leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: sanitizeHtml(item.short_desc, {
                  allowedTags: sanitizeHtml.defaults.allowedTags.concat([
                    "img",
                    "span",
                  ]),
                  allowedAttributes: {
                    ...sanitizeHtml.defaults.allowedAttributes,
                    "*": ["style", "class"],
                  },
                }),
              }}
            />

            {[
              { label: "Problems", items: item.problems },
              { label: "Challenges", items: item.challanges },
              { label: "Responsibilities", items: item.responsibilities },
              { label: "Results", items: item.results },
            ]
              .filter((s) => s.items?.length > 0)
              .map((section) => (
                <div key={section.label} className="flex flex-col gap-2">
                  <p className="text-fg-4 text-xs font-semibold uppercase tracking-widest">
                    {section.label}
                  </p>
                  <ul className="flex flex-col gap-1.5">
                    {section.items!.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <span className="text-accent shrink-0 mt-px">›</span>
                        <span className="text-fg-2 text-sm leading-relaxed">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

            <div className="flex flex-wrap gap-1.5">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-elevated border border-line text-fg-3 text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>

            {item.link && (
              <ButtonLink
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                icon={<ExternalLink className="w-4 h-4" />}
                iconPosition="after"
                className="self-start bg-brand text-white hover:bg-brand-hover glow-blue"
              >
                Visit Project
              </ButtonLink>
            )}
          </div>
        </>
      )}
    </Modal>
  );
}
