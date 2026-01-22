import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { ContactInput } from "./ContactInput";

export const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleChange = useCallback((field: keyof typeof form) => (value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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

  const getButtonContent = () => {
    switch (status) {
      case 'sending':
        return <><Loader2 className="animate-spin" size={16}/> Sending...</>;
      case 'sent':
        return <><CheckCircle size={16}/> Sent Successfully!</>;
      case 'error':
        return <><AlertCircle size={16}/> Failed. Try Again.</>;
      default:
        return <><Send size={16}/> Send Message</>;
    }
  };

  const getButtonStyles = () => {
    if (status === 'sent') return 'bg-green-500/10 text-green-500 border border-green-500/20';
    if (status === 'error') return 'bg-red-500/10 text-red-500 border border-red-500/20';
    return 'bg-primary text-primary-foreground hover:brightness-110 shadow-lg shadow-primary/20';
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
        />
        
        {/* Live Region for Status Updates */}
        <div className="relative">
             <motion.button 
            disabled={status === 'sending' || status === 'sent'}
            className={`w-full py-5 rounded-2xl font-bold uppercase text-xs flex items-center justify-center gap-3 transition-all ${getButtonStyles()}`}
            aria-busy={status === 'sending'}
          >
            {getButtonContent()}
          </motion.button>

          {/* Accessible Live Region */}
          <output className="sr-only" role="status" aria-live="polite">
            {status === 'sending' && "Sending message..."}
            {status === 'sent' && "Message sent successfully!"}
            {status === 'error' && "Error sending message. Please try again."}
          </output>
        </div>
      </form>
    </motion.div>
  );
};