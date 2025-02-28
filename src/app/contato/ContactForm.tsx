"use client";
import LoadingButton from "@/components/LoadingButton";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { env } from "@/env";
import { zodResolver } from "@hookform/resolvers/zod";
import Script from "next/script";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { sendContactMail } from "./actions";

const formSchema = z.object({
  name: z.string().min(1),
  "last-name": z.string().optional(),
  company: z.string().optional(),
  email: z.string().email(),
  message: z.string().min(100).max(1000),
});

type FormValues = z.infer<typeof formSchema>;

export type ContactFormValues = FormValues & {
  token?: string;
};

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      "last-name": "",
      company: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: FormValues) {
    setIsSubmitting(true);
    grecaptcha.ready(function () {
      grecaptcha
        .execute(env.NEXT_PUBLIC_RECAPTCHA_CLIENT_KEY, {
          action: "submit_contact",
        })
        .then(async function (token) {
          const sent = await sendContactMail({ ...values, token });
          if (sent) {
            form.reset();
            toast.success("A mensagem foi enviada com sucesso.");
          } else {
            toast.error("Falha ao enviar. Tente novamente.");
          }
          setIsSubmitting(false);
        });
    });
  }

  function autoResize(e: React.FormEvent<HTMLTextAreaElement>) {
    e.currentTarget.style.height = "auto";
    e.currentTarget.style.height = e.currentTarget.scrollHeight + 2 + "px";
  }
  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mx-auto w-full max-w-2xl px-6 py-24 sm:py-32 lg:mr-0 lg:w-max lg:max-w-lg"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="after:text-xl/6 after:text-destructive after:content-['*']">
                    Nome
                  </FormLabel>
                  <FormControl>
                    <Input autoComplete="given-name" required {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="last-name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Sobrenome</FormLabel>
                  <FormControl>
                    <Input autoComplete="family-name" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem className="sm:col-span-2">
                  <FormLabel>Empresa</FormLabel>
                  <FormControl>
                    <Input autoComplete="organization" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="sm:col-span-2">
                  <FormLabel className="after:text-xl/6 after:text-destructive after:content-['*']">
                    E-mail
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      autoComplete="email"
                      required
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="sm:col-span-2">
                  <FormLabel className="after:text-xl/6 after:text-destructive after:content-['*']">
                    Mensagem
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      onInput={autoResize}
                      rows={4}
                      minLength={100}
                      maxLength={1000}
                      placeholder="Olá Ruan, gostaria de um orçamento para meu site..."
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className="mt-10">
            <LoadingButton
              loading={isSubmitting}
              type="submit"
              className="w-full bg-violet-600 text-primary hover:bg-violet-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600"
            >
              Vamos conversar
            </LoadingButton>
          </div>
        </form>
      </Form>
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${env.NEXT_PUBLIC_RECAPTCHA_CLIENT_KEY}`}
      />
    </>
  );
}
