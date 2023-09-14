"use server";
import { MemberProps } from "@/schemas";

export async function createMember(values: MemberProps) {
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
      "api-key": process.env.BREVO_API_KEY || "",
    },
    body: JSON.stringify({
      attributes: {
        JOB: values.job,
        SORT_JOB_TYPE: values.sortJobType,
        FIRSTNAME: values.firstName,
        LASTNAME: values.lastName,
        WHATSAPP: `57${values.phone}`,
        SMS: `57${values.phone}`,
      },
      updateEnabled: true,
      email: values.email,
      listIds: [parseInt(process.env.BREVO_LIST_ID || "")],
    }),
  };

  const response = await fetch("https://api.brevo.com/v3/contacts", options);

  if (!response.ok) {
    return {
      success: false,
      error: response.statusText,
    };
  }

  return {
    success: true,
    data: response.status,
  };
}
