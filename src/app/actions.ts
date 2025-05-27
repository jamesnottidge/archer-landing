"use server";

import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  company: z.string().min(2, { message: "Company name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export type ContactFormState = {
  message: string;
  fields?: Record<string, string>;
  issues?: string[];
  success: boolean;
};

export async function submitContactForm(
  prevState: ContactFormState,
  data: FormData
): Promise<ContactFormState> {
  const formData = Object.fromEntries(data);
  const parsed = contactFormSchema.safeParse(formData);

  if (!parsed.success) {
    return {
      message: "Invalid form data",
      issues: parsed.error.issues.map((issue) => issue.message),
      success: false,
      fields: formData as Record<string, string>,
    };
  }

  // In a real application, you would send this data to your backend, email service, CRM, etc.
  // For example: await sendEmail(parsed.data);
  console.log("Contact form submitted:", parsed.data);

  return {
    message: "Thank you for your message! We will get back to you soon.",
    success: true,
  };
}
