"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import cn from "classnames";
import { Button } from "@/components/ui/button";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}

export default function Modal({
  open,
  onClose,
  children,
  className,
}: ModalProps) {
  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            key="backdrop"
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />

          <motion.div
            key="panel"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <div
              className={cn(
                "relative w-full max-w-xl bg-bg border border-line rounded-2xl overflow-hidden pointer-events-auto max-h-[90vh] flex flex-col",
                className
              )}
            >
              <Button
                variant="secondary"
                size="icon"
                icon={<X className="w-4 h-4" />}
                onClick={onClose}
                aria-label="Close"
                className="absolute top-3 right-3 z-10"
              />

              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
