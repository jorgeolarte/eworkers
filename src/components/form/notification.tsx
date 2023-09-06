import Link from "next/link";

type NotificationProps = {
  children?: React.ReactNode;
  open: boolean;
  setOpen: (opened: boolean) => void;
  success?: boolean;
};

function CloseButton({ setOpen, open }: NotificationProps) {
  return (
    <button
      type="button"
      onClick={() => setOpen(!open)}
      className="hover:text-neutral-500"
    >
      X
    </button>
  );
}

export default function Notification({
  children,
  open,
  setOpen,
  success,
}: NotificationProps) {
  if (!open) return null;

  if (success) {
    return (
      <div className="bg-green-500 flex flex-row justify-between items-start gap-5 p-2">
        <div>
          {" "}
          Bienvenido a la comunidad, a tu email hemos enviado los links para
          unirte a nuestro grupo de{" "}
          <Link
            href={`${process.env.NEXT_PUBLIC_SHARE_WHATSAPP_URL}`}
            target="_blank"
            className="underline italic cursor-pointer"
          >
            Whatsapp
          </Link>{" "}
          y acceso a nuestro servidor de Discord.
        </div>
        <CloseButton setOpen={setOpen} open={open} />
      </div>
    );
  }

  return (
    <div className="bg-red-500 flex flex-row justify-between items-start gap-5 p-2">
      <div>{children}</div>
      <CloseButton setOpen={setOpen} open={open} />
    </div>
  );
}
