import { useState } from "react";

type MessageProps = {
  children: React.ReactNode;
  open: boolean;
  setOpen: (opened: boolean) => void;
  success: boolean;
};

export default function Notification({
  children,
  open,
  setOpen,
  success,
}: MessageProps) {
  if (!open) return null;

  return (
    <div
      className={`${
        success ? "bg-green-500" : "bg-red-500"
      } flex flex-row justify-between items-center p-2`}
    >
      <div>{children}</div>
      <button type="button" onClick={() => setOpen(!open)}>
        X
      </button>
    </div>
  );
}
