"use client";

import Modal from "@/components/modals/Modal";
import { Button } from "@/components/ui/button";

export type ConfirmDeleteModalProps = {
  open: boolean;
  title?: string;
  description?: string;
  onConfirm: () => void;
  onClose: () => void;
};

export default function ConfirmDeleteModal({
  open,
  title = "Delete item",
  description = "This action cannot be undone.",
  onConfirm,
  onClose,
}: ConfirmDeleteModalProps) {
  return (
    <Modal open={open} onClose={onClose} className="max-w-md">
      <div className="flex flex-col gap-4 p-6">
        <h2 className="text-lg font-bold text-fg">{title}</h2>
        <p className="text-sm text-fg-3">{description}</p>
        <div className="flex justify-end gap-2">
          <Button type="button" variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button
            type="button"
            variant="destructive"
            onClick={() => {
              onConfirm();
              onClose();
            }}
          >
            Delete
          </Button>
        </div>
      </div>
    </Modal>
  );
}
