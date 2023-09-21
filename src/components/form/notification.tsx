import React from "react";
import { Bell, Close } from "../icons";
import Link from "next/link";

type NotificationProps = {
  children?: React.ReactNode;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  success?: boolean;
};

export default function Notification({
  children,
  open,
  setOpen,
  success,
}: NotificationProps) {
  if (!open) return null;

  return (
    <div
      id="sticky-banner"
      className="fixed top-0 left-0 z-50 flex justify-between w-full p-4 border-b border-gray-200 bg-gray-50 dark:bg-gray-700 dark:border-gray-600"
    >
      <div className="flex items-center mx-auto">
        <p className="flex items-center text-sm font-normal text-gray-400">
          <span className="inline-flex p-1 mr-3 rounded-full bg-yellow-600 w-6 h-6 items-center justify-center">
            <Bell className="w-4 h-4 text-white" />
            <span className="sr-only">Bell</span>
          </span>
          {success ? (
            <span>
              Bienvenido a nuestra comunidad, únete a nuestro{" "}
              <Link
                href={process.env.NEXT_PUBLIC_SHARE_DISCORD_URL || "#"}
                target="_blank"
                className="inline font-medium underline text-yellow-500 underline-offset-2 decoration-600 dark:decoration-500 decoration-solid hover:no-underline"
              >
                Discord
              </Link>{" "}
              y{" "}
              <Link
                href={process.env.NEXT_PUBLIC_SHARE_WHATSAPP_URL || "#"}
                target="_blank"
                className="inline font-medium underline text-yellow-500 underline-offset-2 decoration-600 dark:decoration-500 decoration-solid hover:no-underline"
              >
                Whatsapp
              </Link>
            </span>
          ) : (
            children
          )}
        </p>
      </div>
      <div className="flex items-center">
        <button
          data-dismiss-target="#sticky-banner"
          type="button"
          className="flex-shrink-0 inline-flex justify-center w-7 h-7 items-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white"
          onClick={() => setOpen(!open)}
        >
          <Close className="w-3 h-3" />
          <span className="sr-only">Close banner</span>
        </button>
      </div>
    </div>
  );
}
