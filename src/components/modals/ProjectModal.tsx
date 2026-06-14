"use client";

import sanitizeHtml from "sanitize-html";
import cn from "classnames";
import { ExternalLink } from "lucide-react";
import Modal from "@/components/modals/Modal";
import { ButtonLink } from "@/components/ui/button";
import ProjectImageCarousel from "@/components/carousels/ProjectImageCarousel";
import { typeStyle, statusStyle } from "@/components/cards/ProjectCard";
import type { Project } from "@/types/project";

export type ProjectModalProps = {
  item: Project | null;
  onClose: () => void;
};

export default function ProjectModal({ item, onClose }: ProjectModalProps) {
  return (
    <Modal open={item !== null} onClose={onClose}>
      {item && (
        <>
          <ProjectImageCarousel
            thumbnail={item.thumbnail}
            hasImage={item.has_image}
            images={item.images}
            title={item.title}
          />

          <div className="flex overflow-y-auto flex-col gap-5 p-6">
            <div>
              <h2 className="mb-3 text-xl font-bold text-fg">{item.title}</h2>
              <div className="flex flex-wrap gap-2">
                {item.type.map((t) => (
                  <span
                    key={t}
                    className={cn(
                      "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border",
                      typeStyle[t]
                    )}
                  >
                    {t}
                  </span>
                ))}
                <span
                  className={cn(
                    "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border",
                    statusStyle[item.status]
                  )}
                >
                  {item.status}
                </span>
              </div>
            </div>

            <div
              className="text-sm leading-relaxed text-fg-2"
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
                  <p className="text-xs font-semibold tracking-widest uppercase text-fg-4">
                    {section.label}
                  </p>
                  <ul className="flex flex-col gap-1.5">
                    {section.items!.map((point) => (
                      <li key={point} className="flex gap-2 items-start">
                        <span className="mt-px text-accent shrink-0">›</span>
                        <span className="text-sm leading-relaxed text-fg-2">
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
                  className="px-3 py-1 text-xs rounded-full border bg-elevated border-line text-fg-3"
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
                className="self-start text-white bg-brand hover:bg-brand-hover glow-blue"
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
