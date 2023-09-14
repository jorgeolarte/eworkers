import { z } from "zod";

export const MemberSchema = z.object({
  firstName: z
    .string({
      required_error: "Campo obligatorio",
    })
    .min(2, "El nombre debe contener al menos 2 caracteres"),
  lastName: z
    .string({
      required_error: "Campo obligatorio",
    })
    .min(2, "El apellido debe contener al menos 2 caracteres"),
  phone: z
    .string({
      required_error: "Campo obligatorio",
    })
    .regex(/^\d{10}$/, "Número de teléfono inválido (deben ser 10 dígitos)"),
  email: z
    .string({
      required_error: "Campo obligatorio",
    })
    .email("Debe ser un correo electrónico válido"),
  job: z
    .string({
      required_error: "Campo obligatorio",
    })
    .min(2, "El oficio debe contener al menos 2 caracteres"),
  sortJobType: z
    .string({
      required_error: "Campo obligatorio",
    })
    .min(1, "Selecciona una opción"),
  recaptcha: z.string({
    required_error: "Completa el reCAPTCHA",
  }),
});

export type MemberProps = z.infer<typeof MemberSchema>;
