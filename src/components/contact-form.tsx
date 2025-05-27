"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { submitContactForm, type ContactFormState } from "@/app/actions";
import { Loader2 } from "lucide-react";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  company: z.string().min(2, { message: "Company name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const initialState: ContactFormState = {
  message: "",
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full md:w-auto" disabled={pending}>
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
      Send Message
    </Button>
  );
}

export function ContactForm() {
  const [state, formAction] = useFormState(submitContactForm, initialState);
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      message: "",
    },
  });

  useEffect(() => {
    if (state.message) {
      toast({
        title: state.success ? "Success!" : "Error",
        description: state.message,
        variant: state.success ? "default" : "destructive",
      });
      if (state.success) {
        form.reset();
      }
    }
  }, [state, toast, form]);

  return (
    <form action={formAction} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            type="text"
            {...form.register("name")}
            className="mt-1"
            aria-invalid={form.formState.errors.name ? "true" : "false"}
          />
          {form.formState.errors.name && (
            <p className="mt-1 text-sm text-destructive">{form.formState.errors.name.message}</p>
          )}
        </div>
        <div>
          <Label htmlFor="company">Company Name</Label>
          <Input
            id="company"
            type="text"
            {...form.register("company")}
            className="mt-1"
            aria-invalid={form.formState.errors.company ? "true" : "false"}
          />
          {form.formState.errors.company && (
            <p className="mt-1 text-sm text-destructive">{form.formState.errors.company.message}</p>
          )}
        </div>
      </div>
      <div>
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          type="email"
          {...form.register("email")}
          className="mt-1"
          aria-invalid={form.formState.errors.email ? "true" : "false"}
        />
        {form.formState.errors.email && (
          <p className="mt-1 text-sm text-destructive">{form.formState.errors.email.message}</p>
        )}
      </div>
      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          {...form.register("message")}
          rows={4}
          className="mt-1"
          aria-invalid={form.formState.errors.message ? "true" : "false"}
        />
        {form.formState.errors.message && (
          <p className="mt-1 text-sm text-destructive">{form.formState.errors.message.message}</p>
        )}
      </div>
      <div>
        <SubmitButton />
      </div>
    </form>
  );
}
