import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { ContactInput } from "./ContactInput";
import { ContactSubmitButton } from "./ContactSubmitButton";

const blockedDomains = ["mailinator.com", "tempmail.com"];

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .regex(/^[a-zA-Z\s'-]+$/, "Name contains invalid characters"),

  email: z
    .string()
    .trim()
    .toLowerCase()
    .email("Please enter a valid email address")
    .refine(
      (email) =>
        !blockedDomains.some((domain) => email.endsWith(`@${domain}`)),
      { message: "Please use a valid email address" }
    ),

  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be under 1000 characters"),

  honeypot: z
    .string()
    .optional()
    .refine((v) => !v || v.trim().length === 0, { message: "Spam detected" }),
});



type ContactFormState = z.infer<typeof contactSchema>;

export const ContactForm = () => {
  const [form, setForm] = useState<ContactFormState>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Partial<ContactFormState>>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleChange = useCallback((field: keyof ContactFormState) => (value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  }, [errors]);

  const validateForm = () => {
    try {
      contactSchema.parse(form);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Partial<ContactFormState> = {};
        (error).issues.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as keyof ContactFormState] = err.message;
          }
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setStatus('sending');

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "57fb3185-b924-4a9a-9e98-68a5cf2dd09e",
          name: form.name,
          email: form.email,
          message: form.message,
          from_name: "Portfolio Contact Form",
          subject: `New Message from ${form.name}`,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus('sent');
        setForm({ name: '', email: '', message: '' });
        // Reset status after delay
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        console.error("Submission failed:", result);
        setStatus('error');
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus('error');
    }
  };
  
  return (
    <motion.div 
      initial={{ opacity: 0, x: 50 }} 
      whileInView={{ opacity: 1, x: 0 }} 
      viewport={{ once: true }}
      className="relative"
    >
      <div className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full pointer-events-none opacity-50" />
      <form 
        onSubmit={handleSubmit} 
        className="relative bg-background/60 dark:bg-foreground/3 backdrop-blur-xl border border-border p-8 md:p-12 rounded-[2.5rem] space-y-8 shadow-2xl"
        aria-label="Contact form"
        noValidate
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ContactInput 
            label="Name" 
            id="name"
            name="name"
            value={form.name} 
            onChange={handleChange('name')} 
            placeholder="Your Name" 
            autoComplete="name"
            error={errors.name}
          />
          <ContactInput 
            label="Email" 
            type="email" 
            id="email"
            name="email"
            value={form.email} 
            onChange={handleChange('email')} 
            placeholder="Email@example.com" 
            autoComplete="email"
            error={errors.email}
          />
        </div>
        <ContactInput 
          label="Message" 
          textarea 
          id="message"
          name="message"
          value={form.message} 
          onChange={handleChange('message')} 
          placeholder="Your project details..." 
          error={errors.message}
        />
        
        <ContactSubmitButton status={status} />
      </form>
    </motion.div>
  );
};