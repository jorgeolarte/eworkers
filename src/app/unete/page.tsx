"use client";
import { useFormik } from "formik";
import * as Yup from "yup";
import { createMember } from "../actions";
import { InputField, SelectField, Notification } from "@/components/form";
import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const schema = Yup.object().shape({
  firstName: Yup.string()
    .required("Campo obligatorio")
    .min(2, "El nombre debe contener al menos 2 caracteres"),
  lastName: Yup.string()
    .required("Campo obligatorio")
    .min(2, "El apellido debe contener al menos 2 caracteres"),
  phone: Yup.string()
    .required("Campo obligatorio")
    .matches(/^\d{10}$/, "Número de teléfono inválido (deben ser 10 dígitos)"),
  email: Yup.string()
    .email("Debe ser un correo electrónico válido")
    .required("Campo obligatorio"),
  job: Yup.string()
    .required("Campo obligatorio")
    .min(2, "El oficio debe contener al menos 2 caracteres"),
  sortJobType: Yup.string()
    .notOneOf([""], "Selecciona una opción")
    .required("Campo obligatorio"),
  recaptcha: Yup.string().required("Completa el reCAPTCHA"),
});

export default function Index() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      job: "",
      sortJobType: "",
      recaptcha: "",
    },
    validationSchema: schema,
    onSubmit: async (values) => {
      try {
        await createMember(values);
        setOpen(true);
        setSuccess(true);
        setMessage("Te has registrado exitosamente!");
        formik.resetForm();
      } catch (error: any) {
        setOpen(true);
        setSuccess(false);
        setMessage(error.message);
      }
    },
  });

  const { errors, touched, values, handleChange, handleBlur, handleSubmit } =
    formik;

  const handleRecaptchaChange = (value: string | null) => {
    setRecaptchaValue(value);
    formik.setFieldValue("recaptcha", value || ""); // Actualiza el valor del campo de reCAPTCHA en el formulario
  };

  return (
    <section className="">
      <div className="container mx-auto p-5 md:w-1/2 flex flex-col gap-5">
        <h1 className="text-4xl text-center">Únete a eWorkers Cartago</h1>
        <p className="text-lg text-center">
          Aquí encontrarás flexibilidad, crecimiento y mucho networking. Solo
          tienes que llenar este formulario y estarás listo para aprovechar todo
          lo que ofrecemos.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <Notification open={open} setOpen={setOpen} success={success}>
            {message}
          </Notification>

          <InputField
            id="firstName"
            name="firstName"
            value={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Tu nombre *"
            error={
              errors.firstName && touched.firstName ? errors.firstName : null
            }
          />

          <InputField
            id="lastName"
            name="lastName"
            value={values.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Tu apellido *"
            error={errors.lastName && touched.lastName ? errors.lastName : null}
          />

          <InputField
            id="phone"
            name="phone"
            value={values.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Número de teléfono *"
            error={errors.phone && touched.phone ? errors.phone : null}
          />

          <InputField
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Correo electrónico *"
            error={errors.email && touched.email ? errors.email : null}
          />

          <InputField
            id="job"
            name="job"
            value={values.job}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Ocupación u oficio *"
            error={errors.job && touched.job ? errors.job : null}
          />

          <SelectField
            id="sortJobType"
            name="sortJobType"
            value={values.sortJobType}
            onChange={handleChange}
            onBlur={handleBlur}
            options={[
              { value: "", label: "Tipo de trabajo" },
              { value: "REMOTE", label: "Remoto" },
              { value: "HYBRID", label: "Hibrido" },
              { value: "INOFFICE", label: "En oficina" },
              { value: "UNEMPLOYED", label: "Desempleado" },
            ]}
            error={errors.sortJobType}
            touched={touched.sortJobType}
          />

          <div className="flex flex-col justify-center items-center gap-2">
            <ReCAPTCHA
              sitekey="6LfUjQMoAAAAAJny4XFsiJ6Eqv-iVBsFywIsRnfc"
              ref={recaptchaRef}
              onChange={handleRecaptchaChange}
            />
            {formik.touched.recaptcha && formik.errors.recaptcha && (
              <div className="text-sm italic">{formik.errors.recaptcha}</div>
            )}
          </div>

          <button
            type="submit"
            className="bg-yellow-300 px-6 py-3 text-neutral-900 rounded-md hover:bg-yellow-500"
          >
            Registrarse
          </button>
        </form>
      </div>
    </section>
  );
}
