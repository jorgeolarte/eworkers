import { FieldError } from "react-hook-form";
import { Phone, Email, ProfileCard, DesktopPc } from "../icons";
import ErrorMessage from "./error-message";

type Props = {
  name: string;
  register: any;
  error?: FieldError;
  placeholder: string;
};

export default function Input({ name, register, error, placeholder }: Props) {
  return (
    <div className="flex flex-col gap-1">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
          {name === "firstName" && (
            <ProfileCard className="w-4 h-4 text-gray-400" />
          )}
          {name === "lastName" && (
            <ProfileCard className="w-4 h-4 text-gray-400" />
          )}
          {name === "phone" && <Phone className="w-4 h-4 text-gray-400" />}
          {name === "email" && <Email className="w-4 h-4 text-gray-400" />}
          {name === "job" && <DesktopPc className="w-4 h-4 text-gray-400" />}
        </div>
        <input
          {...register(name, { required: true })}
          placeholder={placeholder}
          className="bg-gray-700 border border-gray-600 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full pl-10 p-2.5 placeholder-gray-400 text-white"
        />
      </div>
      <ErrorMessage error={error} />
    </div>
  );
}
