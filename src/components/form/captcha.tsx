import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { FieldError, UseFormSetValue } from "react-hook-form";

type Props = {
  setValue: UseFormSetValue<any>;
  error?: FieldError;
  recaptchaRef: React.RefObject<ReCAPTCHA>;
};

export default function Captcha({ setValue, error, recaptchaRef }: Props) {
  const handleRecaptchaChange = (value: string | null) => {
    setValue("recaptcha", value || "");
  };

  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <ReCAPTCHA
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
        ref={recaptchaRef}
        onChange={handleRecaptchaChange}
      />
      {error && <div className="text-sm italic">{error.message}</div>}
    </div>
  );
}
