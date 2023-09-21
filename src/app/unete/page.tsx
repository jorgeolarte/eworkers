"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MemberProps, MemberSchema } from "@/schemas";
import { createMember } from "../actions";
import {
  Notification,
  Submit,
  Input,
  Select,
  Captcha,
} from "@/components/form";
import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function Index() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    reset,
  } = useForm<MemberProps>({
    resolver: zodResolver(MemberSchema),
  });

  const processForm: SubmitHandler<MemberProps> = async (data) => {
    const result = await createMember(data);

    if (result.success) {
      setMessage("¡Gracias por registrarte!");
      setSuccess(true);
      setOpen(true);
      recaptchaRef.current?.reset();
      reset();
    } else {
      setMessage("Error al registrarte. Inténtalo de nuevo.");
      setSuccess(false);
      setOpen(true);
    }
  };

  return (
    <section className="px-4 mx-auto max-w-screen-xl text-center py-24">
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
        Únete a eWorkers Cartago
      </h1>
      <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
        Aquí encontrarás flexibilidad, crecimiento y mucho networking. Solo
        tienes que llenar este formulario y estarás listo para aprovechar todo
        lo que ofrecemos.
      </p>

      <div className="mx-auto w-4/5 md:w-2/3">
        <form
          onSubmit={handleSubmit(processForm)}
          className="flex flex-col justify-center gap-3"
        >
          <Notification open={open} setOpen={setOpen} success={success}>
            {message}
          </Notification>

          <Input
            name="firstName"
            register={register}
            error={errors.firstName}
            placeholder="Tu nombre *"
          />

          <Input
            name="lastName"
            register={register}
            error={errors.lastName}
            placeholder="Tu apellido *"
          />

          <Input
            name="phone"
            register={register}
            error={errors.phone}
            placeholder="Número de teléfono *"
          />

          <Input
            name="email"
            register={register}
            error={errors.email}
            placeholder="Correo electrónico *"
          />

          <Input
            name="job"
            register={register}
            error={errors.job}
            placeholder="Ocupación u oficio *"
          />

          <Select
            name="sortJobType"
            register={register}
            options={[
              { value: "", label: "Tipo de trabajo *" },
              { value: "REMOTE", label: "Remoto" },
              { value: "HYBRID", label: "Hibrido" },
              { value: "INOFFICE", label: "En oficina" },
              { value: "UNEMPLOYED", label: "Desempleado" },
            ]}
            error={errors.sortJobType}
          />

          <Captcha
            setValue={setValue}
            error={errors.recaptcha}
            recaptchaRef={recaptchaRef}
          />

          <Submit isSubmitting={isSubmitting} />
        </form>
      </div>
    </section>
  );
}
